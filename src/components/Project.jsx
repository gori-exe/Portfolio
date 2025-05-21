import React from "react";

const projects = [
  {
    title: "Amazon Clone",
    description: "An interactive and responsive front-end clone of amazon.",
    tech: ["HTML", "CSS"],
    github: "https://mkgdevelopers.github.io/amazon-clone/",
    live: "",
  },
  {
    title: "Form Validation App",
    description: "React.js Interactive form with real-time validation using controlled components. Strong error handling and input feedback.",
    tech: ["React", "CSS"],
    github: "",
    live: "https://form-validation-five-pearl.vercel.app/",
  },
  {
    title: "Zombie Shutter",
    description: "A simple JavaScript game where players shoot incoming zombies. Features score tracking and difficulty scaling.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://mkgdevelopers.github.io/zombie-shooter/",
    live: "",
    
  },
];

const Project = () => {
  return ( 
    <section className="projects-section">
      <h2 href="" className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tech"> {project.tech.join(", ")}</p>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <div className="borderline">
      
    </div>
    </section>
    
  );
};

export default Project;





