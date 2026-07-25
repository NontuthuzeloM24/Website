import React, { useState, useEffect, useRef } from "react";

const services = [
  { icon: '🎨', title: 'Custom Design',     description: 'Tailored to your personal brand - your colours, your voice, your story on every page.' },
  { icon: '📱', title: 'Responsive Layout', description: 'Looks and works great on every screen, from mobile to widescreen desktop.' },
  { icon: '✨', title: 'Professional Look', description: 'Clean, modern, trustworthy. A website that works as hard as you do.' },
];

const WhatIDo = () => {
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
    <section id="whatido" ref={ref} style={{ backgroundColor: '#0F1D38', padding: '5rem 0' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '3rem', ...anim(0) }}>
          <span style={{ color: '#4F8EF7', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.6rem' }}>
            What I Do
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Everything you need to stand out
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
            I help professionals turn who they are and what they do into a strong online presence - from layout to final build, focused on clarity and a professional finish that works across all devices.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: '#162040',
                border: '1px solid rgba(79,142,247,0.2)',
                borderRadius: '16px',
                padding: '2rem',
                cursor: 'default',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 20px 40px rgba(79,142,247,0.18)' : 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ...anim(0.15 + i * 0.12),
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.65rem' }}>{s.title}</h3>
              <p style={{ color: '#94A3B8', lineHeight: 1.75, margin: 0 }}>{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;