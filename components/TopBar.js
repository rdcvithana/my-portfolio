"use client";
import { context } from "@/context/context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const TopBar = ({ onePage }) => {
  const [toggle, setToggle] = useState(false);
  const { modeChange, mode } = useContext(context);

  useEffect(() => {
    modeChange(JSON.parse(localStorage.getItem("trueman")));
  }, []);

  return (
    <div
      className="trm-top-bar"
      data-scroll=""
      data-scroll-sticky=""
      data-scroll-target="#content"
      data-scroll-offset={-10}
    >
      <div className="container">
        <div className="trm-left-side">
          {/* logo */}
          <Link legacyBehavior href="/">
            <a className="trm-logo-frame trm-anima-link">
              <h1 className="trm-logo-text">
                Dimuthu <span> Vithana</span>
              </h1>
            </a>
          </Link>
          {/* logo end */}
        </div>
        <div className={`trm-right-side ${toggle ? "trm-active" : ""}`}>
          {/* menu */}
          <div className="trm-menu">
            <nav>
              {onePage ? (
                <OnePageMenu />
              ) : (
                <ul>
                  <li className="menu-item-has-children">
                    <Link legacyBehavior href="/">
                      Home
                    </Link>                    
                  </li>
                  <li>
                    <Link legacyBehavior href="resume">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
          {/* menu end */}
          {/* action button */}
          <a href="files/rdcvithana.pdf" download="home" className="trm-btn trm-btn-sm">
            Download cv <i className="fas fa-arrow-down" />
          </a>
          {/* action button end */}
        </div>
        <div
          className={`trm-menu-btn ${toggle ? "trm-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
      </div>
    </div>
  );
};
export default TopBar;

const OnePageMenu = () => {
  return (
    <ul>
      <li>
        <a
          href="/"
          data-scroll-to="#home-triger"
          data-scroll-offset={-10}
        >
          Home
        </a>
      </li>
      
      <li id="resume-link">
        <a
          href="#resume-triger"
          data-scroll-to="#resume-triger"
          data-scroll-offset={-130}
        >
          Resume
        </a>
      </li>
      <li id="contact-link">
        <a
          href="#contact-triger"
          data-scroll-to="#contact-triger"
          data-scroll-offset={-130}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
