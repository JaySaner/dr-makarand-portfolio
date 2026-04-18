import { motion } from 'motion/react';
import { ArrowDown, Award, Globe, BookOpen } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const stats = [
    { icon: Award, value: '28+', label: 'Years at Pfizer' },
    { icon: Globe, value: '150+', label: 'Global Talks' },
    { icon: BookOpen, value: '50+', label: 'Publications' },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fdfcfb 0%, #f4f1eb 60%, #eef0f8 100%)' }}
    >
      {/* Background Orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          top: '-15%',
          right: '-10%',
          background: 'radial-gradient(circle, #b38b2d, transparent 70%)',
          opacity: 0.07,
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          bottom: '5%',
          left: '-8%',
          background: 'radial-gradient(circle, #001b3d, transparent 70%)',
          opacity: 0.06,
          animationDelay: '4s',
        }}
      />

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-28 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center w-full">

          {/* ── Left Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 z-10 pt-20 lg:pt-0"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="section-label mb-8">
              Pfizer Veteran &amp; Global Advisor
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="mb-8 leading-[0.88] tracking-tighter select-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
                fontWeight: 700,
                color: '#001b3d',
              }}
            >
              Dr. Makarand
              <br />
              <span className="text-shimmer italic font-normal">Jawadekar.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 leading-relaxed mb-12 max-w-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              Transforming pharmaceutical R&amp;D through nearly three decades of
              leadership and multi-billion dollar strategic collaborations.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center mb-16">
              <a href="#about" className="btn-primary">
                <span>Executive Brief</span>
              </a>
              <a href="#contact" className="btn-secondary">
                Direct Protocol →
              </a>
            </motion.div>

            {/* Stat Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-slate-100 px-5 py-3 rounded-sm card-shadow"
                >
                  <Icon size={14} className="text-gold flex-shrink-0" />
                  <span
                    className="font-bold text-primary-navy text-sm"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {value}
                  </span>
                  <span className="text-slate-400 text-xs">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Image ── */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              {/* Gold accent rectangle */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/20 rounded-sm"
                style={{ zIndex: 0 }}
              />

              <div
                className="relative overflow-hidden rounded-sm executive-shadow"
                style={{
                  aspectRatio: '4/5',
                  zIndex: 1,
                }}
              >
                <img
                  alt="Dr. Makarand Jawadekar"
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: 'saturate(0.85) contrast(1.05)',
                    transition: 'filter 1s ease, transform 8s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.filter = 'saturate(1) contrast(1)';
                    (e.target as HTMLImageElement).style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.filter = 'saturate(0.85) contrast(1.05)';
                    (e.target as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugoKjV4wOFp8gKmFFZLW5qLwJdPXxKbYbdXlOuq-4Z_T7Zgty2WqIk2xWd0gjfYaMGkT9GTcWHFtKiMxcG8_gwcHSiURLTcv69ods1CBiTOLVRGgqTRtVogvRF-YczenTXra_Def-hvQkQ3cVLf10wm6JdTxSx9XrFJpq5pJSIKpAPuV_AF1PamwW-_TdZXA4pEa6LhDVokZabPtEWXTfkYX39iI-1e1NPC4sumdmQW2swpJHvZL_jHSjgv-80kPiQDWvoSsyVfQK4"
                  referrerPolicy="no-referrer"
                />
                {/* gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,27,61,0.55) 0%, rgba(0,27,61,0.1) 40%, transparent 100%)',
                  }}
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-primary-navy text-white p-8 executive-shadow z-20"
                style={{ borderTop: '3px solid #b38b2d' }}
              >
                <span
                  className="text-5xl font-bold block mb-1 text-gold"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  28+
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.35em] text-white/50"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Years of Impact
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-bold">Scroll</span>
        <div className="scroll-indicator" />
        <ArrowDown size={12} className="text-slate-300 animate-bounce" />
      </motion.div>
    </section>
  );
}
