import { motion } from 'motion/react';
import { TrendingUp, Car, Crown, ExternalLink } from 'lucide-react';

export default function FutureHorizons() {
  const cards = [
    {
      icon: TrendingUp,
      category: 'Private Equity Advisory',
      title: 'KKR & Capsugel',
      description:
        'Strategic advisor during the KKR acquisition and subsequent transformation of Capsugel into a global leader in dosage solutions and drug delivery technologies.',
      accent: 'border-gold',
      dark: false,
    },
    {
      icon: Car,
      category: 'Luxury & Mobility',
      title: 'Kinetic Green x Lamborghini',
      description:
        'Partnering with Tonino Lamborghini for the Kinetic Green–Tonino Lamborghini Golf Cart (2025), merging Italian design with Indian electric mobility innovation.',
      accent: 'border-slate-200',
      dark: false,
    },
    {
      icon: Crown,
      category: 'Strategic Diplomacy',
      title: 'Saudi Royal Family Advisor',
      description:
        'Providing high-level counsel on biotechnology investments and healthcare transformation within the Kingdom\'s Vision 2030 framework.',
      accent: 'border-gold',
      dark: true,
    },
  ];

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8f9fc 0%, #eef0f8 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label justify-center mb-5">Post-Pfizer Chapter</div>
          <h2
            className="tracking-tighter text-primary-navy mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Post-Pfizer{' '}
            <span className="italic font-normal text-gold">Horizons</span>
          </h2>
          <p className="text-slate-700 text-lg font-light max-w-xl mx-auto">
            Transitioning from pharmaceutical mastery to global strategic innovation across
            multiple industries and continents.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className={`relative overflow-hidden rounded-sm executive-shadow hover-lift border-t-2 ${card.accent} ${
                card.dark
                  ? 'bg-primary-navy'
                  : 'bg-white'
              }`}
            >
              {/* Background accent */}
              {card.dark && (
                <div
                  className="absolute inset-0 bg-dots opacity-10 pointer-events-none"
                />
              )}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: card.dark
                    ? 'radial-gradient(circle, rgba(179,139,45,0.15), transparent 70%)'
                    : 'radial-gradient(circle, rgba(0,27,61,0.04), transparent 70%)',
                }}
              />

              <div className="relative z-10 p-10 h-full flex flex-col">
                {/* Icon badge */}
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center mb-8 ${
                    card.dark ? 'bg-white/10' : 'bg-slate-50'
                  }`}
                >
                  <card.icon
                    size={20}
                    className={card.dark ? 'text-gold' : 'text-primary-navy'}
                  />
                </div>

                <p
                  className={`text-[10px] font-mono tracking-widest uppercase mb-3 ${
                    card.dark ? 'text-gold' : 'text-gold/80'
                  }`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {card.category}
                </p>

                <h3
                  className={`text-xl mb-5 leading-snug ${card.dark ? 'text-white' : 'text-primary-navy'}`}
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed font-light flex-1 ${
                    card.dark ? 'text-white/60' : 'text-slate-700'
                  }`}
                >
                  {card.description}
                </p>

                <div className="mt-8 flex justify-end">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      card.dark ? 'border-white/20' : 'border-slate-100'
                    }`}
                  >
                    <ExternalLink size={12} className={card.dark ? 'text-white/30' : 'text-slate-500'} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
