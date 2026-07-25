import React, { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0B1426 0%, #0F1D38 55%, #162040 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '-180px', right: '-180px',
        width: '560px', height: '560px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,142,247,0.13) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-120px', left: '-120px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)', textAlign: 'center', position: 'relative', zIndex: 1, width: '100%' }}>

        {/* Badge */}
        <div style={{ marginBottom: '1.25rem', ...anim(0) }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: 'rgba(79,142,247,0.12)',
            color: '#93C5FD',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            border: '1px solid rgba(79,142,247,0.3)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            ✦ Web Design & Development
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.6rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #93C5FD 55%, #60A5FA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          ...anim(0.15),
        }}>
          Designing and building custom websites for professionals who want to showcase their personal brand online
        </h1>

        {/* Subtext */}
        <p style={{
          color: '#94A3B8',
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          lineHeight: 1.75,
          maxWidth: '580px',
          margin: '0 auto 2.5rem',
          ...anim(0.3),
        }}>
          I create clean, modern, mobile-friendly websites that present you clearly and confidently.
        </p>

        {/* CTA */}
        <div style={anim(0.45)}>
          <a href="#contact"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #4F8EF7, #3B7DDD)',
              color: '#fff',
              borderRadius: '12px',
              padding: '0.9rem 2.2rem',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(79,142,247,0.4)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(79,142,247,0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(79,142,247,0.4)';
            }}
          >
            Get a website that represents you →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
