import React, { useEffect, useState } from "react";
import "../auth.css";
import "./email.css";
import { Link, useNavigate } from "react-router-dom";

const Email = () => {
    const navigate = useNavigate()

    // const signup = async () => {
    //   console.log('first')
    //   try {
    //     const result = await signInWithPopup(auth, provider);
    //     console.log(result)
    //   const user = result.user;
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }


    const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // User is signed in.
  //       console.log(authUser)
  //       setUser(authUser);
  //     } else {
  //       // User is signed out.
  //       setUser(null);
  //     }
  //   });

  //   return () => {
  //     // Unsubscribe when the component unmounts
  //     unsubscribe();
  //   };
  // }, []);
  return (
    <div className="container">
      
      <div className="email">
        <button className="custom-btn">
          <i class="bi bi-google"></i> <span>Select Your Google Account</span>
        </button>

        <span className="mt-2" style={{color: '#ffffffb0'}}>or</span>

        <div className="d-flex gap-2"> <p className="mb-0" style={{color: '#e2dede'}}>Already have an account?</p> <Link className="text-warning text-decoration-none" to={'/login'}>Login</Link></div>
      </div>
    </div>
  );
};

export default Email;
