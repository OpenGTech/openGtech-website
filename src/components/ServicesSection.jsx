'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    title: 'Launch Fast',
    description: 'From idea to live product in weeks, not months. We build beautiful MVPs that help founders validate, pitch investors, and get their first users.',
    color: '#3B82F6',
    bg: '#0B1220',
    tags: ['MVPs', 'Web Apps', 'Mobile', 'Launch']
  },
  {
    title: 'AI That Actually Works',
    description: 'Custom AI agents, RAG pipelines, and intelligent workflows built around your business—not generic ChatGPT wrappers.',
    color: '#EC4899',
    bg: '#1A0D18',
    tags: ['AI Agents', 'RAG', 'LLMs', 'Automation']
  },
  {
    title: 'Automate Everything',
    description: 'Kill repetitive work. We connect tools, automate operations, and build systems that scale while you sleep.',
    color: '#8B5CF6',
    bg: '#120E1F',
    tags: ['Automation', 'APIs', 'Workflows', 'Internal Tools']
  },

  {
    title: 'Growth Loops',
    description: 'Landing pages, analytics, SEO, experiments, and conversion systems designed to turn visitors into customers.',
    color: '#22C55E',
    bg: '#0D1A12',
    tags: ['SEO', 'Funnels', 'Analytics', 'Growth']
  },

  {
    title: 'Build the Future',
    description: 'IoT, hardware prototypes, PCB design, firmware, and rapid physical product development for ambitious founders.',
    color: '#05CBFC',
    bg: '#1e272aff',
    tags: ['IoT', 'Hardware', 'PCB', 'Firmware']
  }
];

// Simple Static Typography Section
const IntroTypography = () => {
  return (
    <div style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505' }}>
      <div style={{ textAlign: 'center' }}>
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
            The Craft
          </p>
          <h2 style={{
            fontSize: 'clamp(3.5rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            margin: 0,
            color: 'var(--text-secondary)'
          }}>
            What we <span style={{ color: '#ffffff' }}>master.</span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

// Individual Sticky Card
const Card = ({ service, index, progress, range, targetScale }) => {
  const containerRef = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        height: isMobile ? 'auto' : '100vh',
        minHeight: isMobile ? '100vh' : undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '0 0.75rem' : '0 1rem'
      }}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          scale,
          top: `calc(5vh + ${index * 25}px)`,
          position: 'relative',
          width: '100%',
          maxWidth: '1100px',
          height: isMobile ? 'auto' : '450px',
          minHeight: isMobile ? '380px' : undefined,
          maxHeight: isMobile ? '85vh' : '75vh',
          background: service.bg,
          borderRadius: isMobile ? '16px' : '24px',
          border: '1px solid #333333',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: isMobile ? '1.75rem 1.25rem' : '3rem',
          transformOrigin: 'top center'
        }}
      >
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${service.color}15, transparent 40%)`,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
          <h2 style={{
            fontSize: isMobile ? 'clamp(1.75rem, 7vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.02em',
            color: '#fff',
            width: '100%',
            lineHeight: 1.1
          }}>
            {service.title}
          </h2>
        </div>

        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          width: '100%',
          gap: isMobile ? '1.25rem' : '0'
        }}>
          <div style={{
            display: 'flex',
            gap: isMobile ? '0.5rem' : '0.8rem',
            flexWrap: 'wrap',
            width: isMobile ? '100%' : '45%'
          }}>
            {service.tags.map(tag => (
              <span key={tag} style={{
                padding: isMobile ? '0.35rem 0.9rem' : '0.5rem 1.2rem',
                borderRadius: '9999px',
                border: `2px solid ${service.color}`,
                color: '#fff',
                fontSize: isMobile ? '0.7rem' : '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background: '#000000'
              }}>
                {tag}
              </span>
            ))}
          </div>

          <p style={{
            color: '#cccccc',
            fontSize: isMobile ? '0.9rem' : '1.1rem',
            lineHeight: 1.6,
            width: isMobile ? '100%' : '50%',
            margin: 0,
            fontWeight: 500
          }}>
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Container for the sticky cards
const CardsStack = () => {
  const containerRef = useRef(null);

  // Track scroll progress exclusively within the cards section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} style={{ position: 'relative', background: '#050505', paddingBottom: '20vh' }}>
      {services.map((service, index) => {
        const targetScale = 1 - ((services.length - 1 - index) * 0.05);
        return (
          <Card
            key={index}
            index={index}
            service={service}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#000' }}>
      <IntroTypography />
      <CardsStack />
    </section>
  );
}
