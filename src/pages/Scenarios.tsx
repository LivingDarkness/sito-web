import React from 'react';
import { Plus, Search } from 'lucide-react';

const scenarios = [
  {
    title: 'Step-Sibling In The Shower',
    views: '15.5K',
    tags: ['Shower', 'Naked'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'Older Sister Needs Release',
    views: '12.5K',
    tags: ['Laying on a bed', 'Naked'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'Superposition',
    views: '11.1K',
    tags: ['Earth', 'A house'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'Truth Or Dare?',
    views: '9.52K',
    tags: ['Sweden'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Homeless',
    views: '7.66K',
    tags: ['Squatting against alley wall'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: 'Sharing A Bed With My Step-Sibling',
    views: '7.36K',
    tags: ['Hotel bedroom'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'Dorm Mix Up',
    views: '6.88K',
    tags: ['Tiny college dorm room'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'Life After The Apocalypse',
    views: '5.38K',
    tags: ['Midwestern USA'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'Neighbor Tease: Milf Vs. 18 Yo',
    views: '5.34K',
    tags: ['United States'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'Indecent Proposal',
    views: '4.96K',
    tags: ['North Carolina'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Nude Beach',
    views: '4.78K',
    tags: ['Nude beach'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: 'My Best Friend\'s Parent',
    views: '4.53K',
    tags: ['Miami', 'Living room'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'Daughter Swap',
    views: '4.29K',
    tags: ['At home', 'Living room'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'Stepdaughter Wants To Learn Anal',
    views: '3.81K',
    tags: ['Bedroom with stuffed animals'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'The One Ring To Rule Them All',
    views: '3.8K',
    tags: ['Las vegas'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'Stuck In An Elevator',
    views: '3.76K',
    tags: ['Elevator'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'Adversarial Attraction',
    views: '3.71K',
    tags: ['Pacific northwest'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: '2 Twins And A Tent',
    views: '3.4K',
    tags: ['Campsite at night with fire'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'My Sister\'s Best Friend',
    views: '2.75K',
    tags: ['Backyard swimming pool'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'My Step-parent Is A Porn Star',
    views: '2.73K',
    tags: ['Inside mansion home'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'Free-use Girlfriend',
    views: '2.7K',
    tags: ['In a home'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'Free Use Tutor',
    views: '2.32K',
    tags: ['College'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Room Mix-up',
    views: '2.32K',
    tags: ['Hotel resort room'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Hired Bull',
    views: '2.16K',
    tags: ['Vegas'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'Your Asshole Boss',
    views: '2.09K',
    tags: ['Dim office'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'Sleepwalking Step-mom',
    views: '2.06K',
    tags: ['Bedroom'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Dominatrix',
    views: '2.04K',
    tags: ['Dimly lit dungeon'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Lost Pussy',
    views: '2.01K',
    tags: ['Lush jungle island'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'Step Sister Wants A Massage',
    views: '1.78K',
    tags: ['American suburban home'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: 'Bratty Stepdaughter',
    views: '1.75K',
    tags: ['Crying on Kitchen Table'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'Your Best Friend\'s Bad Break Up',
    views: '1.72K',
    tags: ['In a bar', 'Drinking beer'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Dark Lord',
    views: '1.72K',
    tags: ['Evil Fantasy Kingdom'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'My Personal Assistance',
    views: '1.72K',
    tags: ['Short maid costume'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'Neighbor\'s Husband Gone',
    views: '1.68K',
    tags: ['Traverse City'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'Caught Red Handed',
    views: '1.58K',
    tags: ['Modern apartment'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Conqueror And The Native Beauty',
    views: '1.57K',
    tags: ['Lush forest'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'Stacy\'s Mom',
    views: '1.55K',
    tags: ['Luxurious Kitchen'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  {
    title: 'The Forgotten People',
    views: '1.4K',
    tags: ['Abandoned tropical island'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop'
  },
  {
    title: 'Her Royal Highness',
    views: '1.38K',
    tags: ['Fantasy Kingdom'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop'
  },
  {
    title: 'Roommate\'s Rent Is Late',
    views: '1.33K',
    tags: ['Sun room', 'Cropped top'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop'
  },
  {
    title: 'Seeking Shelter In Stepdaddy\'s Bed',
    views: '1.26K',
    tags: ['Bedroom'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop'
  },
  {
    title: 'A Girl And Her Dog',
    views: '1.21K',
    tags: ['Playing with a large dog'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop'
  },
  {
    title: 'My Incompetent Secretary',
    views: '1.19K',
    tags: ['New York'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  }
];

function Scenarios() {
  const handleCreateScenario = () => {
    const event = new CustomEvent('pageChange', { detail: 'scenario-studio' });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
          Explore AI <span className="text-purple-500">Scenarios</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 w-full sm:w-auto">
            <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors whitespace-nowrap text-sm sm:text-base">
              Favorites
            </button>
            <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors whitespace-nowrap text-sm sm:text-base">
              My Creations
            </button>
            <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors whitespace-nowrap text-sm sm:text-base">
              Community
            </button>
            <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors whitespace-nowrap text-sm sm:text-base">
              Originals
            </button>
            <button className="px-3 sm:px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors whitespace-nowrap text-sm sm:text-base">
              Most messages
            </button>
          </div>

          {/* Search Button */}
          <button className="p-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
        {/* Create New Scenario Card */}
        <div 
          onClick={handleCreateScenario}
          className="relative group cursor-pointer"
        >
          <div className="aspect-[3/4] rounded-2xl bg-[#13111a] flex flex-col items-center justify-center border-2 border-dashed border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <Plus className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 mb-2 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">Create New</h3>
            <p className="text-purple-500 text-sm sm:text-base">Scenario</p>
          </div>
        </div>

        {/* Scenario Cards */}
        {scenarios.map((scenario, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Views Badge */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <span>{scenario.views}</span>
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M2.5 18.5L8 13l3.5 3.5L21 7" />
                </svg>
              </div>

              {/* Scenario Info */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{scenario.title}</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {scenario.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scenarios;