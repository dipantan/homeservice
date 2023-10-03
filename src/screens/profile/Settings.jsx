import React, { useContext } from "react";
import Layout from "../../layout/layout";
import HeaderSecondary from "../../components/HeaderSecondary";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Settings = () => {
  const { user } = useContext(AppContext);
  return (
    <Layout>
      <HeaderSecondary title={"Settings"} />
      <div className="container">
        

        <div className="mb-5">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control border-0"
                  id="name"
                  placeholder="Your Name"
                  style={{ backgroundColor: "#3f0434" }}
                  autoComplete="off"
                />
                <label for="name">Your Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control border-0"
                  id="email"
                  placeholder="Your Email"
                  style={{ backgroundColor: "#3f0434" }}
                />
                <label for="email">Your Email</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control border-0"
                  id="subject"
                  placeholder="Subject"
                  style={{ backgroundColor: "#3f0434" }}
                />
                <label for="subject">Phone Number</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control border-0"
                  id="subject"
                  placeholder="Subject"
                  style={{ backgroundColor: "#3f0434" }}
                />
                <label for="subject">Password</label>
              </div>
            </div>

            <div class="col-12">
              <Link to={"/settings"} class="btn btn-primary w-100 py-3 px-5">
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
