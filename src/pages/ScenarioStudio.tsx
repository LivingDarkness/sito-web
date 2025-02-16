import React, { useState } from 'react';
import { Sparkles, Search, X } from 'lucide-react';

const characters = [
  {
    name: "Lisa, 18",
    views: "17.3K",
    tags: ["Kinky", "Horny"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
];

function ScenarioStudio() {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [showCharacterModal, setShowCharacterModal] = useState(false);
  const [location, setLocation] = useState('');
  const [setting, setSetting] = useState('');
  const [femaleClothing, setFemaleClothing] = useState('');
  const [maleClothing, setMaleClothing] = useState('');
  const [additionalAttributes, setAdditionalAttributes] = useState('');

  const MAX_CHARS = 45;

  const handleCharacterSelect = (character: any) => {
    setSelectedCharacter(character);
    setShowCharacterModal(false);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Scenario Studio</h1>
          <button className="w-full sm:w-auto bg-purple-500 text-white px-6 py-2 rounded-full">
            Continue
          </button>
        </div>
        
        <p className="text-purple-400 text-base sm:text-xl mb-6 sm:mb-8 text-center sm:text-left">
          Create NSFW scenarios. Define the world where your AI characters interact, bringing your wildest ideas to life!
        </p>

        {/* Form */}
        <div className="space-y-4 sm:space-y-6">
          {/* Character Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Character <span className="text-xs text-gray-400">(used only for preview purposes)</span>
            </label>
            <button
              onClick={() => setShowCharacterModal(true)}
              className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 text-left focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            >
              {selectedCharacter ? selectedCharacter.name : 'Select a character'}
            </button>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Location <span className="text-xs text-gray-400">Country, city or planet</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value.slice(0, MAX_CHARS))}
                placeholder="Mexico City"
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - location.length} chars remaining
              </span>
            </div>
          </div>

          {/* Setting */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Setting <span className="text-xs text-gray-400">What is happening?</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={setting}
                onChange={(e) => setSetting(e.target.value.slice(0, MAX_CHARS))}
                placeholder="By the pool on a sunny day"
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - setting.length} chars remaining
              </span>
            </div>
          </div>

          {/* Female Clothing */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Female Clothing <span className="text-xs text-gray-400">What are female characters wearing?</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={femaleClothing}
                onChange={(e) => setFemaleClothing(e.target.value.slice(0, MAX_CHARS))}
                placeholder="Tank top and yoga pants"
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - femaleClothing.length} chars remaining
              </span>
            </div>
          </div>

          {/* Male Clothing */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Male Clothing <span className="text-xs text-gray-400">What are male characters wearing?</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={maleClothing}
                onChange={(e) => setMaleClothing(e.target.value.slice(0, MAX_CHARS))}
                placeholder="Jeans and a t-shirt"
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - maleClothing.length} chars remaining
              </span>
            </div>
          </div>

          {/* Additional Attributes */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Additional Attributes <span className="text-xs text-gray-400">Anything else you want to add</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={additionalAttributes}
                onChange={(e) => setAdditionalAttributes(e.target.value.slice(0, MAX_CHARS))}
                placeholder="Add a tag..."
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - additionalAttributes.length} chars remaining
              </span>
            </div>
          </div>

          {/* Preview Button */}
          <button className="w-full mt-6 bg-purple-500 text-white p-3 sm:p-4 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Preview
            <span className="ml-auto bg-purple-400/20 px-2 py-1 rounded-lg">
              25
            </span>
          </button>
        </div>

        {/* Character Selection Modal */}
        {showCharacterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCharacterModal(false)} />
            <div className="bg-[#1a1625] rounded-xl sm:rounded-3xl border border-purple-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10">
              <div className="p-4 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold">Choose Character</h2>
                  <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                    Explore AI <span className="text-purple-500">Characters</span>
                  </h1>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
                  <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                    My Creations
                  </button>
                  <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                    Community
                  </button>
                  <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                    Originals
                  </button>
                  <button className="px-3 sm:px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm sm:text-base flex items-center gap-2">
                    Most messages
                  </button>
                  <button className="p-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Characters Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {characters.map((character, index) => (
                    <div
                      key={index}
                      onClick={() => handleCharacterSelect(character)}
                      className="relative group cursor-pointer"
                    >
                      <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        
                        {/* Views Badge */}
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                          <span>{character.views}</span>
                          <svg className="w-4 h-4 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Character Info */}
                        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                          <h3 className="text-base sm:text-xl font-bold mb-2">{character.name}</h3>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScenarioStudio;