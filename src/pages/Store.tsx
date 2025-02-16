import React from 'react';
import { Check } from 'lucide-react';

function Store() {
  const handleMissionsClick = () => {
    const event = new CustomEvent('pageChange', { detail: 'missions' });
    window.dispatchEvent(event);
  };

  const handleUpgradeClick = () => {
    const event = new CustomEvent('pageChange', { detail: 'subscription' });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Want more?</h1>
        <p className="text-xl text-gray-400">
          50 tokens refill in 08:33:07
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Free Plan */}
        <div className="bg-[#13111a] rounded-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-1">Earn Tokens</h2>
          <div className="mb-2">
            <span className="text-5xl font-bold">Free</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>Complete missions</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>Earn free tokens</span>
            </div>
          </div>

          <button 
            onClick={handleMissionsClick}
            className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition-colors"
          >
            Explore Missions
          </button>
        </div>

        {/* 2000 Tokens Plan */}
        <div className="bg-[#13111a] rounded-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-1">2000 tokens</h2>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">4.99</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>up to 1000 messages</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>up to 80 images</span>
            </div>
          </div>

          <button 
            onClick={handleUpgradeClick}
            className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition-colors"
          >
            Upgrade To Premium
          </button>
        </div>

        {/* 10000 Tokens Plan */}
        <div className="bg-[#13111a] rounded-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-1">10000 tokens</h2>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">14.99</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>up to 5000 messages</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>up to 400 images</span>
            </div>
          </div>

          <button 
            onClick={handleUpgradeClick}
            className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition-colors"
          >
            Upgrade To Premium
          </button>
        </div>

        {/* 25000 Tokens Plan */}
        <div className="bg-[#13111a] rounded-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-1">25000 tokens</h2>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">39.99</span>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>up to 12500 messages</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>up to 1000 images</span>
            </div>
          </div>

          <button 
            onClick={handleUpgradeClick}
            className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition-colors"
          >
            Upgrade To Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default Store;