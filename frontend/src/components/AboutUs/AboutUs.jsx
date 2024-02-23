import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <section className="aboutus-section">
        <h2
          className="d-flex"
          style={{ margin: "10px", justifyContent: "center" }}
        >
          About Us
        </h2>
        <div
          className="row text-center d-flex align-items-stretch"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <div className="col-lg-2"></div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#9d789b" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://avatars.githubusercontent.com/u/46923713?v=4"
                  className="rounded-circle img-fluid"
                  alt="Sumit Jethani"
                  style={{ width: "250px", margin: "10px" }}
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Sumit Jethani</h4>
                <hr />
                <p className="title">Full Stack Developer</p>
                <p>Experience Angular and NodeJs Developer.</p>
                <p>sjethani651@gmail.com</p>
                <p className="dark-grey-text mt-4 text-justify">
                  <i
                    className="fas fa-quote-left pe-2"
                    style={{ paddingRight: "5px" }}
                  ></i>
                  Experienced professional dedicated to enhancing organizational
                  success through fostering relationships, implementing
                  innovative solutions, and driving positive change. Skilled in
                  effective communication, problem-solving, and project
                  management in dynamic environments.
                  <i
                    className="fas fa-quote-right pe-2"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </p>
              </div>
              <div className="card-footer about-card-footer">
                <a
                  href="https://github.com/sjethani1994"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-github"
                    style={{
                      fontSize: "30px",
                      marginRight: "20px",
                      color: "black",
                    }}
                  ></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/sumit-jethani-80410416a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ fontSize: "30px", color: "#0056b3" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://avatars.githubusercontent.com/u/132933699?v=4"
                  className="rounded-circle img-fluid"
                  alt="Lisa Cudrow"
                  style={{ width: "250px", margin: "10px" }}
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Mohit Choudhary</h4>
                <hr />
                <p className="title">Full Stack Developer</p>
                <p>Experience FrontEnd Developer</p>
                <p>mrmohit01@gmail.com</p>
                <p className="dark-grey-text mt-4 text-justify">
                  <i
                    className="fas fa-quote-left pe-2"
                    style={{ paddingRight: "5px" }}
                  ></i>
                  Experienced Technical Content Developer proficient in managing
                  educational portals, conducting data analysis, and offering
                  technical support. Strong background in HTML, CSS, JavaScript,
                  and related technologies, with expertise in front-end and
                  back-end development, Moodle administration, and H5P activity
                  creation. Skilled in problem-solving, creativity, and
                  effective communication for achieving organizational goals.
                  <i
                    className="fas fa-quote-right pe-2"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </p>
              </div>
              <div className="card-footer about-card-footer">
                <a
                  href="https://github.com/mohit01110"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-github"
                    style={{
                      fontSize: "30px",
                      marginRight: "20px",
                      color: "black",
                    }}
                  ></i>
                </a>

                <a
                  href="https://in.linkedin.com/in/mohit-choudhary-49924378"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ fontSize: "30px", color: "#0056b3" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </section>
    </>
  );
}
