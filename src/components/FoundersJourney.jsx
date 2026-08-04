'use client';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const steps = [
  {
    num: '01',
    title: 'The Thinking Stage',
    description: 'You have a vision. We help you validate, refine, and architect the perfect strategy before a single line of code is written.',
    color: '#a855f7',
  },
  {
    num: '02',
    title: 'Digital Engineering',
    description: 'Our expert team builds a robust, scalable, modern foundation using the latest tech stack — designed to grow with you.',
    color: '#3b82f6',
  },
  {
    num: '03',
    title: 'AI & Automation',
    description: 'We integrate intelligent automation and AI to accelerate growth, reduce costs, and give you a competitive edge.',
    color: '#f43f5e',
  },
  {
    num: '04',
    title: 'Local & Global Scale',
    description: 'Whether dominating your local market or expanding globally, we provide the tools and strategy to grow your business.',
    color: '#10b981',
  },
];

function MobileStepCard({ step, i, setActiveStep }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(i);
    }
  }, [isInView, i, setActiveStep]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        padding: '2.5rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      <p style={{
        fontFamily: 'monospace',
        fontSize: '0.7rem',
        letterSpacing: '0.25em',
        color: step.color,
        marginBottom: '1rem',
        opacity: 0.8,
      }}>
        {step.num}
      </p>

      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        marginBottom: '1rem',
        color: '#fff',
      }}>
        {step.title}
      </h3>

      <p style={{
        fontSize: '0.9rem',
        lineHeight: 1.7,
        color: 'rgba(255,255,255,0.4)',
        fontWeight: 400,
      }}>
        {step.description}
      </p>

      <div style={{
        width: '36px',
        height: '2px',
        background: step.color,
        marginTop: '1.5rem',
        borderRadius: '2px',
        boxShadow: `0 0 16px ${step.color}66`,
      }} />

      {/* Subtle glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${step.color}10 0%, transparent 70%)`,
        filter: 'blur(50px)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        zIndex: -1,
      }} />
    </motion.div>
  );
}

function StepCard({ step, i, setActiveStep }) {
  const ref = useRef(null);
  // Trigger when the center of this card hits the center of the viewport
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(i);
    }
  }, [isInView, i, setActiveStep]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 'clamp(3rem, 5vw, 6rem)',
        paddingRight: 'clamp(2rem, 4vw, 4rem)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          color: step.color,
          marginBottom: '2rem',
          opacity: 0.8,
        }}>
          {step.num}
        </p>

        <h3 style={{
          fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          color: '#fff',
        }}>
          {step.title}
        </h3>

        <p style={{
          fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.4)',
          maxWidth: '460px',
          fontWeight: 400,
        }}>
          {step.description}
        </p>

        <div style={{
          width: '48px',
          height: '2px',
          background: step.color,
          marginTop: '2.5rem',
          borderRadius: '2px',
          boxShadow: `0 0 20px ${step.color}66`,
        }} />

        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-20%',
          width: '50vw',
          height: '50vw',
          maxWidth: '500px',
          maxHeight: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${step.color}15 0%, transparent 70%)`,
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: -1,
        }} />
      </motion.div>
    </div>
  );
}

export default function FoundersJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <section id="founders" style={{ position: 'relative', background: '#050505' }}>
        {/* ── MOBILE: Sticky title header ── */}
        <div style={{
          position: 'sticky',
          top: '75px',
          zIndex: 20,
          background: '#050505',
          paddingTop: '1.5rem',
          paddingBottom: '2rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Fade-out gradient at bottom edge for smooth blend */}
          <div style={{
            position: 'absolute',
            bottom: '-24px',
            left: 0,
            right: 0,
            height: '24px',
            background: 'linear-gradient(to bottom, #050505, transparent)',
            pointerEvents: 'none',
            zIndex: 21,
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontFamily: 'monospace',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>
              The Founder&apos;s Path
            </p>

            <h2 style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '0.75rem',
            }}>
              Your Journey, <span className="gradient-text">Engineered.</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              maxWidth: '320px',
            }}>
              We know what founders need at the very beginning. From the first spark of an idea to a fully automated business.
            </p>

            {/* Step dots */}
            <div style={{
              display: 'flex',
              gap: '8px',
              marginTop: '1.25rem',
              alignItems: 'center',
            }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  animate={{
                    width: activeStep === i ? 28 : 6,
                    backgroundColor: activeStep === i ? step.color : 'rgba(255,255,255,0.2)',
                    opacity: activeStep === i ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    height: '6px',
                    borderRadius: '3px',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── MOBILE: Scrolling step cards below ── */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '1rem',
          paddingBottom: '4rem',
        }}>
          {steps.map((step, i) => (
            <MobileStepCard
              key={step.num}
              step={step}
              i={i}
              setActiveStep={setActiveStep}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="founders" style={{ position: 'relative', background: '#050505', maxWidth: '1400px', margin: '0 auto' }}>

      {/* ── LEFT: Sticky title that stays in place ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '42%',
        zIndex: 10,
      }}>
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 'clamp(2rem, 6vw, 6rem)',
          paddingRight: '3rem',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p style={{
              fontFamily: 'monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              The Founder&apos;s Path
            </p>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#fff',
            }}>
              Your<br />
              Journey,<br />
              <span className="gradient-text">Engineered.</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginTop: '2rem',
              maxWidth: '320px',
            }}>
              We know what founders need at the very beginning. From the first spark of an idea to a fully automated business.
            </p>

            {/* Animated Step dots */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '3rem',
              alignItems: 'center',
            }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  animate={{
                    width: activeStep === i ? 36 : 8,
                    backgroundColor: activeStep === i ? step.color : 'rgba(255,255,255,0.2)',
                    opacity: activeStep === i ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    height: '8px',
                    borderRadius: '4px',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Vertical divider ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '42%',
        width: '1px',
        background: 'rgba(255,255,255,0.06)',
        zIndex: 5,
      }} />

      {/* ── RIGHT: Scrolling step cards ── */}
      <div style={{
        marginLeft: '42%',
        width: '58%',
        paddingTop: '12vh',
        paddingBottom: '12vh',
        position: 'relative',
        zIndex: 1,
      }}>
        {steps.map((step, i) => (
          <StepCard
            key={step.num}
            step={step}
            i={i}
            setActiveStep={setActiveStep}
          />
        ))}
      </div>
    </section>
  );
}
