import React from 'react';
import '../assets/css/footer.css';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="light-footer skin-light-footer style-2">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widget">
                  <img
                    src="assets/img/logo.png"
                    className="img-footer small mb-2"
                    alt="Footer Logo"
                  />
                  <div className="address mt-2">
                    7742 Sadar Street Range Road, USA
                    <br />
                    United Kingdom GHQ11
                  </div>
                  <div className="address mt-3">
                    40 568 423 6597
                    <br />
                    support@Goodup.com
                  </div>
                  <div className="address mt-2">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-twitter-filled" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-youtube" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-instagram-filled" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="theme-cl">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {[
                {
                  title: 'Main Navigation',
                  links: [
                    'Explore Listings',
                    'Browse Authors',
                    'Submit Listings',
                    'Shortlisted',
                    'Dashboard',
                  ],
                },
                {
                  title: 'Business Owners',
                  links: [
                    'Browse Categories',
                    'Payment Links',
                    'Saved Places',
                    'Dashboard',
                  ],
                },
                {
                  title: 'About Company',
                  links: [
                    "Who We'r?",
                    'Our Mission',
                    'Our team',
                    'Packages',
                    'Dashboard',
                  ],
                },
                {
                  title: 'Helpful Topics',
                  links: ['Site Map', 'Security', 'Contact', "FAQ's Page", 'Privacy'],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="col-xl-2 col-lg-2 col-md-2 col-sm-12"
                >
                  <div className="footer_widget">
                    <h4 className="widget_title">{section.title}</h4>
                    <ul className="footer-menu">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom br-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">
                  © 2022 Goodup. Designed By{' '}
                  <a href="https://themezhub.com" target="_blank" rel="noopener noreferrer">
                    ThemezHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
