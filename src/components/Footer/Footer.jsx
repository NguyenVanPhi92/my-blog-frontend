import React from "react";
import logoLight from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <a href="/" className="footer-logo">
            <img src={logoLight} alt="" className="logo-light" width="150" />
            <img src={logoDark} alt="" className="logo-dark" width="150" />
          </a>

          <p className="footer-text">
            Learn about Web accessibility, Web Performance, and Database
            management
          </p>
        </div>

        <div className="wrapper">
          <p className="footer-title">Quick Links</p>
          <ul>
            <li>
              <a href="/#" className="footer-link">
                Advertise with us
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                About us
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="wrapper">
          <p className="footer-title">Legal Stuff</p>
          <ul>
            <li>
              <a href="/#" className="footer-link">
                Privacy Notice
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Terms Of Use
              </a>
            </li>
          </ul>
        </div>

        <div className="wrapper">
          <p className="footer-title">Legal Stuff</p>
          <ul>
            <li>
              <a href="/#" className="footer-link">
                Privacy Notice
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Terms Of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
