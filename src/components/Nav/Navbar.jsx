import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaMagento } from "react-icons/fa";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  mobileNavOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="nav  ">
      <div className="nav__contener section__padding  ">
        <div style={{ color: "white" }} className="nav__logo_div">
          <p style={{ color: "white" }}>
            <FaMagento style={{ marginRight: ".5rem", color: "white" }} />{" "}
            ULETRA
          </p>
        </div>
        <div className="nav__icons_div">
          {mobileNavOpen ? (
            <FaTimes
              onClick={() => {
                setMobileNavOpen((pre) => !pre);
              }}
              className="nav__icon"
            />
          ) : (
            <FaBars
              onClick={() => {
                setMobileNavOpen((pre) => !pre);
              }}
              className="nav__icon"
            />
          )}
        </div>
        <div
          className={mobileNavOpen ? "nav__mobile_links_div" : "nav__links_div"}
        >
          <a
            href="#home"
            onClick={() => {
              setMobileNavOpen(false);
            }}
          >
            Home
          </a>
          <a
            onClick={() => {
              setMobileNavOpen(false);
            }}
            href="#products"
          >
            Products
          </a>
          <a
            onClick={() => {
              setMobileNavOpen(false);
            }}
            href="#services"
          >
            Services
          </a>
          <button
            style={{
              padding: "0.8rem 2rem",
              marginLeft: "1rem",
              marginTop: "0",
            }}
            href="#"
            className={
              mobileNavOpen ? "mobile__custom_button" : "custom__button"
            }
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
