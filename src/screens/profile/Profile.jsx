import React, { useContext } from "react";
import Layout from "../../layout/layout";
import HeaderSecondary from "../../components/HeaderSecondary";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AppContext);
  return (
    <Layout page={"profile"}>
      <HeaderSecondary title={"Profile"} />
      <div className="container">
        <div
          className="mb-5 p-4"
          style={{
            backgroundColor: "#3f0434",
            maxWidth: "400px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <span style={{ color: "#b9b2b2" }}>Hello,</span>
          <p className="mb-0" style={{ fontSize: 25, fontWeight: "600" }}>
            {user?.name || " "}
          </p>
        </div>

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
                  value={user?.name}
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
                  value={user?.email}
                />
                <label for="email">Your Email</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control border-0"
                  id="subject"
                  placeholder="Subject"
                  style={{ backgroundColor: "#3f0434" }}
                  value={"9609126861"}
                />
                <label for="subject">Phone Number</label>
              </div>
            </div>

            <div class="col-12">
              <Link to={"/settings"} class="btn btn-primary w-100 py-3 px-5">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
