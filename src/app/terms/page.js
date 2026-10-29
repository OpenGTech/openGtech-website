'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <main style={{ minHeight: '100vh', background: '#050505', color: '#f5f5f7' }}>
      <Navbar />

      <section style={{ paddingTop: '140px', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              color: 'var(--accent-color)',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontSize: '0.85rem'
            }}>
              Legal Agreement
            </p>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}>
              Terms of <span className="gradient-text">Service</span>
            </h1>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '3rem' }}>
              Last updated: August 4, 2026
            </p>

            <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>1. Agreement to Terms</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  By accessing or using the website, products, and services provided by <strong>openGtech</strong> ("Company", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to all terms, you may not access or use our platform or services.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>2. Services Offered</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  openGtech provides digital engineering, custom software design, AI agent integration, workflow automation, growth optimization, and consulting services for founders and businesses. Specific project deliverables, scope, timelines, and financial terms are governed by individual Master Services Agreements (MSAs) or Statements of Work (SOWs) executed between openGtech and the client.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>3. Intellectual Property Rights</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Unless otherwise stipulated in a signed Statement of Work, all custom deliverables created exclusively for a client upon full payment become the intellectual property of the client. openGtech retains all rights to its pre-existing tools, proprietary frameworks, open-source libraries, and core technology modules.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>4. Client Obligations</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  When working with openGtech, clients agree to:
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li>Provide timely feedback, required credentials, assets, and information necessary for project execution.</li>
                  <li>Ensure all assets and data provided to openGtech do not violate third-party intellectual property or privacy rights.</li>
                  <li>Maintain confidentiality of sensitive credentials and project specifications shared during the engagement.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>5. Limitation of Liability</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  To the maximum extent permitted by law, openGtech shall not be liable for any indirect, incidental, consequential, special, or punitive damages resulting from your use of our services, website, or third-party API dependencies. Our total cumulative liability shall not exceed the amount paid by you to openGtech for the specific service in question.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>6. Termination</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We reserve the right to suspend or terminate access to our website or services immediately, without prior notice, if you breach any provision of these Terms of Service or engage in unlawful activities.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>7. Governing Law & Modifications</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  These terms are governed by and construed in accordance with applicable laws. We reserve the right to update or modify these Terms of Service at any time. Continued use of our site or services after changes take effect constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>8. Contact Us</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  For any legal inquiries regarding these Terms of Service, please contact us at <a href="mailto:contact@opengtech.studio" style={{ color: 'var(--accent-color)' }}>contact@opengtech.studio</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
