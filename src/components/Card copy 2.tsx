import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as businessTypes from '../config/business-types';
import * as BusinessService from '../services/BusinessService';

const Card: React.FC = () => {
  const [businesses, setBusinesses] = useState<businessTypes.Business[]>([]);
  const [mode, setMode] = useState<string>('online');
  const [hoveredCards, setHoveredCards] = useState<boolean[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await BusinessService.getBusinessDetails();
        console.log('The data from the cards:', data);
        setBusinesses(data);
        localStorage.setItem('card', JSON.stringify(data));
      } catch (err) {
        console.error(err);
        setMode('offline');
        const cachedData = localStorage.getItem('card');
        if (cachedData) {
          setBusinesses(JSON.parse(cachedData));
        }
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setHoveredCards(new Array(businesses.length).fill(false));
  }, [businesses]);

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
      <div>
        {mode === 'offline' && <div>You are in offline mode or some issue with connections</div>}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '10px'
        }}
      >
        {businesses.map((business, index) => (
          <motion.div
            key={business.business_id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
            style={{
              margin: 20,
              transformStyle: 'preserve-3d',
              transform: hoveredCards[index] ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="Goodup-grid-wrap">
              <div className="Goodup-grid-upper">
                <div className="Goodup-pos ab-left">
                  <div className="Goodup-status close me-2">{business.business_status}</div>
                </div>
                <div className="Goodup-grid-thumb">
                  <Link to={`/single-listing/${business.business_id}`}>
                    <img
                      src={business.photos_sample[0]?.photo_url}
                      className="img-fluid"
                      alt={business.name}
                    />
                  </Link>
                </div>
              </div>
              <div className="Goodup-grid-fl-wrap">
                <div className="Goodup-caption px-3 py-2">
                  <h4 className="mb-0 ft-medium medium">
                    <Link
                      to={`/single-listing/${business.business_id}`}
                      className="text-dark fs-md"
                    >
                      {business.name}
                    </Link>
                  </h4>
                  <div className="Goodup-location">
                    <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                    {business.city}, {business.state}
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

export default Card;
