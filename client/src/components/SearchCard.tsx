import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define types for business and search query props
interface Business {
  business_id: string;
  business_status: string;
  photos_sample: { photo_url: string }[];
  name: string;
  website: string;
  city: string;
  state: string;
  type: string;
}

interface SearchQuery {
  findQuery: string;
  whereQuery: string;
}

interface SearchCardProps {
  searchQuery: SearchQuery;
}

const SearchCard: React.FC<SearchCardProps> = ({ searchQuery }) => {
  const { findQuery, whereQuery } = searchQuery;

  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [hoveredCards, setHoveredCards] = useState<boolean[]>(
    new Array(businesses.length).fill(false)
  );

  useEffect(() => {
    if (findQuery && whereQuery) {
      async function fetchData() {
        try {
          const options = {
            method: "GET",
            url: `http://localhost:5000/api/search?find=${findQuery}&where=${whereQuery}`,
          };

          const response = await axios.request(options);
          setBusinesses(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }
  }, [findQuery, whereQuery]);

  const handleMouseEnter = (index: number) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[index] = true;
    setHoveredCards(updatedHoveredCards);
  };

  const handleMouseLeave = (index: number) => {
    const updatedHoveredCards = [...hoveredCards];
    updatedHoveredCards[index] = false;
    setHoveredCards(updatedHoveredCards);
  };

  return (
    <div
      className="tab-pane fade show active"
      id="places"
      role="tabpanel"
      aria-labelledby="places-tab"
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        {/* Mapping over businesses array */}
        {businesses.map((business, index) => (
          <motion.div
            key={business.business_id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
            style={{
              margin: 20,
              transformStyle: "preserve-3d",
              transform: hoveredCards[index] ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <div>
              <div className="Goodup-grid-wrap">
                <div className="Goodup-grid-upper">
                  <div className="Goodup-pos ab-left">
                    <div className="Goodup-status close me-2">
                      {business.business_status}
                    </div>
                  </div>
                  <div className="Goodup-grid-thumb">
                    <Link to={`/single-listing/${business.business_id}`}>
                      <img
                        src={business.photos_sample[0].photo_url}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="Goodup-rating overlay">
                    <div className="Goodup-pr-average high">4.8</div>
                    <div className="Goodup-aldeio">
                      <div className="Goodup-rates">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="Goodup-all-review">
                        <span>46 Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Goodup-grid-fl-wrap">
                  <div className="Goodup-caption px-3 py-2">
                    <div className="Goodup-author">
                      <a href={business.website}>
                        <img
                          src={business.photos_sample[0].photo_url}
                          className="img-fluid circle"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 className="mb-0 ft-medium medium">
                      <a
                        href="single-listing-detail-2.html"
                        className="text-dark fs-md"
                      >
                        {business.name}
                      </a>
                    </h4>
                    <div className="Goodup-location">
                      <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                      {business.city}, {business.state}
                    </div>
                    <div className="Goodup-middle-caption mt-3">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus
                      </p>
                    </div>
                  </div>
                  <div className="Goodup-grid-footer py-2 px-3">
                    <div className="Goodup-ft-first">
                      <a
                        href="half-map-search-2.html"
                        className="Goodup-cats-wrap"
                      >
                        <div className="cats-ico bg-2">
                          <i className="lni lni-slim"></i>
                        </div>
                        <span className="cats-title">{business.type}</span>
                      </a>
                    </div>
                    <div className="Goodup-ft-last">
                      <div className="Goodup-inline">
                        <div className="Goodup-bookmark-btn">
                          <button type="button">
                            <i className="lni lni-envelope position-absolute"></i>
                          </button>
                        </div>
                        <div className="Goodup-bookmark-btn">
                          <button type="button">
                            <i className="lni lni-heart-filled position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SearchCard;
