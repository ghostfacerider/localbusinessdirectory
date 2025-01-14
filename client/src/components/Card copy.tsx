// components/Card.tsx
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as businessTypes from '../config/business-types'
import * as BusinessService from "../services/BusinessService";

const Card: React.FC = () => {
  const [businesses, setBusinesses] = useState<businessTypes.Business[]>([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await BusinessService.getBusinessDetails();
        setBusinesses(data);
      } catch (error) {
        console.error('Error fetching businesses:', error);
      }
    };
    fetchData();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="tab-pane fade show active"
      id="places"
      role="tabpanel"
      aria-labelledby="places-tab"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="row justify-content-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {businesses.map((business) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
            key={business.business_id}
          >
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
                      src={business.photos_sample[0]?.photo_url}
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="Goodup-grid-fl-wrap">
                <div className="Goodup-caption px-3 py-2">
                  <h4 className="mb-0 ft-medium medium">
                    <Link to={`/single-listing/${business.business_id}`} className="text-dark fs-md">
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
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Card;