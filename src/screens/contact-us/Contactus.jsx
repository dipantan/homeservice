import React, { useEffect } from "react";
import Layout from "../../layout/layout";
import HeaderSecondary from "../../components/HeaderSecondary";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Layout page={"contact"}>
      <HeaderSecondary title={"Contact Us"} />

      <div class="container-xxl pb-5 pt-md-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6" style={{ minHeight: 450 }}>
              <div class="position-relative h-100">
                <iframe
                  class="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29293.013821742632!2d88.47772811347588!3d23.401717185963705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f920440311b935%3A0x9cda677e2c6a67af!2sKrishnanagar%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1695208491998!5m2!1sen!2sin"
                  frameborder="0"
                  style={{ minHeight: 450, border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="border-start border-5 border-primary ps-4 mb-5">
                <h6 class="text-secondary text-uppercase mb-2">Contact Us</h6>
                <h1 class="display-6 mb-0">
                  If You Have Any Query, Please Contact Us
                </h1>
              </div>
              <p class="mb-4">
              Have a question or need assistance? Fill out the form below, and we'll get back to you promptly. Your satisfaction is our priority
              </p>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control border-0"
                        id="email"
                        placeholder="Your Email"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control border-0"
                        id="subject"
                        placeholder="Subject"
                        style={{ backgroundColor: "#3f0434" }}
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 150, backgroundColor: "#3f0434", resize: 'none'  }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contactus;
