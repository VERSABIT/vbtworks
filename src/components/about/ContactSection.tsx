import React from "react";
import "../../assets/css/Animation.css";

const ContactSection = () => {
  return (
    <section
      style={{ backgroundColor: "#002770" }}
      className="bg-white py-8 dark:bg-[#002770] animate-fadeInMoveUp"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Get in Touch with Versabit
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Our team is ready to assist you with tailored enterprise solutions.
          </p>
        </div>
        <ul className="mt-8 flex flex-col md:flex-row md:justify-between md:space-x-6">
          <li className="flex items-start gap-4 mb-6 md:mb-0 md:flex-row">
            <div className="flex-shrink-0 bg-[#007bff] text-white p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Office Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monday-Friday
                <br />
                8:00 am to 5:00 pm
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4 mb-6 md:mb-0 md:flex-row">
            <div className="flex-shrink-0 bg-[#007bff] text-white p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="location-dot"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Our Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Enterprise St.
                <br />
                Innovation City, 12345
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4 md:flex-row">
            <div className="flex-shrink-0 bg-[#007bff] text-white p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Contact Us
              </h3>
              <p className="text-gray-600 dark:text-deep-navy-blue-400">
                +1-800-ENTERPRISE
                <br />
                +1-800-SOLUTIONS
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
