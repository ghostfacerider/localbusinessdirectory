import { useState } from "react";
import Search from "../components/Search";
import SearchCard from "../components/SearchCard";
import Newsletter from "../components/Newsletter";
import Categories from "./Categories";
import ListingTypes from "./ListingTypes";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Download from "./Download";

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState({
    findQuery: "",
    whereQuery: "",
  });

  const handleSearch = (queries: { findQuery: string; whereQuery: string }) => {
    setSearchQuery(queries);
  };

  return (
    <>
      {/* Preloader */}
      <div className="preloader"></div>

      {/* Main wrapper */}
      <div id="main-wrapper">
        {/* Home Banner */}
        <div className="home-banner margin-bottom-40" data-overlay="5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-center mb-5">
                  <h1 className="banner_title ft-bold mb-1">
                    Explore Great Places in Your
                  </h1>
                  <p className="fs-md ft-medium">
                    Explore wonderful places to stay, salon, shopping, massage,
                    or visit local areas.
                  </p>
                </div>
                <div
                  className="search-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Search onSearch={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conditionally render SearchCard if searchQuery is set */}
        {searchQuery && <SearchCard searchQuery={searchQuery} />}

        {/* Listing Categories */}
        <Categories />

        {/* Listing Types */}
        <ListingTypes />

        {/* Our Partner Section */}
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
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div
                    className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"
                    key={index}
                  >
                    <div className="empl-thumb text-center px-3 py-4">
                      <img
                        src="https://via.placeholder.com/300x90"
                        className="img-fluid mx-auto"
                        alt="Partner"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <Blog />

        {/* Pricing Section */}
        <Pricing />

        {/* Download App Section */}
        <Download />

        {/* Newsletter Section */}
        <Newsletter />

        {/* Back to Top Button */}
        <a id="tops-button" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default Main;
