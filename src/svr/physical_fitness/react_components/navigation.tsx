import React, { Component } from "react";
import "../css_files/nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bs-brain/components/navbars/navbar-1/assets/css/navbar-1.css";


class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-md bg-light bsb-navbar bsb-navbar-hover bsb-navbar-caret"
        style={{ backgroundColor: "#222" }}
      >
        <div className="container">
          <div className="nav-div">
            <img src={"../images/logo.png"} alt="error" />
          </div>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="accountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Me
                  </a>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="accountDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        Log in
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Lost Password?
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Sign up
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Programs
                  </a>
                  <ul
                    className="dropdown-menu border-0 shadow bsb-zoomIn"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        Yoga
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Gym
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Calisthenics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Cardio
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
