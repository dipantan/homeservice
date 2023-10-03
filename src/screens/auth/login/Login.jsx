import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast, { toastOptions } from "../../../components/Toast";
import Spinner from "../../../components/Spinner";
import { dbObject } from "../../../helper/api";
import { validateEmail } from "../../../helper";

const Login = () => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading1, setLoading1] = useState(false);

  const { setUser, user, loading } = useContext(AppContext);

  // Login with google
  // const loginWithGoogle = async () => {
  //   try {
  //     setLoading1(true);
  //     const result = await signInWithPopup(auth, provider);

  //     if (result?.user?.email) {
  //       const { data } = await dbObject.post("/user/login-with-google", {
  //         email: result?.user.email,
  //         role,
  //       });

  //       console.log(data);

  //       if (data.success) {
  //         toast.success(data?.message, toastOptions);
  //         if (role === "technician") {
  //           navigate("/worker/dashboard");
  //         } else {
  //           navigate("/");
  //           setUser(data.user);
  //         }
  //       }
  //     }

  //     setLoading1(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading1(false);
  //     if (error?.response?.data?.message)
  //       return toast.error(error?.response?.data?.message, toastOptions);
  //   }
  // };

  const loginWithEmail = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      if (!email.length || !password.length)
        return toast.error("All fields are mandatory!");
      if (!validateEmail(email)) return toast.error("Invalid email type");
      setLoading1(true);
      const { data } = await dbObject.post("/user/login-with-email", {
        email,
        password,
        role,
      });
      console.log(data);
      if (data.success) {
        toast.success(data?.message, toastOptions);
        if (role === "technician") {
          navigate("/worker/dashboard");
          setUser(data.user);
        } else {
          navigate("/");
          setUser(data.user);
        }
      }

      setLoading1(false);
    } catch (error) {
      console.log(error);
      setLoading1(false);
      if (error?.response?.data?.message)
        return toast.error(error?.response?.data?.message, toastOptions);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate("/");
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
      <>
        <Toast />
        {loading1 && <Spinner />}
        <div className="auth-container">
          <div className="auth-header">
            <button
              className={`${role === "user" && "active-button"}`}
              onClick={() => {
                setRole("user");
                setEmail("");
                setPassword("");
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
              }}
            >
              technician
            </button>
          </div>
          {role === "user" ? (
            <div className="auth-box h-100 mt-4">
              <form className="auth-form" action="">
                <button
                  type="button"
                  // onClick={loginWithGoogle}
                  className="custom-btn"
                >
                  <i class="bi bi-google"></i> <span>Signin With Google</span>
                </button>
                <div>
                  <p className="mb-0 text-center text-secondary">OR</p>
                </div>
                <div className="form-input">
                  <label htmlFor="">Email</label>
                  <input
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    name="name"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="">Password</label>
                  <input
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    name="name"
                    placeholder="*******"
                  />
                  <div className="d-flex justify-content-end">
                    <Link
                      className="text-warning text-decoration-none ms-auto"
                      style={{ fontSize: "12px" }}
                      to={"/forgot-password"}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={loginWithEmail}
                    className="custom-btn w-100"
                  >
                    Login
                  </button>
                </div>

                <div className="d-flex gap-2">
                  {" "}
                  <p className="mb-0" style={{ color: "#e2dede" }}>
                    Don't have an account?
                  </p>{" "}
                  <Link
                    className="text-warning text-decoration-none"
                    to={"/register"}
                  >
                    Register
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
              <div className="h-100 auth-image">
                <img
                  className="w-100 h-100 object-fit-cover rounded"
                  src="/images/team-2.jpg"
                  alt="user"
                  style={{ maxHeight: "380px", objectPosition: "top" }}
                />
              </div>

              <form className="auth-form" action="">
                <button
                  type="button"
                  // onClick={loginWithGoogle}
                  className="custom-btn"
                >
                  <i class="bi bi-google"></i> <span>Signin With Google</span>
                </button>
                <div>
                  <p className="mb-0 text-center text-secondary">OR</p>
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
                  <label htmlFor="">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="name"
                    placeholder="*******"
                  />
                  <div className="d-flex justify-content-end">
                    <Link
                      className="text-warning text-decoration-none ms-auto"
                      style={{ fontSize: "12px" }}
                      to={"/forgot-password"}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={loginWithEmail}
                    className="custom-btn w-100"
                  >
                    Login
                  </button>
                </div>

                <div className="d-flex gap-2">
                  {" "}
                  <p className="mb-0" style={{ color: "#e2dede" }}>
                    Don't have an account?
                  </p>{" "}
                  <Link
                    className="text-warning text-decoration-none"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Login;
