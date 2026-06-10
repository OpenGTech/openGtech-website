'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function StorytellingSection() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%',
        scrub: 1,
        pin: true,
      }
    });

    // Initial state
    gsap.set(text1Ref.current, { scale: 4, opacity: 0 });
    gsap.set(text2Ref.current, { opacity: 0, y: 100, scale: 0.9 });
    gsap.set(text3Ref.current, { opacity: 0, scale: 0.5 });

    // Animate text 1 (Zoom out and fade in)
    tl.to(text1Ref.current, {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: 'power2.out'
    })
      // Fade out text 1, move up slightly
      .to(text1Ref.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: 'power2.inOut'
      }, "+=0.5")
      // Animate text 2 (Slide up and fade in)
      .to(text2Ref.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out'
      }, "<0.5")
      // Fade out text 2
      .to(text2Ref.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: 'power2.inOut'
      }, "+=0.5")
      // Animate text 3 (Epic conclusion zoom in)
      .to(text3Ref.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'elastic.out(1, 0.7)'
      }, "<0.5")
      // Hold it at the end to let the user read it
      .to({}, { duration: 1.5 });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} style={{
      position: 'relative',
      height: '100vh',
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        textAlign: 'center',
        width: '100%'
      }}>
        <h2 ref={text1Ref} style={{
          position: 'absolute',
          fontSize: 'clamp(3rem, 7vw, 8rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          width: '100%',
          maxWidth: '1200px',
          lineHeight: 1.1,
          margin: '0 auto',
          willChange: 'transform, opacity'
        }}>
          We provide the <br />
          <span className="gradient-text">technical muscle</span>
        </h2>

        <h2 ref={text2Ref} style={{
          position: 'absolute',
          fontSize: 'clamp(2.5rem, 6vw, 6rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          width: '100%',
          maxWidth: '1000px',
          lineHeight: 1.1,
          margin: '0 auto',
          willChange: 'transform, opacity'
        }}>
          to turn your <br /> business goals
        </h2>

        <h2 ref={text3Ref} style={{
          position: 'absolute',
          fontSize: 'clamp(4rem, 10vw, 12rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          width: '100%',
          textTransform: 'uppercase',
          margin: '0 auto',
          willChange: 'transform, opacity'
        }}>
          Into <br />
          <span style={{
            background: 'linear-gradient(90deg, #00ff87, #60efff)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>Reality.</span>
        </h2>
      </div>
    </section>
  );
}
