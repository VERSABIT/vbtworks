import React from 'react';
import {Link} from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <section className="bg-black px-6 py-20 md:px-8">
      <div style={{ opacity: 1, transform: 'none' }}>
        <div className="mx-auto max-w-7xl flex flex-col gap-16">
          <ul className="w-full flex items-center justify-center gap-8">
            <li>
              <button className="text-link">
                <div className="_editable_jwu41_1 undefined" data-link="link=about-us&amp;target=_blank&amp;text=About%20Us">
                    <Link to="/about-us" className="hover:text-blue-500">About Us</Link>
                </div>
              </button>
            </li>
            <li>
              <button className="text-link">
                <div className="_editable_jwu41_1 undefined" data-link="link=services&amp;target=_blank&amp;text=Our%20Services">
                    <Link to="/services" className="hover:text-blue-500">Our Services</Link>
                </div>
              </button>
            </li>
            <li>
              <button className="text-link">
                <div className="_editable_jwu41_1 undefined" data-link="link=home&amp;target=_blank&amp;text=Home">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                </div>
              </button>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <ul className="flex items-center gap-8">
                <li>
                  <a href="https://twitter.com/Versabit">
                    <button className="text-link">
                      <div className="_icon-wrapper_1a3wa_1 text-lg" data-library="FontAwesome" data-link="link=&amp;target=_blank">
                        <svg className="svg-inline--fa fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/Versabit">
                    <button className="text-link">
                      <div className="_icon-wrapper_1a3wa_1 text-lg" data-library="FontAwesome" data-link="link=&amp;target=_blank">
                        <svg className="svg-inline--fa fa-facebook-f" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/Versabit">
                    <button className="text-link">
                      <div className="_icon-wrapper_1a3wa_1 text-lg" data-library="FontAwesome" data-link="link=&amp;target=_blank">
                        <svg className="svg-inline--fa fa-instagram" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37.1 2.1-147.9 0-184.9zm-64.1 240.5c-34.8 34.8-81.2 54.4-130.9 54.4-49.6 0-96-19.6-130.8-54.4-34.8-34.8-54.4-81.2-54.4-130.8s19.6-96 54.4-130.9c34.8-34.8 81.2-54.4 130.8-54.4 49.6 0 96 19.6 130.9 54.4 34.8 34.8 54.4 81.2 54.4 130.8s-19.6 96-54.4 130.9z"></path>
                        </svg>
                      </div>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-slate-400" style={{ color: "#ffffff"}}>
              <div className="_editable_kt7nh_1 undefined">
                <span>© Versabit 2024. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
