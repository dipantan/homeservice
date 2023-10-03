import React, { useState } from "react";
// import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Toast, { toastOptions } from "../../../components/Toast";
import Spinner from "../../../components/Spinner";
import { validateEmail } from "../../../helper";
import { dbObject } from "../../../helper/api";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const sendOtp = async () => {
    try {
      if (!email.length) return toast.error("Email is required");
      if (!validateEmail(email)) return toast.error("Invalid email type");
      setLoading(true);
      const { data } = await dbObject.post("/user/send-auth-otp", {
        type: "forgot",
        email,
      });
      setLoading(false);
      if (data?.success) {
        return toast.success(data?.message);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error?.response?.data?.message) {
        return toast.error(error?.response?.data?.message);
      }
    }
  };

  const handleForgotPass = async () => {
    try {
      if (!email.length || !password.length || !otp.length)
        return toast.error("All fields are mandatory!");
      if (!validateEmail(email)) return toast.error("Invalid email type");
      setLoading(true);

      const { data } = await dbObject.put("/user/forgot-password", {
        email,
        password,
        otp,
      });

      if (data.success) {
        toast.success(data.message, toastOptions);

        setInterval(() => {
          navigate("/login");
        }, 2000);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error?.response?.data?.message) {
        return toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <Toast />
      <div className="auth-container">
        <div>
          <p className="mb-0 text-center form-header">Forgot Password</p>
        </div>

        <div className="auth-box h-100 mt-4">
          <form className="auth-form" action="">
            <div className="form-input">
              <label htmlFor="">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="name"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="form-input">
              <label htmlFor="">OTP</label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                type="text"
                name="name"
                placeholder="0000"
              />
              <div className="d-flex justify-content-end">
                <div
                  className="text-warning text-decoration-none ms-auto"
                  style={{ fontSize: "13px" }}
                  onClick={sendOtp}
                >
                  Send OTP
                </div>
              </div>
            </div>

            <div className="form-input">
              <label htmlFor="">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="name"
                placeholder="*******"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleForgotPass}
                className="custom-btn w-100"
              >
                Update
              </button>
            </div>

            <div className="d-flex gap-2">
              <Link
                className="text-decoration-none"
                style={{ color: "#e2dede" }}
                to={"/login"}
              >
                Go back to login
              </Link>
            </div>
          </form>

          <div className="h-100 auth-image">
            <img
              className="w-100 h-100 object-fit-cover rounded"
              src="/images/forgot-password.jpg"
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
