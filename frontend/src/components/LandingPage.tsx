import React from 'react';
import { ArrowRight, Shield, Heart, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate("/prompt");
    } else {
      toast.error("Please login first");
    }
  };

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
          Your Personal Mental Health
          <span className="text-purple-500"> Journey Starts Here</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Professional guidance, personalized support, and tools to help you maintain and improve your mental well-being.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-900/50 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          {[
            {
              Icon: Brain,
              title: "AI-Powered Insights",
              description: "Advanced algorithms provide personalized mental health recommendations and tracking."
            },
            {
              Icon: Shield,
              title: "Private & Secure",
              description: "Your data is protected with enterprise-grade security and encryption."
            },
            {
              Icon: Heart,
              title: "24/7 Support",
              description: "Access to professional support whenever you need it, wherever you are."
            }
          ].map(({ Icon, title, description }, i) => (
            <div key={i} className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-purple-500/10 transition-shadow border border-gray-700">
              <div className="h-12 w-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
                <Icon className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10">
        <div className="h-96 w-96 bg-purple-900 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="h-96 w-96 bg-blue-900 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
}
