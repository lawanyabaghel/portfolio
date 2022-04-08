import React from "react";
import { projects } from "../../configs";

function Projects(props) {
  const generateProjectsPanel = () => {
    return projects.map((project, index) => {
      const { name, desc, image, demo, source } = project;

      return (
        <div className="column" key={index}>
          <div
            className="card"
            style={{ height: "600px", opacity: "0.9", borderRadius: "50px" }}
          >
            <div className="card-image">
              <figure class="image is-4by3">
                <img src={image} alt="Placeholder" />
              </figure>
              <div className="card-content">
                <p className="title is-4">{name}</p>
                <p class="subtitle is-6">{desc}</p>
                <a href={source} target="_blank" rel="noopener noreferrer">
                  <span className="icon is-large">
                    <i className="fab fa-github fa-lg colorBlack"></i>
                  </span>
                </a>
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <span className="icon is-large">
                    <i className="fas fa-laptop-code fa-lg colorBlack"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section id="Projects" className="spacer fullscreen-spacer layer3 mt-20">
      <div className="hero pt-6">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 is-spaced has-text-black">
              My Recent Works
            </h1>
            <div className="content columns">{generateProjectsPanel()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
