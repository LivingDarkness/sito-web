import React, { useState } from 'react';
import { ChevronDown, Sparkles, X } from 'lucide-react';

interface Option {
  label: string;
  value: string;
}

const nationalities: Option[] = [
  { label: 'American', value: 'american' },
  { label: 'British', value: 'british' },
  { label: 'Chinese', value: 'chinese' },
  { label: 'French', value: 'french' },
  { label: 'German', value: 'german' },
  { label: 'Indian', value: 'indian' },
  { label: 'Italian', value: 'italian' },
  { label: 'Japanese', value: 'japanese' },
  { label: 'Korean', value: 'korean' },
  { label: 'Russian', value: 'russian' },
  { label: 'Spanish', value: 'spanish' },
  { label: 'Thai', value: 'thai' },
  { label: 'Vietnamese', value: 'vietnamese' },
  { label: 'Brazilian', value: 'brazilian' },
  { label: 'Canadian', value: 'canadian' },
  { label: 'Australian', value: 'australian' },
  { label: 'Mexican', value: 'mexican' },
  { label: 'Swedish', value: 'swedish' },
  { label: 'Norwegian', value: 'norwegian' },
  { label: 'Dutch', value: 'dutch' },
  { label: 'Polish', value: 'polish' },
  { label: 'Greek', value: 'greek' },
  { label: 'Turkish', value: 'turkish' },
  { label: 'Egyptian', value: 'egyptian' },
  { label: 'South African', value: 'south_african' }
];

const styles: Option[] = [
  { label: 'Anime', value: 'anime' },
  { label: 'Realistic', value: 'realistic' },
  { label: 'Semi-realistic', value: 'semi-realistic' }
];

const ethnicities = [
  'African',
  'Asian',
  'Caucasian',
  'Latino',
  'Indigenous',
  'Middle eastern',
  'Mixed'
];

const hairColors = [
  'Black',
  'Brown',
  'Blonde',
  'Red',
  'Gray',
  'White',
  'Blue',
  'Pink',
  'Purple',
  'Green'
];

const hairStyles = [
  'Long straight',
  'Long wavy',
  'Curly',
  'Bob cut',
  'Pixie cut',
  'Bangs',
  'Ponytail',
  'Braids',
  'Afro',
  'Dreadlocks',
  'Pigtails',
  'Short',
  'Mohawk',
  'Buzz cut',
  'Short curly'
];

const eyeColors = [
  'Brown',
  'Blue',
  'Green',
  'Gray',
  'Hazel',
  'Amber',
  'Violet',
  'Red',
  'Silver',
  'Gold',
  'Black'
];

const bodyTypes = [
  'Skinny',
  'Petite',
  'Average',
  'Fit',
  'Athletic',
  'Muscular',
  'Curvy',
  'Chubby',
  'Bbw'
];

const breastSizes = [
  'Very small',
  'Small',
  'Medium',
  'Large',
  'Very large',
  'Enormous'
];

const bottomSizes = [
  'Very small',
  'Small',
  'Medium',
  'Large',
  'Very large',
  'Enormous',
  'Muscular'
];

const tattooTypes = [
  'None',
  'Tribal',
  'Modern'
];

function CharacterStudio() {
  const [nationality, setNationality] = useState('british');
  const [style, setStyle] = useState('anime');
  const [gender, setGender] = useState('female');
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [characterDetails, setCharacterDetails] = useState({
    age: '25',
    ethnicity: 'Asian',
    hairColor: 'Blue',
    hairStyle: 'Buzz cut',
    eyeColor: 'Black',
    bodyType: 'Skinny',
    breastSize: 'Very large',
    bottomSize: 'Medium',
    tattoo: 'Modern'
  });

  const handleDetailClick = (detail: string) => {
    setActivePopup(detail);
  };

  const handleDetailChange = (key: string, value: string) => {
    setCharacterDetails(prev => ({
      ...prev,
      [key]: value
    }));
    setActivePopup(null);
  };

  const handleAgeChange = (value: number) => {
    setCharacterDetails(prev => ({
      ...prev,
      age: value.toString()
    }));
  };

  const renderPopup = (title: string, icon: string, options: string[], detailKey: string) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setActivePopup(null)} />
      <div className="bg-[#1a1625] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-purple-500/20 w-full max-w-[300px] relative z-50">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2">
            {title} <span>{icon}</span>
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleDetailChange(detailKey, option)}
              className={`p-2 rounded-xl text-center transition-colors text-sm ${
                characterDetails[detailKey as keyof typeof characterDetails] === option
                  ? 'bg-purple-500 text-white'
                  : 'bg-[#13111a] text-gray-400 hover:bg-purple-500/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Character Studio</h1>
          <button className="w-full sm:w-auto bg-purple-500 text-white px-6 py-2 rounded-full">
            Continue
          </button>
        </div>
        
        <p className="text-purple-400 text-base sm:text-xl mb-6 sm:mb-8 text-center sm:text-left">
          Create NSFW characters. Fully uncensored with no limits on creativity.
        </p>

        {/* Main Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Nationality Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Nationality</label>
            <div className="relative">
              <select 
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 pr-10 appearance-none focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              >
                {nationalities.map((nat) => (
                  <option key={nat.value} value={nat.value}>
                    {nat.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* Style Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Style</label>
            <div className="relative">
              <select 
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-[#13111a] border border-purple-500/20 rounded-xl p-3 pr-10 appearance-none focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              >
                {styles.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setGender('male')}
              className={`p-3 rounded-xl text-center transition-colors text-sm sm:text-base ${
                gender === 'male'
                  ? 'bg-purple-500 text-white'
                  : 'bg-[#13111a] text-gray-400 hover:bg-purple-500/10'
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender('female')}
              className={`p-3 rounded-xl text-center transition-colors text-sm sm:text-base ${
                gender === 'female'
                  ? 'bg-purple-500 text-white'
                  : 'bg-[#13111a] text-gray-400 hover:bg-purple-500/10'
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* Character Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative">
          {[
            { icon: '🎂', label: 'AGE', value: characterDetails.age, key: 'age' },
            { icon: '🌸', label: 'ETHNICITY', value: characterDetails.ethnicity, key: 'ethnicity' },
            { icon: '👱‍♀️', label: 'HAIR COLOR', value: characterDetails.hairColor, key: 'hairColor' },
            { icon: '✂️', label: 'HAIR STYLE', value: characterDetails.hairStyle, key: 'hairStyle' },
            { icon: '👁️', label: 'EYE COLOR', value: characterDetails.eyeColor, key: 'eyeColor' },
            { icon: '👗', label: 'BODY TYPE', value: characterDetails.bodyType, key: 'bodyType' },
            { icon: '👙', label: 'BREAST SIZE', value: characterDetails.breastSize, key: 'breastSize' },
            { icon: '🍑', label: 'BOTTOM SIZE', value: characterDetails.bottomSize, key: 'bottomSize' },
            { icon: '🦋', label: 'TATTOO', value: characterDetails.tattoo, key: 'tattoo' },
          ].map((detail, index) => (
            <div
              key={index}
              onClick={() => handleDetailClick(detail.key)}
              className="bg-[#13111a] p-3 sm:p-4 rounded-xl cursor-pointer hover:bg-[#1a1625] transition-colors"
            >
              <div className="text-center mb-2">
                <span className="text-xl sm:text-2xl">{detail.icon}</span>
              </div>
              <div className="text-xs text-gray-400 text-center mb-1">
                {detail.label}
              </div>
              <div className="text-purple-400 text-center text-sm sm:text-base">
                {detail.value}
              </div>
            </div>
          ))}
        </div>

        {/* Preview Button */}
        <button className="w-full mt-6 bg-purple-500 text-white p-3 sm:p-4 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          Preview
          <span className="ml-auto bg-purple-400/20 px-2 py-1 rounded-lg">
            25
          </span>
        </button>

        {/* Age Popup */}
        {activePopup === 'age' && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="absolute inset-0 bg-black/50" onClick={() => setActivePopup(null)} />
            <div className="bg-[#1a1625] p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-purple-500/20 w-full max-w-[300px] relative z-50">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center gap-2">
                  Age <span>🎂</span>
                </h3>
              </div>
              <div className="text-center mb-4">
                <span className="text-2xl sm:text-3xl text-purple-500">{characterDetails.age}</span>
              </div>
              <input
                type="range"
                min="18"
                max="60"
                value={characterDetails.age}
                onChange={(e) => handleAgeChange(parseInt(e.target.value))}
                className="w-full h-2 bg-purple-500/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Other popups */}
        {activePopup === 'ethnicity' && renderPopup('Ethnicity', '🌸', ethnicities, 'ethnicity')}
        {activePopup === 'hairColor' && renderPopup('Hair Color', '👱‍♀️', hairColors, 'hairColor')}
        {activePopup === 'hairStyle' && renderPopup('Hair Style', '✂️', hairStyles, 'hairStyle')}
        {activePopup === 'eyeColor' && renderPopup('Eye Color', '👁️', eyeColors, 'eyeColor')}
        {activePopup === 'bodyType' && renderPopup('Body Type', '👗', bodyTypes, 'bodyType')}
        {activePopup === 'breastSize' && renderPopup('Breast Size', '👙', breastSizes, 'breastSize')}
        {activePopup === 'bottomSize' && renderPopup('Bottom Size', '🍑', bottomSizes, 'bottomSize')}
        {activePopup === 'tattoo' && renderPopup('Tattoo', '🦋', tattooTypes, 'tattoo')}
      </div>
    </div>
  );
}

export default CharacterStudio;