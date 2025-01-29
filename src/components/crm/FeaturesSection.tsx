import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="service-section gray-bg pt-150 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-8 mx-auto">
            <div className="section-title text-center mb-55">
              <span className="wow fadeInDown" data-wow-delay=".2s">Our Core</span>
              <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">Features</h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="single-service text-center mb-30 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.3s">
              <div className="service-icon icon-gradient gradient-1 mb-30">
                <i className="lni lni-money-protection"></i>
              </div>
              <h4 className="mb-15">Simple Pricing</h4>
              <p>Lorem ipsum dolor sit consetetu sadipscing elitr, sed dia nonum eirmod tempor.</p>
            </div>
          </div>
          {/* Repeat for other features */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;