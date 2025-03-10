import express from "express";
import { systemPrompt } from "../systemPropmt.js";
import Groq from "groq-sdk";

const router = express.Router();

const groq = new Groq({
  apiKey: "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",
});

router.post("/mentalhealth", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("Received message:", message);

    if (!message) {
      return res.status(400).json({ error: "Message content is required." });
    }

    // Set headers correctly for streaming
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    const stream = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true,
    });

    // Stream response to the client
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      console.log("Streaming chunk:", content);
      res.write(content); // Send chunk
    }

    res.end(); // Close connection after all chunks are sent
  } catch (error) {
    console.error("Error processing /mentalhealth request:", error);
    if (!res.headersSent) {
      res.status(500).json({
        error: "Mental health advisor service is currently unavailable.",
        details: error.message,
      });
    }
  }
});

export default router;
