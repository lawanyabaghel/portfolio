import React from "react";

export default function Navbar(params) {
  return (
    <>
      <nav class="navbar is-transparent">
        <div class="container">
          <div id="navMenu" class="navbar-menu is-size-20">
            <div class="navbar-start">
              <a href="#Home" class="navbar-item">
                Home
              </a>
              <a href="#About" class="navbar-item">
                About
              </a>
              <a href="#Skills" class="navbar-item">
                Skills
              </a>
              <a href="#Projects" class="navbar-item">
                Projects
              </a>
              <a href="#Contact" class="navbar-item">
                Contact
              </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped mt-2">
                  <p class="control">
                    <a
                      href="https://github.com/lawanyabaghel"
                      target="_blank"
                      rel="noreferrer"
                      class="button is-black"
                    >
                      <span class="icon">
                        <i class="fa-brands fa-github"></i>
                      </span>
                      <span>Github</span>
                    </a>
                  </p>
                  <p class="control">
                    <a
                      class="button is-info"
                      href="https://drive.google.com/file/d/1yz2NlxtnkXrJH5k3qPNsXFSKO3PeALpa/view?usp=drivesdk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="icon">
                        <i class="fa-solid fa-file"></i>
                      </span>
                      <span>Resume</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
