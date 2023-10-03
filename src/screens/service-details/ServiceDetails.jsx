import React, { useContext, useEffect, useState } from "react";
import "./service-details.css";
import {  useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Layout from "../../layout/layout";
import services from "../../data/db";
import HeaderSecondary from "../../components/HeaderSecondary";

function findServiceById(id) {
  return services.find(service => service.id === id);
}


const ServiceDetails = () => {
  const navigate = useNavigate();
  const [foundService, setFoundService] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const service = findServiceById(id);
    setFoundService(service);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    console.log(user);
    // if (!user) return navigate("/login");
  }, [user]);

  return (
    <Layout page={'services'}>
      <HeaderSecondary title={foundService?.title} />

      <div class="container-xxl py-md-5 pb-5">
        <div class="container">
          <div class="row g-md-5 g-4">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="position-relative overflow-hidden h-100">
                {/* <video
                  style={{ objectFit: "cover", borderRadius: 3 }}
                  muted
                  autoPlay
                  loop
                  controls
                  className="w-100 h-100"
                  src="/videos/cleaning.mp4"
                  // style={{ minHeight: 400 }}
                ></video> */}

                <img  style={{ aspectRatio: '1/1' }} className="w-100 object-fit-cover" src={foundService?.image} alt="" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <div class="border-start border-5 border-primary ps-4 mb-md-5 mb-4">
                  <h6 class="text-secondary text-uppercase mb-2">Serivce</h6>
                  <h1 class="display-6 mb-0">
                    {foundService?.title}
                  </h1>
                </div>
                <p>
                  {foundService?.description}
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

                <div className="mt-2">
                  <p
                    className="mb-0 d-flex align-items-center gap-3"
                    style={{ fontSize: "30px" }}
                  >
                    ₹700.00{" "}
                    <span
                      className="text-secondary"
                      style={{ textDecoration: "line-through", fontSize: 20 }}
                    >
                      ₹900
                    </span>
                  </p>
                </div>

                <div className="mt-3">
                  <button
                    onClick={() => navigate("/booknow")}
                    style={{ width: "180px" }}
                    className="custom-btn"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
