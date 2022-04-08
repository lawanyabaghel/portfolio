import React from "react";
import { about } from "../../configs";

function About(props) {
  return (
    <>
      <div className="spacer long-spacer layer1"></div>
      <section
        id="About"
        class="is-relative section py-20 has-background-primary"
      >
        <div class="container">
          <div class="columns">
            <div class="is-relative column is-5">
              <img
                class="is-block mx-auto mt-5 mt-0-desktop is-cover"
                style={{ height: "448px" }}
                src={require("../../assets/lawanya.jpeg")}
                alt=""
              />
            </div>
            <div class="column is-7">
              <span class="is-inline-block mb-10">
                <svg
                  width="48"
                  height="48"
                  viewbox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 29.45C26 19.3858 33.4577 8.86747 45.2297 6.16443C45.6793 6.0612 46.1364 6.29467 46.3301 6.71327L47.5161 9.27572C47.7602 9.80299 47.5031 10.4238 46.9877 10.692C43.3044 12.608 40.1644 17.1966 39.3647 20.8059C39.2493 21.3268 39.6241 21.8042 40.1413 21.9351C44.6581 23.0784 48 27.1681 48 32.042C48 38.406 42.832 42 37.602 42C31.572 42 26 37.39 26 29.45ZM0 29.45C0 19.3858 7.45772 8.86747 19.2297 6.16443C19.6793 6.0612 20.1364 6.29467 20.3301 6.71327L21.5161 9.27572C21.7602 9.80299 21.5031 10.4238 20.9877 10.692C17.3044 12.608 14.1644 17.1966 13.3647 20.8059C13.2493 21.3268 13.6241 21.8042 14.1413 21.9351C18.6581 23.0784 22 27.1681 22 32.042C22 38.406 16.832 42 11.602 42C5.572 42 0 37.39 0 29.45Z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </span>
              <h2 class="mb-10 title is-2	has-text-white">
                Be consistent and believe in the process.
              </h2>
              <div className="content">
                <p class="mb-10 is-size-5 has-text-white">
                  {about.longDesc.map((paragraph, index) => (
                    <p className="" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="spacer long-spacer layer2"></div>
    </>
  );
}

export default About;
