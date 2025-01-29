import React from 'react';

const Footer = () => {
  return (
    <footer className="footer pt-150 gray-bg">
      <img src="assets/img/shape/footer-bg.svg" alt="" className="footer-bg" />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-links text-center">
              <a href="index.html" className="logo"><img src="assets/img/logo/logo-2.svg" alt="" /> </a>
              <div className="footer-social-links">
                <ul>
                  <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="lni lni-twitter-filled"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="lni lni-instagram-original"></i></a></li>
                </ul>
              </div>
              <nav className="footer-menu">
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#service">Service</a></li>
                  <li><a href="#process">Process</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="copyright-area text-center">
          <p className="mb-0">Designed and Developed by <a href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;