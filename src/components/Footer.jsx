'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '4rem 0 2rem 0',
      background: 'var(--bg-surface)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          <div>
            <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '1rem' }}>
              open<span className="gradient-text">Gtech</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Empowering founders and local businesses with Digital Engineering, AI, and Automation.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.2rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              <li><Link href="#services">Digital Engineering</Link></li>
              <li><Link href="#services">AI & Automation</Link></li>
              <li><Link href="#services">Local Business Growth</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', fontSize: '1.2rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              <li><Link href="#founders">For Founders</Link></li>
              <li><Link href="#products">Products</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} openGtech. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
