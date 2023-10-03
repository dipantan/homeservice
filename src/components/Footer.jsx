import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      class="container-fluid bg-dark footer mt-md-5 mt-1 pt-md-5 pt-1 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container py-md-5 py-4">
        <div class="row g-md-5 g-4 ">
          <div class="col-lg-3 col-md-6">
            <h1 class="text-white mb-md-4 mb-3">
              <i class="fa fa-building text-primary me-3"></i>URBANCO
            </h1>

            <div class="d-flex pt-2">
              <a class="btn btn-square btn-outline-primary me-1" href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square btn-outline-primary me-1" href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square btn-outline-primary me-1" href="#">
                <i class="fab fa-youtube"></i>
              </a>
              <a class="btn btn-square btn-outline-primary me-0" href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-md-4 mb-3 ">Address</h4>
            <p>
              <i class="fa fa-map-marker-alt me-3"></i>krishnanagar, West
              Bengal, India
            </p>
            <p>
              <i class="fa fa-phone-alt me-3"></i>+91 96091 26861
            </p>
            <p>
              <i class="fa fa-envelope me-3"></i>serviceh496@gmail.com
            </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-md-4 mb-3">Quick Links</h4>
            <Link class="btn btn-link" to="/about-us">
              About Us
            </Link>
            <Link class="btn btn-link" to="/contact-us">
              Contact Us
            </Link>
            <Link class="btn btn-link" to="/services">
              Our Services
            </Link>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-md-4 mb-3">Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates</p>
            <div class="position-relative mx-auto" style={{ maxWidth: 400 }}>
              <input
                class="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid copyright">
        <div class="container">
          <div class="row">
            <div class="text-center mb-md-0">
              &copy; <Link to="/">UNBANCO</Link>, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
