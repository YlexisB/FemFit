import React, { useRef } from "react";

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-text">
        <div>
          <h1 className="white">CONTACT US</h1>
        </div>
      </div>
      <hr />
      <div className="contact-text">
        <div>
          <div>
            <h3 className="light-blue-color">HAVE A QUESTION?</h3>
            <p className="white">
              We're here to assist you. Reach out to us for any inquiries, and
              we'll be delighted to provide you with the information you need.
            </p>
          </div>
          <div>
            <form>
              <div class="form-row">
                <div class="input-data">
                  <label for=""> Name</label>
                  <input type="text" required />
                </div>
                <div class="input-data">
                  <label for="">Email</label>
                  <input type="text" required />
                </div>
              </div>

              <div class="form-row">
                <div class="input-data textarea">
                  <label for="">Message</label>
                  <textarea rows="8" cols="80" required></textarea>
                  <br />
                  <div class="underline"></div>

                  <br />
                  <div class="form-row ">
                    <button className="submit-btn" type="submit" value="submit">
                      SEND
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
