import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import authService from "../services/authService";
import logo from "../img/logo.png";

interface Errors {
  email?: { message: string };
  password?: { message: string };
}

function NavBar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});

    // Post the form data for authentication
    authService.signin({ email, password }, (error: string | null) => {
      if (!error) {
        navigate("/");
      } else {
        console.error(error);
        setErrors({ email: { message: "Invalid email or password" } });
      }
    });
  };

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    authService.signout();
    navigate("/");
  };

  return (
    <>
      <div className="header header-light dark-text">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img src={logo} className="logo" alt="Logo" />
              </Link>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <button
                      className="theme-cl fs-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                    >
                      <i className="lni lni-user"></i>
                    </button>
                  </li>
                  <li>
                    <Link
                      to="add-listing.html"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2"></i>Add Listing
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-menus-wrapper">
              <ul className="nav-menu d-flex justify-content-end align-items-center align-self-end">
                {authService.isAuthenticated() && (
                  <li className="nav-item">
                    <Link to="/create" className="nav-link">
                      Create
                    </Link>
                  </li>
                )}
                {!authService.isAuthenticated() && (
                  <>
                    <li className="nav-item">
                      <button
                        className="ft-bold border-0 btn-outline-0 mt-0  bg-transparent"
                        data-bs-toggle="modal"
                        data-bs-target="#login"
                      >
                        <i className="fas fa-sign-in-alt me-1 theme-cl"></i>
                        Sign In
                      </button>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">
                        Register
                      </Link>
                    </li>
                  </>
                )}
                {authService.isAuthenticated() && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      id="dropdown07"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Welcome
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                      <Link
                        to="#"
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </nav>

          {/* Modal for Login */}
          <div
            className="modal fade"
            id="login"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="loginmodal"
            aria-hidden="true"
          >
            <div className="modal-dialog login-pop-form" role="document">
              <div className="modal-content" id="loginmodal">
                <div className="modal-headers">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="ti-close"></span>
                  </button>
                </div>

                <div className="modal-body p-5">
                  <div className="text-center mb-4">
                    <h4 className="m-0 ft-medium">Login Your Account</h4>
                  </div>

                  <form className="submit-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="mb-1">Email</label>
                      <input
                        type="text"
                        id="inputEmail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control rounded bg-light"
                        placeholder="Email*"
                      />
                      {errors.email && (
                        <div className="alert alert-danger">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="mb-1">Password</label>
                      <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control rounded bg-light"
                        placeholder="Password*"
                      />
                      {errors.password && (
                        <div className="alert alert-danger">
                          {errors.password.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
