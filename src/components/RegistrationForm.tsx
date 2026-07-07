import React from 'react';
import { TRANSLATIONS, PROMO_COURSES } from '../types';
import { Sparkles, CheckCircle2, Award, PhoneCall } from 'lucide-react';

interface RegistrationFormProps {
  lang: 'en' | 'km';
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ lang }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    agree: false
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const t = TRANSLATIONS[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save registration locally
      const registrations = JSON.parse(localStorage.getItem('etec_registrations') || '[]');
      const courseObj = PROMO_COURSES.find(c => c.id === formData.program) || PROMO_COURSES[0];
      const newReg = {
        id: Math.random().toString(36).substring(2, 9),
        studentName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        courses: [courseObj.title],
        total: courseObj.price,
        date: new Date().toLocaleDateString(),
        status: 'Approved'
      };
      localStorage.setItem('etec_registrations', JSON.stringify([...registrations, newReg]));

      // Clear state
      setFormData({ fullName: '', email: '', phone: '', program: '', agree: false });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden" id="registration-promo-section">
      <div className="absolute top-0 right-0 bg-accent-yellow text-primary font-extrabold text-[10px] tracking-widest uppercase px-5 py-2 rounded-bl-2xl shadow-sm z-10 font-mono">
        {t.enrolmentOpen}
      </div>

      {isSubmitted ? (
        <div className="py-16 text-center space-y-4" id="promo-reg-success">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-primary font-display">
            {lang === 'en' ? 'Seat Reserved Successfully!' : 'កក់កន្លែងសិក្សាបានជោគជ័យ!'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed font-sans">
            {lang === 'en'
              ? 'Congratulations! Your promotional discount has been locked in. An ETEC advisor will call you within 24 hours.'
              : 'សូមអបអរសាទរ! តម្លៃបញ្ចុះពិសេសរបស់អ្នកត្រូវបានរក្សាទុក។ បុគ្គលិករបស់ ETEC នឹងទាក់ទងទៅលោកអ្នកក្នុងរយៈពេល ២៤ ម៉ោង។'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" id="promo-reg-form">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-primary font-display flex items-center gap-2">
              <Sparkles className="w-5.5 h-5.5 text-accent-yellow fill-accent-yellow" />
              {t.registrationTitle}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-sans">
              {t.registrationDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2 font-mono">
                {t.fullNamePlace} *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Sok Dara"
                className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2 font-mono">
                {t.emailPlace} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. sok.dara@gmail.com"
                className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2 font-mono">
                {t.phonePlace} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 012345678"
                className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-2 font-mono">
                {t.selectedProgramLabel} *
              </label>
              <select
                required
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none rounded-xl text-xs font-sans text-gray-800 transition-all cursor-pointer"
              >
                <option value="">{t.selectACoursePlace}</option>
                {PROMO_COURSES.map((course) => (
                  <option key={course.id} value={course.id}>
                    {lang === 'en' ? course.title : course.khTitle} (${course.price.toFixed(2)})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Core Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start space-x-3 p-3 bg-surface-container rounded-xl border border-outline-variant/50">
              <PhoneCall className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-primary font-display">{t.mentorTitle}</h4>
                <p className="text-[10px] text-gray-500 font-sans mt-0.5">{t.mentorDesc}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-surface-container rounded-xl border border-outline-variant/50">
              <Award className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-primary font-display">{t.careerTitle}</h4>
                <p className="text-[10px] text-gray-500 font-sans mt-0.5">{t.careerDesc}</p>
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start space-x-3 pt-1">
            <input
              type="checkbox"
              id="agree-checkbox"
              required
              checked={formData.agree}
              onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
            />
            <label htmlFor="agree-checkbox" className="text-[11px] text-gray-500 leading-normal font-sans cursor-pointer">
              {t.termsLabel}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.agree}
            className="w-full bg-accent-yellow text-primary font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:bg-primary hover:text-white transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting 
              ? (lang === 'en' ? 'Securing your promo...' : 'កំពុងរក្សាតម្លៃពិសេស...') 
              : t.submitRegistrationBtn}
          </button>
        </form>
      )}
    </div>
  );
};
