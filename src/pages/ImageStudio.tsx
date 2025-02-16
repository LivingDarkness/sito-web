import React, { useState } from 'react';
import { Sparkles, Search, X } from 'lucide-react';

// Import characters array...
const characters = [
  {
    name: "Lisa, 18",
    views: "17.3K",
    tags: ["Kinky", "Horny"],
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  // ... rest of the characters array
];

const scenarios = [
  {
    title: 'Step-Sibling In The Shower',
    views: '15.5K',
    tags: ['Shower', 'Naked'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop'
  },
  // ... rest of the scenarios array
];

const styles = [
  { label: 'Realism', value: 'realism' },
  { label: 'Anime', value: 'anime' },
  { label: 'Semi-realistic', value: 'semi-realistic' },
  { label: 'Artistic', value: 'artistic' },
  { label: 'Fantasy', value: 'fantasy' }
];

const positions = [
  { label: 'Default', value: 'default', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
  { label: 'Blowjob Pov', value: 'blowjob-pov', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { label: 'Blowjob Side', value: 'blowjob-side', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop' },
  { label: 'Cowgirl', value: 'cowgirl', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
  { label: 'Cumshot On Face', value: 'cumshot-on-face', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
  { label: 'Titfuck', value: 'titfuck', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  { label: 'Missionary Vaginal', value: 'missionary-vaginal', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
  { label: 'Anal Side', value: 'anal-side', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { label: 'Doggystyle Pov', value: 'doggystyle-pov', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop' },
  { label: 'Breast Grab', value: 'breast-grab', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
  { label: 'Chipmunking', value: 'chipmunking', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
  { label: 'Reverse Cowgirl', value: 'reverse-cowgirl', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
  { label: 'Breast Sucking', value: 'breast-sucking', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
  { label: 'Ass From Behind', value: 'ass-from-behind', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { label: 'Standing Cunnilingus', value: 'standing-cunnilingus', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop' }
];

function ImageStudio() {
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  const [selectedScenario, setSelectedScenario] = useState<any>(null);
  const [showCharacterModal, setShowCharacterModal] = useState(false);
  const [showScenarioModal, setShowScenarioModal] = useState(false);
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [style, setStyle] = useState('realism');
  const [position, setPosition] = useState('default');
  const [positivePrompt, setPositivePrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');

  const MAX_CHARS = 120;

  const handlePositivePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length <= MAX_CHARS) {
      setPositivePrompt(input);
    }
  };

  const handleNegativePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length <= MAX_CHARS) {
      setNegativePrompt(input);
    }
  };

  const handleCharacterSelect = (character: any) => {
    setSelectedCharacter(character);
    setShowCharacterModal(false);
  };

  const handleScenarioSelect = (scenario: any) => {
    setSelectedScenario(scenario);
    setShowScenarioModal(false);
  };

  const handlePositionSelect = (positionValue: string) => {
    setPosition(positionValue);
    setShowPositionModal(false);
  };

  const selectedPositionLabel = positions.find(p => p.value === position)?.label || 'Select position';

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Image Studio</h1>
          <button className="w-full sm:w-auto bg-purple-500 text-white px-6 py-2 rounded-full">
            Continue
          </button>
        </div>
        
        <p className="text-purple-400 text-base sm:text-xl mb-6 sm:mb-8 text-center sm:text-left">
          Make amazing, uncensored NSFW AI images with our Image Studio. No limits, no filters – just pure creativity.
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

          {/* Character Selection Modal */}
          {showCharacterModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCharacterModal(false)} />
              <div className="bg-[#1a1625] rounded-xl sm:rounded-3xl border border-purple-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10">
                <div className="p-4 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">Choose Character</h2>
                    <button onClick={() => setShowCharacterModal(false)} className="text-gray-400 hover:text-white p-2">
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                      My Creations
                    </button>
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                      Community
                    </button>
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                      Originals
                    </button>
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm sm:text-base">
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

          {/* Scenario Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Scenario</label>
            <button
              onClick={() => setShowScenarioModal(true)}
              className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 text-left focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            >
              {selectedScenario ? selectedScenario.title : 'None'}
            </button>
          </div>

          {/* Scenario Selection Modal */}
          {showScenarioModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowScenarioModal(false)} />
              <div className="bg-[#1a1625] rounded-xl sm:rounded-3xl border border-purple-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10">
                <div className="p-4 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">Choose Scenario</h2>
                    <button onClick={() => setShowScenarioModal(false)} className="text-gray-400 hover:text-white p-2">
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>

                  {/* Filter Buttons */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                      My Creations
                    </button>
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                      Community
                    </button>
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors text-sm sm:text-base">
                      Originals
                    </button>
                    <button className="px-3 sm:px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm sm:text-base">
                      Most messages
                    </button>
                    <button className="p-2 rounded-xl bg-[#13111a] text-white hover:bg-purple-500/10 transition-colors">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  {/* Scenarios Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {scenarios.map((scenario, index) => (
                      <div
                        key={index}
                        onClick={() => handleScenarioSelect(scenario)}
                        className="relative group cursor-pointer"
                      >
                        <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                          <img
                            src={scenario.image}
                            alt={scenario.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          
                          {/* Views Badge */}
                          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                            <span>{scenario.views}</span>
                            <svg className="w-4 h-4 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14m-7-7l7 7-7 7" />
                            </svg>
                          </div>

                          {/* Scenario Info */}
                          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                            <h3 className="text-base sm:text-xl font-bold mb-2">{scenario.title}</h3>
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
              </div>
            </div>
          )}

          {/* Style Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            >
              {styles.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Position Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Position</label>
            <button
              onClick={() => setShowPositionModal(true)}
              className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 text-left focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            >
              {selectedPositionLabel}
            </button>
          </div>

          {/* Position Selection Modal */}
          {showPositionModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPositionModal(false)} />
              <div className="bg-[#1a1625] rounded-xl sm:rounded-3xl border border-purple-500/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10">
                <div className="p-4 sm:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">Choose Position</h2>
                    <button onClick={() => setShowPositionModal(false)} className="text-gray-400 hover:text-white p-2">
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>

                  {/* Positions Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {positions.map((pos) => (
                      <div
                        key={pos.value}
                        onClick={() => handlePositionSelect(pos.value)}
                        className="relative group cursor-pointer"
                      >
                        <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                          <img
                            src={pos.image}
                            alt={pos.label}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-semibold text-center">{pos.label}</h3>
                          </div>
                          {/* Premium indicator */}
                          <div className="absolute top-2 right-2">
                            <div className="text-purple-400">
                              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                              </svg>
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

          {/* Positive Prompt */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Positive Prompt <span className="text-xs text-gray-400">What you want to see</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={positivePrompt}
                onChange={handlePositivePromptChange}
                placeholder="tight summer dress, smiling"
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - positivePrompt.length} chars remaining
              </span>
            </div>
          </div>

          {/* Negative Prompt */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Negative Prompt <span className="text-xs text-gray-400">What you don't want to see</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={negativePrompt}
                onChange={handleNegativePromptChange}
                placeholder="interlocked fingers"
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
                maxLength={MAX_CHARS}
              />
              <span className="absolute right-3 top-3 text-[10px] sm:text-xs text-gray-400">
                {MAX_CHARS - negativePrompt.length} chars remaining
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
      </div>
    </div>
  );
}

export default ImageStudio;