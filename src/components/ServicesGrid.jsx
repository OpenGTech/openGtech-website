'use client';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Digital Engineering',
    description: 'Custom web and mobile applications engineered for performance, security, and scalability.',
    color: 'var(--accent-color)'
  },
  {
    title: 'AI Solutions',
    description: 'Integrate advanced machine learning models and generative AI to automate complex workflows.',
    color: 'var(--accent-secondary)'
  },
  {
    title: 'Business Automation',
    description: 'Streamline operations with tailored automation scripts, CRMs, and internal tools.',
    color: '#8e2de2'
  },
  {
    title: 'Local Business Growth',
    description: 'Digital transformation strategies specifically designed to boost local market presence.',
    color: '#f000ff'
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" style={{ padding: '8rem 0', background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Core <span className="gradient-text">Expertise</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel"
              style={{
                padding: '3rem 2rem',
                borderTop: `4px solid ${service.color}`,
                cursor: 'pointer'
              }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.1rem' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
