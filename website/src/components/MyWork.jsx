import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: 'kanban Task Manager',
    description:
      'A web app for managing tasks and projects with a kanban board interface.',
    image: '/assets/kanban-task.png',
    link: 'https://nontuthuzelo-mtolo-jslpp.netlify.app/',
  },
  {
    title: 'Podcast App',
    description: 'A web app for streaming and managing podcasts.',
    image: '/assets/apppodcast.png',
    link: 'https://nonmto-25498-fto-2506-group-b-nontu.vercel.app/',
  },
  {
    title: 'Resume Project',
    description: 'An online resume for professionals.',
    image: '/assets/resumeproject.png',
    link: 'https://nontuthuzelo-mtolo-sdf-resume-project.netlify.app/',
  },
];

const MyWork = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
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

  return (
    <section
      id="mywork"
      ref={ref}
      style={{ backgroundColor: "#0F1D38", padding: "5rem 0" }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ textAlign: "center", marginBottom: "3rem", ...anim(0) }}>
          <span
            style={{
              color: "#4F8EF7",
              fontWeight: 700,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "block",
              marginBottom: "0.6rem",
            }}
          >
            Portfolio
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            My Work
          </h2>
          <p
            style={{
              color: "#94A3B8",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Projects I've designed and built - from school assignments to real
            deployments.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#162040",
                border: "1px solid rgba(79,142,247,0.2)",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transform:
                  hoveredCard === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === i
                    ? "0 20px 40px rgba(79,142,247,0.18)"
                    : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ...anim(0.15 + i * 0.12),
              }}
            >
              {/* Image with zoom */}
              <div
                style={{
                  height: "220px",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  onMouseEnter={() => setHoveredImg(i)}
                  onMouseLeave={() => setHoveredImg(null)}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    display: "block",
                    transform: hoveredImg === i ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.4s ease",
                  }}
                />
              </div>

              {/* Card body */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "#94A3B8",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.description}
                </p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredBtn(i)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      border: "1px solid #4F8EF7",
                      backgroundColor:
                        hoveredBtn === i ? "#4F8EF7" : "transparent",
                      color: hoveredBtn === i ? "#fff" : "#4F8EF7",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
