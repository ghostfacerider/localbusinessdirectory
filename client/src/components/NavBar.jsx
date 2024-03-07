import { Link } from "react-router-dom";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  //use the provided by react route
  const handleLogout = (event) => {
    console.log("handleLogout");
    event.preventDefault();

    //we will post the form data to the API for Autherntication
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
                <img src="assets/img/logo.png" className="logo" alt="" />
              </Link>
              <div className="nav-toggle"></div>
              <div className="mobile_nav">
                <ul>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user"></i>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="add-listing.html"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus me-2"></i>Add Listing
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              // style={{transition-property: none;}}
            >
              <ul className="nav-menu">
                <li className="active">
                  {" "}
                  <Link to="/">Home</Link>
                </li>

                {authService.isAuthenticated() && (
                  <li className="nav-item">
                    <Link to="/create" className="nav-link ">
                      Create
                    </Link>
                  </li>
                )}
                {!authService.isAuthenticated() && (
                  <>
                    <li className="nav-item ">
                      <li>
                        <link
                          to="/signin"
                          data-bs-toggle="modal"
                          data-bs-target="#login"
                          className="ft-bold"
                        >
                          <i className="fas fa-sign-in-alt me-1 theme-cl"></i>
                          Sign In
                        </link>
                      </li>

                      <Link to="/signin" className="nav-link">
                        Sign in
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link ">
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
                      Welcome{}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                      <Link className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </Link>
                    </div>
                  </li>
                )}
                <ul className="nav-menu nav-menu-social align-to-right"></ul>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
