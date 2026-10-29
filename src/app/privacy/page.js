'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Legal Notice
            </p>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}>
              Privacy <span className="gradient-text">Policy</span>
            </h1>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '3rem' }}>
              Last updated: August 4, 2026
            </p>

            <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>1. Introduction</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Welcome to <strong>openGtech</strong> ("we", "our", or "us"). We respect your privacy and are committed to protecting the personal information you share with us when visiting our website or using our digital engineering, AI, automation, and software services.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>2. Information We Collect</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  We collect information to provide better services to our clients and users:
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided when contacting us or booking a consultation.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and website usage statistics via analytics tools.</li>
                  <li><strong>Project Data:</strong> Information, code, or operational context shared with us during project discovery and engineering engagements.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>3. How We Use Your Information</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  The information we collect is used strictly for legitimate business purposes:
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <li>Delivering, maintaining, and improving our digital engineering, AI, and automation solutions.</li>
                  <li>Communicating project updates, proposals, technical support, and administrative notices.</li>
                  <li>Analyzing website traffic and usage trends to optimize user experience.</li>
                  <li>Complying with applicable legal obligations and industry security standards.</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>4. Data Protection & Security</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We implement robust technical and organizational security measures to prevent unauthorized access, disclosure, alteration, or destruction of your personal data. All code bases, API integrations, and client credentials adhere to modern encryption and strict access control guidelines.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>5. Third-Party Services</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  We do not sell or rent your personal data to third parties. We may share necessary data with trusted third-party service providers (such as cloud hosting, analytics, and CRM platforms) solely for performing operational tasks on our behalf under strict confidentiality agreements.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>6. Your Rights</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Depending on your jurisdiction, you have the right to request access to, correction of, or deletion of your personal data held by openGtech. You may also opt out of direct marketing communications at any time.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>7. Contact Us</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  If you have any questions or concerns regarding this Privacy Policy or our data practices, please reach out to us at <a href="mailto:contact@opengtech.studio" style={{ color: 'var(--accent-color)' }}>contact@opengtech.studio</a>.
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
