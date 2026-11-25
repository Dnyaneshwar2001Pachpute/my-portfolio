import { useNavigate } from "react-router-dom";

function Home() {
const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Pachpute Dnyaneshwar</span>
        </h1>

        <h2>Full Stack Java Developer</h2>

        <p className="description">
          I am a passionate Full Stack Java Developer
          who loves creating modern, responsive and
          user-friendly web applications.
          I work with Java, Spring Boot, React.js and
          MySQL.
        </p>

        <div className="hero-buttons">
         <button
         className="btn-primary"
         onClick={() => navigate("/projects")}
         >
          View Projects
         </button>

         <button
         className="btn-outline"
         onClick={() => navigate("/contact")}
         >
          Contact Me 
         </button>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Dnyaneshwar2001Pachpute"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/dnyaneshwar-pachpute/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="photo-glow"></div>

        <div className="photo-frame">
          <img
            src="/images/profile.png"
            alt="Pachpute Dnyaneshwar - Full Stack Java Developer"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
