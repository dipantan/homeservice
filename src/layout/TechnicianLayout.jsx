import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Footer from "../components/Footer";
import { dbObject } from "../helper/api";
import { toastOptions } from "../components/Toast";
import { toast } from "react-toastify";

const TechnicianLayout = ({ activePage, children }) => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const signOutUser = async () => {
    try {
      const { data } = await dbObject.get("/user/logout");

      console.log(data);
      if (data?.success) {
        setUser(null);
        navigate("/login");
        toast.success(data?.message, toastOptions);
      }
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <nav
        class="navbar navbar-expand-lg  navbar-dark py-lg-0 w-100"
        style={{
          position: "fixed",
          zIndex: 100,
          backgroundColor: "#3f0434",
          top: "0px",
        }}
      >
        <div className="container">
          <Link
            to="/worker/dashboard"
            class="navbar-brand d-flex align-items-center"
          >
            <h1 class="m-0 d-flex align-items-center">
              <i class="fa fa-building text-primary me-3"></i>
              <span className="text-light" style={{ fontSize: 30 }}>
                URBANCO
              </span>
            </h1>
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            style={{ borderColor: "gray" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-3 py-lg-0">
              <Link
                to="/worker/dashboard"
                class={`nav-item nav-link ${
                  activePage === "dashboard" && "active"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/worker/pending-work"
                class={`nav-item nav-link ${
                  activePage === "pendingWork" && "active"
                }`}
              >
                Pending Order
              </Link>

              <Link
                to="/worker/my-work"
                class={`nav-item nav-link ${
                  activePage === "myWork" && "active"
                }`}
              >
                My Works
              </Link>
              <Link
                to="/worker/my-service"
                class={`nav-item nav-link ${
                  activePage === "myServices" && "active"
                }`}
              >
                My Services
              </Link>
              <div class="nav-item dropdown">
                <Link
                  to="/profile"
                  class={"nav-link dropdown-toggle"}
                  data-bs-toggle="dropdown"
                >
                  Profile
                </Link>
                <div class="dropdown-menu bg-light m-0">
                  <Link to="/profile" class="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/settings" class="dropdown-item">
                    Settings
                  </Link>
                  <div className="d-flex align-items-center dropdown-item">
                    {user ? (
                      <button
                        onClick={signOutUser}
                        className="custom-btn w-100"
                        style={{ height: 40 }}
                      >
                        Logout
                      </button>
                    ) : (
                      <button className="custom-btn w-100">Login</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
};

export default TechnicianLayout;
