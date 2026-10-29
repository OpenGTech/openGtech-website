'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } }
};

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Background Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          filter: 'blur(50px)',
        }}
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(58, 123, 213, 0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0,
          filter: 'blur(50px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginTop: '4rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <motion.div
              initial={{ boxShadow: '0 0 0 rgba(0, 210, 255, 0)' }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 40px rgba(0, 210, 255, 0.15)',
                borderColor: 'rgba(0, 210, 255, 0.5)'
              }}
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.6rem 1.8rem',
                borderRadius: '9999px',
                background: 'linear-gradient(180deg, rgba(0, 210, 255, 0.08) 0%, rgba(0, 210, 255, 0.01) 100%)',
                border: '1px solid rgba(0, 210, 255, 0.2)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
            >
              {/* Elegant ambient shine passing over the glass */}
              <motion.div
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                  transform: 'skewX(-20deg)',
                  zIndex: 0
                }}
              />
              
              <span style={{
                position: 'relative',
                zIndex: 1,
                color: '#00d2ff',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textShadow: '0 0 20px rgba(0, 210, 255, 0.4)'
              }}>
                Empowering the Founders of Tomorrow
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(3.5rem, 6vw, 6.5rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}
          >
            From Idea to <motion.span
              className="gradient-text"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% auto', display: 'inline-block' }}
            >
              Impact.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.3rem',
              color: 'var(--text-secondary)',
              maxWidth: '750px',
              margin: '0 auto 3rem auto',
              lineHeight: 1.6
            }}
          >
            We help founders navigate the thinking stage and build scalable businesses with cutting-edge AI, Automation, and Digital Engineering.
            <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}> Let's build your vision together.</strong>
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 210, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', letterSpacing: '0.5px', textDecoration: 'none', display: 'inline-block' }}
            >
              Start Building
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
              style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', letterSpacing: '0.5px', textDecoration: 'none', display: 'inline-block' }}
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Abstract Floating Element */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            marginTop: '6rem',
            width: '100%',
            height: '250px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 100%)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px 24px 0 0',
            position: 'relative'
          }}
        >
          {/* Glowing Top Line */}
          <div style={{
            position: 'absolute',
            top: '-1px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
            boxShadow: '0 0 15px var(--accent-color)'
          }} />

          <div style={{ padding: '3rem', color: 'var(--text-secondary)' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
