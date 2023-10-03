import React from "react";

const ExpertWorker = () => {
  return (
    <div class="container-xxl pb-5 pt-0">
      <div class="container">
        <div class="row g-md-5 g-4 align-items-end mb-md-5 mb-4">
          <div class="col-lg-6" >
            <div class="border-start border-5 border-primary ps-4">
              <h6 class="text-secondary text-uppercase mb-2">Our Team</h6>
              <h1 class="display-6 mb-0">Our Expert Worker</h1>
            </div>
          </div>
          <div class="col-lg-6">
            <p class="mb-0">
              Dedicated professionals with unparalleled expertise and a
              commitment to excellence in every project.
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative">
              <img class="img-fluid" src="/images/team-1.jpg" alt="" />
              <div class="team-text bg-white p-4">
                <h5 style={{ color: "black" }}>Raja Mondal</h5>
                <span style={{ color: "#8d92a4" }}>Electrician</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative">
              <img class="img-fluid" src="/images/team-2.jpg" alt="" />
              <div class="team-text bg-white p-4">
                <h5 style={{ color: "black" }}>Suvo Sarkar</h5>
                <span style={{ color: "#8d92a4" }}>Plumber</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative">
              <img class="img-fluid" src="/images/team-3.jpg" alt="" />
              <div class="team-text bg-white p-4">
                <h5 style={{ color: "black" }}>Somnath Biswas</h5>
                <span style={{ color: "#8d92a4" }}>Painter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertWorker;
