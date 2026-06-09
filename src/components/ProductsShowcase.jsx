'use client';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'AutoScale CRM',
    description: 'An AI-powered CRM designed for local businesses to automate customer follow-ups and lead generation.',
    tag: 'SaaS'
  },
  {
    name: 'Founder Hub',
    description: 'A dedicated platform for founders to track their product development journey, milestones, and feedback.',
    tag: 'Platform'
  }
];

export default function ProductsShowcase() {
  return (
    <section id="products" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Products</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '500px' }}>
              We don't just build for others; we build our own solutions to solve real-world problems.
            </p>
          </div>
          <button className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>View All</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '3rem',
                flexWrap: 'wrap',
                gap: '2rem'
              }}
            >
              <div style={{ flex: 1, minWidth: '300px' }}>
                <span style={{
                  background: 'var(--accent-secondary)',
                  color: '#fff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {product.tag}
                </span>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px' }}>
                  {product.description}
                </p>
              </div>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                height: '250px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'var(--text-secondary)' }}>Product Preview</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
