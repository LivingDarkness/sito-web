import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Characters from './pages/Characters';
import Scenarios from './pages/Scenarios';
import Studio from './pages/Studio';
import CharacterStudio from './pages/CharacterStudio';
import ScenarioStudio from './pages/ScenarioStudio';
import ImageStudio from './pages/ImageStudio';
import Images from './pages/Images';
import Missions from './pages/Missions';
import Subscription from './pages/Subscription';
import Store from './pages/Store';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handlePageChangeEvent = (event: CustomEvent) => {
      handlePageChange(event.detail);
    };

    window.addEventListener('pageChange', handlePageChangeEvent as EventListener);

    return () => {
      window.removeEventListener('pageChange', handlePageChangeEvent as EventListener);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-[#1a1625] text-white">
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-purple-500 p-2 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 transform lg:translate-x-0 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} onPageChange={handlePageChange} currentPage={currentPage} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 lg:pl-[280px]">
        {currentPage === 'home' && <MainContent />}
        {currentPage === 'characters' && <Characters />}
        {currentPage === 'scenarios' && <Scenarios />}
        {currentPage === 'images' && <Images />}
        {currentPage === 'studio' && <Studio />}
        {currentPage === 'missions' && <Missions />}
        {currentPage === 'character-studio' && <CharacterStudio />}
        {currentPage === 'scenario-studio' && <ScenarioStudio />}
        {currentPage === 'image-studio' && <ImageStudio />}
        {currentPage === 'subscription' && <Subscription />}
        {currentPage === 'store' && <Store />}
      </div>
    </div>
  );
}

export default App