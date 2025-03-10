import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function PromptInterface() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResponse("Based on your input, here's my analysis: It seems like you're experiencing some challenges. Remember that it's completely normal to have these feelings, and seeking support is a positive step. I'd recommend focusing on small, manageable goals and practicing self-compassion. Would you like to explore some specific coping strategies?");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid gap-6">
        {/* Prompt Input Section */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
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
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">AI Response</h2>
          <div className="bg-gray-900 rounded-lg p-6 min-h-[200px] border border-gray-700">
            {isLoading ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            ) : response ? (
              <p className="text-gray-200 leading-relaxed">{response}</p>
            ) : (
              <p className="text-gray-400 text-center">Your response will appear here...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}