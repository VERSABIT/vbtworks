import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section img-bg" style={{ backgroundImage: 'url(assets/img/hero/hero-bg.svg)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="hero-content-wrapper">
              <h1 className="wow fadeInDown" data-wow-delay=".4s" data-wow-duration="1.3s">Software and SaaS Landing Page Template</h1>
              <p className="wow fadeInLeft" data-wow-delay=".6s" data-wow-duration="1.3s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              <a href="#features" className="theme-btn wow fadeInUp" data-wow-delay=".8s" data-wow-duration="1.3s">Explore Features</a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="hero-img">
              <img className="wow fadeInRight" data-wow-delay=".4s" data-wow-duration="1.3s" src="assets/img/hero/hero-img.png" alt="" />
              <img src="assets/img/hero/hero-shape.svg" alt="" className="shape" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;