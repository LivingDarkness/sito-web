import React from 'react';

function Studio() {
  const handleCharacterStudioClick = () => {
    const event = new CustomEvent('pageChange', { detail: 'character-studio' });
    window.dispatchEvent(event);
  };

  const handleScenarioStudioClick = () => {
    const event = new CustomEvent('pageChange', { detail: 'scenario-studio' });
    window.dispatchEvent(event);
  };

  const handleImageStudioClick = () => {
    const event = new CustomEvent('pageChange', { detail: 'image-studio' });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
          NSFW AI <span className="text-purple-500">Studio</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg px-4">
          Create stunning AI characters, craft engaging scenarios, and generate beautiful images.
        </p>
      </div>

      {/* Studio Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4">
        {/* Character Studio Card */}
        <div 
          onClick={handleCharacterStudioClick}
          className="bg-[#13111a] rounded-2xl overflow-hidden group cursor-pointer hover:bg-[#1a1625] transition-colors"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop"
              alt="Character Studio"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13111a] via-transparent to-transparent" />
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Character Studio</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Design unique AI characters with custom appearances and personalities.
            </p>
          </div>
        </div>

        {/* Scenario Studio Card */}
        <div 
          onClick={handleScenarioStudioClick}
          className="bg-[#13111a] rounded-2xl overflow-hidden group cursor-pointer hover:bg-[#1a1625] transition-colors"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop"
              alt="Scenario Studio"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13111a] via-transparent to-transparent" />
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Scenario Studio</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Create immersive scenarios and stories for your characters.
            </p>
          </div>
        </div>

        {/* Image Studio Card */}
        <div 
          onClick={handleImageStudioClick}
          className="bg-[#13111a] rounded-2xl overflow-hidden group cursor-pointer hover:bg-[#1a1625] transition-colors sm:col-span-2 lg:col-span-1"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop"
              alt="Image Studio"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13111a] via-transparent to-transparent" />
          </div>
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Image Studio</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Generate beautiful AI images with precise style control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;