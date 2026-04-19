import { Pill, Zap, Beaker, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Portfolio() {
  const formulations = [
    {
      icon: Pill,
      num: '01',
      title: 'Zoloft & Zithromax',
      subtitle: 'Global Clinical Operations',
      description:
        'Mastering complex clinical trial supply coordination and orchestration of large-scale manufacturing strategies for two of Pfizer\'s blockbuster therapeutics, setting new operational benchmarks.',
      gradient: 'from-navy-900 to-navy-800',
    },
    {
      icon: Zap,
      num: '02',
      title: 'Viagra Optimization',
      subtitle: 'Drug Delivery Innovation',
      description:
        'Pioneered rapid-onset delivery systems, significantly enhancing the clinical profile and market position of one of Pfizer\'s most iconic global brands.',
      gradient: 'from-gold-900 to-gold-800',
    },
    {
      icon: Beaker,
      num: '03',
      title: 'Diflucan ODT',
      subtitle: 'Regulatory Excellence',
      description:
        'Spearheaded the Orally Disintegrating Tablet (ODT) innovation, facilitating global regulatory compliance and delivering patient-centric solutions across multiple markets.',
      gradient: 'from-navy-900 to-navy-800',
    },
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="formulations">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #b38b2d, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mb-5">Scientific Portfolio</div>
            <h2
              className="tracking-tighter leading-none text-primary-navy"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                fontWeight: 700,
              }}
            >
              Pioneering{' '}
              <span className="italic font-normal text-gold">Formulations.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <p
              className="text-slate-600 text-xl mb-1"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              Pfizer Central Research
            </p>
            <p className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
              1982 — 2011 Leadership
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formulations.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="group relative bg-white border border-slate-100 rounded-sm overflow-hidden hover-lift card-shadow cursor-default"
            >
              {/* Top bar */}
              <div
                className="h-1 w-full"
                style={{
                  background: idx === 1
                    ? 'linear-gradient(90deg, #b38b2d, #d4af37)'
                    : 'linear-gradient(90deg, #001b3d, #163d72)',
                }}
              />

              <div className="p-8">
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-slate-200 font-bold"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '3rem', lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-500"
                    style={{
                      background: idx === 1
                        ? 'linear-gradient(135deg, rgba(179,139,45,0.12), rgba(212,175,55,0.08))'
                        : 'rgba(0,27,61,0.06)',
                    }}
                  >
                    <item.icon
                      size={22}
                      className="transition-colors duration-500 group-hover:text-gold"
                      style={{ color: idx === 1 ? '#b38b2d' : '#001b3d' }}
                    />
                  </div>
                </div>

                {/* Text */}
                <p
                  className="text-[10px] font-mono tracking-widest uppercase text-gold mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.subtitle}
                </p>
                <h3
                  className="text-primary-navy mb-5 group-hover:text-gold transition-colors duration-500"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.55rem',
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-light">{item.description}</p>

                {/* Bottom hover arrow */}
                <div className="mt-8 flex items-center justify-end">
                  <div
                    className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-500"
                  >
                    <ArrowUpRight
                      size={14}
                      className="text-slate-500 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="line-divider flex-1" />
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-slate-500">
            Pfizer Central Research — Global Operations
          </span>
          <div className="line-divider flex-1" />
        </motion.div>
      </div>
    </section>
  );
}
