"use client";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Head from 'next/head'; // Import the Head component from Next.js

const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  
  useEffect(() => {
    banner_image_function("/img/banner2.gif");
    page_info_function(
      "Let's Get in <br> Touch ",
      "contact",
      "contact"
    );
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <TrueManLayout>
        {/* contact */}
        <div className="row">
          <div className="col-lg-6">
            {/* contact card */}
            <div
              className="trm-service-icon-box trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-service-content">
                <div className="trm-icon">
                  <img
                    src="img/icons/icon-5.svg"
                    alt="icon"
                    className="trm-black-icon"
                  />
                  <img
                    src="img/icons/icon-5w.svg"
                    alt="icon"
                    className=""
                  />
                </div>
                <h6 className="trm-mb-20">Call</h6>
                <div className="trm-mb-15">
                  <span className="trm-label">Work:</span>{" "}
                  <span className="trm-text-sm">+94 (034) 223 53 89</span>
                </div>
                <div>
                  <span className="trm-label">Personal:</span>{" "}
                  <span className="trm-text-sm">+94 (076) 723 24 85</span>
                </div>
              </div>
            </div>
            {/* contact card end */}
          </div>
          <div className="col-lg-6">
            {/* contact card */}
            <div
              className="trm-service-icon-box trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-service-content">
                <div className="trm-icon">
                  <img
                    src="img/icons/icon-6.svg"
                    alt="icon"
                    className="trm-black-icon"
                  />
                  <img
                    src="img/icons/icon-6w.svg"
                    alt="icon"
                    className=""
                  />
                </div>
                <h6 className="trm-mb-20">Write</h6>
                <h6 className="trm-mb-20"></h6>
                <div className="trm-mb-15">
                  <span className="trm-label">Email:</span>{" "}
                  <span className="trm-text-sm">rdcvithana@gmail.com</span>
                </div>
                <div>
                  <span className="trm-label">Instagram:</span>{" "}
                  <span className="trm-text-sm">@ dimuthu_vithana</span>
                </div>
              </div>
            </div>
            {/* contact card end */}
          </div>
        </div>
        {/* contact end */}
        {/* contact form */}
        <div className="row">
          <div className="col-lg-12">
            {/* title */}
            <h5 className="trm-mb-40 trm-title-with-divider">
              Get in touch <span data-number={2} />
            </h5>
          </div>
          <div className="col-lg-12">
            <div className="trm-contact-card">
              <form id="form2">
                <input name="name" type="text" placeholder="Name" />
                <input name="email" type="email" placeholder="Email" />
                <textarea
                  name="text"
                  rows={6}
                  placeholder="Message"
                  defaultValue={""}
                />
                <div className="trm-form-bottom">
                  <button type="submit" className="trm-btn">
                    Send <i className="fas fa-arrow-right" />
                  </button>
                  <div className="trm-text-sm">
                    * I promise the confidentiality of your personal information
                  </div>
                </div>
              </form>
              <div className="trm-success-banner">
                <img src="img/success.png" alt="success" className="trm-mb-15" />
                <h4 className="trm-mb-15">Success</h4>
                <div className="trm-text trm-mb-20">
                  Your message has been sent successfully
                </div>
                <Link legacyBehavior href="/">
                  <a className="trm-btn">
                    <i className="fas fa-arrow-left" /> Back to homepage
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* contact form end */}
      </TrueManLayout>
    </>
  );
};

export default Index;
