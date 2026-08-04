'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
          }, 300);
          return 100;
        }
        // Random incremental steps for dynamic loader effect
        return Math.min(prev + Math.floor(Math.random() * 18) + 10, 100);
      });
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Ambient background glow */}
          <div
            style={{
              position: 'absolute',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          {/* Logo & Brand Content */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '2rem', display: 'inline-block' }}
            >
              <img
                src="/logo.png"
                alt="openGtech"
                style={{ height: '65px', filter: 'drop-shadow(0 0 25px rgba(0, 210, 255, 0.4))' }}
              />
            </motion.div>

            {/* Glowing Tech Spinner Ring */}
            <div style={{ position: 'relative', width: '220px', margin: '0 auto 2rem auto' }}>
              <div
                style={{
                  height: '4px',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, #00d2ff, #3a7bd5, #00ff87)',
                    borderRadius: '9999px',
                    boxShadow: '0 0 15px rgba(0, 210, 255, 0.8)',
                  }}
                />
              </div>
            </div>

            {/* Percentage & Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
              }}
            >
              <span>{progress < 100 ? 'ENGINEERING FUTURE...' : 'SYSTEM READY'}</span>
              <span style={{ color: '#00d2ff', fontWeight: 700 }}>{progress}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
