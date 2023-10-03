import React, { useEffect } from "react";
import Layout from "../../layout/layout";
import HeaderSecondary from "../../components/HeaderSecondary";
import ExpertWorker from "../../components/ExpertWorker";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <Layout page={"about"}>
      <HeaderSecondary title={"About Us"} />
      <div class="container-xxl pb-5 pt-md-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                class="position-relative overflow-hidden h-100"
                style={{ minHeight: 400 }}
              >
                <img
                  class="position-absolute w-100 h-100"
                  src="/images/electrician.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                {/* <div
                  class="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div class="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                    <h1 class="text-white">25</h1>
                    <h2 class="text-white">Years</h2>
                    <h5 class="text-white mb-0">Experience</h5>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <div class="border-start border-5 border-primary ps-4 mb-5">
                  <h6 class=" text-uppercase mb-2 text-secondary">About Us</h6>
                  <h1 class="display-6 mb-0">
                    Home Service Solutions for Homes & Industries!
                  </h1>
                </div>
                <p>
                  Welcome to UrbanCo Services, your trusted partner for all your
                  home maintenance needs. Our skilled professionals handle
                  plumbing, electrical work, carpentry, and more, ensuring your
                  home is safe and comfortable.
                </p>
                <p class="mb-4">
                  At UrbanCo Services, we cover everything from landscaping to
                  painting. Let us make your dream home a reality. Book your
                  appointment today!
                </p>
                <div class="border-top mt-4 pt-4">
                  <div class="row g-4">
                    <div
                      class="col-sm-4 d-flex wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                      <h6 class="mb-0">Ontime at services</h6>
                    </div>
                    <div
                      class="col-sm-4 d-flex wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                      <h6 class="mb-0">24/7 hours services</h6>
                    </div>
                    <div
                      class="col-sm-4 d-flex wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <i class="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                      <h6 class="mb-0">Verified professionals</h6>
                    </div>
                  </div>
                </div>

                <div class="row g-4 mt-md-4 mt-2 ">
                <div class="col-6">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                    <h1 class="ms-3 mb-0">43+</h1>
                  </div>
                  <h5 class="mb-0">Happy Clients</h5>
                </div>
                <div class="col-6">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                    <h1 class="ms-3 mb-0">48+</h1>
                  </div>
                  <h5 class="mb-0">Projects Done</h5>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExpertWorker />
    </Layout>
  );
};

export default AboutUs;
