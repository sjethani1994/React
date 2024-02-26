import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  return (
    <section className="aboutUs-section">
      <div className="card aboutUs-card">
        <div className="img-bx">
          <img
            src="https://avatars.githubusercontent.com/u/46923713?v=4"
            alt="img"
          />
        </div>
        <div className="content">
          <div className="detail">
            <h2>
              Sumit Jethani
              <br />
              <span>Full Stack Web Developer</span>
            </h2>
            <ul className="sci">
              <li>
                <a
                  href="https://www.linkedin.com/in/sumit-jethani-80410416a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sjethani1994"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card aboutUs-card">
        <div className="img-bx">
          <img
            src="https://avatars.githubusercontent.com/u/132933699?v=4"
            alt="img"
          />
        </div>
        <div className="content">
          <div className="detail">
            <h2>
              Mohit Choudhary
              <br />
              <span>Full Stack Web Developer</span>
            </h2>
            <ul className="sci">
              <li>
                <a
                  href="https://in.linkedin.com/in/mohit-choudhary-49924378"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mohit01110"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
