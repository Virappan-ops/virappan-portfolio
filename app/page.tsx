const EMAIL = "virappan22@gmail.com";
const GITHUB = "https://github.com/Virappan-ops";
const LINKEDIN = "https://www.linkedin.com/in/virappan-baralu-18e1881/";

const projects = [
  {
    number: "01",
    name: "Ionix",
    type: "AI productivity hub",
    description:
      "A productivity workspace combining tasks, notes, planning and AI assistance in one clean interface.",
    stack: ["React", "Node.js", "MongoDB", "Gemini API"],
    code: "https://github.com/Virappan-ops/ionix",
    live: "https://ionix-ze3g.onrender.com/",
  },
  {
    number: "02",
    name: "ReWordly",
    type: "Full-stack web app",
    description:
      "A web application built and deployed end to end, with a live version you can try right now.",
    stack: ["React", "Node.js", "Vercel"],
    code: "https://github.com/Virappan-ops/ReWordly",
    live: "https://re-wordly-flame.vercel.app/",
  },
  {
    number: "03",
    name: "PWA Storefront",
    type: "Progressive web app · Capstone",
    description:
      "An offline-first storefront focused on resilient browsing and cart persistence using service workers and IndexedDB.",
    stack: ["React", "PWA", "Service Workers", "IndexedDB"],
    code: "https://github.com/Virappan-ops/Full_Stack_Projects/tree/main/Semester-5/capstone-project/pwa-storefront",
    live: "",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Machine Learning",
  "Tailwind CSS",
  "Git",
  "REST APIs",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          V<span>B.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="screen hero" id="home">
        <div className="inner">
          <div className="eyebrow">
            <span className="pulse" /> AVAILABLE FOR OPPORTUNITIES
          </div>
          <p className="kicker">HELLO, WORLD. I&apos;M</p>
          <h1>
            Virappan <span className="accent">Baralu</span>
            <span className="accent">.</span>
          </h1>
          <h2>
            Building useful things with <span>code &amp; curiosity.</span>
          </h2>
          <p className="hero-copy">
            Computer Science (AI &amp; ML) student focused on full-stack
            development and building practical products from ideas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <span>↘</span>
            </a>
            <a className="button button-quiet" href="#contact">
              Get in touch <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span>·</span>
            <span>CSE / AI &amp; ML</span>
            <span>·</span>
            <span>ALWAYS LEARNING</span>
          </div>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
      </section>

      <section className="screen" id="about">
        <div className="inner">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <h2 className="big-title">
              Curious mind.
              <br />
              <span>Builder mindset.</span>
            </h2>
            <div>
              <p className="large-copy">
                I enjoy exploring how technology works and turning ideas into
                clean, useful experiences.
              </p>
              <p className="muted">
                My interests sit at the intersection of full-stack development
                and AI. I like learning by building, experimenting with tools,
                and improving products one iteration at a time.
              </p>
              <div className="links-row">
                <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="screen" id="skills">
        <div className="inner">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-heading">
            <h2 className="big-title">
              Things I work with<span className="accent">.</span>
            </h2>
            <p className="muted">A growing toolkit for building and shipping software.</p>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="screen" id="projects">
        <div className="inner">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-heading">
            <h2 className="big-title">
              Projects<span className="accent">.</span>
            </h2>
            <p className="muted">Things I&apos;ve built, deployed and kept improving.</p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project" key={p.number}>
                <div className="project-top">
                  <span className="project-number">{p.number}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="muted">{p.description}</p>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.code} target="_blank" rel="noreferrer">Code ↗</a>
                  {p.live && (
                    <a className="live" href={p.live} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="screen contact" id="contact">
        <div className="inner">
          <div className="section-label">04 / CONTACT</div>
          <p className="kicker">HAVE AN IDEA OR AN OPPORTUNITY?</p>
          <h2 className="contact-title">
            Let&apos;s build
            <br />
            <span>something good.</span>
          </h2>
          <p className="muted">
            I&apos;m open to connecting about software, AI, projects, and
            learning opportunities.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${EMAIL}`}>
              Email me <span>↗</span>
            </a>
            <a className="button button-quiet" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
            <a className="button button-quiet" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
          </div>
          <p className="footer-note">
            © {new Date().getFullYear()} Virappan Baralu · {EMAIL}
          </p>
        </div>
      </section>
    </main>
  );
}