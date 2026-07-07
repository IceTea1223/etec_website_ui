import React from 'react';
import { TRANSLATIONS } from '../types';
import { PhoneCall, CheckCircle, Award, Users } from 'lucide-react';

interface CallbackFormProps {
  lang: 'en' | 'km';
}

export const CallbackForm: React.FC<CallbackFormProps> = ({ lang }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Save call requests locally
      const requests = JSON.parse(localStorage.getItem('etec_callbacks') || '[]');
      const newReq = {
        id: Date.now(),
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        date: new Date().toLocaleString()
      };
      localStorage.setItem('etec_callbacks', JSON.stringify([...requests, newReq]));

      // Clear form
      setFormData({ fullName: '', email: '', phone: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-container to-primary text-white overflow-hidden relative" id="callback-section">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: text content & stats badges */}
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-accent-yellow/20 text-accent-yellow font-extrabold text-[11px] tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-accent-yellow/30 font-mono inline-block">
              {t.needGuidance}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
              {t.ctaTitle}
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {t.ctaDesc}
            </p>

            {/* Micro bento highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3.5 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Users className="w-6 h-6 text-accent-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">95% {t.jobPlacement}</h4>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    {lang === 'en' 
                      ? 'Graduates hired by partners within 90 days.' 
                      : 'សិស្សទទួលបានការងារបន្ទាប់ពីបញ្ចប់ ៩០ ថ្ងៃ។'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Award className="w-6 h-6 text-accent-yellow shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">120+ {t.industryPartners}</h4>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    {lang === 'en' 
                      ? 'Local and regional technology giants.' 
                      : 'ក្រុមហ៊ុនបច្ចេកវិទ្យាក្នុងស្រុក និងតំបន់។'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback form card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl relative border border-white/20">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4" id="callback-success">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-primary font-display">
                    {lang === 'en' ? 'Request Submitted!' : 'ទទួលបានព័ត៌មានរួចរាល់!'}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed font-sans">
                    {lang === 'en'
                      ? 'An academic coordinator from ETEC Center will call you shortly to discuss your learning goals.'
                      : 'បុគ្គលិកប្រឹក្សាវគ្គសិក្សារបស់ ETEC នឹងទាក់ទងមកលោកអ្នកវិញក្នុងពេលឆាប់ៗនេះ។'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="callback-form">
                  <div className="text-center pb-2">
                    <h3 className="text-lg font-bold text-primary font-display flex items-center justify-center gap-2">
                      <PhoneCall className="w-5 h-5 text-accent-yellow animate-pulse" />
                      {lang === 'en' ? 'Request a Consultation' : 'ស្នើសុំការប្រឹក្សាវគ្គសិក្សា'}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-sans">
                      {lang === 'en' ? 'Get free guidance on selecting the ideal IT path.' : 'ទទួលបានការណែនាំឥតគិតថ្លៃដើម្បីជ្រើសរើសវគ្គសិក្សា។'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.fullNamePlace}
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.emailPlace}
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.phonePlace}
                        className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent-yellow text-primary font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:bg-primary hover:text-white transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {loading 
                      ? (lang === 'en' ? 'Submitting...' : 'កំពុងបញ្ជូន...') 
                      : t.requestCallbackBtn}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
