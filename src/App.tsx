import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Search, 
  Filter, 
  Check, 
  ChevronRight, 
  GraduationCap, 
  Star, 
  FileText, 
  TrendingUp, 
  HeartHandshake,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnrollmentCart } from './components/EnrollmentCart';
import { CallbackForm } from './components/CallbackForm';
import { RegistrationForm } from './components/RegistrationForm';
import { 
  Course, 
  POPULAR_COURSES, 
  ALL_COURSES, 
  PROMO_COURSES, 
  STAT_CARDS, 
  TEAM_MEMBERS, 
  STUDENT_PROJECTS, 
  TRANSLATIONS 
} from './types';

export default function App() {
  const [currentTab, setCurrentTab] = React.useState<'home' | 'courses' | 'promotion' | 'about'>('home');
  const [lang, setLang] = React.useState<'en' | 'km'>('km'); // Default to Khmer as requested by native screens
  const [cart, setCart] = React.useState<Course[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState<{ id: string; message: string; type: 'success' | 'info' }[]>([]);

  // Courses Filtering State
  const [courseFilter, setCourseFilter] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  // Live countdown timer state (Start at 5 days, 12 hours, 45 mins, 00 secs)
  const [timeRemaining, setTimeRemaining] = React.useState({
    days: 5,
    hours: 12,
    minutes: 45,
    seconds: 0
  });

  // Ticking Effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Reset countdown timer when hits 0 to maintain persistent user FOMO!
          return { days: 5, hours: 12, minutes: 45, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const t = TRANSLATIONS[lang];

  // Helper to trigger toast notifications
  const triggerToast = (message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 4000);
  };

  // Add Course to Cart
  const handleAddToCart = (course: Course) => {
    if (cart.some(item => item.id === course.id)) {
      triggerToast(
        lang === 'en' 
          ? `"${course.title}" is already in your registration basket!`
          : `វគ្គសិក្សា "${course.khTitle}" មានក្នុងកន្ត្រកចុះឈ្មោះរួចហើយ!`,
        'info'
      );
      return;
    }
    setCart(prev => [...prev, course]);
    triggerToast(
      lang === 'en'
        ? `Added "${course.title}" to registration list!`
        : `បានបន្ថែម "${course.khTitle}" ទៅកាន់បញ្ជីចុះឈ្មោះ!`
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Filter logic
  const filteredCourses = ALL_COURSES.filter(course => {
    const categoryMatch = courseFilter === 'All' || course.category === courseFilter;
    const searchMatch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.khTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.khDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col font-sans transition-colors duration-300">
      
      {/* HEADER NAVIGATION */}
      <Header 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* FLOATING TOAST NOTIFICATIONS */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5 max-w-sm" id="toast-wrapper">
        {toasts.map(toast => (
          <div 
            key={toast.id}
            className={`flex items-center space-x-3 px-4 py-3 rounded-2xl shadow-xl border text-xs font-bold font-sans animate-slide-in-right ${
              toast.type === 'success' 
                ? 'bg-green-500 text-white border-green-400' 
                : 'bg-primary text-white border-primary-container'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5 text-accent-yellow" />}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-grow">
        
        {/* TAB 1: HOME PAGE */}
        {currentTab === 'home' && (
          <div className="space-y-0" id="tab-home-content">
            
            {/* HERO SECTION */}
            <section className="relative text-white overflow-hidden py-16 sm:py-24 hero-gradient">
              {/* Decorative particle stars */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Hero Left Info */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <span className="inline-flex items-center space-x-2 bg-accent-yellow/15 text-accent-yellow border border-accent-yellow/30 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase font-mono">
                      <Sparkles className="w-4.5 h-4.5 fill-accent-yellow text-accent-yellow shrink-0 animate-pulse" />
                      <span>{t.badgeHero}</span>
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
                      {lang === 'en' ? 'Learn IT Skills for the Future' : 'រៀនជំនាញ IT ដើម្បីអនាគត'}
                    </h1>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-sans">
                      {t.subHero}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <button 
                        onClick={() => setCurrentTab('courses')}
                        className="bg-accent-yellow text-primary font-extrabold px-8 py-3.5 rounded-xl text-sm tracking-wide shadow-lg hover:bg-white hover:text-primary hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                      >
                        {t.btnEnroll}
                      </button>
                      <button 
                        onClick={() => setCurrentTab('courses')}
                        className="bg-white/10 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm tracking-wide border border-white/20 hover:bg-white/20 hover:border-white/50 transition-all duration-300 cursor-pointer"
                      >
                        {t.btnViewCourses}
                      </button>
                    </div>
                  </div>

                  {/* Hero Right Graphic */}
                  <div className="lg:col-span-5 relative flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group transform hover:scale-[1.02] transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10 opacity-60" />
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlm3QQiD3twc3cQ8dPaI_PmETE6dKNs8zynW6W59D8QuoTK7ANhZnIWeEnM0F5JY0-fs4Jecm-KRSSPs6BXVvaxojIT8OrBYwpJ0LreAGJR6O8QhUuKthV3jwagFQq1OUguegtIhvBCBNrzkt3Kc1LoE3Jba3xxSOH0ZGDZy9BUnC6VIfxHpXYT6tgjhT2ENJ578Glp4hM4_7F4NU8jS8BuIDyh1ox8_6-ml_d5qFTL6FX-TcyyCrkIQxALfRKxhQcPHIlFBzICLyP"
                        alt="ETEC Student Learning"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {/* Interactive floating state capsule */}
                      <div className="absolute bottom-6 left-6 z-20 bg-primary/95 backdrop-blur px-4 py-2.5 rounded-2xl border border-white/10 flex items-center space-x-3 shadow-lg">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                        <span className="text-[11px] font-bold text-white tracking-wider font-mono">
                          {lang === 'en' ? 'LIVE LAB SESSION' : 'ការអនុវត្តផ្ទាល់ក្នុងមន្ទីរពិសោធន៍'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* NEW YEAR PROMOTION BANNER WITH REAL LIVE TIMER */}
            <section className="bg-gradient-to-r from-[#FFF5CC] to-accent-yellow/40 border-y border-accent-yellow/50 py-10" id="home-promo-banner">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  
                  {/* Promo Badge & Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                    <div className="bg-primary text-white font-extrabold text-sm tracking-widest uppercase px-6 py-4 rounded-2xl shadow-xl transform rotate-[-2deg] shrink-0 border-2 border-accent-yellow flex flex-col items-center justify-center">
                      <span className="text-[10px] text-accent-yellow tracking-wider font-mono">GET</span>
                      <span className="text-2xl font-black font-display text-accent-yellow">50%</span>
                      <span className="text-[10px] tracking-wider font-mono">DISCOUNT</span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-black text-primary tracking-tight font-display">
                        {t.promoSpecialOffer}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700 leading-normal font-sans">
                        {t.promoSubtitle} {lang === 'en' ? 'Claim your scholarship seat before cohorts fill up.' : 'កក់កន្លែងសិក្សារបស់អ្នកមុនពេលកំណត់។'}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Interactive Ticking Countdown */}
                  <div className="flex items-center space-x-4 shrink-0 bg-primary/95 text-white p-4 rounded-2xl shadow-xl border border-white/10">
                    <div className="flex flex-col items-center px-3.5">
                      <span className="text-xl sm:text-2xl font-black font-display text-accent-yellow tracking-tight">
                        {String(timeRemaining.days).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-mono mt-0.5">{t.days}</span>
                    </div>
                    <span className="text-accent-yellow font-bold text-lg animate-pulse">:</span>
                    <div className="flex flex-col items-center px-3.5">
                      <span className="text-xl sm:text-2xl font-black font-display text-accent-yellow tracking-tight">
                        {String(timeRemaining.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-mono mt-0.5">{t.hours}</span>
                    </div>
                    <span className="text-accent-yellow font-bold text-lg animate-pulse">:</span>
                    <div className="flex flex-col items-center px-3.5">
                      <span className="text-xl sm:text-2xl font-black font-display text-accent-yellow tracking-tight">
                        {String(timeRemaining.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-mono mt-0.5">{t.mins}</span>
                    </div>
                    <span className="text-accent-yellow font-bold text-lg animate-pulse">:</span>
                    <div className="flex flex-col items-center px-3.5">
                      <span className="text-xl sm:text-2xl font-black font-display text-red-400 tracking-tight">
                        {String(timeRemaining.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold font-mono mt-0.5">Secs</span>
                    </div>

                    {/* Quick CTA to Claim */}
                    <button 
                      onClick={() => setCurrentTab('promotion')}
                      className="ml-4 bg-accent-yellow hover:bg-white text-primary font-extrabold px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow cursor-pointer"
                    >
                      {t.claimOffer}
                    </button>
                  </div>

                </div>
              </div>
            </section>

            {/* POPULAR COURSES SECTION */}
            <section className="py-20 bg-background" id="popular-courses-grid">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Grid Title Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                  <div className="space-y-3 max-w-2xl text-left">
                    <span className="text-primary font-extrabold text-[11px] uppercase tracking-widest font-mono block">
                      {lang === 'en' ? 'ACCREDITED PATHWAYS' : 'កម្មវិធីបណ្តុះបណ្តាលទទួលស្គាល់'}
                    </span>
                    <h2 className="text-3xl font-black text-primary font-display tracking-tight leading-tight">
                      {t.popularTitle}
                    </h2>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">
                      {t.popularSubtitle}
                    </p>
                  </div>
                  <button 
                    onClick={() => setCurrentTab('courses')}
                    className="inline-flex items-center space-x-2 text-primary hover:text-secondary font-extrabold text-sm border-b-2 border-primary hover:border-secondary pb-1 tracking-wide transition-all cursor-pointer"
                  >
                    <span>{t.viewAllCourses}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Grid Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {POPULAR_COURSES.map((course) => (
                    <div 
                      key={course.id} 
                      className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:border-primary/20 transform hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                    >
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 shrink-0">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {/* Interactive Absolute Badges */}
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                          <span className="bg-primary/90 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 tracking-wide font-sans">
                            {lang === 'en' ? course.level : course.khLevel}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-10 bg-accent-yellow text-primary text-xs font-black px-3 py-1.5 rounded-full shadow-md font-display">
                          ${course.price.toFixed(2)}
                        </div>
                      </div>

                      {/* Info Frame */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[10px] font-extrabold text-primary/60 tracking-wider uppercase font-mono block">
                            {course.category}
                          </span>
                          <h3 className="text-base font-bold text-primary leading-snug group-hover:text-secondary transition-colors font-display line-clamp-1">
                            {lang === 'en' ? course.title : course.khTitle}
                          </h3>
                          <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2">
                            {lang === 'en' ? course.description : course.khDescription}
                          </p>
                        </div>

                        {/* Metadata row */}
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-sans">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-3.5 h-3.5 text-primary/40" />
                            <span>{course.duration} {t.hoursCount}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Users className="w-3.5 h-3.5 text-primary/40" />
                            <span>{course.slots} {t.slotsCount}</span>
                          </div>
                        </div>

                        {/* Card button */}
                        <button
                          onClick={() => handleAddToCart(course)}
                          className="w-full bg-surface-container hover:bg-primary hover:text-white text-primary font-bold py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5 group-hover:shadow"
                        >
                          <Plus className="w-4 h-4 shrink-0" />
                          <span>{t.enrollBtn}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* ABOUT CENTER & BENTO GRID STATISTICS */}
            <section className="py-20 bg-surface-container-low border-t border-gray-100" id="about-center-home">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column Text Info */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <span className="text-primary font-extrabold text-[11px] uppercase tracking-widest font-mono block">
                      {lang === 'en' ? 'OUR MISSION' : 'បេសកកម្មរបស់យើង'}
                    </span>
                    <h2 className="text-3xl font-black text-primary font-display tracking-tight leading-tight">
                      {t.aboutTitle}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {t.aboutDesc}
                    </p>

                    {/* Two structured highlights */}
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start space-x-4">
                        <div className="p-2.5 bg-accent-yellow/15 text-primary rounded-xl shrink-0 mt-0.5">
                          <Award className="w-5.5 h-5.5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary font-display">{t.certTitle}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed font-sans mt-1">
                            {t.certDesc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="p-2.5 bg-accent-yellow/15 text-primary rounded-xl shrink-0 mt-0.5">
                          <Users className="w-5.5 h-5.5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-primary font-display">{t.teacherTitle}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed font-sans mt-1">
                            {t.teacherDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Bento Statistics Grid */}
                  <div className="lg:col-span-6">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      
                      {STAT_CARDS.map((stat, idx) => (
                        <div 
                          key={stat.id}
                          className={`bg-white p-5 sm:p-6 rounded-3xl border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-left ${
                            stat.borderType === 'yellow' ? 'border-accent-yellow/40' : 'border-primary/10'
                          } ${idx === 1 ? 'transform translate-y-3 sm:translate-y-5' : ''} ${
                            idx === 3 ? 'transform translate-y-3 sm:translate-y-5' : ''
                          }`}
                        >
                          <span className="text-2xl sm:text-3xl font-black text-primary tracking-tight font-display block">
                            {stat.number}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-gray-700 font-sans block mt-1.5 leading-tight">
                            {lang === 'en' ? stat.label : stat.khLabel}
                          </span>
                          <p className="text-[10px] text-gray-400 font-sans mt-1">
                            {lang === 'en' ? 'Verified training statistics' : 'ស្ថិតិបណ្តុះបណ្តាលពិតប្រាកដ'}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
        )}

        {/* TAB 2: COURSES PAGE */}
        {currentTab === 'courses' && (
          <div className="space-y-0" id="tab-courses-content">
            
            {/* HERO SECTION */}
            <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-90" />
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
                <span className="bg-accent-yellow text-primary font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-mono">
                  {lang === 'en' ? 'ETEC CURRICULUM' : 'កម្មវិធីសិក្សាស្តង់ដារ'}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
                  {t.coursesHeroTitle}
                </h1>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl mx-auto font-sans">
                  {t.coursesHeroSub}
                </p>
              </div>
            </section>

            {/* FILTER CONTROLS & COURSE SEARCH */}
            <section className="py-12 bg-background border-b border-gray-100 sticky top-20 z-40 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Horizontal Scrolling Filter chips */}
                <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none" id="category-filters">
                  {[
                    { id: 'All', label: t.filterAll },
                    { id: 'Network', label: t.filterNetwork },
                    { id: 'Programming', label: t.filterProgramming },
                    { id: 'Web Development', label: t.filterWebDev },
                    { id: 'Cyber Security', label: t.filterCyberSec }
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      onClick={() => setCourseFilter(chip.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                        courseFilter === chip.id
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-surface-container hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                {/* Live Search input */}
                <div className="relative w-full md:w-80 shrink-0">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={lang === 'en' ? 'Search course titles or details...' : 'ស្វែងរកវគ្គសិក្សា...'}
                    className="w-full pl-10 pr-4 py-3 text-xs font-sans bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-gray-800 transition-all"
                  />
                </div>

              </div>
            </section>

            {/* MAIN COURSES GRID */}
            <section className="py-16 bg-background min-h-[400px]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {filteredCourses.length === 0 ? (
                  <div className="text-center py-20 space-y-4 max-w-sm mx-auto" id="search-not-found">
                    <div className="p-4 bg-surface-container rounded-full text-gray-400 w-16 h-16 flex items-center justify-center mx-auto">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-primary font-display">
                      {lang === 'en' ? 'No Courses Found' : 'រកមិនឃើញវគ្គសិក្សាឡើយ'}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      {lang === 'en' 
                        ? 'We couldn\'t find any courses matching your current search or category selections.' 
                        : 'សូមព្យាយាមស្វែងរកពាក្យគន្លឹះផ្សេងទៀត ឬផ្លាស់ប្តូរការច្រោះ។'}
                    </p>
                    <button
                      onClick={() => { setSearchQuery(''); setCourseFilter('All'); }}
                      className="bg-primary text-white font-bold py-2 px-5 rounded-xl text-xs hover:bg-secondary cursor-pointer transition-colors"
                    >
                      {lang === 'en' ? 'Reset All Filters' : 'កំណត់ឡើងវិញ'}
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                      <div 
                        key={course.id}
                        className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:border-primary/20 transform hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                      >
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-primary/95 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 tracking-wide font-sans">
                              {lang === 'en' ? course.level : course.khLevel}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4 z-10 bg-accent-yellow text-primary text-sm font-black px-4 py-1.5 rounded-full shadow-lg font-display">
                            ${course.price.toFixed(2)}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <span className="text-[10px] font-extrabold text-primary/60 tracking-wider uppercase font-mono block">
                              {course.category}
                            </span>
                            <h3 className="text-lg font-extrabold text-primary leading-snug group-hover:text-secondary transition-colors font-display line-clamp-1">
                              {lang === 'en' ? course.title : course.khTitle}
                            </h3>
                            <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2">
                              {lang === 'en' ? course.description : course.khDescription}
                            </p>
                          </div>

                          {/* Metadata & button */}
                          <div className="pt-4 border-t border-gray-100 space-y-4">
                            <div className="flex items-center justify-between text-xs text-gray-500 font-sans">
                              <div className="flex items-center space-x-1.5">
                                <Clock className="w-4.5 h-4.5 text-primary/40 shrink-0" />
                                <span>{course.duration} {t.hoursCount} {lang === 'en' ? 'Classroom Hours' : 'ម៉ោងសិក្សា'}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => handleAddToCart(course)}
                              className="w-full bg-primary hover:bg-accent-yellow hover:text-primary text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow cursor-pointer flex items-center justify-center space-x-2"
                            >
                              <Plus className="w-4 h-4 shrink-0" />
                              <span>{t.enrollBtn}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </section>

            {/* INTERACTIVE CALLBACK FORM SECTION */}
            <CallbackForm lang={lang} />

          </div>
        )}

        {/* TAB 3: PROMOTION PAGE */}
        {currentTab === 'promotion' && (
          <div className="space-y-0" id="tab-promotion-content">
            
            {/* HERO SPECIAL BANNER */}
            <section className="bg-gradient-to-r from-accent-yellow to-[#FFF099] py-16 sm:py-20 relative overflow-hidden border-b border-accent-yellow/40">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/30 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left content */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <span className="bg-primary text-white font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md font-mono inline-block">
                      ⚡ {t.specialOfferBadge}
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-primary leading-tight">
                      {t.unlockTitle}
                    </h1>

                    <p className="text-xs sm:text-sm text-primary/90 leading-relaxed max-w-2xl font-sans">
                      {t.unlockSubtitle}
                    </p>

                    {/* Countdown Timer Capsule */}
                    <div className="inline-flex flex-wrap items-center gap-4 bg-primary text-white px-5 py-3.5 rounded-2xl shadow-xl border border-white/10">
                      <span className="text-[11px] font-extrabold tracking-widest uppercase font-mono text-accent-yellow">
                        {t.endsIn}:
                      </span>
                      <div className="flex items-center space-x-3 text-xs font-mono font-bold">
                        <span>{String(timeRemaining.days).padStart(2, '0')}d</span>
                        <span className="text-accent-yellow animate-pulse">•</span>
                        <span>{String(timeRemaining.hours).padStart(2, '0')}h</span>
                        <span className="text-accent-yellow animate-pulse">•</span>
                        <span>{String(timeRemaining.minutes).padStart(2, '0')}m</span>
                        <span className="text-accent-yellow animate-pulse">•</span>
                        <span className="text-red-400">{String(timeRemaining.seconds).padStart(2, '0')}s</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-[11px] font-bold text-primary/80 font-sans">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                      <span>{t.industryRecognized}</span>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZlx45IF1C5cRfnOdIF9ic74bY8mqGWu5nPb91cJzfKiKcjBn1r9hWOaFfppAwcg3CTd8N6NIEK4kH0sfdz2ZNRRnWAKCwnt4d3WZfZnUdUb--Tzm0JK6IsRmu3OjkQkKS-n31joEIrhvCQuCa5f_tk27M6lmCP0qD_7uU-FXODN2zwdGm-pYIDp12VMiiDDwEl5X_oR9TlTnk0u0oHJ0G4SE-fcIqr7Zeql_msWMlWYerqE-1YXuczt3NdfJA-TB6LOOLvodSRdnq"
                        alt="Special Promo IT Class"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 z-10 bg-red-500 text-white font-black text-xs px-3 py-1.5 rounded-xl shadow-md uppercase tracking-wider font-mono">
                        LIMITED SEATS
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* PROMOTIONAL DISCOUNTED COURSES */}
            <section className="py-20 bg-background" id="promo-discounted-courses">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
                  <span className="text-primary font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 bg-surface-container rounded-full font-mono inline-block">
                    {lang === 'en' ? 'EXCLUSIVE OFFERS' : 'ការផ្តល់ជូនផ្តាច់មុខ'}
                  </span>
                  <h2 className="text-3xl font-black text-primary font-display tracking-tight leading-tight">
                    {t.discountTitle}
                  </h2>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">
                    {t.discountSubtitle}
                  </p>
                </div>

                {/* Promo Grid cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PROMO_COURSES.map((course) => (
                    <div 
                      key={course.id}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/20 transform hover:-translate-y-1 transition-all duration-300 flex flex-col group relative"
                    >
                      {/* Percent Off Ribbon */}
                      <div className="absolute top-4 left-4 z-20 bg-red-500 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-xl shadow border border-red-400 font-mono">
                        -{course.discountPercent}% {t.offLabel}
                      </div>

                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 shrink-0">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 z-10" />
                        
                        {/* Pricing Badge */}
                        <div className="absolute bottom-4 right-4 z-20 bg-white px-3 py-2 rounded-2xl shadow-xl flex items-center space-x-2">
                          <span className="text-xs text-gray-400 line-through font-sans">${course.originalPrice?.toFixed(2)}</span>
                          <span className="text-sm font-black text-red-500 font-display">${course.price.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <span className="text-[10px] font-extrabold text-primary/60 tracking-wider uppercase font-mono block">
                            {course.category === 'Cybersecurity' ? t.cyberBadge : t.dataBadge}
                          </span>
                          <h3 className="text-base font-extrabold text-primary leading-snug font-display line-clamp-1">
                            {lang === 'en' ? course.title : course.khTitle}
                          </h3>
                          <p className="text-xs text-gray-500 font-sans leading-relaxed line-clamp-2">
                            {lang === 'en' ? course.description : course.khDescription}
                          </p>
                        </div>

                        {/* Metadata row */}
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-sans font-semibold">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-4 h-4 text-primary/40 shrink-0" />
                            <span>{course.duration} {t.hoursCount}</span>
                          </div>
                          <span className="bg-surface-container text-primary text-[9px] px-2.5 py-1 rounded-full border">
                            {lang === 'en' ? course.level : course.khLevel}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(course)}
                          className="w-full bg-accent-yellow text-primary font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 shadow cursor-pointer flex items-center justify-center space-x-2"
                        >
                          <Plus className="w-4 h-4 shrink-0" />
                          <span>{t.enrollBtn}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PROMOTION REGISTRATION CONTAINER */}
                <div className="mt-20 max-w-4xl mx-auto">
                  <RegistrationForm lang={lang} />
                </div>

              </div>
            </section>

          </div>
        )}

        {/* TAB 4: ABOUT US PAGE */}
        {currentTab === 'about' && (
          <div className="space-y-0" id="tab-about-content">
            
            {/* HERO SECTION */}
            <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#23278a] opacity-95" />
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
                <span className="bg-accent-yellow text-primary font-black text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full font-mono inline-block">
                  {lang === 'en' ? 'ESTABLISHED 2014' : 'បង្កើតឡើងក្នុងឆ្នាំ ២០១៤'}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display leading-tight">
                  {t.empowerTitle}
                </h1>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl mx-auto font-sans">
                  {t.empowerDesc}
                </p>
              </div>
            </section>

            {/* HORIZONTAL BENTO STATS */}
            <section className="py-10 bg-surface-container">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { count: '5,000+', label: t.graduatedStudents, sub: 'Bridging the tech gap' },
                    { count: '95%', label: t.jobPlacement, sub: 'Hired within 3 months' },
                    { count: '120+', label: t.partnerCompanies, sub: 'Active hiring agreements' },
                    { count: '10+', label: t.yearsOfExcellence, sub: 'Legacy of quality training' }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow hover:border-primary/20 transition-all duration-300"
                    >
                      <span className="text-2xl sm:text-3xl font-black text-primary font-display block">
                        {item.count}
                      </span>
                      <span className="text-xs font-bold text-gray-700 font-sans block mt-1 leading-normal">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-gray-400 font-sans block mt-0.5">
                        {item.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* LEGACY HISTORY SECTION */}
            <section className="py-20 bg-background" id="about-legacy">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left content */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <span className="text-primary font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 bg-surface-container rounded-full font-mono inline-block">
                      {t.ourLegacy}
                    </span>
                    <h2 className="text-3xl font-black text-primary font-display tracking-tight leading-tight">
                      {t.decadeTitle}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {t.decadeDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-700 font-sans font-medium">
                        <Check className="w-5 h-5 text-accent-yellow shrink-0 font-extrabold" />
                        <span>{t.curriculumTitle}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 font-sans font-medium">
                        <Check className="w-5 h-5 text-accent-yellow shrink-0 font-extrabold" />
                        <span>{t.handsOnLabel}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 font-sans font-medium">
                        <Check className="w-5 h-5 text-accent-yellow shrink-0 font-extrabold" />
                        <span>{lang === 'en' ? 'Enterprise-Grade Equipment' : 'មន្ទីរពិសោធន៍កុំព្យូទ័រទំនើប'}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 font-sans font-medium">
                        <Check className="w-5 h-5 text-accent-yellow shrink-0 font-extrabold" />
                        <span>{lang === 'en' ? 'Official Certifications' : 'វិញ្ញាបនបត្រផ្លូវការ'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU6UbAaa39MV6VClzc3yXrxpq32mHgDA7sQMUB7X76nXbi9-7224zeo9e9if_sIfsX2Fn13Yoj8GyRpmrmPl7dT498z6ErxFU9DlcwNDiOLcf3xhrWs25ax91iG0ISnOSyEI1FJpxYjklemzGG4kvs7r0Y3blL-6hCvEgf-MUiqUftXH9EX-cg_M4Ks87JHcAJRjfyKYzMmfgNHNAwxUib0Jod_9pVDmM_AKtFlue3yIE10YNS-b2eimhUzHWKdnUB5IJPdMOMqHdD"
                        alt="ETEC Lab Legacy"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* LED BY VETERANS SECTION */}
            <section className="py-20 bg-surface-container-low border-t border-b border-gray-100" id="about-team">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
                  <span className="text-primary font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 bg-surface-container rounded-full font-mono inline-block">
                    {lang === 'en' ? 'OUR FACULTY' : 'សាស្ត្រាចារ្យជំនាញ'}
                  </span>
                  <h2 className="text-3xl font-black text-primary font-display tracking-tight leading-tight">
                    {t.veteransTitle}
                  </h2>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">
                    {t.veteransDesc}
                  </p>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {TEAM_MEMBERS.map((member, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:border-primary/10 transform hover:-translate-y-1 transition-all duration-300 text-center flex flex-col group"
                    >
                      {/* Image frame */}
                      <div className="relative aspect-square overflow-hidden bg-gray-50 border-b shrink-0">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      {/* Profile info */}
                      <div className="p-5 flex-1 flex flex-col justify-center space-y-1">
                        <h3 className="text-base font-bold text-primary font-display truncate">
                          {member.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium font-sans">
                          {lang === 'en' ? member.role : member.khRole}
                        </p>
                        <span className="text-[10px] text-gray-400 font-sans block pt-2">
                          ETEC Academic Council
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* PORTFOLIO ASYMMETRIC GRID GALLERY */}
            <section className="py-20 bg-background" id="about-portfolio">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
                  <span className="text-primary font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 bg-surface-container rounded-full font-mono inline-block">
                    {lang === 'en' ? 'PRACTICAL OUTCOMES' : 'លទ្ធផលជាក់ស្តែង'}
                  </span>
                  <h2 className="text-3xl font-black text-primary font-display tracking-tight leading-tight">
                    {t.successTitle}
                  </h2>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">
                    {t.successDesc}
                  </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="about-mosaic">
                  {STUDENT_PROJECTS.map((project, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative aspect-video overflow-hidden bg-gray-50">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 z-10" />
                        
                        {/* Interactive Text Bottom Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                          <span className="text-[10px] font-black tracking-widest text-accent-yellow uppercase font-mono block mb-1">
                            {lang === 'en' ? 'Verified Student Output' : 'ស្នាដៃសិស្សានុសិស្ស'}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white font-display line-clamp-1">
                            {lang === 'en' ? project.title : project.khTitle}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* GUARANTEED INTERNSHIP PROGRAM SECTION */}
            <section className="py-16 bg-gradient-to-br from-primary-container to-primary text-white overflow-hidden" id="internship-banner">
              <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
                <span className="bg-accent-yellow text-primary font-black text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full inline-block font-mono shadow-md">
                  💼 {t.internTitle}
                </span>

                <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight">
                  {lang === 'en' ? '80% Interns Secured Permanent Roles' : 'និស្សិតចុះកម្មសិក្សានៅក្រុមហ៊ុនធំៗ'}
                </h2>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
                  {t.internDesc}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button 
                    onClick={() => {
                      triggerToast(
                        lang === 'en' 
                          ? 'Application Submitted! Our career office will review your student record.'
                          : 'បានផ្ញើពាក្យស្នើសុំ! ការិយាល័យការងាររបស់ ETEC នឹងពិនិត្យលើប្រវត្តិសិក្សារបស់អ្នក។'
                      );
                    }}
                    className="bg-accent-yellow text-primary font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:bg-white transition-all duration-300 cursor-pointer"
                  >
                    {t.applyInternBtn}
                  </button>
                  <button 
                    onClick={() => {
                      triggerToast(
                        lang === 'en'
                          ? 'Our current partner enterprise roster is loaded dynamically in your dashboard!'
                          : 'បញ្ជីឈ្មោះក្រុមហ៊ុនដៃគូបច្ចុប្បន្នត្រូវបានបង្ហាញក្នុងផ្ទាំងសិក្សារបស់អ្នក!'
                      );
                    }}
                    className="bg-white/10 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider border border-white/25 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    {t.viewPartnersBtn}
                  </button>
                </div>
              </div>
            </section>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <Footer setCurrentTab={setCurrentTab} lang={lang} />

      {/* ENROLLMENT CART OVERLAY SLIDER */}
      <EnrollmentCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        lang={lang}
      />

    </div>
  );
}
