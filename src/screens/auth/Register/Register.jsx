import React, { useContext, useEffect, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { dbObject } from "../../../helper/api";
import { AppContext } from "../../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from "../../../helper";
import Toast, { toastOptions } from "../../../components/Toast";
import Spinner from "../../../components/Spinner";

const Register = () => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user } = useContext(AppContext);

  // Signup with google
  // const signupWithGoogle = async () => {
  //   try {
  //     setLoading(true);
  //     const result = await signInWithPopup(auth, provider);

  //     if (result?.user?.email) {
  //       const { data } = await dbObject.post("/user/signup-with-google", {
  //         email: result?.user.email,
  //         name: result?.user?.displayName,
  //         role,
  //       });

  //       if (data.success) {
  //         toast.success(data?.message, toastOptions);
  //         if (role === "technician") {
  //           navigate("/details", { state: { email } });
  //         } else {
  //           navigate("/login");
  //         }
  //       }
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //     if (error?.response?.data?.message)
  //       return toast.error(error?.response?.data?.message, toastOptions);
  //   }
  // };

  // registerWith email password
  const registerWithEmail = async () => {
    if (!email.length || !name.length || !password.length || !otp.length)
      return toast.error("All fields are mandatory!");
    if (!validateEmail(email)) return toast.error("Invalid email type");

    try {
      setLoading(true);
      const { data } = await dbObject.post("/user/signup-with-email", {
        email,
        name,
        password,
        otp,
        role
      });
      console.log(data);
      if (data.success) {
        toast.success(data?.message, toastOptions);

        if (role === "technician") {
          navigate("/details", { state: { email } });
        } else {
          navigate("/login");
        }
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

  // OTP send
  const sendOtp = async () => {
    try {
      if (!email.length) return toast.error("Email is required");
      if (!validateEmail(email)) return toast.error("Invalid email type");
      setLoading(true);
      const { data } = await dbObject.post("/user/send-auth-otp", {
        type: "register",
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

  useEffect(() => {
    console.log(user);
    // if (user) return navigate("/details");
  }, [user]);

  return (
    <>
      {loading && <Spinner />}
      <Toast />
      <div className="auth-container">
        <div className="auth-header">
          <button
            className={`${role === "user" && "active-button"}`}
            onClick={() => {
              setRole("user");
              setEmail("");
              setPassword("");
              setOtp("");
              setName("");
            }}
          >
            User
          </button>
          <button
            className={`${role === "technician" && "active-button"}`}
            onClick={() => {
              setRole("technician");
              setEmail("");
              setPassword("");
              setOtp("");
              setName("");
            }}
          >
            technician
          </button>
        </div>
        {role === "user" ? (
          <div className="auth-box h-100 mt-4">
            <form className="auth-content auth-form" action="">
              <button
                type="button"
                // onClick={signupWithGoogle}
                className="custom-btn"
              >
                <i class="bi bi-google"></i> <span>Signup With Google</span>
              </button>
              <div>
                <p className="mb-0 text-center text-secondary">OR</p>
              </div>

              <div className="form-input">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="Your name"
                />
              </div>

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
                <div className="d-flex">
                  <input
                    className="w-75"
                    type="number"
                    name="name"
                    placeholder="000000"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <button
                    className="custom-btn w-25"
                    style={{
                      fontSize: "14px",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    type="button"
                    onClick={sendOtp}
                  >
                    Send OTP
                  </button>
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
                  onClick={registerWithEmail}
                  className="custom-btn w-100"
                >
                  Register
                </button>
              </div>

              <div className="d-flex gap-2">
                {" "}
                <p className="mb-0" style={{ color: "#e2dede" }}>
                  Already have an account?
                </p>{" "}
                <Link
                  className="text-warning text-decoration-none"
                  to={"/login"}
                >
                  Login
                </Link>
              </div>
            </form>

            <div className="h-100 auth-image">
              <img
                className="w-100 h-100 object-fit-cover rounded"
                src="/images/laptop-charge-battery-mains.jpg"
                alt="user"
              />
            </div>
          </div>
        ) : (
          <div className="auth-box h-100 mt-4">
            <div className="auth-image h-100">
              <img
                className="w-100 h-100 object-fit-cover rounded"
                style={{ maxHeight: "525px" }}
                src="/images/team-2.jpg"
                alt="user"
              />
            </div>

            <form className="auth-content auth-form" action="">
              <button
                type="button"
                // onClick={signupWithGoogle}
                className="custom-btn"
              >
                <i class="bi bi-google"></i> <span>Signup With Google</span>
              </button>
              <div>
                <p className="mb-0 text-center text-secondary">OR</p>
              </div>

              <div className="form-input">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                <div className="d-flex">
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-75"
                    type="number"
                    name="name"
                    placeholder="000000"
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <button
                    className="custom-btn w-25"
                    style={{
                      fontSize: "14px",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    type="button"
                    onClick={() => sendOtp("technician")}
                  >
                    Send OTP
                  </button>
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
                  onClick={registerWithEmail}
                  className="custom-btn w-100"
                >
                  Register
                </button>
              </div>

              <div className="d-flex gap-2">
                {" "}
                <p className="mb-0" style={{ color: "#e2dede" }}>
                  Already have an account?
                </p>{" "}
                <Link
                  className="text-warning text-decoration-none"
                  to={"/login"}
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
