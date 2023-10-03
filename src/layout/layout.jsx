import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

const layout = ({ page, children, path }) => {
  // const { user, loading } = useContext(AppContext);
  // useEffect(() => {
  //   console.log(user);
  //   if (!user) return navigate("/login", { state: { path } });
  // }, [user]);

  // if (loading) {
  //   return (
  //     <div
  //       id="spinner"
  //       class="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  //     >
  //       <div
  //         class="spinner-grow "
  //         style={{ color: "#ebb607" }}
  //         role="status"
  //       ></div>
  //     </div>
  //   );
  // } else {
    return (
      <>
      <Toast />
        <Navbar activePage={page} />
        {children}
        <Footer />
      </>
    );
  }
// };

export default layout;
