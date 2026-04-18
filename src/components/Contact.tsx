import { MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Strategic Advisory', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/jaysaner2006@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: 'Strategic Advisory', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("There was an issue submitting your inquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending the message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="contact"
      style={{ background: 'linear-gradient(160deg, #fdfcfb 0%, #f4f1eb 100%)' }}
    >
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      {/* Orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(179,139,45,0.06), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label justify-center mb-5">Direct Protocol</div>
          <h2
            className="tracking-tighter text-primary-navy mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Establish Global{' '}
            <span className="italic font-normal text-gold">Connection</span>
          </h2>
          <p className="text-slate-500 text-lg font-light max-w-lg mx-auto leading-relaxed">
            Inquire regarding board appointments, speaking engagements, or strategic consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16">
          {/* ── Left Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Location card */}
            <div className="bg-white rounded-sm p-8 card-shadow border border-slate-50">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-sm bg-primary-navy/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary-navy" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-2">
                    Primary Hubs
                  </p>
                  <p className="text-primary-navy font-medium leading-relaxed">
                    New York · Mumbai · Dubai · Tokyo
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn card */}
            <a
              href="https://www.linkedin.com/in/makjawadekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-sm p-8 card-shadow border border-slate-50 group hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-sm bg-[#0077b5]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077b5]/20 transition-colors">
                  <Linkedin size={18} className="text-[#0077b5]" />
                </div>
                <div>
                  <p className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-2">
                    Professional Network
                  </p>
                  <p className="text-primary-navy font-medium group-hover:text-gold transition-colors">
                    Connect on LinkedIn →
                  </p>
                </div>
              </div>
            </a>

            {/* What to expect */}
            <div className="bg-primary-navy rounded-sm p-8">
              <h4
                className="text-white mb-5 italic"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}
              >
                Inquiry Scope
              </h4>
              <ul className="space-y-3">
                {[
                  'Strategic Advisory Consulting',
                  'Board & Governance Membership',
                  'International Keynote Speaking',
                  'Pharmaceutical Partnership',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-gold flex-shrink-0" />
                    <span className="text-white/60 text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Right Form Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-sm p-10 executive-shadow border border-slate-50">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3
                    className="text-primary-navy text-2xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Inquiry Received
                  </h3>
                  <p className="text-slate-500 text-sm font-light">
                    Thank you for reaching out. Dr. Jawadekar's team will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-7" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-gold transition-colors">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Johnathan Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-gold transition-colors">
                        Professional Email
                      </label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="executive@org.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-gold transition-colors">
                      Subject of Inquiry
                    </label>
                    <select
                      className="form-input appearance-none cursor-pointer"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      <option>Strategic Advisory</option>
                      <option>Board Membership</option>
                      <option>Speaking Engagement</option>
                      <option>Pharmaceutical Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 group-focus-within:text-gold transition-colors">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="form-input resize-none"
                      placeholder="Outline your proposal or inquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center !py-4 !text-[11px] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-3">
                      {submitting ? 'Transmitting...' : 'Transmit Inquiry'}
                      {!submitting && <Send size={13} />}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
