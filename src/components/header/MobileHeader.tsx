import React from "react";
import logo from "../../assets/group-10.png";
import hamburger from "../../assets/group-13.png";
import search from "../../assets/search-icon.png";
import user from "../../assets/user-icon-copy.png";
import bag from "../../assets/group-2-copy.png";
import "./Header.scss";
import { Fragment, useState } from "react";
import NavLinkTemplate from "../layout/button/NavLinkTemplate";
import { Link } from "react-router-dom";
import CloseButton from "../layout/button/CloseButton";

const MobileHeader = () => {
  const content: string[] = [
    "All Chefs",
    "All Restaurants",
    "",
    "Sign In",
    "Contact Us",
    "Terms Of Use",
  ];
  const [showNavBar, setShowNavBar] = useState(false);
  const openNavBarHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowNavBar(true);
  };
  return (
    <Fragment>
      <nav className="mobile-top-nav">
        {!showNavBar && (
          <>
            <img
              src={hamburger}
              alt="hamburger"
              className="hamburger"
              onClick={openNavBarHandler}
            ></img>
            <>
              <Link to="/">
                <img src={logo} alt="logo" className="logo"></img>
              </Link>
              <div className="right-icons">
                <img src={search} alt="search"></img>
                <Link to="/SignIn">
                  <img src={user} alt="user"></img>
                </Link>
                <img src={bag} alt="bag"></img>
              </div>
            </>
          </>
        )}
      </nav>
      {showNavBar && (
        <div className="hamburger-bar">
          {showNavBar && (
            <CloseButton onClick={() => setShowNavBar(false)}></CloseButton>
          )}
          {content.map((navLi) => (
            <li className="hamburger-nav-list">
              <NavLinkTemplate
                content={navLi}
                to={navLi.replace(/\s/g, "")}
              />
            </li>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default MobileHeader;
