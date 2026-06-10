'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    title: 'Digital Engineering',
    tag: 'React / Next.js / Node',
    description: "We build high-performance web applications that don't break when you go viral. Fast, secure, and infinitely scalable.",
    color: '#00d2ff',
    imageBg: 'radial-gradient(circle, rgba(0, 210, 255, 0.4) 0%, transparent 70%)'
  },
  {
    title: 'AI Workflows',
    description: 'Custom AI agents and RAG pipelines that actually replace manual tasks and save you hours of busywork daily.',
    tag: 'LLMs / Agents / Automation',
    color: '#ff007f',
    imageBg: 'radial-gradient(circle, rgba(255, 0, 127, 0.4) 0%, transparent 70%)'
  },
  {
    title: 'Business Auto',
    description: 'If it requires copying and pasting, we automate it. API integrations, smart CRMs, and zero-touch operations.',
    tag: 'APIs / Webhooks / Data',
    color: '#8e2de2',
    imageBg: 'radial-gradient(circle, rgba(142, 45, 226, 0.4) 0%, transparent 70%)'
  },
  {
    title: 'Local Growth',
    description: 'Digital systems that capture leads and dominate local SEO. Your digital storefront, completely supercharged.',
    tag: 'SEO / Funnels / Conversion',
    color: '#00ff87',
    imageBg: 'radial-gradient(circle, rgba(0, 255, 135, 0.4) 0%, transparent 70%)'
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" style={{ padding: '8rem 0', background: '#030303', position: 'relative', overflow: 'hidden' }}>
      
      {/* Massive Background Marquee Text */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '-10%',
        whiteSpace: 'nowrap',
        opacity: 0.03,
        pointerEvents: 'none',
        display: 'flex',
        userSelect: 'none',
        zIndex: 0
      }}>
        <motion.h1 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ fontSize: '25rem', fontWeight: 900, margin: 0, lineHeight: 1, letterSpacing: '-0.05em' }}
        >
          ENGINEER / AUTOMATE / SCALE / ENGINEER / AUTOMATE / SCALE / 
        </motion.h1>
      </div>

      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        
        <div style={{ marginBottom: '6rem' }}>
          <p style={{ color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.85rem' }}>
            // Capabilities
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                position: 'relative',
                padding: '3.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                borderTop: index === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '2rem'
              }}
            >
              {/* Dynamic Glow Reveal that follows the container on hover */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverGlow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '400px',
                    background: service.imageBg,
                    filter: 'blur(80px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                />
              )}

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1 1 500px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                  <span style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 600, 
                    color: hoveredIndex === index ? service.color : 'rgba(255,255,255,0.15)', 
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    0{index + 1}
                  </span>
                  <h3 style={{ 
                    fontSize: 'clamp(3.5rem, 6vw, 7.5rem)', 
                    fontWeight: 900, 
                    margin: 0,
                    textTransform: 'uppercase',
                    lineHeight: 0.9,
                    color: hoveredIndex === index ? '#fff' : 'transparent',
                    WebkitTextStroke: hoveredIndex === index ? `0px transparent` : '1.5px rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '-0.02em',
                    textShadow: hoveredIndex === index ? `0 0 40px ${service.color}80` : 'none'
                  }}>
                    {service.title}
                  </h3>
                </div>
              </div>

              <div 
                style={{ 
                  position: 'relative', 
                  zIndex: 1, 
                  flex: '1 1 350px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem',
                  opacity: hoveredIndex === index ? 1 : 0.4,
                  transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '9999px',
                  border: `1px solid ${hoveredIndex === index ? service.color : 'rgba(255,255,255,0.2)'}`,
                  color: hoveredIndex === index ? service.color : 'rgba(255,255,255,0.5)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                  transition: 'all 0.3s ease',
                  background: hoveredIndex === index ? `${service.color}10` : 'transparent'
                }}>
                  {service.tag}
                </div>
                <p style={{ 
                  color: hoveredIndex === index ? '#fff' : 'rgba(255,255,255,0.5)', 
                  fontSize: '1.25rem', 
                  lineHeight: 1.6, 
                  margin: 0,
                  transition: 'color 0.3s ease',
                  fontWeight: 400
                }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
