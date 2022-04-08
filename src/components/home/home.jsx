import React from "react";
import { about } from "../../configs";

function Home(props) {
  return (
    <section id="Home" className="is-relative section">
      <div className="container">
        <div className="columns">
          <div className="column" style={{ margin: "auto" }}>
            <p class="title is-2">Hi there!</p>
            <p class="subtitle is-3">
              I am {`${about.firstName} ${about.lastName}`}
            </p>
            <p>{about.shortDesc}</p>
          </div>
          <div className="column">
            <img
              src={require("../../assets/vecteezy_woman-analyzes-seo-analytics-technology_.jpg")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
