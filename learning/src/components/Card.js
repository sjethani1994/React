import React from "react";
import "../styles/cardStyles.css";
// Card component renders individual cards
export default function Card() {
  return (
    <div className="cards-section mt-4 mb-2">
      {/* First row of cards */}
      <div className="row justify-content-around">
        <div className="col-sm-0 col-lg-1"></div>

        {/* Card 1: Free Shipping and Return */}
        <div className="col-sm-12 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  {/* FontAwesome icon for car */}
                  <i className="fa-solid fa-car card-icons"></i>
                </div>
                <div className="col-10">
                  <h5 className="card-title">Free Shipping and return</h5>
                  <p className="card-text">
                    Free Shipping on all orders over $49.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Money Back Guarantee */}
        <div className="col-sm-12 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  {/* FontAwesome icon for dollar sign */}
                  <i className="fa-sharp fa-solid fa-dollar-sign card-icons"></i>
                </div>
                <div className="col-10">
                  <h5 className="card-title">Money Back Guarantee</h5>
                  <p className="card-text">100% money back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Online Support 24/7 */}
        <div className="col-sm-12 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  {/* FontAwesome icon for headset */}
                  <i className="fa-solid fa-headset card-icons"></i>
                </div>
                <div className="col-10">
                  <h5 className="card-title">Online Support 24/7</h5>
                  <p className="card-text">
                    Awesome support for 24/7 on all days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-0 col-lg-1"></div>
      </div>

      {/* Second row of cards */}
      <div className="row mt-5 justify-content-around">
        <div className="col-sm-0 col-lg-1"></div>

        {/* Card 4: Mens Wear */}
        <div className="col-sm-12 col-lg-3">
          <div className="card">
            <div className="card-body mens-card p-0">
              <div className="row">
                <div className="col-md-5 p-0">
                  {/* Image for Mens Wear */}
                  <img
                    src="mens_2-removebg-preview.png"
                    alt="Mens Wear"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7 cusotm-card-body">
                  <h5 className="card-title">Mens Wear</h5>
                  <p className="card-text">Starting at just $9</p>
                  <a href="#top" className="btn btn-outline-dark mt-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Womens Wear */}
        <div className="col-sm-12 col-lg-3 p-0">
          <div className="card">
            <div className="card-body women-card p-0">
              <div className="row">
                <div className="col-md-5">
                  {/* Image for Womens Wear */}
                  <img src="women_shopping.png" alt="Womens Wear" />
                </div>
                <div className="col-md-7 cusotm-card-body">
                  <h5 className="card-title">Womens Wear</h5>
                  <p className="card-text">Starting at just $9</p>
                  <a href="#top" className="btn btn-outline-dark mt-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: Kids Wear */}
        <div className="col-sm-12 col-lg-3">
          <div className="card">
            <div className="card-body kids-card p-0">
              <div className="row">
                <div className="col-md-5">
                  {/* Image for Kids Wear */}
                  <img
                    src="kids-clothing.png"
                    alt="Kids Wear"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-7 cusotm-card-body">
                  <h5 className="card-title">Kids Wear</h5>
                  <p className="card-text">Starting at just $9</p>
                  <a href="#top" className="btn btn-outline-dark mt-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-0 col-lg-1"></div>
      </div>
    </div>
  );
}
