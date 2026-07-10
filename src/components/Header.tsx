import React from 'react';
import { ShoppingCart, Menu, X, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../types';

interface HeaderProps {
  currentTab: 'home' | 'courses' | 'promotion' | 'about';
  setCurrentTab: (tab: 'home' | 'courses' | 'promotion' | 'about') => void;
  lang: 'en' | 'km';
  setLang: (lang: 'en' | 'km') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  cartCount,
  onOpenCart
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = TRANSLATIONS[lang];

  const handleNavClick = (tab: 'home' | 'courses' | 'promotion' | 'about') => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: 'home' | 'courses' | 'promotion' | 'about'; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'courses', label: t.courses },
    { id: 'promotion', label: t.promotion },
    { id: 'about', label: t.about }
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav text-white border-b border-primary/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
            id="brand-logo"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeDleMe5f3qp6zRi2v1Tqxq-aPueVC2xBz7zXf62mkSe5QPaMS0Zmdl0&s=10"
              alt="ETEC banner"
              className="w-14 h-14 rounded object-cover border border-white/20 shadow-lg"
            />
          
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-xl font-display text-white group-hover:text-accent-yellow transition-colors">
                ETEC Center
              </span>
              <span className="text-[10px] uppercase font-semibold text-accent-yellow/80 tracking-widest font-mono">
                IT Training Center
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-accent-yellow text-primary shadow-md font-bold'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Controls (Language Switcher, Cart, Action Button) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/50 text-white/90 text-xs font-semibold hover:bg-white/5 transition-all cursor-pointer"
              title="Switch Language"
              id="lang-switcher"
            >
              <Globe className="w-3.5 h-3.5 text-accent-yellow" />
              <span>{lang === 'en' ? 'ភាសាខ្មែរ' : 'English'}</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl text-white hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
              aria-label="View Enrolled Courses Cart"
              id="cart-btn"
            >
              <ShoppingCart className="w-5 h-5 text-accent-yellow" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-pulse border-2 border-primary">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Register Call-to-action Button */}
            <button
              onClick={() => handleNavClick('courses')}
              className="bg-accent-yellow text-primary font-bold px-6 py-2.5 rounded-xl text-sm tracking-wide shadow-md hover:bg-white hover:text-primary hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              id="get-started-btn"
            >
              {t.getStarted}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'km' : 'en')}
              className="p-2 rounded-lg border border-white/20 text-white/90 transition-all cursor-pointer"
              title="Switch Language"
              id="mobile-lang-switcher"
            >
              <Globe className="w-4 h-4 text-accent-yellow" />
            </button>

            {/* Mobile Cart */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg text-white hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              id="mobile-cart-btn"
            >
              <ShoppingCart className="w-5 h-5 text-accent-yellow" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-primary">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-t border-white/10 px-4 pt-4 pb-6 space-y-3" id="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                currentTab === item.id
                  ? 'bg-accent-yellow text-primary'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => handleNavClick('courses')}
              className="w-full bg-accent-yellow text-primary font-bold py-3 px-4 rounded-xl text-center shadow-lg hover:bg-white transition-all duration-300"
            >
              {t.getStarted}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
