import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ITEM from "../../../assets/img/order_image.png";
import DP from "../../../assets/img/order-dp.svg";

import { Add, AddDark, Filter, FilterDark } from "../../../assets/svg/SVG";

import { AppContext } from "../../../context/AppContext";
import TechnicianLayout from "../../../layout/TechnicianLayout";

const MyServices = () => {
  const { user, setUser } = useContext(AppContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    // if (!user) return navigate("/login");
  }, [user]);
  const List = [
    // {
    //   item_image: ITEM,
    //   customer_image: DP,
    //   customer: {
    //     name: "Ashadu zzaman",
    //     image: DP,
    //   },
    //   title: "61002166",
    //   catagory: "Home Cleaning",
    //   type: "Baduria",
    //   price: "199.00",
    //   status: "Deactive",
    // },
    // {
    //   item_image: ITEM,
    //   customer_image: DP,
    //   customer: {
    //     name: "Ashadu zzaman",
    //     image: DP,
    //   },
    //   title: "61002166",
    //   catagory: "Painting",
    //   type: "Baduria",
    //   price: "199.00",
    //   status: "Active",
    // },
    // {
    //   item_image: ITEM,
    //   customer_image: DP,
    //   customer: {
    //     name: "Ashadu zzaman",
    //     image: DP,
    //   },
    //   title: "61002166",
    //   catagory: "AC repair",
    //   type: "Baduria",
    //   price: "199.00",
    //   status: "Active",
    // },
    // {
    //   item_image: ITEM,
    //   customer_image: DP,
    //   customer: {
    //     name: "Ashadu zzaman",
    //     image: DP,
    //   },
    //   title: "61002166",
    //   catagory: "Electrician",
    //   type: "Baduria",
    //   price: "199.00",
    //   status: "Deactive",
    // },
  ];

  return (
    <TechnicianLayout activePage={"myServices"}>
      <div className="dashboard-container container">
        <h6 className="pt-3">My Services</h6>

        <div className="dashboard_container_order_report_container mt-3">
          <div className="dashboard_container_order_report_nav ">
            <div className="dashboard_container_order_report_nav_left d-flex justicy-content-center align-items-center">
              <h6>Order report</h6>
            </div>

            <div className="d-none d-md-flex">
              <div className=" order_report_nav_right d-flex gap-2 justicy-content-center align-items-center ">
                <div className="order_report_container_search  ">
                  <input
                    className="rounded-pill border border-white px-2 py-1 "
                    style={{ background: "#F4F4F4" }}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                </div>
                <div
                  className="order_report_container_filter_order dashboard_container_btn d-flex justify-content-center align-items-center gap-2 h-75 "
                  style={{ background: "#393C49" }}
                >
                  <Filter />
                  <span>Filter Order</span>
                </div>

                <div
                  className="order_report_container_search_add_order dashboard_container_btn d-flex justify-content-center align-items-center gap-2 h-75"
                  style={{ background: "#FF5249" }}
                  //   onClick={() => setShowModal(true)}
                >
                  <Add />
                  <span>Add Service</span>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-center align-items-center gap-4 d-md-none">
              <div>
                <FilterDark />
              </div>
              <div>
                <AddDark />
              </div>
            </div>
          </div>
          {List?.length ? (
            <div className="table-responsive">
              <table
                class="table tbl "
                style={{
                  padding: "2rem",
                  borderSpacing: "1rem 1rem",
                  width: "100%",
                }}
              >
                <thead
                  class="table-light "
                  style={{
                    background: "#ebebeb59",
                    opacity: ".9",
                    padding: "1rem 1rem",
                    borderRadius: "2rem",
                  }}
                >
                  <th style={{ paddingLeft: "1rem" }}>Title</th>
                  <th>Category</th>
                  <th>Desciption</th>
                  {/* <th>Service</th>
                  <th>Location</th> */}
                  <th>Price</th>
                  <th className=" text-center">Status</th>
                </thead>
                <tbody className="tbl">
                  {List.map((obj) => (
                    <>
                      <div className="mt-2"></div>
                      <tr className="list_card">
                        <td className="" style={{ width: "10%" }}>
                          AC repairing
                        </td>
                        <td className="customer align-middle">Electronics</td>
                        <td className=" align-middle">Lorem, ipsum dolor</td>
                        {/* <td className=" align-middle">{obj.catagory}</td>
                        <td className=" align-middle">{obj.type}</td> */}
                        <td className=" align-middle">${obj.price}</td>
                        <td
                          className=" align-middle text-center"
                          style={{
                            color:
                              obj.status === "Active" ? "green" : "#f65d62",
                          }}
                        >
                          {obj.status}
                        </td>
                      </tr>
                    </>
                  ))}

                  <div className="mt-2 p-0 bg-danger "></div>
                  <tr className="list_card">
                    <td colSpan={7}>
                      <div className="  my-2 d-flex  justify-content-end align-items-center gap-1 ">
                        <span>prev</span>
                        <div
                          className="border border-white text-white d-inline-block  "
                          style={{
                            padding: ".15rem .4rem",
                            background: "#393C49",
                            borderRadius: ".4rem",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          1
                        </div>
                        <div
                          className="border border-white text-white d-inline-block  "
                          style={{
                            padding: ".15rem .4rem",
                            background: "#393C49",
                            borderRadius: ".4rem",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          1
                        </div>
                        <div
                          className="border border-white text-white d-inline-block  "
                          style={{
                            padding: ".15rem .4rem",
                            background: "#393C49",
                            borderRadius: ".4rem",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          1
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: 300 }}
            >
              <p className="mb-0 text-danger">No Pending Order</p>
            </div>
          )}
          
        </div>
      </div>
    </TechnicianLayout>
  );
};

export default MyServices;
