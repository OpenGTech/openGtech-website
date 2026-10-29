'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { vibeMessages } from '@/data/vibeMessages';

export default function VibeTicker({ showDivider = true }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % vibeMessages.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const current = vibeMessages[index];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        overflow: 'hidden',
        height: '32px',
        userSelect: 'none',
        verticalAlign: 'middle',
      }}
    >
      {/* Subtle separator */}
      {showDivider && (
        <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '0.85rem' }}>/</span>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>{current.emoji}</span>
          <span
            style={{
              fontSize: '0.84rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              letterSpacing: '0.15px',
            }}
          >
            {current.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}