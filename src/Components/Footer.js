import React, { useState } from "react";
import "./Footer.css";
import { ReactComponent as Facebook } from "../Assets/facebook.svg";
import { ReactComponent as Instagram } from "../Assets/instagram.svg";
import { ReactComponent as Twitter } from "../Assets/twitter.svg";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("email: ", email);

    if (email === "") {
      alert("Can't submit empty feedback");
      return;
    }

    fetch(
      "https://module-7-test-15b16-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mail : email
        }),
      }
    )

    setEmail("");

    alert("submitted feedback");
  };

  return (
    <div className="footer">
      <div className="footer-brand">
        <h3 className="footer-brand-name">AccioJob</h3>
        <div className="footer-handles-icons">
          <span>
            <Facebook />
          </span>
          <span>
            <Instagram />
          </span>
          <span>
            <Twitter />
          </span>
        </div>
      </div>
      <div className="footer-horizontal-line"></div>
      <div className="footer-row-columns">
        <div className="footer-column">
          <h5>Company Info</h5>
          <div className="footer-column-links">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="footer-column">
          <h5>Legal</h5>
          <div className="footer-column-links">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="footer-column">
          <h5>Features</h5>
          <div className="footer-column-links">
            <p>Business Marketing</p>
            <p>User Analytics</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="footer-column">
          <h5>Resources</h5>
          <div className="footer-column-links">
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </div>
        <div className="footer-column-get-in-touch">
          
          <form onSubmit={handleSubmit}>
          <h5>Get In Touch</h5>
            <input
              type="email"
              name="subscribe"
              placeholder="Your Email"
              onChange={handleEmailChange}
              value={email}
            ></input>
            <label htmlFor="subscribe">
              <button type="submit">Subscribe</button>
            </label>
            <p>Lorem impsum dolor amit</p>
          </form>
        </div>
      </div>
      <div className="footer-made-with-love">
        <p>Made with ❤️ at AccioJob</p>
      </div>
    </div>
  );
}

export default Footer;