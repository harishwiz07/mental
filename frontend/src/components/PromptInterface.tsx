import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const BACKEND_URL = "http://localhost:3000";

export default function PromptInterface() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setResponse("");
    setIsLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/ai/mentalhealth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });

      if (!res.body) throw new Error("No response body received");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      setResponse("");

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        setResponse((prev) => prev + chunk);
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setResponse("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-black flex items-start justify-center">
      <div className="max-w-4xl w-full p-6 animate-fadeIn">
        <div className="grid gap-6">

          {/* Prompt Input Section */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Your Prompt</h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe how you're feeling or what's on your mind..."
              className="w-full h-40 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Response Section */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">AI Response</h2>
            <div className="bg-gray-900 rounded-lg p-6 min-h-[200px] border border-gray-700">
              {isLoading ? (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
              ) : response ? (
                <p className="text-gray-200 leading-relaxed whitespace-pre-line">{response}</p>
              ) : (
                <p className="text-gray-400 text-center">Your response will appear here...</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
