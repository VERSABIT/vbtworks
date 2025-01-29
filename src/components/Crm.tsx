import React, { useEffect } from "react";
import "../assets/css/bootstrap-5.0.0-alpha-1.min.css";
import "../assets/css/LineIcons.2.0.css";
import "../assets/css/animate.css";
import "../assets/css/main.css";

// Import Images & Fonts 
import faqImg from "../assets/img/faq/faq-img.svg";
import heroBg from "../assets/img/hero/hero-bg.svg";
import heroImg from "../assets/img/hero/hero-img.png";
import heroShape from "../assets/img/hero/hero-shape.svg";
import logo from "../assets/img/logo/logo.svg";
import logo2 from "../assets/img/logo/logo-2.svg";
import footerBg from "../assets/img/shape/footer-bg.svg";
import repeatShape from "../assets/img/shape/repeat-shape.svg";
import whyUseImg from "../assets/img/why-use/why-use-img.jpg";
import whyUseShape from "../assets/img/why-use/why-use-shape.png";

// Dynamically Load JavaScript Files
const loadScript = (src: string) => {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
};

const Crm = () => {
  useEffect(() => {
    loadScript("../assets/js/bootstrap.bundle-5.0.0.alpha-1-min.js");
    loadScript("../assets/js/main.js");
  }, []);

  return (
    <div>
      {/* Preloader */}
      <div className="preloader">
        <div className="loader">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" className="navbar-nav ml-auto">
                  {["Home", "Features", "Process", "Team", "Blog", "Subscribe"].map((item, index) => (
                    <li key={index} className="nav-item">
                      <a className="page-scroll" href={`#${item.toLowerCase()}`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section img-bg" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="hero-content-wrapper">
                <h1>Software and SaaS Landing Page Template</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                <a href="#features" className="theme-btn">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="hero-img">
                <img src={heroImg} alt="" />
                <img src={heroShape} alt="" className="shape" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="service-section gray-bg pt-150 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-8 mx-auto">
              <div className="section-title text-center mb-55">
                <span>Our Core</span>
                <h2 className="mb-15">Features</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              { icon: "lni-money-protection", title: "Simple Pricing" },
              { icon: "lni-ux", title: "Efficient Workflow" },
              { icon: "lni-users", title: "Built-in CRM" },
              { icon: "lni-reload", title: "Regular Updates" },
            ].map((feature, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-service text-center mb-30">
                  <div className={`service-icon icon-gradient gradient-${index + 1} mb-30`}>
                    <i className={`lni ${feature.icon}`}></i>
                  </div>
                  <h4 className="mb-15">{feature.title}</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer pt-150 gray-bg">
        <img src={footerBg} alt="" className="footer-bg" />
        <div className="container text-center">
          <a href="/" className="logo">
            <img src={logo2} alt="" />
          </a>
          <div className="footer-social-links">
            <ul>
              {["facebook", "twitter", "linkedin", "instagram"].map((platform, index) => (
                <li key={index}>
                  <a href="#">
                    <i className={`lni lni-${platform}-filled`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav className="footer-menu">
            <ul>
              {["Home", "Service", "Process", "Team", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>

      {/* Scroll Top */}
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
};

export default Crm;
