import React from 'react';
import { X, Trash2, CheckCircle2, GraduationCap, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { Course, TRANSLATIONS } from '../types';

interface EnrollmentCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Course[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  lang: 'en' | 'km';
}

export const EnrollmentCart: React.FC<EnrollmentCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  lang
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const t = TRANSLATIONS[lang];

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save registrations to local storage for a real dashboard feel!
      const currentRegistrations = JSON.parse(localStorage.getItem('etec_registrations') || '[]');
      const newRegistration = {
        id: Math.random().toString(36).substring(2, 9),
        studentName: formData.name,
        email: formData.email,
        phone: formData.phone,
        courses: cartItems.map(item => item.title),
        total: totalPrice,
        date: new Date().toLocaleDateString(),
        status: 'Approved'
      };
      localStorage.setItem('etec_registrations', JSON.stringify([...currentRegistrations, newRegistration]));

      // Clear form & cart
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => {
        setIsSuccess(false);
        onClearCart();
        onClose();
      }, 4000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="enrollment-cart-overlay">
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-all duration-300">
          
          {/* Header */}
          <div className="px-6 py-5 bg-primary text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-accent-yellow" />
              <h2 className="text-lg font-bold font-display tracking-wide">{t.cartTitle}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 space-y-4" id="checkout-success">
                <div className="bg-green-100 p-4 rounded-full text-green-600 animate-bounce">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-display">
                  {lang === 'en' ? 'Checkout Completed!' : 'ការចុះឈ្មោះទទួលបានជោគជ័យ!'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs font-sans">
                  {t.cartSuccessToast}
                </p>
                <div className="w-full bg-surface-container p-4 rounded-xl text-left border border-outline-variant">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary/70 block mb-2 font-mono">
                    {lang === 'en' ? 'Registration Summary' : 'សេចក្តីសង្ខេបនៃការចុះឈ្មោះ'}
                  </span>
                  <div className="text-xs text-gray-700 space-y-1 font-sans">
                    <p><strong>{lang === 'en' ? 'Receipt ID:' : 'លេខសម្គាល់៖'}</strong> #ETEC-{Math.floor(1000 + Math.random() * 9000)}</p>
                    <p><strong>{lang === 'en' ? 'Total Paid:' : 'តម្លៃសរុប៖'}</strong> ${totalPrice.toFixed(2)}</p>
                    <p><strong>{lang === 'en' ? 'Status:' : 'ស្ថានភាព៖'}</strong> {lang === 'en' ? 'Active Digital Access Granted' : 'បានអនុម័ត'}</p>
                  </div>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4" id="checkout-empty">
                <div className="p-4 bg-surface-container rounded-full text-primary/30">
                  <GraduationCap className="w-16 h-16" />
                </div>
                <p className="text-gray-500 font-semibold text-sm leading-relaxed max-w-xs font-sans">
                  {t.cartEmpty}
                </p>
                <button
                  onClick={onClose}
                  className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl text-xs tracking-wider uppercase shadow hover:bg-secondary cursor-pointer transition-colors"
                >
                  {lang === 'en' ? 'Explore Courses' : 'ស្វែងរកវគ្គសិក្សា'}
                </button>
              </div>
            ) : (
              <div className="space-y-6" id="checkout-form-container">
                {/* List Items */}
                <div className="space-y-3">
                  <span className="text-xs font-extrabold text-primary/60 tracking-wider uppercase font-mono block mb-1">
                    {lang === 'en' ? 'Selected programs' : 'កម្មវិធីសិក្សាដែលបានជ្រើសរើស'} ({cartItems.length})
                  </span>
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center space-x-3 p-3 rounded-xl bg-surface-container border border-outline-variant hover:border-primary/30 transition-all duration-300"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-12 h-12 rounded-lg object-cover bg-gray-100 border shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-primary truncate font-display">
                          {lang === 'en' ? item.title : item.khTitle}
                        </h4>
                        <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-sans mt-0.5">
                          <span>{item.duration}h {t.hoursCount}</span>
                          <span>•</span>
                          <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        title="Remove Course"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="pt-4 border-t border-gray-100 space-y-4">
                  <span className="text-xs font-extrabold text-primary/60 tracking-wider uppercase font-mono block mb-1">
                    {lang === 'en' ? 'Student Registration Details' : 'ព័ត៌មានលម្អិតរបស់សិស្ស'}
                  </span>

                  <div className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.fullNamePlace}
                        className="w-full pl-10 pr-4 py-3 bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.emailPlace}
                        className="w-full pl-10 pr-4 py-3 bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.phonePlace}
                        className="w-full pl-10 pr-4 py-3 bg-surface-container border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
                      />
                    </div>
                  </div>

                  {/* Guaranteed Badge */}
                  <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-primary-fixed/50 border border-primary-fixed text-primary text-xs font-sans font-medium">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span>
                      {lang === 'en' 
                        ? 'Your enrollment secures scholarship prices and lifetime access!'
                        : 'ការចុះឈ្មោះរបស់អ្នកធានានូវតម្លៃអាហារូបករណ៍ និងការចូលប្រើប្រាស់ពេញមួយជីវិត!'}
                    </span>
                  </div>

                  {/* Pricing and Button */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-gray-600 font-display">{t.cartTotal}</span>
                      <span className="text-xl font-extrabold text-primary">${totalPrice.toFixed(2)}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent-yellow text-primary font-extrabold py-3.5 rounded-xl text-sm tracking-wide shadow-md hover:bg-primary hover:text-white transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting 
                        ? (lang === 'en' ? 'Processing Enrollment...' : 'កំពុងបញ្ជាក់ការចុះឈ្មោះ...') 
                        : t.cartCheckout}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
