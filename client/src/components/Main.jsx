import {
  Blog,
  Categories,
  Download,
  ListingTypes,
  Newsletter,
  Pricing,
} from "./index";

const Main = () => {
  return (
    <>
      {/* <!-- Preloader - style you can find in spinners.css --> */}
      <div className="preloader"></div>

      {/* <!-- Main wrapper - style you can find in pages.scss --> */}
      <div id="main-wrapper">
        {/* <!-- Top header  --> */}
        <div>
          {/* Start Navigation */}
          <div className="header header-light dark-text">
            <div className="container">
              <nav id="navigation" className="navigation navigation-landscape">
                <div className="nav-header">
                  <a className="nav-brand" href="#">
                    <img src="assets/img/logo.png" className="logo" alt />
                  </a>
                  <div className="nav-toggle" />
                  <div className="mobile_nav">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#login"
                          className="theme-cl fs-lg"
                        >
                          <i className="lni lni-user" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="add-listing.html"
                          className="crs_yuo12 w-auto text-white theme-bg"
                        >
                          <span className="embos_45">
                            <i className="fas fa-plus me-2" />
                            Add Listing
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="nav-menus-wrapper"
                  style={{ transitionProperty: "none" }}
                >
                  <ul className="nav-menu">
                    <li className="active">
                      <a href="javascript:void(0);">Home</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="index.html">Home Screen 1</a>
                        </li>
                        <li>
                          <a href="home-2.html">Home Screen 2</a>
                        </li>
                        <li>
                          <a href="home-3.html">Home Screen 3</a>
                        </li>
                        <li>
                          <a href="home-4.html">Home Screen 4</a>
                        </li>
                        <li>
                          <a href="home-5.html">Home Screen 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Listings</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="javascript:void(0);">Grid Layout</a>
                          <ul className="nav-dropdown nav-submenu">
                            <li>
                              <a href="listing-search-v1.html">
                                With Sidebar V1
                              </a>
                            </li>
                            <li>
                              <a href="listing-search-v2.html">
                                With Sidebar V2
                              </a>
                            </li>
                            <li>
                              <a href="listing-search-v3.html">
                                With Sidebar V3
                              </a>
                            </li>
                            <li>
                              <a href="listing-search-with-map.html">
                                Full Width + Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">List Layout</a>
                          <ul className="nav-dropdown nav-submenu">
                            <li>
                              <a href="listing-search-v4.html">With Sidebar</a>
                            </li>
                            <li>
                              <a href="listing-search-v5.html">Full Width</a>
                            </li>
                            <li>
                              <a href="listing-search-with-map.html">
                                Full Width With Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Map Styles</a>
                          <ul className="nav-dropdown nav-submenu">
                            <li>
                              <a href="half-map-search-1.html">
                                Search On Map V1
                              </a>
                            </li>
                            <li>
                              <a href="half-map-search-2.html">
                                Search On Map V2
                              </a>
                            </li>
                            <li>
                              <a href="half-map-search-3.html">
                                Search On Map V3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Single Listing</a>
                          <ul className="nav-dropdown nav-submenu">
                            <li>
                              <a href="single-listing-detail-1.html">
                                Single Listing V1
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-2.html">
                                Single Listing V2
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-3.html">
                                Single Listing V3
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-4.html">
                                Single Listing V4
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-5.html">
                                Single Listing V5
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-6.html">
                                Single Listing V6
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-7.html">
                                Single Listing V7
                              </a>
                            </li>
                            <li>
                              <a href="single-listing-detail-8.html">
                                Single Listing V8
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="author-detail.html">Author Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">User Dashboard</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="dashboard.html">
                            <i className="lni lni-dashboard me-2" />
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-my-listings.html">
                            <i className="lni lni-files me-2" />
                            My Listings
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-add-listings.html">
                            <i className="lni lni-add-files me-2" />
                            Add Listing
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-saved-listings.html">
                            <i className="lni lni-bookmark me-2" />
                            Saved Listing
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-my-bookings.html">
                            <i className="lni lni-briefcase me-2" />
                            My Bookings
                            <span className="count-tag bg-warning">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-wallet.html">
                            <i className="lni lni-mastercard me-2" />
                            Wallet
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-messages.html">
                            <i className="lni lni-envelope me-2" />
                            Messages
                            <span className="count-tag bg-sky">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-my-profile.html">
                            <i className="lni lni-user me-2" />
                            My Profile{"{"}" "{"}"}
                          </a>
                        </li>
                        <li>
                          <a href="dashboard-change-password.html">
                            <i className="lni lni-lock-alt me-2" />
                            Change Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Pages</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="blog.html">Blog Style</a>
                        </li>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="signup.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="login.html">Sign In</a>
                        </li>
                        <li>
                          <a href="privacy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">404 Page</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="nav-menu nav-menu-social align-to-right">
                    <li>
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#login"
                        className="ft-bold"
                      >
                        <i className="fas fa-sign-in-alt me-1 theme-cl" />
                        Sign In
                      </a>
                    </li>
                    <li className="add-listing">
                      <a href="add-listing.html">
                        <i className="fas fa-plus me-2" />
                        Add Listing
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {"{"}/* {/* End Navigation */} */{"}"}
          <div className="clearfix" />
          {"{"}/*{" "}
          {/* ============================================================== */}{" "}
          */{"}"}
          {"{"}/* {/* Top header  */} */{"}"}
          {"{"}/*{" "}
          {/* ============================================================== */}{" "}
          */{"}"}
        </div>

        {/* <!-- ======================= Home Banner ======================== --> */}
        <div
          className="home-banner margin-bottom-0"
          style="background:#f41b3b url(https://via.placeholder.com/1920x950) no-repeat;"
          data-overlay="5"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-center mb-5">
                  <h1 className="banner_title ft-bold mb-1">
                    Explore Great Place in Your Town
                  </h1>
                  <p className="fs-md ft-medium">
                    Explore wonderful place to stay, salon, shoping, massage or
                    visit local areas.
                  </p>
                </div>

                <form className="main-search-wrap fl-wrap half-column">
                  <div className="main-search-item">
                    <span className="search-tag">Find</span>
                    <input
                      type="text"
                      className="form-control radius"
                      placeholder="Nail salons, plumbers, takeout..."
                    />
                  </div>
                  <div className="main-search-item">
                    <span className="search-tag">Where</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="San Francisco, CA"
                    />
                  </div>
                  <div className="main-search-button">
                    <button
                      className="btn full-width theme-bg text-white"
                      type="button"
                    >
                      Search<i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ======================= Listing Categories ======================== --> */}
        <Categories />

        {/* <!-- ======================= All Types Listing ======================== --> */}
        <ListingTypes />

        {/* <!-- ======================= Our Partner Start ============================ --> */}
        <section className="pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="text-muted mb-0">Our Partners</h6>
                  <h2 className="ft-bold">
                    We Have Worked with{" "}
                    <span className="theme-cl">10,000+</span> Trusted Companies
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======================= Our Partner Start ============================ --> */}

        {/* <!-- ======================= Blog Start ============================ --> */}
        <Blog />

        {/* <!-- ============================ Pricing Start ==================================== --> */}
        <Pricing />

        {/* <!-- ========================== Download App Section =============================== --> */}
        <Download />

        {/* <!-- ======================= Newsletter Start ============================ --> */}
        <Newsletter />

        {/* <!-- Log In Modal --> */}
        <div
          className="modal fade"
          id="login"
          tabindex="-1"
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

                <form className="submit-form">
                  <div className="form-group">
                    <label className="mb-1">User Name</label>
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      placeholder="Username*"
                    />
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
                  </div>

                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                          checked
                        />
                        <label for="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="form-group text-center mb-0">
                    <p className="extra">Or login with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="https://via.placeholder.com/200x200"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        <a id="tops-button" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>

      {/* <!-- End Wrapper --> */}
    </>
  );
};

export default Main;
