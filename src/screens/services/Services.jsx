import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { AppContext } from "../../context/AppContext";
import Layout from "../../layout/layout";
import HeaderSecondary from "../../components/HeaderSecondary";

const Services = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(user);
    // if (!user) return navigate("/login");
  }, [user]);

  const data = [
    {
      image: "/images/plumber.jpg",
      title: "Plumber",
    },

    {
      image: "/images/electician.jpg",
      title: "Wiring and installation",
    },
    {
      image: "/images/painter2.jpg",
      title: "Painting",
    },

    {
      image: "/images/carpenter.jpg",
      title: "Carpenter",
    },

    {
      image: "/images/cleaner.jpg",
      title: "Home cleaner",
    },

    {
      image: "/images/interior.jpg",
      title: "Interior Design",
    },

    {
      image: "/images/air-cooler.svg",
      title: "Home Appliances",
    },

    {
      image: "/images/computer.jpg",
      title: "Computer Repair",
    },

    {
      image: "/images/20944212.jpg",
      title: "AC Repair",
    },

    {
      image: "/images/pest.jpg",
      title: "Pest Control",
    },
    {
      image: "/images/cleaning_v_03.jpg",
      title: "Bathroom Cleaning",
    },
    {
      image: "/images/beauty_salon_02.jpg",
      title: "Saloon and Make-up",
    },
  ];

  return (
    <Layout page={"services"}>
      <HeaderSecondary title={"Services"} />

      <div
        class="row g-4 container mx-auto justify-content-center"
        style={{ maxWidth: "950px" }}
      >
        {data.map((item, i) => (
          <Link
            to={"/service/details"}
            className="col-md-2 text-decoration-none text-light col-4 text-center p-md-4 p-3 mt-0 pb-0"
          >
            <div
              className="w-100 bg-light rounded-circle"
              style={{ aspectRatio: "1/1", padding: "1rem" }}
            >
              <img
                className="w-100 h-100 object-fit-cover rounded-circle"
                src={item.image}
                alt=""
              />
            </div>

            <div>
              <p style={{ fontWeight: "500" }} class="mb-3 mt-4 card-text">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Services;
