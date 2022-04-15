import React from "react";

export default function Contact(params) {
  return (
    <>
      <div className="spacer long-spacer layer4"></div>
      <section
        id="Contact"
        class="section"
        style={{ backgroundColor: "#4FACF7" }}
      >
        <div class="title-wrapper has-text-centered">
          <h2 class="title is-2 is-spaced has-text-black">
            Drop me a line or two{" "}
          </h2>
          <h3 class="subtitle is-5 is-muted">I'd love to hear from You</h3>
          <div class="divider is-centered"></div>
        </div>

        <div class="content-wrapper">
          <div class="columns">
            <div class="column is-6 is-offset-3">
              <form>
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <input
                      class="input is-medium is-info is-rounded"
                      type="text"
                      placeholder="First Name *"
                    />
                  </div>
                  <div class="column is-6">
                    <input
                      class="input is-medium is-info is-rounded"
                      type="text"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div class="column is-6">
                    <input
                      class="input is-medium is-info is-rounded"
                      type="email"
                      placeholder="Email *"
                    />
                  </div>
                  <div class="column is-6">
                    <input
                      class="input is-medium is-info is-rounded"
                      type="text"
                      placeholder="Occupation"
                    />
                  </div>
                  <div class="column is-12">
                    <textarea
                      class="textarea textarea-rounded is-info"
                      rows="6"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div class="column is-12">
                    <div class="form-footer has-text-right mt-10">
                      <button class="button cta is-large primary-btn form-button raised is-white is-rounded">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
