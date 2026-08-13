import React, { useState, useEffect, useRef } from "react";

const SERVICE_ID  = "service_nnufaks";
const TEMPLATE_ID = "template_manip69";
const PUBLIC_KEY  = "A_M2bSQ1dXYU9z17v";

const Contacts = () => {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
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
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const anim = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  const inputStyle = (name) => ({
    backgroundColor: "#162040",
    border: `1px solid ${focused === name ? "#4F8EF7" : "rgba(79,142,247,0.22)"}`,
    borderRadius: "10px",
    padding: "0.85rem 1rem",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  return (
    <section
      id="contact"
      ref={ref}
      style={{ backgroundColor: "#0B1426", padding: "5rem 0" }}
    >
      <div style={{ maxWidth: "620px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{ textAlign: "center", marginBottom: "2.5rem", ...anim(0) }}
        >
          <span
            style={{
              color: "#F59E0B",
              fontWeight: 700,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "block",
              marginBottom: "0.6rem",
            }}
          >
            Let's Talk
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Get In Touch
          </h2>
          <p style={{ color: "#94A3B8", lineHeight: 1.75 }}>
            Ready to present your personal brand professionally online? Let's
            build a website that truly represents you.
          </p>
        </div>

        <form style={{ display: "grid", gap: "1.25rem" }}>
          <div style={anim(0.15)}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle("name")}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div style={anim(0.28)}>
            <input
              type="email"
              placeholder="Your Email"
              required
              style={inputStyle("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div style={anim(0.41)}>
            <textarea
              placeholder="Your Message"
              required
              style={{
                ...inputStyle("message"),
                height: "9rem",
                resize: "vertical",
              }}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div style={anim(0.54)}>
            <button
              type="submit"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #4F8EF7, #3B7DDD)",
                color: "#fff",
                border: "none",
                padding: "0.9rem 2rem",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: btnHovered
                  ? "0 8px 28px rgba(79,142,247,0.5)"
                  : "0 4px 20px rgba(79,142,247,0.35)",
                transform: btnHovered ? "translateY(-2px)" : "translateY(0)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Get in Touch →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
