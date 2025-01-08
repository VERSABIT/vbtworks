import React from "react";
import "../assets/css/crm.css";

const CrmSection: React.FC = () => {

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Sark</div>
        <nav className="nav">
          <a href="#demo">Demo</a>
          <a href="#pages">Essential Pages</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="header-buttons">
          <button className="btn btn-signin">Sign In</button>
          <button className="btn btn-primary">Get Started Free</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Amazing platform for next-gen CRM</h1>
        <p>Sark provides all customer management services within one software.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Free Trial</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="/images/dashboard.png" alt="CRM Dashboard" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Customers have consistently rated Milestone 4.9/5</h2>
        <div className="reviews">
          <div className="review">
            <p>"The program has a very pleasant interface that is orderly and easy to use."</p>
            <span>Rated 4.9/5 - Over 100 reviews</span>
          </div>
          <div className="review">
            <p>"The ability to filter files and secure files was very welcomed."</p>
            <span>Rated 4.8/5 - Over 200 reviews</span>
          </div>
          <div className="review">
            <p>"Great features as a CRM software and system."</p>
            <span>Rated 4.8/5 - Over 300 reviews</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>What makes Sark better than other solutions?</h2>
        <ul>
          <li>100% flat fee, predictable costs, no per-user pricing</li>
          <li>Easy to migrate your data with drag-and-drop simplicity</li>
          <li>Integrated with all your favorite services</li>
        </ul>
        <button className="btn btn-primary">Get Started Free</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Amazing services to make your business easier</h2>
        <div className="service-grid">
          <div className="service">
            <h3>CRM & Lead Management</h3>
            <p>Generate, manage, and nurture leads automatically.</p>
          </div>
          <div className="service">
            <h3>Project Management</h3>
            <p>Advance workflows to control your team projects.</p>
          </div>
          <div className="service">
            <h3>Sales Analytics</h3>
            <p>Track metrics and calculate revenue growth.</p>
          </div>
          <div className="service">
            <h3>Online Marketing</h3>
            <p>Run campaigns and gather insights for better ROI.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download">
        <h2>Want to grow your business with us? Download now.</h2>
        <div className="store-buttons">
          <img src="/images/app-store.png" alt="App Store" />
          <img src="/images/google-play.png" alt="Google Play" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Copyright 2022. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default CrmSection;
