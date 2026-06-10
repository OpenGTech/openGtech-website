'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    title: 'Digital Engineering',
    description: 'We architect and build full-stack web and mobile applications using the latest technologies. React, Next.js, Node.js—we write clean, scalable code that performs flawlessly under heavy load.',
    color: '#00d2ff',
    bg: '#111111',
    tags: ['Web Apps', 'Mobile', 'Architecture', 'Scale']
  },
  {
    title: 'AI Solutions & RAG',
    description: 'We don\'t just plug into ChatGPT. We build secure, custom LLM agents and RAG (Retrieval-Augmented Generation) pipelines that act as autonomous experts trained entirely on your company\'s proprietary data.',
    color: '#ff007f',
    bg: '#151515',
    tags: ['Agents', 'LLMs', 'RAG', 'Automation']
  },
  {
    title: 'Business Automation',
    description: 'Stop doing manual data entry. We connect your disjointed SaaS tools, build custom internal dashboards, and write complex automation scripts so your operations run completely hands-free.',
    color: '#8e2de2',
    bg: '#1a1a1a',
    tags: ['APIs', 'CRMs', 'Workflows', 'Scripts']
  },
  {
    title: 'Growth & Local SEO',
    description: 'We turn your digital storefront into a lead-generation machine. High-conversion landing pages, integrated booking systems, and aggressive local SEO strategies that put you at the top of search.',
    color: '#00ff87',
    bg: '#1f1f1f',
    tags: ['SEO', 'Funnels', 'Conversion', 'Leads']
  }
];

const Card = ({ service, index, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  // Smoothly scale down and fade out the card as the next one scrolls over it
  const scale = useTransform(progress, range, [1, targetScale]);
  // We keep opacity solid to avoid any glass/transparent feel when stacking
  
  // Interactive Mouse Spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem'
      }}
    >
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          scale,
          top: `calc(5vh + ${index * 25}px)`, // Adjusted top offset so it doesn't clip
          position: 'relative',
          width: '100%',
          maxWidth: '1100px', // Slightly narrower
          height: '450px', // Decreased height from 600px to 450px
          maxHeight: '75vh', // Ensure it never exceeds viewport height
          background: service.bg,
          borderRadius: '24px',
          border: '1px solid #333333',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '3rem', // Reduced padding from 4rem
          transformOrigin: 'top center'
        }}
      >
        {/* Dynamic Flashlight Effect */}
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

        {/* Top Content: Title */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', color: '#fff', width: '100%', lineHeight: 1.1 }}>
            {service.title}
          </h2>
        </div>

        {/* Bottom Content: Tags and Description */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', width: '45%' }}>
            {service.tags.map(tag => (
              <span key={tag} style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '9999px',
                border: `2px solid ${service.color}`,
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                background: '#000000'
              }}>
                {tag}
              </span>
            ))}
          </div>
          
          <p style={{ color: '#cccccc', fontSize: '1.1rem', lineHeight: 1.6, width: '50%', margin: 0, fontWeight: 500 }}>
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} id="services" style={{ position: 'relative', background: '#050505', paddingBottom: '20vh' }}>
      
      <div style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div style={{ textAlign: 'center' }}>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ color: 'var(--accent-color)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}
            >
              // Execution
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}
            >
              What we actually do.
            </motion.h2>
         </div>
      </div>

      <div style={{ position: 'relative' }}>
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
    </section>
  );
}
