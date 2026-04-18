import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export default function Recognition() {
  const stats = [
    {
      label: 'Conference Presentations',
      value: '150+',
      detail: 'Global keynote speaker on Pharmaceutical R&D and Strategic Alliances across six continents.',
    },
    {
      label: 'Presidential Engagement',
      value: '2006',
      detail: 'Visit by President George W. Bush to Pfizer, recognising R&D excellence under Dr. Jawadekar\'s leadership.',
    },
    {
      label: 'Publications & Patents',
      value: '50+',
      detail: 'Leading scientific contributions shaping modern drug delivery and pharmaceutical sciences.',
    },
  ];

  const galleryItems = [
    {
      src: null,
      icon: Award,
      label: 'Distinguished Alumnus',
      title: 'University of Minnesota Achievement Award',
      desc: 'Honouring global scientific leadership and career contributions to pharmaceutical sciences.',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyEABRPKKLpgYlqgi9FhnZweU0kWZWjJFr739jCqY8IUC7gOsOK56kkC1Gqyq8CQfNRg7u7iIl95DXEvNodBV_bJ4DkIiCqGpRnh3lVhWaoBis-mahqgGisqITwLs9ZXmurEala-MsydpyYINxbC7vuPKNB8KZOjJDVS6AFFb41bPY9vl59J3vvQ2QHSmoXeU0FU2Fmcoi8IWg4tQ5nYZTNTmnRsCARB7lx52tI5Jxu7H57zORWtXrh4OoGSh0c-nah0AQgRxzD-wx',
      label: 'Strategic Leadership',
      title: 'BioAsia Steering Committee',
      desc: 'Fostering international collaboration and biotechnology innovation across Asia and beyond.',
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="achievements">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label justify-center mb-5">Scientific Merit</div>
          <h2
            className="tracking-tighter text-primary-navy mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Recognition in the{' '}
            <span className="italic font-normal text-gold">Global Arena.</span>
          </h2>
          <p className="text-slate-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Distinguished through international accolades, scientific leadership, and cross-continental advisory excellence.
          </p>
        </motion.div>

        {/* Stat counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 group text-center hover:bg-primary-navy transition-all duration-700 cursor-default"
            >
              <span
                className="block mb-3 tracking-tighter group-hover:text-gold transition-colors duration-500"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: '#001b3d',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="block text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-4 group-hover:text-white/50 transition-colors duration-500"
              >
                {stat.label}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed font-light group-hover:text-white/40 transition-colors duration-500">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className={`relative h-[420px] overflow-hidden group rounded-sm card-shadow ${!item.src ? 'bg-primary-navy' : ''}`}
              style={!item.src ? { background: 'linear-gradient(135deg, #001b3d 0%, #0d2a52 100%)' } : {}}
            >
              {item.src ? (
                <>
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                    src={item.src}
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient overlay always visible */}
                  <div
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,27,61,0.75) 0%, rgba(0,27,61,0.2) 50%, transparent 100%)',
                    }}
                  />
                  {/* Always-visible bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span
                      className="text-gold/80 font-mono text-[9px] tracking-widest uppercase mb-2 block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.label}
                    </span>
                    <h4
                      className="text-white text-xl mb-2 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-xs font-light leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle at top right, #b38b2d, transparent 70%)' }} />
                  <div className="relative h-full p-10 flex flex-col justify-center items-center text-center">
                    {item.icon && (
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-8 border border-gold/20">
                        <item.icon size={28} className="text-gold" />
                      </div>
                    )}
                    <span
                      className="text-gold font-mono text-[10px] tracking-widest uppercase mb-4 block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {item.label}
                    </span>
                    <h4
                      className="text-white text-3xl mb-6 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Presidential Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 relative overflow-hidden rounded-sm"
          style={{ background: 'linear-gradient(135deg, #001b3d 0%, #0d2a52 100%)' }}
        >
          <div
            className="absolute inset-0 bg-dots opacity-10 pointer-events-none"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10">
            <div className="flex items-center gap-6">
              <div
                className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-gold text-2xl">★</span>
              </div>
              <div>
                <p
                  className="text-white/40 text-[10px] font-mono tracking-widest uppercase mb-1"
                >
                  Presidential Recognition — 2006
                </p>
                <h4
                  className="text-white text-lg"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Visit by President George W. Bush to Pfizer
                </h4>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="text-white/30 text-xs font-light max-w-xs leading-relaxed">
                Highlighting pharmaceutical R&D excellence and the pioneering work led by Dr. Jawadekar's team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
