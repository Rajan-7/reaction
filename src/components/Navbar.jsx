import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container">
          <a className="navbar-brand d-flex " href="/">
            <span className="logo"></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tvshows">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  People
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  More
                </a>
              </li>
            </ul>
            <div className="navbar-nav d-flex">
              <li className="nav-item me-3">
                <a href="/" className="nav-link">
                  <i className="fa-solid fa-plus"></i>
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link d-inline-flex border border-dark rounded fw-bold px-1 "
                  href="#"
                >
                  EN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
