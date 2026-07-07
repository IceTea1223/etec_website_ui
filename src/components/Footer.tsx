import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../types';

interface FooterProps {
  setCurrentTab: (tab: 'home' | 'courses' | 'promotion' | 'about') => void;
  lang: 'en' | 'km';
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, lang }) => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const t = TRANSLATIONS[lang];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleNavClick = (tab: 'home' | 'courses' | 'promotion' | 'about') => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Desc */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="bg-accent-yellow text-primary font-bold p-2 rounded-lg">
                <span className="text-lg font-extrabold tracking-wider font-display">ETEC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg font-display text-white">ETEC Center</span>
                <span className="text-[9px] uppercase font-semibold text-accent-yellow/80 tracking-widest font-mono">IT Training Center</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-sans">
              {lang === 'en' 
                ? 'Empowering the next generation of IT leaders in Cambodia through quality and professional hands-on learning.'
                : 'ផ្តល់អំណាចដល់អ្នកដឹកនាំផ្នែកព័ត៌មានវិទ្យាជំនាន់ក្រោយនៅកម្ពុជា តាមរយៈការរៀនជាក់ស្តែងប្រកបដោយគុណភាពខ្ពស់ និងវិជ្ជាជីវៈ។'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent-yellow hover:text-primary rounded-lg transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent-yellow hover:text-primary rounded-lg transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent-yellow hover:text-primary rounded-lg transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-accent-yellow font-bold text-lg mb-6 font-display">
              {lang === 'en' ? 'Quick Links' : 'តំណភ្ជាប់រហ័ស'}
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="text-white/70 hover:text-accent-yellow text-sm font-semibold transition-colors cursor-pointer"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('courses')}
                  className="text-white/70 hover:text-accent-yellow text-sm font-semibold transition-colors cursor-pointer"
                >
                  {t.courses}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('promotion')}
                  className="text-white/70 hover:text-accent-yellow text-sm font-semibold transition-colors cursor-pointer"
                >
                  {t.promotion}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-white/70 hover:text-accent-yellow text-sm font-semibold transition-colors cursor-pointer"
                >
                  {t.about}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-accent-yellow font-bold text-lg mb-6 font-display">
              {lang === 'en' ? 'Contact Details' : 'ព័ត៌មានទំនាក់ទំនង'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
                <span className="text-sm font-sans">
                  {lang === 'en'
                    ? 'Street 150, Toul Kork, Phnom Penh, Cambodia'
                    : 'ផ្លូវ ១៥០, ទួលគោក, រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា'
                  }
                </span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-accent-yellow shrink-0" />
                <span className="text-sm font-sans">+855 12 345 678 / +855 98 765 432</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5 text-accent-yellow shrink-0" />
                <span className="text-sm font-sans">info@etec.edu.kh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-accent-yellow font-bold text-lg mb-6 font-display">
              {lang === 'en' ? 'Newsletter' : 'ព្រឹត្តិបត្រព័ត៌មាន'}
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed font-sans">
              {lang === 'en'
                ? 'Subscribe to get information on new courses and special discount campaigns.'
                : 'ចុះឈ្មោះដើម្បីទទួលបានព័ត៌មានពីវគ្គសិក្សាថ្មីៗ និងយុទ្ធនាការបញ្ចុះតម្លៃពិសេស។'
              }
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={lang === 'en' ? 'Enter email address' : 'បញ្ចូលអាសយដ្ឋានអ៊ីមែល'}
                  className="w-full bg-white/10 text-white placeholder-white/40 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-yellow border border-white/10 transition-all font-sans"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 p-1.5 bg-accent-yellow text-primary rounded-lg hover:bg-white transition-all cursor-pointer"
                  title="Subscribe"
                >
                  <ArrowRight className="w-4 h-4 font-bold" />
                </button>
              </div>
              {subscribed && (
                <span className="text-xs text-accent-yellow font-bold block animate-bounce">
                  {lang === 'en' ? '✓ Subscribed successfully!' : '✓ បានចុះឈ្មោះដោយជោគជ័យ!'}
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/50 text-xs font-sans text-center sm:text-left">
            © {new Date().getFullYear()} ETEC Center. All rights reserved. Developed for professional IT mastery.
          </span>
          <div className="flex space-x-6 text-xs text-white/50">
            <a href="#" className="hover:text-accent-yellow transition-colors font-sans">Privacy Policy</a>
            <a href="#" className="hover:text-accent-yellow transition-colors font-sans">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
