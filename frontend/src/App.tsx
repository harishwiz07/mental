import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PromptInterface from './components/PromptInterface';

function App() {
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      {showPrompt ? (
        <div className="container mx-auto py-20">
          <PromptInterface />
        </div>
      ) : (
        <LandingPage />
      )}
      
      {/* Floating button */}
      <button
        onClick={() => setShowPrompt(!showPrompt)}
        className="fixed bottom-8 right-8 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        {showPrompt ? 'Back to Home' : 'Start Prompt'}
      </button>
    </div>
  );
}

export default App;