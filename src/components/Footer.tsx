import { motion } from 'motion/react';
import { Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Career', href: '#career' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Roles', href: '#roles' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: '#020b18' }}>
      {/* Top line */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(179,139,45,0.5), transparent)' }}
      />

      {/* Dots overlay */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Main footer body */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary-navy border border-gold/20 flex items-center justify-center rounded-sm">
                <span className="text-gold font-serif font-bold text-sm">MJ</span>
              </div>
              <span
                className="text-white text-base font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dr. Makarand Jawadekar
              </span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed font-light max-w-xs">
              Senior Pharmaceutical Executive. Former Pfizer VP. Global Strategic Advisor.
              Board Member. International Speaker.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4
              className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-6"
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + Scroll Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right"
          >
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-white/30 mb-6">
              Connect
            </h4>
            <a
              href="https://www.linkedin.com/in/makjawadekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-300 text-sm mb-8"
            >
              <Linkedin size={15} />
              LinkedIn Profile
            </a>

            <div className="md:flex md:justify-end">
              <button
                onClick={scrollTop}
                className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-white/30 hover:text-gold transition-colors"
              >
                Back to Top
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center hover:border-gold transition-colors">
                  <ArrowUp size={12} />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} Dr. Makarand Jawadekar. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Executive Bio'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/20 hover:text-white/50 text-[10px] font-mono tracking-widest uppercase transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
