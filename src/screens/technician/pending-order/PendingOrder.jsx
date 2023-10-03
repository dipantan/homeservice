import React from "react";
import TechnicianLayout from "../../../layout/TechnicianLayout";
import {
  Add,
  AddDark,
  Complete,
  Filter,
  FilterDark,
} from "../../../assets/svg/SVG";

import ITEM from "../../../assets/img/order_image.png";
import DP from "../../../assets/img/order-dp.svg";

const PendingOrder = () => {
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
    // },
  ];
  return (
    <TechnicianLayout activePage={"pendingWork"}>
      <div className="dashboard-container container">
        <div className="dashboard_container_order_report_container mt-5">
          <div className="dashboard_container_order_report_nav ">
            <div className="dashboard_container_order_report_nav_left d-flex justicy-content-center align-items-center">
              <h6 className="text-dark">Order report</h6>
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
                  <th style={{ paddingLeft: "1rem" }}>Date</th>
                  <th>Customer</th>
                  <th>Phone no.</th>
                  <th>Service</th>
                  <th>Location</th>

                  <th className=" text-center">Status</th>
                </thead>
                <tbody className="tbl">
                  {List.map((obj) => (
                    <>
                      <div className="mt-2"></div>
                      <tr className="list_card">
                        <td className="" style={{ width: "10%" }}>
                          16/09/2023 12:00
                        </td>
                        <td className="customer align-middle" style={{}}>
                          <div class="d-flex align-items-center ">
                            <div class="">
                              <p class="fw-bold mb-1 ">{obj.customer.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className=" align-middle">{obj.title}</td>
                        <td className=" align-middle">{obj.catagory}</td>
                        <td className=" align-middle">{obj.type}</td>

                        <td className=" align-middle" style={{ width: "30%" }}>
                          <div className=" d-flex gap-2 justify-content-evenly align-items-center m-0 p-0">
                            <div
                              className="dashboard_container_status_btn"
                              style={{ background: "#198754" }}
                            >
                              <Complete />
                              <span>Complete</span>
                            </div>
                          </div>
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

export default PendingOrder;
