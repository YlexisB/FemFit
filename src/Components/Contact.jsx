import React, { useRef } from "react";
import { CONTACT_STUFF } from "../constants";

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-text">
        <div>
          <h1 className="white">{CONTACT_STUFF.title}</h1>
        </div>
      </div>
      <hr />
      <div className="contact-text">
        <div>
          <div>
            <h3 className="light-blue-color">{CONTACT_STUFF.subtitle}</h3>
            <p className="white">{CONTACT_STUFF.titleP}</p>
          </div>
          <div>
            <form>
              <div class="form-row">
                <div class="input-data">
                  <label for=""> {CONTACT_STUFF.name}</label>
                  <input type="text" required />
                </div>
                <div class="input-data">
                  <label for="">{CONTACT_STUFF.email}</label>
                  <input type="text" required />
                </div>
              </div>

              <div class="form-row">
                <div class="input-data textarea">
                  <label for="">{CONTACT_STUFF.message}</label>
                  <textarea rows="8" cols="80" required></textarea>
                  <br />
                  <div class="underline"></div>

                  <br />
                  <div class="form-row ">
                    <button className="submit-btn" type="submit" value="submit">
                      {CONTACT_STUFF.send}
                    </button>{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
