'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
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
        padding: '0 2rem',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
        <img src="/logo.png" alt="OpenGtech" style={{height: '50px'}}/>
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="#services" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Services</Link>
        <Link href="#founders" style={{ fontWeight: 500, transition: 'color 0.2s' }}>For Founders</Link>
        <Link href="#products" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Products</Link>
        <button className="btn btn-primary">Let's Build</button>
      </div>
    </motion.nav>
  );
}
