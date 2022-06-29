import React, { useState } from "react";
import {
  MdAccountCircle,
  MdAdminPanelSettings,
  MdNoteAlt,
  MdAssignment,
  MdLogout,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logoLight from "../../assets/images/logo-light.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import { logoutUser } from "../../app/apiRequest";
import { createAxios } from "../../app/createInstance";
import { logoutSuccess } from "../../redux/authSlice";
import { UserAuthGoogle } from "../../context/googleContext";
import ToastInfo from "../Toast/ToastInfo";

const Header = () => {
  const { logOut, userGoogle } = UserAuthGoogle();

  const [sideBar, setSideBar] = useState(false);
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logoutSuccess);

  // //handle
  const handleClickMenu = (e) => {
    e.preventDefault();
    setSideBar(!sideBar);
  };
  // console.log("google: ", userGoogle.uid);

  const handleLogout = async () => {
    if (user) {
      logoutUser(dispatch, id, navigate, accessToken, axiosJWT);
      <ToastInfo message="🦄 logout!" />;
    }
    if (userGoogle) {
      try {
        await logOut();
        <ToastInfo message="🦄 logout!" />;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {/* <!--Header--> */}
      <header>
        <div className="container">
          <nav className="navbar">
            {/* <!--HEADER FOR DESKTOP--> */}
            <Link to="/">
              <img src={logoLight} className="logo-light" width="150" alt="" />
              <img src={logoDark} className="logo-dark" width="150" alt="" />
            </Link>

            <div className="btn-group">
              <button className="theme-btn theme-btn-mobile light">
                <ion-icon name="sunny" className="sun"></ion-icon>
                <ion-icon name="moon" className="moon"></ion-icon>
              </button>

              <button className="nav-menu-btn" onClick={handleClickMenu}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>

            <div className="flex-wrapper">
              <ul className="desktop-nav">
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" className="nav-link">
                    About me
                  </Link>
                </li>
                <li>
                  <Link to="contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>

              <button className="theme-btn theme-btn-desktop light">
                <ion-icon name="moon" className="moon"></ion-icon>
                <ion-icon name="sunny" className="sun"></ion-icon>
              </button>

              {!user && !userGoogle && (
                <>
                  <Link to="/login">
                    <button className=" btn-login">Login</button>
                  </Link>
                </>
              )}

              {(user || userGoogle) && (
                <div className="account">
                  <MdAdminPanelSettings className="icon-account" />

                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="my-account">
                        <p>My Account</p>
                        <MdAccountCircle />
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="my-blog">
                        <p>My Blog</p>
                        <MdAssignment />
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="new-blog">
                        <p>New Blog</p>
                        <MdNoteAlt />
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/" onClick={handleLogout}>
                        <p>Logout</p>
                        <MdLogout />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* <!--HERDER FOR MOBILE--> */}
            <div className={sideBar ? "mobile-nav active" : "mobile-nav"}>
              <button className="nav-close-btn" onClick={handleClickMenu}>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div className="wrapper">
                <p className="h3 nav-title">Main Menu</p>

                <ul>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      About me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="wrapper">
                <p className="h3 nav-title">Topics</p>

                <ul>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      Database
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      Accessibility
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      Web Performance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
