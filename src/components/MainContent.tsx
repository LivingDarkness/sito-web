import React, { useState } from 'react';
import { Eye, ChevronRight, ChevronLeft, Sparkles, Users, Film, Infinity, ImageIcon, Volume2, Sword, MessageSquare, Plus, Minus } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: "Create your",
    highlight: "AI Girlfriend",
    buttonText: "Create Now",
    images: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Write Your",
    highlight: "AI Story",
    buttonText: "Start Writing",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Explore",
    highlight: "AI Scenarios",
    buttonText: "Explore Now",
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
    ]
  }
];

const news = [
  { 
    title: 'Girlfriend Mode',
    days: '5 days ago',
    icon: MessageSquare,
    isNew: true 
  },
  { 
    title: 'Smarter Chat Model Released',
    days: '16 days ago',
    icon: MessageSquare,
    isSelected: true
  },
  { 
    title: 'Introducing Voice Generation',
    days: '3 months ago',
    icon: Volume2
  },
  { 
    title: 'New Positions released',
    days: '4 months ago',
    icon: Sparkles,
    secondaryIcon: Sword
  }
];

const characters = [
  {
    name: 'Lisa, 18',
    tags: ['Kinky', 'Horny'],
    views: '69.4K',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
  },
  {
    name: 'Riko, 18',
    tags: ['Direct', 'Stubborn'],
    views: '73.7K',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop',
  },
  {
    name: 'Akiko, 23',
    tags: ['Sadist', 'Dominatrix'],
    views: '36.7K',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
  },
  {
    name: 'Ashley, 25',
    tags: ['Slut', 'Exhibitionist'],
    views: '55.9K',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
  {
    name: 'Virginia, 18',
    tags: ['Horny', 'Needy'],
    views: '98.4K',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
  },
  {
    name: 'Melissa, 26',
    tags: ['Innocent', 'Sweet'],
    views: '28.6K',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
  {
    name: 'Erin, 28',
    tags: ['Shy', 'Nerdy'],
    views: '94K',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop',
  },
  {
    name: 'Leah, 25',
    tags: ['Kinky', 'Cumslut'],
    views: '180K',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
  },
  {
    name: 'Andy, 30',
    tags: ['Busty', 'Chatterbox'],
    views: '37.8K',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
  },
  {
    name: 'Maria, 18',
    tags: ['Dumb', 'Easy'],
    views: '61.2K',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
  {
    name: 'Nina, 25',
    tags: ['Cumslut', 'Freaky'],
    views: '19.4K',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
  },
  {
    name: 'Heidi, 40',
    tags: ['Caring', 'Supportive'],
    views: '28.6K',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
];

const scenarios = [
  {
    title: 'Step-Sibling In The Shower',
    tags: ['Shower', 'Naked'],
    views: '257K',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
  },
  {
    title: 'Older Sister Needs Release',
    tags: ['Laying on a bed'],
    views: '55.6K',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
  },
  {
    title: 'Truth Or Dare?',
    tags: ['Sweden'],
    views: '88K',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop',
  },
  {
    title: 'Dorm Mix Up',
    tags: ['Tiny college dorm room'],
    views: '129K',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
  {
    title: 'Superposition',
    tags: ['Earth', 'A house'],
    views: '77K',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
  },
  {
    title: 'The Nude Beach',
    tags: ['Nude beach'],
    views: '60.5K',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
  {
    title: 'Sharing A Bed With My Step-Sibling',
    tags: ['Hotel bedroom'],
    views: '151K',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop',
  },
  {
    title: 'The Homeless',
    tags: ['Squatting against alley wall'],
    views: '72.5K',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
  },
  {
    title: 'Life After The Apocalypse',
    tags: ['Midwestern USA'],
    views: '110.4K',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop',
  },
  {
    title: '2 Twins And A Tent',
    tags: ['Campsite at night with fire'],
    views: '15.5K',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
  {
    title: 'Stuck In An Elevator',
    tags: ['Elevator'],
    views: '62.2K',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
  },
  {
    title: 'My Best Friend\'s Parent',
    tags: ['Miami', 'Living room'],
    views: '71.1K',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
];

function MainContent() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handlePageChange = (page: string) => {
    const event = new CustomEvent('pageChange', { detail: page });
    window.dispatchEvent(event);
  };

  const handleCreateCharacter = () => {
    handlePageChange('character-studio');
  };

  const handleCreateScenario = () => {
    handlePageChange('scenario-studio');
  };

  return (
    <div className="min-h-screen p-4">
      <div className="relative mb-6 bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl overflow-hidden h-[200px]">
        <button 
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full z-10 hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full z-10 hover:bg-black/50 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        <div className="relative flex items-center justify-center h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/80 to-transparent z-[1]"></div>
          
          <div className="flex items-center justify-center w-full px-8 z-[2]">
            <div className="flex items-center gap-4 mr-8">
              <img
                src={banners[currentBanner].images[0]}
                alt="AI Character 1"
                className="h-[180px] w-[135px] object-cover rounded-lg shadow-lg transition-all duration-300"
              />
              <img
                src={banners[currentBanner].images[1]}
                alt="AI Character 2"
                className="h-[180px] w-[135px] object-cover rounded-lg shadow-lg transition-all duration-300"
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                {banners[currentBanner].title}{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  {banners[currentBanner].highlight}
                </span>
              </h1>
              <button className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-600 transition-colors flex items-center gap-2 mx-auto">
                <Sparkles className="w-5 h-5" />
                {banners[currentBanner].buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentBanner === index 
                  ? 'bg-purple-400 w-4' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-8">
        {news.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl relative ${
              item.isSelected ? 'border border-purple-500/50 bg-purple-500/10' : 'bg-[#111111]'
            }`}
          >
            {item.isNew && (
              <span className="absolute top-2 right-2 bg-purple-500 text-[10px] px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            )}
            <div className="flex items-start gap-3">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <item.icon className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.days}</p>
              </div>
              {item.secondaryIcon && (
                <item.secondaryIcon className="w-4 h-4 text-purple-400 mt-2" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 lg:mb-8 gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Explore <span className="text-purple-500">AI Characters</span>
          </h2>
          <div className="flex space-x-4">
            <button className="bg-purple-500 px-4 lg:px-6 py-2 rounded-full flex items-center gap-2 text-sm lg:text-base">
              <Sparkles className="w-4 h-4" />
              Trending
            </button>
            <button className="bg-[#111111] px-4 lg:px-6 py-2 rounded-full text-gray-300 text-sm lg:text-base">
              Recent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {characters.map((character, index) => (
            <div key={index} className="relative group">
              <img
                src={character.image}
                alt={character.name}
                className="w-full aspect-[3/4] object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{character.views}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-xl">
                <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {character.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => handlePageChange('characters')}
            className="bg-purple-500/10 text-purple-400 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-500/20 transition-colors"
          >
            <Users className="w-5 h-5" />
            See More Characters
          </button>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 lg:mb-8 gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Explore <span className="text-purple-500">AI Scenarios</span>
          </h2>
          <div className="flex space-x-4">
            <button className="bg-purple-500 px-4 lg:px-6 py-2 rounded-full flex items-center gap-2 text-sm lg:text-base">
              <Sparkles className="w-4 h-4" />
              Trending
            </button>
            <button className="bg-[#111111] px-4 lg:px-6 py-2 rounded-full text-gray-300 text-sm lg:text-base">
              Recent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className="relative group">
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full aspect-[3/4] object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{scenario.views}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-xl">
                <h3 className="text-lg font-semibold mb-2">{scenario.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {scenario.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => handlePageChange('scenarios')}
            className="bg-purple-500/10 text-purple-400 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-500/20 transition-colors"
          >
            <Film className="w-5 h-5" />
            See More Scenarios
          </button>
        </div>
      </div>

      <div className="space-y-8 px-4 lg:px-8">
        <div className="relative rounded-3xl bg-[#13111a]/80 overflow-hidden backdrop-blur-sm">
          <div className="flex items-center p-12">
            <div className="w-[450px] flex justify-end pr-8">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
                alt="AI Character"
                className="w-[400px] h-auto object-cover"
              />
            </div>

            <div className="flex-1 max-w-[500px]">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-12">
                  Create Your Perfect{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                    AI Girlfriend
                  </span>
                </h2>

                <div className="inline-block text-left mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-500/10 p-3 rounded-xl">
                      <span className="text-purple-400 font-bold text-sm">18+</span>
                    </div>
                    <span className="text-xl">
                      Graphic <span className="text-purple-400">NSFW</span> Images
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-500/10 p-3 rounded-xl">
                      <Infinity className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xl">Unlimited Characters</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-xl">
                      <ImageIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xl">Multiple Image Models</span>
                  </div>
                </div>

                <button 
                  onClick={handleCreateCharacter}
                  className="bg-purple-500 text-white px-10 py-4 rounded-2xl text-xl font-medium hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Create My Character
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl bg-[#13111a]/80 overflow-hidden backdrop-blur-sm">
          <div className="flex items-center p-12">
            <div className="flex-1 max-w-[500px] ml-auto">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-12">
                  Write Your Own{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                    AI Story
                  </span>
                </h2>

                <div className="inline-block text-left mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-500/10 p-3 rounded-xl">
                      <span className="text-purple-400 font-bold">E</span>
                    </div>
                    <span className="text-xl">
                      Uncensored <span className="text-purple-400">NSFW</span> Scenarios
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-500/10 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xl">Roleplay Your Way</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/10 p-3 rounded-xl">
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xl">Images that follow your scenario</span>
                  </div>
                </div>

                <button 
                  onClick={handleCreateScenario}
                  className="bg-purple-500 text-white px-10 py-4 rounded-2xl text-xl font-medium hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Create My Scenario
                </button>
              </div>
            </div>

            <div className="w-[450px] flex justify-start pl-8">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
                alt="AI Character"
                className="w-[400px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16 px-4 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">
          Frequently Asked <span className="text-purple-500">Questions</span>
        </h2>

        <div className="space-y-4 max-w-4xl">
          {[
            {
              question: "What are NSFW AI Chatbots?",
              answer: "NSFW AI Chatbots are advanced artificial intelligence programs designed for adult conversations and roleplay. They can engage in mature content discussions while maintaining user privacy and security."
            },
            {
              question: "What can I do with free tokens on this platform?",
              answer: "Free tokens allow you to explore basic features including starting conversations, generating a limited number of images, and trying out different AI characters. Premium features require additional tokens."
            },
            {
              question: "How can I make sure my chats remain private and secure?",
              answer: "All chats are end-to-end encrypted and automatically deleted after 30 days. We never store or share your personal conversations, and you can manually delete them at any time."
            },
            {
              question: "How does Alphazria ensure a realistic AI experience?",
              answer: "We use advanced language models trained on extensive datasets, combined with personality frameworks that ensure consistent and engaging character interactions."
            },
            {
              question: "What are tokens? How do I spend them?",
              answer: "Tokens are our virtual currency used for various features like generating images, extended conversations, and accessing premium characters. Each action costs a specific number of tokens clearly shown before use."
            },
            {
              question: "How do I cancel my subscription?",
              answer: "You can cancel your subscription at any time from your account settings. The subscription will remain active until the end of your current billing period."
            },
            {
              question: "How does the creator reward program work?",
              answer: "Creators earn tokens when other users interact with their published characters or scenarios. The more popular your content, the more rewards you earn."
            },
            {
              question: "How do I publish a character?",
              answer: "Go to the Studio section, click 'Create Character', and follow the step-by-step guide. You'll need to provide character details, personality traits, and optional images."
            },
            {
              question: "Is there an app we can download anywhere?",
              answer: "Currently, we're web-based only, but we're working on mobile apps for both iOS and Android. Stay tuned for updates!"
            },
            {
              question: "My payment wasn't successful but my banking app shows the money has been taken out. Will I get charged for this?",
              answer: "Don't worry! Failed payments are automatically refunded within 5-7 business days. If you don't see the refund by then, contact our support team."
            },
            {
              question: "Sometimes the AI generated text doesn't seem to finish. Is that some sort of bug?",
              answer: "This can happen due to connection issues or server load. If the response cuts off, you can click 'Regenerate' or send a new message to continue the conversation."
            },
            {
              question: "Why did my my conversation get flagged by the filter although I didn't say anything bad?",
              answer: "Our content filters are designed to be cautious. Sometimes context or certain word combinations can trigger them. If you believe it's a mistake, you can report it for review."
            },
            {
              question: "How do I generate pictures in chats?",
              answer: "Use the image generation command '/image' followed by your description. Note that this feature uses tokens and may have certain content restrictions."
            },
            {
              question: "Why didn't I get my daily token credit today?",
              answer: "Daily tokens are credited at midnight UTC. If you haven't received them, try refreshing the page or logging out and back in. If the issue persists, contact support."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="border border-purple-500/20 rounded-xl overflow-hidden bg-[#13111a]/80 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
            >
              <details className="group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className="group-open:rotate-180 transition-transform duration-200">
                    <ChevronRight className="w-5 h-5 text -5 h-5 text-purple-400" />
                  </div>
                </summary>
                <div className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;