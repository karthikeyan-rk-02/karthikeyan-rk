import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  User,
  Tag,
  Github,
  Linkedin,
  Twitter,
  ArrowRight
} from 'lucide-react';
import { ContactFormData, FormValidationErrors, validateContactForm } from '../utils/telemetryUtils';

interface ContactSectionProps {
  currentTime: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentTime }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate telemetry packet transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 800);
  };

  return (
    <section className="scroll-mt-20 space-y-6" id="contact-section" aria-label="Contact Section">
      {/* Section Title & Telemetry Header */}
      <div className="pb-3 border-b border-[#3b494b]/30">
        <span className="font-mono text-[10px] text-[#00f0ff] tracking-widest font-semibold">
          // 04. CONTACT ME
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#dae2f8] mt-1">
          Let's build something <span className="text-[#00f0ff]">amazing together.</span>
        </h2>
        <p className="text-[14px] text-[#b9cacb] max-w-2xl mt-1">
          Have an architecture project in mind, an engineering opening, or just want to discuss modern frontend protocols? Initiate dispatch below.
        </p>
      </div>

      {/* Quick Comms Badges Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Badge 1: Email */}
        <div className="p-4 rounded-lg bg-[#060e1d]/80 border border-[#3b494b]/30 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-[#00f0ff]" />
            <div>
              <span className="font-mono text-[10px] text-[#849495] block uppercase">EMAIL</span>
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-[#dae2f8] select-all">
                karthikeyan.dev@gmail.com
              </span>
            </div>
          </div>
          <button
            onClick={() => handleCopy('karthikeyan.dev@gmail.com', 'email')}
            className="text-[#849495] hover:text-[#00f0ff] p-1.5 transition-colors cursor-pointer"
            title="Copy Email"
            aria-label="Copy Email to Clipboard"
          >
            {copiedType === 'email' ? <Check className="w-4 h-4 text-[#4edea3]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Badge 2: Phone */}
        <div className="p-4 rounded-lg bg-[#060e1d]/80 border border-[#3b494b]/30 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-[#7bd0ff]" />
            <div>
              <span className="font-mono text-[10px] text-[#849495] block uppercase">PHONE</span>
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-[#dae2f8] select-all">
                +91 12345 67890
              </span>
            </div>
          </div>
          <button
            onClick={() => handleCopy('+91 12345 67890', 'phone')}
            className="text-[#849495] hover:text-[#00f0ff] p-1.5 transition-colors cursor-pointer"
            title="Copy Phone"
            aria-label="Copy Phone Number"
          >
            {copiedType === 'phone' ? <Check className="w-4 h-4 text-[#4edea3]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Badge 3: Location */}
        <div className="p-4 rounded-lg bg-[#060e1d]/80 border border-[#3b494b]/30 backdrop-blur-xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-[#6ffbbe]" />
            <div>
              <span className="font-mono text-[10px] text-[#849495] block uppercase">LOCATION</span>
              <span className="font-mono text-[11px] sm:text-[12px] font-semibold text-[#dae2f8]">
                Remote / Worldwide
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] text-[#4edea3] font-bold">ONLINE</span>
        </div>
      </div>

      {/* Dispatch Split: Interactive Glass Form (Left) & Availability Radar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Dispatch Message Form (Col 7) */}
        <div className="lg:col-span-7 bg-[#060e1d]/80 border border-[#3b494b]/30 rounded-lg p-6 lg:p-8 backdrop-blur-xl relative reticle-corner space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-[#3b494b]/20">
            <span className="font-mono text-[11px] font-bold text-[#00dbe9] tracking-wider">
              // SEND A MESSAGE [DISPATCH CONSOLE]
            </span>
            <span className="font-mono text-[10px] text-[#849495]">ENC: SHA-256</span>
          </div>

          {submitSuccess && (
            <div className="p-3 rounded border border-[#4edea3] bg-[#65f2b5]/10 text-[#6ffbbe] font-mono text-xs flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>&gt; DISPATCH TRANSMITTED: Message queued to Karthikeyan's console. Response ETA &lt; 24h.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Input */}
              <div className="space-y-1">
                <label className="font-mono text-[10px] text-[#849495] block uppercase">
                  Your Name <span className="text-[#00f0ff]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-2.5 text-[#849495]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full bg-[#17202f]/40 border rounded pl-10 pr-3 py-2 font-mono text-[11px] text-[#dae2f8] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] placeholder:text-[#849495]/60 outline-none transition-all ${
                      errors.name ? 'border-[#ffb4ab]' : 'border-[#3b494b]/40'
                    }`}
                  />
                </div>
                {errors.name && <p className="font-mono text-[10px] text-[#ffb4ab]">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="font-mono text-[10px] text-[#849495] block uppercase">
                  Your Email <span className="text-[#00f0ff]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-2.5 text-[#849495]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full bg-[#17202f]/40 border rounded pl-10 pr-3 py-2 font-mono text-[11px] text-[#dae2f8] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] placeholder:text-[#849495]/60 outline-none transition-all ${
                      errors.email ? 'border-[#ffb4ab]' : 'border-[#3b494b]/40'
                    }`}
                  />
                </div>
                {errors.email && <p className="font-mono text-[10px] text-[#ffb4ab]">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <label className="font-mono text-[10px] text-[#849495] block uppercase">
                Subject <span className="text-[#00f0ff]">*</span>
              </label>
              <div className="relative">
                <Tag className="w-4 h-4 absolute left-3 top-2.5 text-[#849495]" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Tech Architecture"
                  className={`w-full bg-[#17202f]/40 border rounded pl-10 pr-3 py-2 font-mono text-[11px] text-[#dae2f8] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] placeholder:text-[#849495]/60 outline-none transition-all ${
                    errors.subject ? 'border-[#ffb4ab]' : 'border-[#3b494b]/40'
                  }`}
                />
              </div>
              {errors.subject && <p className="font-mono text-[10px] text-[#ffb4ab]">{errors.subject}</p>}
            </div>

            {/* Message Area */}
            <div className="space-y-1">
              <label className="font-mono text-[10px] text-[#849495] block uppercase">
                Your Message <span className="text-[#00f0ff]">*</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Detail your project requirements, scope, or message..."
                  className={`w-full bg-[#17202f]/40 border rounded p-3 font-mono text-[11px] text-[#dae2f8] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] placeholder:text-[#849495]/60 outline-none transition-all resize-none ${
                    errors.message ? 'border-[#ffb4ab]' : 'border-[#3b494b]/40'
                  }`}
                ></textarea>
              </div>
              {errors.message && <p className="font-mono text-[10px] text-[#ffb4ab]">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 rounded bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] font-mono text-[13px] font-bold tracking-wider hover:bg-[#00f0ff] hover:text-[#060e1d] hover:shadow-[0_0_20px_rgba(0,240,255,0.7)] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : '> SEND MESSAGE'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Right: Telemetry Radar & Connect Hub (Col 5) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Radar Availability Widget */}
          <div className="bg-[#060e1d]/80 border border-[#00f0ff]/30 rounded-lg p-6 backdrop-blur-xl relative reticle-corner cyan-glow">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3b494b]/20">
              <span className="font-mono text-[11px] font-bold text-[#00f0ff] tracking-wider">
                // AVAILABILITY RADAR
              </span>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] pulse-dot"></span>
                <span className="font-mono text-[10px] text-[#6ffbbe] font-bold">LIVE TELEMETRY</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Animated Radar Ring Scope */}
              <div className="relative w-36 h-36 rounded-full border border-[#00f0ff]/40 flex items-center justify-center bg-[#060e1d]/90 overflow-hidden shrink-0">
                {/* Concentric range rings */}
                <div className="absolute w-24 h-24 rounded-full border border-[#00f0ff]/20"></div>
                <div className="absolute w-12 h-12 rounded-full border border-[#00f0ff]/30"></div>
                {/* Crosshairs */}
                <div className="absolute w-full h-[1px] bg-[#00f0ff]/20"></div>
                <div className="absolute h-full w-[1px] bg-[#00f0ff]/20"></div>
                {/* Sweep arm */}
                <div className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left bg-gradient-to-tr from-transparent via-[#00f0ff]/10 to-[#00f0ff]/40 radar-sweep"></div>
                {/* Target blip */}
                <div className="absolute top-8 right-10 w-2.5 h-2.5 rounded-full bg-[#00f0ff] pulse-dot"></div>
                {/* Center Beacon */}
                <div className="w-2 h-2 rounded-full bg-[#4edea3]"></div>
              </div>

              {/* Telemetry Metadata */}
              <div className="space-y-2 text-center sm:text-left">
                <div className="font-mono text-[11px] text-[#6ffbbe] font-bold">● AVAILABLE FOR WORK</div>
                <p className="text-[12px] text-[#b9cacb] leading-snug">
                  I'm currently accepting new freelance architectures & full-time lead opportunities.
                </p>
                <div className="pt-1 text-[#849495] font-mono text-[10px] space-y-0.5">
                  <div>
                    LOCAL TIME: <span className="text-[#00dbe9]">{currentTime}</span>
                  </div>
                  <div>
                    RESPONSE TIME: <span className="text-[#dae2f8]">Usually within 24 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connect With Me Social Grid Cards */}
          <div className="bg-[#060e1d]/80 border border-[#3b494b]/30 rounded-lg p-5 backdrop-blur-xl relative reticle-corner space-y-3">
            <span className="font-mono text-[11px] font-bold text-[#00dbe9] tracking-wider block">
              // CONNECT WITH ME
            </span>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded bg-[#17202f]/30 border border-[#3b494b]/30 hover:border-[#00f0ff] hover:bg-[#222a3a]/40 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-[#00f0ff]" />
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#dae2f8] block">GitHub</span>
                  <span className="font-mono text-[9px] text-[#849495]">Check out my code and repos</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#849495] group-hover:text-[#00f0ff] transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded bg-[#17202f]/30 border border-[#3b494b]/30 hover:border-[#00f0ff] hover:bg-[#222a3a]/40 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-[#7bd0ff]" />
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#dae2f8] block">LinkedIn</span>
                  <span className="font-mono text-[9px] text-[#849495]">Let's connect professionally</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#849495] group-hover:text-[#00f0ff] transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded bg-[#17202f]/30 border border-[#3b494b]/30 hover:border-[#00f0ff] hover:bg-[#222a3a]/40 transition-all group"
            >
              <div className="flex items-center space-x-3">
                <Twitter className="w-5 h-5 text-[#6ffbbe]" />
                <div>
                  <span className="font-mono text-[11px] font-semibold text-[#dae2f8] block">Twitter / X</span>
                  <span className="font-mono text-[9px] text-[#849495]">Follow me for tech telemetry</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#849495] group-hover:text-[#00f0ff] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
