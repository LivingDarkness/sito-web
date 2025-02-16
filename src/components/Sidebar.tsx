import React from 'react';
import { 
  Home,
  Users,
  Film,
  Sparkles,
  ShoppingBag,
  MessageSquare,
  Palette,
  Sword,
  Settings,
  LogOut,
  ArrowUp,
  MessageCircle,
  Send,
  Twitter,
  HelpCircle,
  X
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', id: 'home' },
  { icon: Users, label: 'Characters', id: 'characters' },
  { icon: Film, label: 'Scenarios', id: 'scenarios' },
  { icon: Sparkles, label: 'Images', id: 'images' },
  { icon: ShoppingBag, label: 'Creators', id: 'creators' },
  { icon: MessageSquare, label: 'Chats', id: 'chats' },
  { icon: Palette, label: 'Studio', id: 'studio' },
  { icon: Sword, label: 'Missions', id: 'missions' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const socialIcons = [
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Send, href: '#', label: 'Telegram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: HelpCircle, href: '#', label: 'Help' },
];

interface SidebarProps {
  onClose: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
}

function Sidebar({ onClose, onPageChange, currentPage }: SidebarProps) {
  return (
    <div className="w-[280px] bg-[#0a0a0a] h-screen flex flex-col py-4 overflow-y-auto">
      {/* Close button for mobile */}
      <button 
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-lg bg-[#1a1a1a]/50 backdrop-blur-sm"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Header */}
      <div className="px-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Alpha<span className="text-purple-500">zria</span>
        </h1>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onPageChange('store')}
            className="bg-purple-500/20 text-white px-3 py-1 rounded-lg flex items-center gap-2"
          >
            <span>0</span>
            <Settings className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onPageChange('subscription')}
            className="bg-purple-500 text-white px-3 sm:px-4 py-1 rounded-full text-sm flex items-center gap-1"
          >
            <span className="hidden sm:inline">Upgrade Plan</span>
            <span className="sm:hidden">Upgrade</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onPageChange(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors
                  ${currentPage === item.id
                    ? 'bg-[#1a1a1a] text-purple-500' 
                    : 'hover:bg-[#1a1a1a] text-white hover:text-purple-500'
                  }
                `}
              >
                <item.icon className={`w-5 h-5 ${currentPage === item.id ? 'text-purple-500' : 'text-purple-500'}`} />
                <span className="text-base sm:text-lg">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="px-2">
        <button
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-500 hover:bg-[#1a1a1a] transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-base sm:text-lg">Log out</span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-2 px-4">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-3">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-[#1a1a1a] p-2 rounded-full text-purple-500 hover:text-purple-400 transition-colors"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>

        {/* Contact Email */}
        <div className="text-center text-purple-500 text-xs sm:text-sm mb-2">
          <a href="mailto:contact@alphazria.com">contact@alphazria.com</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mb-2">
          © 2023-2025 Alphazria v0.21.5
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs sm:text-sm text-purple-500 text-center">
          <a href="#" className="hover:text-purple-400">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400">Terms of Service</a>
          <a href="#" className="hover:text-purple-400">Affiliates Program</a>
          <a href="#" className="hover:text-purple-400">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;