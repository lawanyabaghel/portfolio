import React from "react";
import { skills } from "../../configs";

export default function Skills(params) {
  const generateSkillsGrid = () => {
    const rows = [];

    for (let i = 0; i < skills.length; i += 4) {
      rows.push(
        <div className="columns" key={i}>
          {(() => {
            const columns = [];

            for (let j = i; j < i + 4; j++) {
              if (skills[j]) {
                columns.push(
                  <div
                    className="column is-centered card m-5 has-background-danger-light"
                    style={{ borderRadius: "20px" }}
                    key={skills[j].skill}
                  >
                    <div className="card-image has-text-centered">
                      <figure class="image is-64x64 is-inline-block">
                        <img
                          className="image"
                          src={skills[j].link}
                          alt="skill"
                        />
                      </figure>
                    </div>

                    <div className="card-content">
                      <div className="subtitle">{skills[j].skill}</div>
                    </div>
                  </div>
                );
              }
            }

            return columns;
          })()}
        </div>
      );
    }

    return rows;
  };
  return (
    <div id="Skills">
      <section className="hero mb-6">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 is-spaced">My Skills</h1>
            <div className="content">{generateSkillsGrid()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
