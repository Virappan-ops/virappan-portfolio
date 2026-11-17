const projects = [
  {
    number: "01",
    name: "ClipForge AI",
    type: "AI-powered video workflow",
    description: "A creator-focused platform concept for turning long-form content into short, shareable videos with an AI-assisted workflow.",
    stack: ["Next.js", "Node.js", "Python", "Ollama"],
    status: "In development",
  },
  {
    number: "02",
    name: "Ionix",
    type: "AI productivity hub",
    description: "A productivity workspace concept combining tasks, notes, planning and AI assistance in one interface.",
    stack: ["React", "Node.js", "MongoDB", "Gemini API"],
    status: "Project",
  },
  {
    number: "03",
    name: "Offline-first PWA Storefront",
    type: "Progressive web app",
    description: "A storefront concept focused on resilient browsing and cart persistence with service workers and IndexedDB.",
    stack: ["React", "PWA", "IndexedDB"],
    status: "Project",
  },
];

const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Python", "Machine Learning", "Tailwind CSS", "Git", "REST APIs"];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home">V<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hero-kicker">HELLO, WORLD. I&apos;M</p>
        <h1>Virappan<span className="accent">.</span></h1>
        <h2>Building useful things with <span>code & curiosity.</span></h2>
        <p className="hero-copy">
          Computer Science student focused on software development, AI/ML,
          and building practical products from ideas.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
          <a className="button button-quiet" href="#contact">Get in touch <span>↗</span></a>
        </div>
        <div className="hero-meta">
          <span>BASED IN INDIA</span><span>·</span><span>CSE / AI & ML</span><span>·</span><span>ALWAYS LEARNING</span>
        </div>
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      </section>

      <section className="section shell" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Curious mind.<br /><span>Builder mindset.</span></h2>
          <div>
            <p className="large-copy">I enjoy exploring how technology works and turning ideas into clean, useful experiences.</p>
            <p className="muted">My interests sit at the intersection of full-stack development and AI. I like learning by building, experimenting with tools, and improving products one iteration at a time.</p>
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <div className="section-label">02 / TOOLKIT</div>
        <div className="section-heading">
          <h2>Things I work with<span className="accent">.</span></h2>
          <p className="muted">A growing toolkit for building and shipping software.</p>
        </div>
        <div className="skill-list">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="section-heading">
          <h2>Projects in progress<span className="accent">.</span></h2>
          <p className="muted">A few things I&apos;ve been working on and exploring.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="muted project-desc">{project.description}</p>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <div className="project-status">{project.status} <span>↗</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="section-label">04 / CONTACT</div>
        <p className="contact-kicker">HAVE AN IDEA OR AN OPPORTUNITY?</p>
        <h2>Let&apos;s build<br /><span>something good.</span></h2>
        <p className="muted">I&apos;m open to connecting about software, AI, projects, and learning opportunities.</p>
        <a className="button button-primary" href="mailto:virappan22@gmail.com">Email me <span>↗</span></a>
        <p className="footer-note">© {new Date().getFullYear()} Virappan. Built with curiosity.</p>
      </section>
    </main>
  );
}
