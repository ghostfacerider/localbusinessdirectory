import React from 'react';

const Categories: React.FC = () => {
  return (
    <>
      <section className="space min gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="mb-0 theme-cl">Popular Categories</h6>
                <h2 className="ft-bold">Browse Top Categories</h2>
              </div>
            </div>
          </div>

          {/* <!-- row --> */}
          <div className="row align-items-center">
            {[
              {
                cities: 7,
                icon: 'fas fa-stethoscope',
                category: 'Dentists',
                listings: 607,
              },
              {
                cities: 17,
                icon: 'fas fa-building',
                category: 'IT & Banking',
                listings: 76,
              },
              {
                cities: 19,
                icon: 'fas fa-shopping-basket',
                category: 'Shoppings',
                listings: 112,
              },
              {
                cities: 32,
                icon: 'fas fa-screwdriver',
                category: 'Home Services',
                listings: 322,
              },
              {
                cities: 27,
                icon: 'fas fa-basketball-ball',
                category: 'Active Life',
                listings: 161,
              },
              {
                cities: 26,
                icon: 'fas fa-utensils',
                category: 'Restaurants',
                listings: 172,
              },
              {
                cities: 10,
                icon: 'fas fa-book-open',
                category: 'Education',
                listings: 144,
              },
              {
                cities: 24,
                icon: 'fas fa-house-damage',
                category: 'Real Estate',
                listings: 210,
              },
              {
                cities: 18,
                icon: 'fas fa-wine-glass',
                category: 'Event Planning',
                listings: 241,
              },
              {
                cities: 6,
                icon: 'fas fa-car-alt',
                category: 'Automotive',
                listings: 52,
              },
              {
                cities: 8,
                icon: 'fas fa-pencil-ruler',
                category: 'Art & Design',
                listings: 97,
              },
              {
                cities: 5,
                icon: 'fas fa-plane',
                category: 'Hotel & Travel',
                listings: 42,
              },
            ].map((category, index) => (
              <div
                key={index}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
              >
                <div className="cats-wrap text-center">
                  <a href="listing-search-v1.html" className="Goodup-catg-wrap">
                    <div className="Goodup-catg-city">
                      {category.cities} Cities
                    </div>
                    <div className="Goodup-catg-icon">
                      <i className={category.icon}></i>
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        {category.category}
                      </h4>
                      <span className="text-muted">
                        {category.listings} Listings
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- row --> */}
        </div>
      </section>
    </>
  );
};

export default Categories;
