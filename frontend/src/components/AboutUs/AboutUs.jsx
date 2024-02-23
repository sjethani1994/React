import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="row" style={{ justifyContent: "center", gap: "40px" }}>
        <div className="column">
          <div className="card aboutus-card">
            <img
              src="https://avatars.githubusercontent.com/u/46923713?v=4"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Sumit Jethani</h2>
              <p className="title">Full Stack Developer</p>
              <p>Experience Angular and NodeJs Developer.</p>
              <p>sjethani651@gmail.com</p>
              <p>
                <button className="button">
                  <a href="https://github.com/sjethani1994" target="blank">
                    GitHub Profile Link
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://avatars.githubusercontent.com/u/132933699?v=4"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Mohit Choudhary</h2>
              <p className="title">Full Stack Developer</p>
              <p>Experience FrontEnd Developer</p>
              <p>mrmohit01@gmail.com</p>
              <p>
                <button className="button">
                  <a href="https://github.com/mohit01110">
                    GitHub Profile Link
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
