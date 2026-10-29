import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    number: "01", category: "AI / NLP", name: "AI Resume ATS Analyzer",
    description: "An intelligent resume analyzer that compares a resume with a job description and surfaces skill gaps, keyword coverage, and actionable improvements.",
    stack: ["Python", "NLP", "Sentence Transformers", "Streamlit", "FastAPI"],
    result: "Resume-to-JD matching workflow",
    link: "https://github.com/sachinmlp6-a11y"
  },
  {
    number: "02", category: "Computer Vision", name: "AI Real-time Gym Coach",
    description: "A camera-based fitness assistant that uses pose landmarks to help track exercise repetitions and provide form-oriented feedback.",
    stack: ["Python", "MediaPipe", "OpenCV", "Streamlit", "WebRTC"],
    result: "Live exercise tracking",
    link: "https://ai-gym-trainer-zz8q.onrender.com"
  },
  {
    number: "03", category: "EdTech / Full Stack", name: "SnapClass Attendance",
    description: "A classroom attendance platform concept with teacher and student portals, face-based attendance, optional voice workflows, and database-backed records.",
    stack: ["Python", "Streamlit", "Supabase", "Computer Vision"],
    result: "Teacher + student workflows",
    link: "https://snapclass-sachin.streamlit.app"
  },
  {
    number: "04", category: "Problem Solving", name: "DSA Practice",
    description: "Consistent algorithm practice focused on arrays, sliding windows, hash maps, trees, strings, and problem-solving patterns.",
    stack: ["Java", "Data Structures", "Algorithms", "LeetCode"],
    result: "200+ problems solved",
    link: "https://leetcode.com/u/Qg3kgReutE/"
  }
];

const skills = [
  ["Languages", "Java", "Python", "JavaScript", "SQL"],
  ["Web development", "React", "HTML", "CSS", "REST APIs"],
  ["AI / ML", "NLP", "Computer Vision", "scikit-learn basics", "PyTorch"],
  ["Tools & data", "Git", "GitHub", "Streamlit", "Supabase", "PostgreSQL"]
];

function App() {
  const [active, setActive] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div className="site-shell">
      <div className="grain" />
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>SACHIN<span className="muted">/DEV</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "☰"}</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["About", "Skills", "Projects", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href="mailto:your.email@example.com">Let's talk <span>↗</span></a>
        </div>
      </nav>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES</div>
            <p className="eyebrow">SOFTWARE DEVELOPER · AI/ML ENTHUSIAST</p>
            <h1>Building useful<br />software with <span className="gradient-text">purpose.</span></h1>
            <p className="hero-description">I'm Sachin Kumar Verma, a Computer Science student focused on software engineering, intelligent applications, and clean user experiences.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="button secondary" href="mailto:your.email@example.com">Contact me <span>↗</span></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/sachinmlp6-a11y" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/sachin-kumar-verma-6a253b31b/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/Qg3kgReutE/" target="_blank" rel="noreferrer">LeetCode ↗</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="window-bar"><div className="window-dots"><i></i><i></i><i></i></div><span>developer.ts</span><span>•••</span></div>
              <div className="code-body">
                <div><span className="ln">01</span><span className="purple">const</span> developer = {'{'}</div>
                <div><span className="ln">02</span>&nbsp;&nbsp;name: <span className="green">"Sachin"</span>,</div>
                <div><span className="ln">03</span>&nbsp;&nbsp;focus: [</div>
                <div><span className="ln">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"Software Engineering"</span>,</div>
                <div><span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"AI / ML"</span>,</div>
                <div><span className="ln">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"Full Stack"</span></div>
                <div><span className="ln">07</span>&nbsp;&nbsp;],</div>
                <div><span className="ln">08</span>&nbsp;&nbsp;learning: <span className="orange">true</span>,</div>
                <div><span className="ln">09</span>&nbsp;&nbsp;shipIdeas: () <span className="purple">=&gt;</span> <span className="blue">"build"</span></div>
                <div><span className="ln">10</span>{'}'};</div>
                <div className="terminal-line"><span>➜</span> Ready to build something meaningful<span className="cursor">_</span></div>
              </div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon">✳</span><span><b>AI + Engineering</b><small>Building at the intersection</small></span></div>
            <div className="floating-chip chip-bottom"><span className="chip-icon purple-bg">⌘</span><span><b>200+ DSA problems</b><small>Practice. Learn. Improve.</small></span></div>
          </div>
          <a href="#about" className="scroll-hint"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="section wrap" id="about">
          <div className="section-label"><span>01</span> / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curiosity into code.<br /><span className="muted">Ideas into products.</span></h2>
            <div className="about-copy"><p>I’m pursuing a B.Tech in Computer Science and Engineering at Goel Institute of Technology, Lucknow. I enjoy solving problems, learning new technologies, and turning ideas into practical applications.</p><p>My current focus is strengthening core software engineering skills while building projects across AI/ML, web development, and data-driven applications.</p><div className="education"><span className="edu-icon">↗</span><div><b>B.Tech — Computer Science & Engineering</b><small>Goel Institute of Technology, Lucknow · AKTU</small></div><span className="edu-date">3rd Year</span></div></div>
          </div>
        </section>

        <section className="section skills-section" id="skills"><div className="wrap">
          <div className="section-label"><span>02</span> / TOOLKIT</div>
          <div className="section-heading"><h2>Skills I’m building with.</h2><p>A growing toolkit for solving real problems.</p></div>
          <div className="skill-grid">{skills.map(([title, ...items], i) => <div className="skill-card" key={title}><div className="skill-top"><span className="skill-index">0{i + 1}</span><span className="skill-symbol">{["⌘", "⌁", "✳", "◈"][i]}</span></div><h3>{title}</h3><div className="tags">{items.map(s => <span key={s}>{s}</span>)}</div></div>)}</div>
        </div></section>

        <section className="section wrap" id="projects">
          <div className="section-label"><span>03</span> / SELECTED WORK</div>
          <div className="section-heading project-heading"><div><h2>Projects with a purpose.</h2><p>Experiments, tools, and applications I’ve been working on.</p></div><span className="project-count">0{projects.length} PROJECTS</span></div>
          <div className="filters">{categories.map(c => <button key={c} onClick={() => setActive(c)} className={active === c ? "filter active" : "filter"}>{c}</button>)}</div>
          <div className="project-grid">{filtered.map(p => <article className="project-card" key={p.number}>
            <div className="project-meta"><span>{p.number} / {p.category}</span><a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>↗</a></div>
            <div className={`project-art art-${p.number}`}>
              {p.number === "01" ? <div className="resume-art"><div className="mini-doc"><span></span><span></span><span></span><span></span><i>✓</i></div><div className="score-ring">86<small>MATCH</small></div></div> :
                p.number === "02" ? <div className="gym-art"><div className="person-head"></div><div className="person-body"></div><div className="person-arm left"></div><div className="person-arm right"></div><div className="person-leg left"></div><div className="person-leg right"></div><span className="tracking-point t1"></span><span className="tracking-point t2"></span><span className="tracking-point t3"></span></div> :
                  p.number === "03" ? <div className="class-art"><div className="class-sidebar"></div><div className="class-content"><span></span><span></span><div className="avatar-row"><i></i><i></i><i></i></div><b>Attendance overview</b></div></div> :
                    <div className="dsa-art"><span>{'{ }'}</span><span>[ ]</span><span>O(n)</span><span>01</span><span>101</span></div>}
            </div>
            <div className="project-content"><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-foot"><span>{p.result}</span><a href={p.link} target="_blank" rel="noreferrer">View project ↗</a></div></div>
          </article>)}</div>
          <p className="portfolio-note">Project descriptions reflect current project scope. Add verified live demos, repositories, screenshots, and measurable outcomes as you publish each project.</p>
        </section>

        <section className="contact-section" id="contact"><div className="wrap contact-inner">
          <div className="section-label"><span>04</span> / NEXT STEP</div>
          <p className="eyebrow">HAVE A ROLE, IDEA, OR COLLABORATION?</p>
          <h2>Let’s make something<br /><span className="gradient-text">worth using.</span></h2>
          <p className="contact-copy">I’m open to internships, entry-level opportunities, and projects where I can learn, contribute, and grow as an engineer.</p>
          <a className="button primary large" href="mailto:your.email@example.com">Start a conversation <span>↗</span></a>
          <div className="contact-links"><a href="https://github.com/sachinmlp6-a11y" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/sachin-kumar-verma-6a253b31b/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://leetcode.com/u/Qg3kgReutE/" target="_blank" rel="noreferrer">LeetCode ↗</a></div>
        </div></section>
      </main>
      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>SACHIN<span className="muted">/DEV</span></span></a><span>Designed to grow. Built with React.</span><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Sachin Verma</span></footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
