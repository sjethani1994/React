import React from "react";
const ContactForm = () => {
  return (
    <div className="footer-col">
      <h2>Contact us</h2>
      <p className="lead fs-4 text-secondary mb-3">
        Stay in the loop! Subscribe to our blog for a weekly dose of news,
        updates, helpful tips, and exclusive offers.
      </p>
      <form action="#">
        <input type="text" placeholder="Your email" required />
        <button
          type="button"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "7px 15px",
          }}
        >
          Button
        </button>
      </form>
      <div className="icons">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
      </div>
    </div>
  );
};

export default ContactForm;
