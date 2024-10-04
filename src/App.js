import React from 'react';
import './App.css';

function App() {
  return (
    <div className="resume">
      <div className="header">
        <h1>KODAI KATO</h1>
        <p className="job-title">FUTURE WEB DEVELOPER</p>
      </div>
      <div className="main-content">
        <div className="left-column">
          <section className="contact">
            <h3>CONTACT</h3>
            <p>kodaikato25@gmail.com</p>
            <p>(+63) 995-635-3697</p>
            <p>Pampanga, Philippines</p>
            <p><a href="#">LinkedIn</a></p>
            <p><a href="#">GitHub</a></p>
          </section>

          <section className="education">
            <h3>EDUCATION</h3>
            <p>Bachelor of Science in Information Technology</p>
            <p>University of the Assumption</p>
            <p>2022-2026</p>
          </section>

          <section className="skills">
            <h3>SKILLS</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
              <li>Git/GitHub</li>
            </ul>
          </section>
        </div>

        <div className="right-column">
          <section className="work-experience">
            <h3>WORK EXPERIENCE</h3>

            <div className="job">
              <h4>Frontend Developer Intern</h4>
              <p>XYZ Tech Solutions</p>
              <p>June 2025 - September 2025 | Pampanga, Philippines</p>
              <ul>
                <li>Developed and maintained responsive web pages using React and CSS.</li>
                <li>Collaborated with backend developers to integrate RESTful APIs.</li>
                <li>Improved user experience by optimizing website performance and accessibility.</li>
              </ul>
            </div>

            <div className="job">
              <h4>Junior Web Developer</h4>
              <p>Freelance Projects</p>
              <p>2026 - Present | Remote</p>
              <ul>
                <li>Built and deployed websites for small businesses using modern web technologies.</li>
                <li>Customized WordPress themes and integrated third-party plugins.</li>
                <li>Provided ongoing maintenance and updates for client websites.</li>
              </ul>
            </div>
          </section>

          <section className="projects">
            <h3>PROJECTS</h3>
            <div className="project">
              <h4>Portfolio Website</h4>
              <ul>
                <li>Developed a personal portfolio website showcasing projects and skills using React and CSS.</li>
                <li>Implemented responsive design for seamless viewing on mobile and desktop devices.</li>
              </ul>
            </div>

            <div className="project">
              <h4>E-commerce Web App</h4>
              <ul>
                <li>Created a fully functional e-commerce application with React, Node.js, and MongoDB.</li>
                <li>Implemented features like product filtering, shopping cart, and user authentication.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
