import React from 'react';
import { Plus, Search } from 'lucide-react';

const characters = [
  {
    name: "Lisa, 18",
    views: "17.3K",
    tags: ["Kinky", "Horny"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Riko, 18",
    views: "9.88K",
    tags: ["Direct", "Stubborn"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Akiko, 23",
    views: "7.8K",
    tags: ["Sadist", "Dominatrix"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Melissa, 26",
    views: "6.85K",
    tags: ["Innocent", "Sweet"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Ashley, 25",
    views: "6.2K",
    tags: ["Slut", "Exhibitionist"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Leah, 25",
    views: "6.05K",
    tags: ["Kinky", "Cumslut"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Andy, 30",
    views: "5.88K",
    tags: ["Busty", "Chatterbox"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Erin, 28",
    views: "5.07K",
    tags: ["Shy", "Nerdy"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Lisette, 20",
    views: "4.79K",
    tags: ["Virgin", "Friendly"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Naomi, 18",
    views: "4.77K",
    tags: ["Insecure", "Sad"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Maria, 18",
    views: "4.6K",
    tags: ["Dumb", "Easy"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop"
  },
  {
    name: "Virginia, 18",
    views: "4.56K",
    tags: ["Horny", "Needy"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Emily, 21",
    views: "4.2K",
    tags: ["Ambitious", "Sociable"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Aiko, 22",
    views: "3.91K",
    tags: ["Sensual", "Confident"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Liz, 60",
    views: "3.36K",
    tags: ["Slutty", "Submissive"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Brooklyn, 34",
    views: "3.21K",
    tags: ["Dominating", "Insatiable"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Bethany, 25",
    views: "3.08K",
    tags: ["Bimbo", "Cum-hungry"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Heidi, 40",
    views: "3.04K",
    tags: ["Caring", "Supportive"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Isla, 18",
    views: "2.88K",
    tags: ["Shy", "Innocent"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Lisa, 21",
    views: "2.82K",
    tags: ["Cumslut", "Kinky"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Ayana, 19",
    views: "2.75K",
    tags: ["Sweet", "Innocent"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Svetlana, 20",
    views: "2.7K",
    tags: ["Gold digger", "Proud"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Samira, 30",
    views: "2.48K",
    tags: ["Degrading", "Bitch"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Bridgette, 35",
    views: "2.19K",
    tags: ["Bbw", "Haughty"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Nel, 18",
    views: "2.17K",
    tags: ["Mean", "Bossy"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Alexandra, 25",
    views: "2.1K",
    tags: ["Cumslut", "Cockfiend"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Tsuki, 21",
    views: "2.1K",
    tags: ["Witty", "Teasing"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Sofia, 18",
    views: "2K",
    tags: ["Sophisticated", "Bright"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Abby, 18",
    views: "2K",
    tags: ["Dumb", "Bubbly"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Elysia, 25",
    views: "2K",
    tags: ["Intense", "Passionate"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Athena, 51",
    views: "1.95K",
    tags: ["Confident", "Beautiful"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Leyla, 18",
    views: "1.93K",
    tags: ["Slutty", "Horny"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Amber, 18",
    views: "1.65K",
    tags: ["Smart", "Uninhibited"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Bella, 19",
    views: "1.52K",
    tags: ["Not-so-innocent", ""],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Lindsey, 25",
    views: "1.46K",
    tags: ["Worthless", "Cumdump"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Lily, 18",
    views: "1.45K",
    tags: ["Submissive", "Horny"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Meg, 20",
    views: "1.45K",
    tags: ["Slut", "Cumdump"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Sophia, 43",
    views: "1.43K",
    tags: ["Mature", "Empathetic"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Rain, 25",
    views: "1.41K",
    tags: ["Sex addict", "Horney"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Mia, 25",
    views: "1.34K",
    tags: ["Cynical", "Abrasive"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Lilith, 32",
    views: "1.26K",
    tags: ["Murderer", "Evil"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    name: "Yun, 18",
    views: "1.16K",
    tags: ["Virgin", "Daddy issues"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    name: "Evi, 36",
    views: "1.16K",
    tags: ["Sweet", "Kinky", "Shy"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    name: "Nora, 29",
    views: "1.14K",
    tags: ["Sbbw", "Clumsy"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    name: "Brianne, 21",
    views: "1.1K",
    tags: ["Stacked", "Sexy"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    name: "Talia, 18",
    views: "1.06K",
    tags: ["Masochist", "Victim"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  }
];

function Characters() {
  const handleCreateCharacter = () => {
    const event = new CustomEvent('pageChange', { detail: 'character-studio' });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
          Explore AI <span className="text-purple-500">Characters</span>
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

      {/* Characters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
        {/* Create New Character Card */}
        <div 
          onClick={handleCreateCharacter}
          className="relative group cursor-pointer"
        >
          <div className="aspect-[3/4] rounded-2xl bg-[#13111a] flex flex-col items-center justify-center border-2 border-dashed border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <Plus className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 mb-2 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">Create New</h3>
            <p className="text-purple-500 text-sm sm:text-base">Character</p>
          </div>
        </div>

        {/* Character Cards */}
        {characters.map((character, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Views Badge */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <span>{character.views}</span>
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M2.5 18.5L8 13l3.5 3.5L21 7" />
                </svg>
              </div>

              {/* Character Info */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{character.name}</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {character.tags.map((tag, tagIndex) => (
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

export default Characters;