'use client';
import { motion } from 'framer-motion';
import { Clock, Zap, Layers, CheckCircle2 } from 'lucide-react';
import GrowthDashboard from './GrowthDashboard';

const impactHighlights = [
  {
    title: '24/7',
    label: 'Online presence',
    desc: 'Keep your business accessible to customers around the clock with instant responses and self-serve access.'
  },
  {
    title: 'Less manual work',
    label: 'Automated workflows',
    desc: 'Automate repetitive tasks, notifications, and customer follow-ups so you can focus on core services.'
  },
  {
    title: 'One connected system',
    label: 'Manage enquiries, bookings & customers',
    desc: 'Eliminate scattered spreadsheets and unify all your customer interactions in a single reliable hub.'
  }
];

export default function LocalBusiness() {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--bg-color)', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '4rem',
          marginBottom: '4.5rem'
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
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-color)" /> Automated Operations
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-color)" /> Digital Storefronts & Apps
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-color)" /> AI Customer Follow-ups
              </li>
            </ul>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '1rem 2rem', textDecoration: 'none', display: 'inline-block' }}
            >
              Transform Your Business
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: '1 1 480px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <GrowthDashboard />
          </motion.div>
        </div>

        {/* Measurable Business Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--glass-border)'
          }}
        >
          {impactHighlights.map((item, index) => {
            const icons = [Clock, Zap, Layers];
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 210, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0, 210, 255, 0.2)'
                  }}>
                    <Icon size={18} color="var(--accent-color)" />
                  </div>
                  <span style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {item.title}
                  </span>
                </div>

                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--accent-color)',
                  marginTop: '0.2rem'
                }}>
                  {item.label}
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
