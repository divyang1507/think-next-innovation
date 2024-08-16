import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h3>Contact us</h3>
        <div className="contactContainer">
          <div className="contact-1">
            <h2> Connect with Next Innovation</h2>
            <h4> We are Here to Help</h4>
            <p></p>
          </div>
          <div className="contact-2">
            <form>
              <div class="inputbox">
                <input type="text" required />
                <label for="name"> Name</label>
              </div>
              <div class="inputbox">
                <input type="email" required />
                <label for="name"> Email</label>
              </div>
              <div class="inputbox">
                <textarea type="text" required></textarea>
                <label for="name"> Message</label>
              </div>
              <button class="btn"> Contact us
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
