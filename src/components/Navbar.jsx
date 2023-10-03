import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { dbObject } from "../helper/api";
import { toastOptions } from "./Toast";
import { toast } from "react-toastify";

const Navbar = ({ activePage }) => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();
  // const loading
  const signOutUser = async () => {
    try {
      const { data } = await dbObject.get("/user/logout");

      console.log(data);
      if (data?.success) {
        setUser(null);
        navigate("/login");
        toast.success(data?.message, toastOptions);
      }
      // await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        <Link to="/" class="navbar-brand d-flex align-items-center">
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
              to="/"
              class={`nav-item nav-link ${activePage === "home" && "active"}`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              class={`nav-item nav-link ${activePage === "about" && "active"}`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              class={`nav-item nav-link ${
                activePage === "services" && "active"
              }`}
            >
              Our Services
            </Link>

            <Link
              to="/contact-us"
              class={`nav-item nav-link ${
                activePage === "contact" && "active"
              }`}
            >
              Contact Us
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
                {
                  user?.role === 'technician' && <Link to="/worker/dashboard" class="dropdown-item">
                  Dashboard
                </Link>
                }
                <Link to="/profile" class="dropdown-item">
                  Profile
                </Link>

                {
                  user?.role === 'user' && <Link to="/my-orders" class="dropdown-item">
                  My Orders
                </Link>
                }
                
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
                    <button className="custom-btn">Login</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
