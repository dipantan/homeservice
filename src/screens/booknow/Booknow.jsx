import React, { useEffect, useState } from "react";
import "./booknow.css";
import Layout from "../../layout/layout";
import HeaderSecondary from "../../components/HeaderSecondary";

const Booknow = () => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const handleLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        function (error) {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Layout page={"services"}>
      <HeaderSecondary title={"Book Now"} />

      <div class="container-xxl pb-5 pt-md-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="border-start border-5 border-primary ps-4 mb-5">
                <h6 class="text-secondary text-uppercase mb-2">Appointment</h6>
                <h1 class="display-6 mb-0">Book Your Appointment Today!</h1>
              </div>
              <p class="mb-0">
                Seamlessly schedule your appointment for a convenient and
                hassle-free experience. Your time is valuable, and we're here to
                make it easy for you.
              </p>
            </div>
            <div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control border-0"
                        id="gname"
                        placeholder="Gurdian Name"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label htmlFor="gname">Your Name</label>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label htmlFor="cname">Your Mobile</label>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label htmlFor="cname">Your Adress</label>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-floating">
                      <input
                        type="date"
                        class="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label htmlFor="cname">Date</label>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-floating">
                      <input
                        type="time"
                        class="form-control border-0"
                        id="cname"
                        placeholder="Child Name"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label htmlFor="cname">Time</label>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <button
                      style={{ borderRadius: 2 }}
                      className="custom-btn w-100"
                      type="button"
                      onClick={handleLocationClick}
                    >
                      Use Current Location
                    </button>
                    {location && (
                      <div>
                        <p>Latitude: {location.latitude}</p>
                        <p>Longitude: {location.longitude}</p>
                        {/* You can use the location data in your application */}
                      </div>
                    )}
                  </div>

                  <div class="col-12 row mt-3">
                    <div className="col-md-2 col-4">
                      <input type="checkbox" /> <label htmlhtmlFor="">Item 1</label>
                    </div>
                    <div className="col-md-2 col-4">
                      <input type="checkbox" /> <label htmlhtmlFor="">Item 2</label>
                    </div>
                    <div className="col-md-2 col-4">
                      <input type="checkbox" /> <label htmlhtmlFor="">Item 3</label>
                    </div>
                    <div className="col-md-2 col-4">
                      <input type="checkbox" /> <label htmlhtmlFor="">Item 4</label>
                    </div>
                    <div className="col-md-2 col-4">
                      <input type="checkbox" /> <label htmlhtmlFor="">Item 5</label>
                    </div>
                    <div className="col-md-2 col-4">
                      <input type="checkbox" /> <label htmlhtmlFor="">Item 6</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      style={{ borderRadius: 2 }}
                      class="custom-btn w-100 py-3"
                      type="submit"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booknow;
