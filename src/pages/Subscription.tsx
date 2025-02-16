import React, { useState } from 'react';
import { Check } from 'lucide-react';

function Subscription() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('yearly');

  const getPricePerMonth = () => {
    switch (billingPeriod) {
      case 'monthly':
        return 12.99;
      case 'quarterly':
        return 8.99;
      case 'yearly':
        return 5.99;
      default:
        return 5.99;
    }
  };

  const getDiscount = () => {
    switch (billingPeriod) {
      case 'monthly':
        return 0;
      case 'quarterly':
        return 31;
      case 'yearly':
        return 54;
      default:
        return 54;
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Go <span className="text-purple-500">Premium</span>
        </h1>
        <p className="text-xl text-gray-400">
          Experience all your fantasies
        </p>
      </div>

      {/* Billing Period Selector */}
      <div className="bg-[#13111a] rounded-full p-1 flex gap-1 mb-8">
        <button
          onClick={() => setBillingPeriod('monthly')}
          className={`px-6 py-2 rounded-full text-sm transition-colors ${
            billingPeriod === 'monthly'
              ? 'bg-purple-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingPeriod('quarterly')}
          className={`px-6 py-2 rounded-full text-sm transition-colors ${
            billingPeriod === 'quarterly'
              ? 'bg-purple-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Quarterly
        </button>
        <button
          onClick={() => setBillingPeriod('yearly')}
          className={`px-6 py-2 rounded-full text-sm transition-colors ${
            billingPeriod === 'yearly'
              ? 'bg-purple-500 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Premium Plan */}
        <div className="bg-[#13111a] rounded-2xl p-6 relative border border-purple-500/20">
          {getDiscount() > 0 && (
            <div className="absolute -top-3 -right-3 bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
              {getDiscount()}% Off
            </div>
          )}
          
          <h2 className="text-2xl font-bold mb-1">Premium</h2>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl">$</span>
            <span className="text-5xl font-bold">{getPricePerMonth()}</span>
            <span className="text-gray-400">/month</span>
          </div>
          <p className="text-gray-400 mb-6">Perfect for power users</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>500 tokens per day</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>Create your own scenarios</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>Create your own characters</span>
            </div>
          </div>

          <button className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition-colors">
            Purchase
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            * Billed as ${(getPricePerMonth() * 12).toFixed(2)} ({12} x ${getPricePerMonth()}) every 12 months
          </p>
        </div>

        {/* Free Plan */}
        <div className="bg-[#13111a] rounded-2xl p-6 border border-purple-500/20">
          <h2 className="text-2xl font-bold mb-1">Basic</h2>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold">Free</span>
          </div>
          <p className="text-gray-400 mb-6">Perfect for those looking to explore</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>50 tokens per day*</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>Access original scenarios</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-purple-500" />
              <span>Access original characters</span>
            </div>
          </div>

          <button className="w-full bg-purple-500/10 text-purple-500 py-3 rounded-xl">
            Current Plan
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            * Refill is only applied if user logs in on that day
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscription;