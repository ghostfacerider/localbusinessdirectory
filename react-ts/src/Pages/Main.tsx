import React, { useState } from 'react';
import { Blog, Categories, Download, ListingTypes, Pricing } from './index';
import { Search, Newsletter } from '../components/index';

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [locationQuery, setLocationQuery] = useState<string>('');

  const handleSearch = (searchData: { findQuery: string; whereQuery: string }) => {
    setSearchQuery(searchData.findQuery);
    setLocationQuery(searchData.whereQuery);
  };

  return (
    <>
      {/* <!-- Preloader - style you can find in spinners.css --> */}
      <div className="preloader"></div>

      {/* <!-- Main wrapper - style you can find in pages.scss --> */}
      <div id="main-wrapper">
        {/* <!-- Top header  --> */}
        {/* <NavBar /> */}
        {/* <!-- ======================= Home Banner ======================== --> */}
        <div className="home-banner margin-bottom-40" data-overlay="5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-center mb-5">
                  <h1 className="banner_title ft-bold mb-1">
                    Explore Great Place in Your
                  </h1>
                  <p className="fs-md ft-medium">
                    Explore wonderful places to stay, salons, shopping, massage,
                    or visit local areas.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Integrating Search Component */}
                  <Search onSearch={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Display search results if available */}
        {searchQuery && locationQuery ? (
          <div className="search-results">
            <h3>Search Results</h3>
            <p>
              Showing results for <strong>{searchQuery}</strong> in{' '}
              <strong>{locationQuery}</strong>.
            </p>
            {/* Replace with actual result rendering logic */}
            <div className="result-cards">
              <p>Here, display cards or other UI for the search results.</p>
            </div>
          </div>
        ) : null}

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
                    We Have Worked with{' '}
                    <span className="theme-cl">10,000+</span> Trusted Companies
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                  <div className="empl-thumb text-center px-3 py-4">
                    <img
                      src="https://via.placeholder.com/300x90"
                      className="img-fluid mx-auto"
                      alt="Partner Logo"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- ======================= Blog Start ============================ --> */}
        <Blog />
        {/* <!-- ============================ Pricing Start ==================================== --> */}
        <Pricing />
        {/* <!-- ========================== Download App Section =============================== --> */}
        <Download />
        {/* <!-- ======================= Newsletter Start ============================ --> */}
        <Newsletter />
        <a id="tops-button" className="top-scroll" title="Back to top" href="#top">
          <i className="ti-arrow-up" />
        </a>
      </div>
    </>
  );
};

export default Main;
