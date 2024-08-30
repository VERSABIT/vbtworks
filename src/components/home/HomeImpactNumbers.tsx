import React from "react";
import "../../assets/css/home/HomeImpactNumbers.css";
import "../../assets/css/Animation.css";

const HomeImpactNumbers = () => {
  return (
    <div className="bg-white dark:bg-slate-800 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="homeimpact-header text-center">
          <h2 className="homeimpact-title">Our Impact in Numbers</h2>
          <p className="homeimpact-desc">
            Versabit's solutions have transformed businesses globally,
            delivering measurable results.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:flex-row lg:justify-between">
          <div className="custom-container">
            <p className="text-content">500+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="homeimpact-stat-title">Enterprises Served</p>
              <p className="homeimpact-stat-text">
                Helping businesses achieve their goals with tailored solutions.
              </p>
            </div>
          </div>
          <div className="container-customnumbers highlight-card ">
            <p className="text-content" style={{ color: "#ffffff"}}>$1.2B</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="homeimpact-stat-title" style={{ color: "#ffffff"}}>
                Revenue Boosted
              </p>
              <p className="homeimpact-stat-text" style={{ color: "#FFFFFFB3"}}>
                Driving significant revenue growth for our clients.
              </p>
            </div>
          </div>
          <div className="custom-container">
            <p className="text-content">1,000+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="homeimpact-stat-title">Projects Completed</p>
              <p className="homeimpact-stat-text">
                Delivering successful projects across various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImpactNumbers;
