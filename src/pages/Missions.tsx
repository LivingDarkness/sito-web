import React, { useState } from 'react';

const missions = [
  {
    title: "Telegram Pundit",
    tokens: 15,
    steps: [
      { text: "Join our ", link: "Telegram", url: "#", suffix: " and say hi!" }
    ],
    isRedeemed: true
  },
  {
    title: "Discord Dissident",
    tokens: 15,
    steps: [
      { text: "Join our ", link: "Discord", url: "#", suffix: " and say hi!" }
    ],
    isRedeemed: true
  },
  {
    title: "TikTok Trendsetter",
    tokens: 100,
    steps: [
      { text: "Create unique Capcuts, memes or reviews about Alphazria and share them on a public account" },
      { text: "Include the hashtag #Alphazria and get 500+ views" },
      { text: "Message us on ", link: "Discord", url: "#", suffix: ", ", nextLink: "Telegram", nextUrl: "#", finalText: " or contact@alphazria.com to claim your free tokens" }
    ],
    isRedeemed: false
  },
  {
    title: "Reddit Trailblazer",
    tokens: 2000,
    steps: [
      { text: "Write a review of Alphazria (Positive or Negative)" },
      { text: "Get 100+ upvotes" },
      { text: "Message us on ", link: "Discord", url: "#", suffix: ", ", nextLink: "Telegram", nextUrl: "#", finalText: " or contact@alphazria.com to claim your free tokens" }
    ],
    isRedeemed: false
  },
  {
    title: "Family Affair",
    tokens: 2500,
    steps: [
      { text: "Refer friends using your referral link ", copyIcon: true },
      { text: "If a user visits Alphazria for the first time using your link, they become one of your referrals" },
      { text: "Whenever a referred user upgrades to a premium subscription, you earn 2500 tokens automatically" },
      { text: "No limit on the number of referred users - go crazy!" }
    ],
    isRedeemed: false
  },
  {
    title: "TikTok Hero",
    tokens: 10000,
    steps: [
      { text: "Create unique Capcuts, memes or reviews about Alphazria and share them on a public account" },
      { text: "Include the hashtag #Alphazria and get 100k+ views" },
      { text: "Message us on ", link: "Discord", url: "#", suffix: ", ", nextLink: "Telegram", nextUrl: "#", finalText: " or contact@alphazria.com to claim your free tokens" }
    ],
    isRedeemed: false
  }
];

function Missions() {
  const [activeRedeemIndex, setActiveRedeemIndex] = useState<number | null>(null);
  const [redeemCode, setRedeemCode] = useState('');

  const handleRedeemClick = (index: number) => {
    setActiveRedeemIndex(index);
    setRedeemCode('');
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, 10);
    setRedeemCode(value);
  };

  const handleSubmitCode = () => {
    console.log('Code submitted:', redeemCode);
    setActiveRedeemIndex(null);
    setRedeemCode('');
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Missions</h1>
        <p className="text-gray-400 text-base sm:text-lg">Earn Free Tokens</p>
      </div>

      {/* Missions List */}
      <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
        {missions.map((mission, index) => (
          <div 
            key={index}
            className="bg-[#13111a] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h2 className="text-xl sm:text-2xl font-bold">{mission.title}</h2>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold">{mission.tokens.toLocaleString()}</span>
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-2 sm:space-y-3 flex-1">
                {mission.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start gap-2">
                    <div className="min-w-[24px] h-6 mt-0.5">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-500">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {step.text}
                      {step.link && (
                        <a href={step.url} className="text-purple-500 hover:underline">{step.link}</a>
                      )}
                      {step.suffix}
                      {step.nextLink && (
                        <>
                          <a href={step.nextUrl} className="text-purple-500 hover:underline">{step.nextLink}</a>
                          {step.finalText}
                        </>
                      )}
                      {step.copyIcon && (
                        <button className="inline-flex items-center justify-center w-6 h-6 ml-2 text-purple-500 hover:text-purple-400">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                            <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V17M8 5C8 6.10457 8.89543 7 10 7H12C13.1046 7 14 6.10457 14 5M8 5C8 3.89543 8.89543 3 10 3H12C13.1046 3 14 3.89543 14 5M14 5H16C17.1046 5 18 5.89543 18 7V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Button and Code Input */}
              <div className="sm:ml-8 flex items-end">
                {activeRedeemIndex === index ? (
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <input
                      type="text"
                      value={redeemCode}
                      onChange={handleCodeChange}
                      placeholder="Enter code"
                      maxLength={10}
                      className="w-full sm:w-32 px-3 py-2 bg-[#1a1625] border border-purple-500/20 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
                    />
                    <button
                      onClick={handleSubmitCode}
                      className="w-full sm:w-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => !mission.isRedeemed && handleRedeemClick(index)}
                    className={`w-full sm:w-32 py-2 rounded-lg text-center text-sm ${
                      mission.isRedeemed
                        ? 'bg-purple-500/20 text-purple-500 cursor-not-allowed'
                        : 'bg-purple-500 text-white hover:bg-purple-600 transition-colors'
                    }`}
                    disabled={mission.isRedeemed}
                  >
                    {mission.isRedeemed ? 'Redeemed' : 'Redeem Code'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Missions;