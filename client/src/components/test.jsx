<div class="header header-light dark-text">
  <div class="container">
    <nav id="navigation" class="navigation navigation-landscape">
      <div class="nav-header">
        <a class="nav-brand" href="#">
          <img src="assets/img/logo.png" class="logo" alt="" />
        </a>
        <div class="nav-toggle"></div>
        <div class="mobile_nav">
          <ul>
            <li>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#login"
                class="theme-cl fs-lg"
              >
                <i class="lni lni-user"></i>
              </a>
            </li>
            <li>
              <a
                href="add-listing.html"
                class="crs_yuo12 w-auto text-white theme-bg"
              >
                <span class="embos_45">
                  <i class="fas fa-plus me-2"></i>Add Listing
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-menus-wrapper" style="transition-property: none;">
        <ul class="nav-menu">
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
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    class="ft-bold"
                  >
                    <i class="fas fa-sign-in-alt me-1 theme-cl"></i>
                    <link to="/signin"> Sign In</link>
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
          <ul class="nav-menu nav-menu-social align-to-right"></ul>
        </ul>
      </div>
    </nav>
  </div>
</div>;
