import { CheckCircle2, TrendingUp, Globe2, FlaskConical, Network } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const expertise = [
    { icon: TrendingUp, text: 'Clinical Trial Supply Chain Strategy' },
    { icon: Globe2, text: 'Global R&D Collaboration Architecture' },
    { icon: Network, text: 'Japanese Regulatory Coordination' },
    { icon: FlaskConical, text: 'Advanced Drug Delivery Formulations' },
  ];

  return (
    <section className="py-28 relative overflow-hidden" id="about" style={{ background: '#fff' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="section-label mb-5">Executive Profile</div>
          <h2
            className="tracking-tighter leading-none text-primary-navy"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
            }}
          >
            Strategic External{' '}
            <span className="italic font-normal text-gold">Alliance Management</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* ── Left column: narrative ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 text-slate-600 leading-relaxed" style={{ fontSize: '1.05rem', fontWeight: 300 }}>
              <p>
                Dr. Jawadekar's legacy is rooted in the creation and leadership of Pfizer's{' '}
                <span className="font-semibold text-primary-navy">Strategic External Alliance Management</span>.
                This function revolutionized how the pharmaceutical giant engaged with global partners,
                moving from transactional relationships to deep, R&amp;D-integrated collaborations.
              </p>
              <p>
                His tenure saw the orchestration of{' '}
                <span className="font-semibold text-primary-navy">multi-billion dollar portfolios</span> and
                the refinement of drug delivery systems that define modern medicine. He bridged the gap between
                scientific innovation and regulatory requirements across Asia, Europe, and the Americas.
              </p>
              <p>
                A graduate of the <span className="font-semibold text-primary-navy">University of Minnesota</span>{' '}
                with a Ph.D. in Pharmaceutical Sciences, his academic foundation underpins a career of extraordinary
                global impact.
              </p>
            </div>

            {/* Quote block */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 pl-6 border-l-4 border-gold"
            >
              <p
                className="text-primary-navy italic leading-relaxed"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem' }}
              >
                "Science without strategy remains invention. Together, they become transformation."
              </p>
              <footer className="mt-3 text-xs tracking-widest uppercase text-slate-400 font-bold">
                — Dr. Makarand Jawadekar
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* ── Right column: expertise card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Core Expertise box */}
            <div
              className="relative overflow-hidden rounded-sm executive-shadow"
              style={{
                background: 'linear-gradient(135deg, #001b3d 0%, #0d2a52 100%)',
                padding: '2.5rem',
              }}
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  background: 'radial-gradient(circle at top right, #b38b2d, transparent 70%)',
                }}
              />

              <h3
                className="text-xl italic mb-8 text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                Core Expertise
              </h3>

              <ul className="space-y-5">
                {expertise.map(({ icon: Icon, text }, idx) => (
                  <motion.li
                    key={text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <span className="text-white/85 font-light text-sm leading-snug">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Highlight metrics row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: '1982', sub: 'Pfizer Start' },
                { n: 'Ph.D.', sub: 'Pharmaceutical Sciences' },
                { n: '2006', sub: 'SEAM Founded' },
              ].map(({ n, sub }) => (
                <div
                  key={sub}
                  className="bg-slate-50 border border-slate-100 rounded-sm p-5 text-center card-shadow hover-lift"
                >
                  <p
                    className="font-bold text-primary-navy mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.15rem' }}
                  >
                    {n}
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-snug">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
