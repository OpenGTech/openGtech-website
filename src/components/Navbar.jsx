'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import VibeTicker from './VibeTicker';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#founders', label: 'For Founders' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '0 1.25rem' : '0 2rem',
          background: 'rgba(5, 5, 5, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 100,
        }}
      >
        {/* Brand logo + rotating vibes directly after logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="OpenGtech" style={{ height: isMobile ? '40px' : '50px' }} />
          </Link>

          {!isMobile && <VibeTicker />}
        </div>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} style={{ fontWeight: 500, transition: 'color 0.2s' }}>
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:contact@opengtech.studio"
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Let&apos;s Build
            </a>
          </div>
        )}

        {/* Hamburger button — mobile only */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              zIndex: 120,
              position: 'relative',
            }}
          >
            {/* Animated hamburger lines → X */}
            <motion.span
              animate={isOpen
                ? { rotate: 45, y: 7, backgroundColor: '#fff' }
                : { rotate: 0, y: 0, backgroundColor: '#fff' }
              }
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                borderRadius: '2px',
                transformOrigin: 'center',
              }}
            />
            <motion.span
              animate={isOpen
                ? { opacity: 0, scaleX: 0 }
                : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                borderRadius: '2px',
                backgroundColor: '#fff',
              }}
            />
            <motion.span
              animate={isOpen
                ? { rotate: -45, y: -7, backgroundColor: '#fff' }
                : { rotate: 0, y: 0, backgroundColor: '#fff' }
              }
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                borderRadius: '2px',
                transformOrigin: 'center',
              }}
            />
          </button>
        )}
      </motion.nav>

      {/* ── Mobile Navigation Drawer ── */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(4px)',
                zIndex: 98,
              }}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '75vw',
                maxWidth: '320px',
                background: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(20px)',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '100px',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div style={{ marginBottom: '1.5rem', width: '100%' }}>
                <VibeTicker showDivider={false} />
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'block',
                      padding: '1rem 0',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#fff',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                style={{ marginTop: '2rem' }}
              >
                <a
                  href="mailto:contact@opengtech.studio"
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.5rem',
                    fontSize: '1rem',
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none'
                  }}
                >
                  Let&apos;s Build
                </a>
              </motion.div>

              {/* Decorative glow */}
              <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
