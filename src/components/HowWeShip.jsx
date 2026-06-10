'use client';
import { motion } from 'framer-motion';

const processSteps = [
  {
    title: 'Scope & Architecture',
    description: "We don't guess. We map out the exact architecture, database schema, and user flows before writing a single line of code.",
    color: '#00d2ff',
    number: '01'
  },
  {
    title: 'Rapid Prototyping',
    description: "We build functional MVPs fast. You get to interact with a real product, test the core loop, and we iterate based on real data.",
    color: '#ff007f',
    number: '02'
  },
  {
    title: 'Full-Stack Sprints',
    description: "Our engineers work in aggressive 2-week sprints. Constant communication, zero fluff, and you see tangible progress every week.",
    color: '#8e2de2',
    number: '03'
  },
  {
    title: 'Scale & Optimize',
    description: "Launch is just day one. We ensure your infrastructure automatically scales, monitor performance, and squash edge cases.",
    color: '#00ff87',
    number: '04'
  }
];

export default function HowWeShip() {
  return (
    <section id="how-we-ship" style={{ padding: '8rem 0', background: '#030303', position: 'relative' }}>
      
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ 
              color: 'var(--accent-color)', 
              fontWeight: 600, 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              marginBottom: '1rem', 
              fontSize: '0.9rem' 
            }}>
              The Arsenal
            </p>
            <h2 style={{ 
              fontSize: 'clamp(3.5rem, 6vw, 5rem)', 
              fontWeight: 800, 
              lineHeight: 1.1, 
              letterSpacing: '-0.04em' 
            }}>
              How we <span style={{ color: '#fff' }}>ship.</span>
            </h2>
          </motion.div>
        </div>

        {/* Bento Box Grid Setup */}
        <style>{`
          .bento-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          @media (min-width: 900px) {
            .bento-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .bento-card-0 { grid-column: span 2; }
            .bento-card-1 { grid-column: span 1; }
            .bento-card-2 { grid-column: span 1; }
            .bento-card-3 { grid-column: span 2; }
          }
        `}</style>

        <div className="bento-grid">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: 'rgba(255,255,255,0.03)',
                boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px ${step.color}15`
              }}
              className={`bento-card-${index}`}
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.015)',
                borderRadius: '24px',
                padding: '3.5rem 3rem',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                minHeight: '320px',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Giant Background Number */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                fontSize: '14rem',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.02)',
                lineHeight: 1,
                userSelect: 'none',
                zIndex: 0,
                letterSpacing: '-0.05em'
              }}>
                {step.number}
              </div>

              {/* Glowing Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                opacity: 0.6
              }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 700, 
                  marginBottom: '1rem', 
                  color: '#fff', 
                  letterSpacing: '-0.03em' 
                }}>
                  {step.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1.15rem', 
                  lineHeight: 1.6, 
                  maxWidth: '90%' 
                }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
