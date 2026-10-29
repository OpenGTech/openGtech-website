'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'OpenDuck ERP',
    description: 'A modular, all-in-one ERP system designed for businesses to streamline operations, workflows, and industry-specific applications.',
    tag: 'ERP',
    image: '/main_Product.png',
    screenshots: [
      { src: '/main_Product.png', label: 'Apps & Modules' },
      { src: '/Product_openduck.png', label: 'Launcher' }
    ]
  },
  // {
  //   name: 'Founder Hub',
  //   description: 'A dedicated platform for founders to track their product development journey, milestones, and feedback.',
  //   tag: 'Platform'
  // }
];

function ProductCard({ product, index }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const screenshots = product.screenshots || (product.image ? [{ src: product.image, label: 'Preview' }] : []);
  const currentImage = screenshots[activeImageIndex]?.src || product.image;

  return (
    <motion.div
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
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
          {product.description}
        </p>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '460px',
        height: '260px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}>
        {currentImage ? (
          <>
            <img
              src={currentImage}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block'
              }}
            />
            {screenshots.length > 1 && (
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                display: 'flex',
                gap: '6px',
                background: 'rgba(5, 5, 5, 0.75)',
                padding: '4px 6px',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      border: 'none',
                      background: activeImageIndex === idx ? 'var(--accent-color)' : 'transparent',
                      color: activeImageIndex === idx ? '#050505' : 'var(--text-secondary)',
                      fontSize: '0.72rem',
                      fontWeight: activeImageIndex === idx ? 700 : 500,
                      padding: '3px 9px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {shot.label}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <span style={{ color: 'var(--text-secondary)' }}>Product Preview</span>
        )}
      </div>
    </motion.div>
  );
}

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
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
