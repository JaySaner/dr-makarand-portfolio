import { motion } from 'motion/react';

export default function Timeline() {
  const milestones = [
    {
      year: '1982',
      period: 'Foundation Era',
      title: 'Global R&D Commencement',
      institution: 'Pfizer Central Research',
      description:
        'Initiated a landmark career at Pfizer Central Research, spearheading foundational pharmaceutical R&D that would redefine industry standards.',
      tags: ['Research', 'Development'],
      side: 'left',
    },
    {
      year: '1990',
      period: 'Academic Pinnacle',
      title: 'Doctoral Distinction',
      institution: 'University of Minnesota',
      description:
        'Doctoral research in Pharmaceutical Sciences at UMN, establishing next-generation standards for global drug delivery systems.',
      tags: ['Ph.D.', 'Excellence'],
      side: 'right',
    },
    {
      year: '2006',
      period: 'Strategic Era',
      title: 'SEAM Formation',
      institution: 'Pfizer Inc. — New York',
      description:
        'Founded and led the Strategic External Alliance Management (SEAM) group, orchestrating multi-billion dollar global R&D partnerships.',
      tags: ['Leadership', 'Global'],
      side: 'left',
    },
    {
      year: 'NOW',
      period: 'Advisory Era',
      title: 'Global Advisory & Governance',
      institution: 'International Hubs',
      description:
        'Advising the Saudi Royal Family on Vision 2030 healthcare, and leading boards for NanoViricides and PreveCeutical across continents.',
      tags: ['Governance', 'Advisory'],
      side: 'right',
    },
  ];

  return (
    <section
      className="py-32 relative overflow-hidden"
      id="career"
      style={{ background: 'linear-gradient(180deg, #020b18 0%, #041020 100%)' }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.025] pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="section-label justify-center mb-6 text-gold">Professional Chronicle</div>
          <h2
            className="text-white tracking-tighter leading-none mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 700,
            }}
          >
            A Legacy of{' '}
            <span
              className="italic font-normal"
              style={{
                background: 'linear-gradient(135deg, #b38b2d, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Innovation.
            </span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Defining the trajectory of pharmaceutical mastery over four decades of global leadership.
          </p>
        </motion.div>

        {/* Desktop: alternating timeline */}
        <div className="hidden lg:block relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(179,139,45,0.4) 15%, rgba(179,139,45,0.4) 85%, transparent)' }}
          />

          <div className="space-y-20">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`grid grid-cols-2 gap-0 relative ${m.side === 'right' ? '' : ''}`}
              >
                {m.side === 'left' ? (
                  <>
                    {/* Card on left */}
                    <div className="pr-16 flex justify-end">
                      <TimelineCard m={m} align="right" />
                    </div>
                    {/* Center dot */}
                    <CenterDot year={m.year} />
                    {/* Empty right */}
                    <div className="pl-16" />
                  </>
                ) : (
                  <>
                    {/* Empty left */}
                    <div className="pr-16" />
                    {/* Center dot */}
                    <CenterDot year={m.year} />
                    {/* Card on right */}
                    <div className="pl-16 flex justify-start col-start-2">
                      <TimelineCard m={m} align="left" />
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden grid grid-cols-1 gap-6">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 p-8 hover:border-gold/40 transition-colors duration-500"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <div className="flex justify-between items-start mb-6">
                <span
                  className="text-gold"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontStyle: 'italic' }}
                >
                  {m.year}
                </span>
                <div className="flex gap-1.5">
                  {m.tags.map((t) => (
                    <span key={t} className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 border border-white/10 text-white/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gold/70 font-mono text-[10px] tracking-widest uppercase mb-2">{m.institution}</p>
              <h3 className="text-white text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {m.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CenterDot({ year }: { year: string }) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10">
      <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_16px_4px_rgba(179,139,45,0.4)]" />
    </div>
  );
}

function TimelineCard({ m, align }: { m: any; align: 'left' | 'right' }) {
  return (
    <div
      className={`max-w-sm w-full border border-white/10 p-8 group hover:border-gold/40 transition-all duration-500 ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      <div className={`flex items-start gap-2 mb-6 ${align === 'right' ? 'flex-row-reverse justify-start' : ''}`}>
        <span
          className="text-gold"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontStyle: 'italic', lineHeight: 1 }}
        >
          {m.year}
        </span>
        <div className={`flex gap-1.5 flex-wrap ${align === 'right' ? 'justify-end' : ''}`}>
          {m.tags.map((t: string) => (
            <span key={t} className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 border border-white/10 text-white/30 h-fit">
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gold/70 font-mono text-[10px] tracking-widest uppercase mb-2">{m.institution}</p>
      <h3 className="text-white text-xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        {m.title}
      </h3>
      <div
        className={`h-px w-0 group-hover:w-full bg-gradient-to-r from-gold to-transparent mb-4 transition-all duration-700 ${
          align === 'right' ? 'ml-auto bg-gradient-to-l' : ''
        }`}
      />
      <p className="text-white/40 text-sm leading-relaxed font-light">{m.description}</p>
    </div>
  );
}
