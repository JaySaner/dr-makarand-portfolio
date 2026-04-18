import { motion } from 'motion/react';
import { Building2, Heart, Globe, Landmark, Flag } from 'lucide-react';

export default function Governance() {
  const boards = [
    {
      icon: Building2,
      company: 'NanoViricides, Inc.',
      role: 'Board of Directors — Developing next-generation antiviral therapeutics using nanotechnology platforms.',
      category: 'BIOTECHNOLOGY',
    },
    {
      icon: Heart,
      company: 'PreveCeutical Medical Inc.',
      role: 'Strategic Advisory Board — Innovation in preventive healthcare, nutraceuticals and biosolutions.',
      category: 'PREVENTIVE CARE',
    },
    {
      icon: Globe,
      company: 'BioAsia Steering Committee',
      role: "Steering Asia's premier biotechnology and life sciences forum for over a decade of impactful leadership.",
      category: 'STRATEGIC FORUM',
    },
    {
      icon: Heart,
      company: 'Abilities Inc. & Raywa',
      role: 'Board service focused on empowering differently-abled individuals and advancing community healthcare.',
      category: 'PHILANTHROPY',
    },
    {
      icon: Flag,
      company: 'Doha Forum 2022',
      role: 'Engagement at the intersection of global sports, international policy, and diplomatic relations.',
      category: 'DIPLOMACY',
    },
    {
      icon: Landmark,
      company: 'Saudi Vision 2030',
      role: 'High-level counsel on biotechnology investments and healthcare transformation for the Kingdom.',
      category: 'ADVISORY',
    },
  ];

  const categoryColors: Record<string, string> = {
    BIOTECHNOLOGY: '#001b3d',
    'PREVENTIVE CARE': '#163d72',
    'STRATEGIC FORUM': '#b38b2d',
    PHILANTHROPY: '#163d72',
    DIPLOMACY: '#001b3d',
    ADVISORY: '#b38b2d',
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="roles">
      {/* Top fade from previous section */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Gold orb */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(179,139,45,0.07), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mb-5">Corporate Stewardship</div>
            <h2
              className="tracking-tighter text-primary-navy"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Governance &{' '}
              <span className="italic font-normal text-gold">Advisory.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 font-light text-lg max-w-sm leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
          >
            Strategic oversight across biotechnology, diplomacy, and global philanthropy.
          </motion.p>
        </div>

        {/* Board grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boards.map((board, idx) => (
            <motion.div
              key={board.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="group relative bg-white border border-slate-100 rounded-sm p-8 hover-lift card-shadow cursor-default overflow-hidden"
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(0,27,61,0.02), rgba(179,139,45,0.04))' }}
              />

              {/* Icon + category */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ background: `${categoryColors[board.category]}10` }}
                >
                  <board.icon size={18} style={{ color: categoryColors[board.category] }} />
                </div>
                <span
                  className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-sm border"
                  style={{
                    color: categoryColors[board.category],
                    borderColor: `${categoryColors[board.category]}30`,
                    background: `${categoryColors[board.category]}08`,
                  }}
                >
                  {board.category}
                </span>
              </div>

              <h3
                className="text-primary-navy mb-4 leading-tight group-hover:text-gold transition-colors duration-500 relative z-10"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem',
                  fontWeight: 600,
                }}
              >
                {board.company}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed font-light relative z-10">{board.role}</p>

              {/* Animated bottom line */}
              <div className="mt-8 relative z-10">
                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: 'linear-gradient(90deg, #b38b2d, transparent)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
