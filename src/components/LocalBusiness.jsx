'use client';
import { motion } from 'framer-motion';

export default function LocalBusiness() {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '4rem'
        }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 400px' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Scale Your <span className="gradient-text">Local Business</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              You understand your community. We understand technology. Together, we can build custom digital solutions, automated booking systems, and AI-driven customer support to help your local business dominate the market.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-color)' }}>✔</span> Automated Operations
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-color)' }}>✔</span> Digital Storefronts & Apps
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-color)' }}>✔</span> AI Customer Follow-ups
              </li>
            </ul>
            <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Transform Your Business</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel"
            style={{
              flex: '1 1 400px',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0, 210, 255, 0.05))'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏪</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Local Dominance</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Tech that connects you with your community.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
