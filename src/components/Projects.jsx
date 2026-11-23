
import { useState } from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>MY RECENT WORK</p>
          <h2>
            My <span>Projects</span>
          </h2>
          <p className="project-intro">
            Here are some of my recent web development projects.
          </p>
        </div>

        <div className="projects-grid">

          {/* PROJECT 01 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src="/images/3s-project.png"
                alt="3S Multi Car Service"
              />
            </div>

            <div className="project-info">
              <span className="project-number">PROJECT 01</span>
              <h3>3S Multi Car Service</h3>

              <p>
                A responsive multi-brand car service website
                featuring customer reviews and modern service
                information.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>PostgreSQL</span>
              </div>

              <div className="project-links">
                <a
                  href="https://www.3smulticarservice.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/Dnyaneshwar2001Pachpute/3s-multi-car-service-Pvt-Ltd"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 02 */}
          <div className="project-card">
            <div className="project-image">
              <img
                src="/images/shravani-project.png"
                alt="Shravani Enterprises Website"
              />
            </div>

            <div className="project-info">
              <span className="project-number">PROJECT 02</span>
              <h3>Shravani Enterprises</h3>

              <p>
                A professional website for waterproofing
                and civil repair services with a modern
                business-focused design.
              </p>

              <div className="project-tech">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>

              <div className="project-links">
                <a
                  href="https://sharavanienterprises.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/Dnyaneshwar2001Pachpute/shravani-enterprises"
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
