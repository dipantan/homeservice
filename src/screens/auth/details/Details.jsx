import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast, { toastOptions } from "../../../components/Toast";

const Login = () => {
  const { setUser, user, getUser } = useContext(AppContext);
  const navigate = useNavigate();
  const locationObj = useLocation();
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = () => {
    if (!profession.length || !location.length || !experience.length)
      return toast.error("All fields are mandatory!", toastOptions);
    getUser();
    navigate("/login");
  };

  const indian_cities = [
    "Agra",
    "Ahmedabad",
    "Allahabad",
    "Amritsar",
    "Bangalore",
    "Bhopal",
    "Chandigarh",
    "Chennai",
    "Delhi",
    "Faridabad",
    "Firozabad",
    "Guwahati",
    "Gwalior",
    "Haldia",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jabalpur",
    "Jodhpur",
    "Kanpur",
    "Kolkata",
    "Kota",
    "Lucknow",
    "Ludhiana",
    "Meerut",
    "Mumbai",
    "Nagpur",
    "Nashik",
    "Patna",
    "Pune",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Siliguri",
    "Srinagar",
    "Surat",
    "Thane",
    "Vadodara",
    "Vijayawada",
    "Visakhapatnam",
    "Howrah",
  ];

  return (
    <div className="auth-container">
      <Toast />

      <div className=" h-100 mt-4">
        <form className="auth-form row" action="">
          <div className="form-input col-sm-6">
            <label htmlFor="">Profession</label>
            <select
              onChange={(e) => setProfession(e.target.value)}
              name=""
              id=""
            >
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Painter">Painter</option>
              <option value="Carpentor">Carpentor</option>
              <option value="Machanics">Machanics</option>
              <option value="Cleaner">Cleaner</option>
            </select>
          </div>

          <div className="form-input col-sm-6">
            <label htmlFor="">Work Experience</label>
            <input
              onChange={(e) => setExperience(e.target.value)}
              type="number"
              name="name"
              placeholder="10 year"
            />
          </div>

          <div className="form-input col-sm-6">
            <label htmlFor="">Location</label>
            <select onChange={(e) => setLocation(e.target.value)} name="" id="">
              {indian_cities.map((item, i) => (
                <option value={item} key={i}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="col-sm-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="custom-btn w-100"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
