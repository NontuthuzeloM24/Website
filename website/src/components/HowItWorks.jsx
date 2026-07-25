import React, { useState, useEffect, useRef } from "react";

const steps = [
  { step: 1, title: 'Consultation',   description: 'We talk about your brand, your goals, and what you want your website to say about you.' },
  { step: 2, title: 'Design',         description: 'I craft a layout and look that reflects your identity and only move forward once you love it.' },
  { step: 3, title: 'Build & Deploy', description: 'Your website goes live, polished, responsive, and ready to impress.' },
];

const HowItWorks = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
      const el = ref.current;
      if (!el) return;
  
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setVisible(true);
        return;
      }
  
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true); },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
  }, []);

  const anim = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  return (
    <section id="howitworks" ref={ref} style={{ backgroundColor: '#0B1426', padding: '5rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '3rem', ...anim(0) }}>
          <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.6rem' }}>
            The Process
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            How It Works
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            A simple, transparent 3-step process from first conversation to live website.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {steps.map((s, i) => (
            <div key={s.step}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: '#162040',
                border: '1px solid rgba(245,158,11,0.2)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                cursor: 'default',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 20px 40px rgba(245,158,11,0.14)' : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ...anim(0.15 + i * 0.12),
              }}
            >
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem',
                fontSize: '1.4rem', fontWeight: 800, color: '#fff',
                boxShadow: '0 4px 20px rgba(245,158,11,0.3)',
              }}>
                {s.step}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.65rem' }}>{s.title}</h3>
              <p style={{ color: '#94A3B8', lineHeight: 1.75, margin: 0 }}>{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
