import React, { useContext, useEffect } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import services from "../../data/db";

import Layout from "../../layout/layout";
import ExpertWorker from "../../components/ExpertWorker";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const { user, loading } = useContext(AppContext);

  const Data = [
    {
      title: "Lowest",
      amount: "Upto 60% off on Home Cleaning",
    },
    {
      title: "Festive Sale",
      amount: "Flat 25% off on Home Painting",
    },
    {
      title: "House shifting bonanza",
      amount: "upto 30% off on Packers & Movers",
    },
    
  ];

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(user);
    // if (!user) return navigate("/login");
  }, [user]);

  if (loading) {
    return (
      <div
        id="spinner"
        class="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          class="spinner-grow "
          style={{ color: "#ebb607" }}
          role="status"
        ></div>
      </div>
    );
  } else {
    return (
      <Layout page={"home"} user="customer">
        <div class="container-fluid p-0 mb-5">
          <div
            id="header-carousel"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="w-100" src="/images/carousel-1.jpg" alt="Image" />
                <div class="carousel-caption">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-12 col-lg-10">
                        <h5 class="text-light text-uppercase mb-3 animated slideInDown">
                          Welcome to Apex
                        </h5>
                        <h1 class="display-2 text-light mb-3 animated slideInDown">
                          A Home Service & Repair Company
                        </h1>
                        <ol class="breadcrumb mb-4 pb-2">
                          <li class="breadcrumb-item fs-5 text-light">Home</li>
                          <li class="breadcrumb-item fs-5 text-light">
                            Apartment
                          </li>
                          <li class="breadcrumb-item fs-5 text-light">Flat</li>
                        </ol>
                        <Link
                          to="/about-us"
                          class="btn btn-primary py-md-3 py-2 px-md-5 px-3"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="w-100" src="/images/carousel-2.jpg" alt="Image" />
                <div class="carousel-caption">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-12 col-lg-10">
                        <h5 class="text-light text-uppercase mb-3 animated slideInDown">
                          Welcome to Urbanco
                        </h5>
                        <h1 class="display-2 text-light mb-3 animated slideInDown">
                          Professional Technician & Painting Services
                        </h1>
                        <ol class="breadcrumb mb-4 pb-2">
                          <li class="breadcrumb-item fs-5 text-light">Home</li>
                          <li class="breadcrumb-item fs-5 text-light">
                            Apartment
                          </li>
                          <li class="breadcrumb-item fs-5 text-light">Flat</li>
                        </ol>
                        <Link
                          to="/about-us"
                          class="btn btn-primary py-md-3 py-2 px-md-5 px-3"
                        >
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="container-xxl py-md-5 py-1">
          <div class="container" style={{ maxWidth: "950px" }}>
            <div class="row g-md-5 g-4 align-items-end mb-5">
              <div class="col-lg-6">
                <div class="border-start border-5 border-primary ps-4">
                  <h6 class="text-secondary text-uppercase mb-2">
                    Our Services
                  </h6>
                  <h1 class="display-6 mb-0">All type of home repair</h1>
                </div>
              </div>
              <div class="col-lg-6 text-lg-end">
                <Link
                  class="btn btn-primary py-md-3 py-2 px-md-5 px-3"
                  to="/services"
                >
                  More Services
                </Link>
              </div>
            </div>
            <div class="row g-4 justify-content-center">
              {services.map((item, i) => (
                <Link
                  to={"/service/details/" + item.id}
                  key={i}
                  className="col-md-2 text-decoration-none text-light col-4 text-center p-md-4 p-3 mt-0 pb-0"
                >
                  <div
                    className="w-100 bg-light rounded-circle"
                    style={{ aspectRatio: "1/1", padding: "1rem" }}
                  >
                    <img
                      className="w-100 h-100 object-fit-cover rounded-circle"
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <div>
                    <p
                      style={{ fontWeight: "500" }}
                      class="mb-3 mt-4 card-text"
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div class="container-xxl py-md-5 py-1 mb-5">
          <div class="container">
            <div class="row g-md-5 g-4 align-items-end mb-5">
              <div class="col-lg-6">
                <div class="border-start border-5 border-primary ps-4">
                  <h6 class="text-secondary text-uppercase mb-2">Our Offer</h6>
                  <h1 class="display-6 mb-0">Best Offer</h1>
                </div>
              </div>
            </div>

            <div className="dashboard_cards_lg d-md-flex d-none">
              {Data.map(({ title, amount, rate }) => (
                <div className="dashboard_card mobile text-dark" style={{backgroundColor: '#dbeef4'}}>
                  <div>
                    <span>{title}</span>
                  </div>
                  <div className="dashboard_card_bottom">
                    <h5>₹{amount}</h5>
                    <div className="dashboard_card_bottom_right">
                      <span>{rate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="row g-4 justify-content-center">
              <div className="dashboard_cards_sm d-block d-md-none">
                <Swiper
                  className="Cards"
                  slidesPerView={1}
                  spaceBetween={30}
                  autoplay={{ delay: 100 }}
                >
                  {Data.map(({ title, amount, rate }) => (
                    <SwiperSlide className="dashboard_card mobile text-dark" style={{backgroundColor: '#dbeef4', minHeight: 120}}>
                      <div>
                        <span>{title}</span>
                      </div>
                      <div className="dashboard_card_bottom">
                        <h5>₹{amount}</h5>
                        <div className="dashboard_card_bottom_right">
                          <span>{rate}</span>
                          <div></div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <ExpertWorker />

        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </Layout>
    );
  }
};

export default Home;
