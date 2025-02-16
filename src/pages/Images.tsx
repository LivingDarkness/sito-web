import React from 'react';
import { Plus, Search } from 'lucide-react';

const images = [
  {
    title: "Anime Style",
    views: "17.3K",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    title: "Realistic Style",
    views: "15.5K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    title: "Semi-realistic",
    views: "12.5K",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    title: "Fantasy Style",
    views: "11.1K",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    title: "Artistic Style",
    views: "9.52K",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    title: "Watercolor",
    views: "7.66K",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop"
  },
  {
    title: "Oil Painting",
    views: "7.36K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    title: "Digital Art",
    views: "6.88K",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  },
  {
    title: "Pencil Sketch",
    views: "5.38K",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop"
  },
  {
    title: "Comic Style",
    views: "5.34K",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
  },
  {
    title: "Manga Style",
    views: "4.96K",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop"
  },
  {
    title: "Pixel Art",
    views: "4.78K",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop"
  },
  {
    title: "3D Render",
    views: "4.53K",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop"
  },
  {
    title: "Vector Art",
    views: "4.29K",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop"
  }
];

function Images() {
  const handleCreateImage = () => {
    const event = new CustomEvent('pageChange', { detail: 'image-studio' });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
          Explore AI <span className="text-purple-500">Images</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 w-full sm:w-auto">
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

      {/* Images Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
        {/* Create New Image Card */}
        <div 
          onClick={handleCreateImage}
          className="relative group cursor-pointer"
        >
          <div className="aspect-[3/4] rounded-2xl bg-[#13111a] flex flex-col items-center justify-center border-2 border-dashed border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <Plus className="w-8 h-8 sm:w-12 sm:h-12 text-purple-500 mb-2 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold">Create New</h3>
            <p className="text-purple-500 text-sm sm:text-base">Image</p>
          </div>
        </div>

        {/* Image Cards */}
        {images.map((image, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Views Badge */}
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <span>{image.views}</span>
                <svg className="w-4 h-4 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>

              {/* Image Info */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-base sm:text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;