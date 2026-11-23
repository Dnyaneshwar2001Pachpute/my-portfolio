
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left side - Profile photo */}
        <div className="about-image">
          <div className="profile-frame">
            <img
              src="/images/profile.png"
              alt="Dnyaneshwar Pachpute"
            />
          </div>
          <div className="image-decoration"></div>
        </div>

        {/* Right side - Introduction */}
        <div className="about-content">
          <span className="about-label">ABOUT ME</span>

          <h1>
            Hello, I'm <span>Dnyaneshwar Pachpute</span>
          </h1>

          <h2>Full Stack Java Developer</h2>

          <p>
            I am a passionate Full Stack Java Developer with a
            Bachelor of Science degree and professional Full Stack
            Java Developer training.
          </p>

          <p>
            I enjoy developing responsive websites and web
            applications using modern technologies. My technical
            interests include React.js, Java, Spring Boot,
            JavaScript and MySQL.
          </p>

          <p>
            I have worked on real-world projects, including
            business websites and web applications. I am
            continuously learning new technologies and improving
            my development skills.
          </p>

          {/* Personal details */}
          <div className="about-info-list">
            <div>
              <strong>Profession:</strong>
              <span>Full Stack Java Developer</span>
            </div>

            <div>
              <strong>Education:</strong>
              <span>B.Sc.</span>
            </div>

            <div>
              <strong>Status:</strong>
              <span>Fresher / Open to Opportunities</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="about-buttons">
            <a
              href="/resume.pdf"
              className="about-btn primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume <span>↓</span>
            </a>

            <a
              href="mailto:pachputednyaneshwar9@gmail.com"
              className="about-btn secondary-btn"
            >
              Contact Me <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
