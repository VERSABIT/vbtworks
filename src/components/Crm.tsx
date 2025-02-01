import React, { useState } from "react";
import Footer from "../helpers/Footer";
import CountUp from "react-countup";

// Import Images & Fonts
import heroBg from "../assets/img/hero/hero-bg.svg";
import heroImg from "../assets/img/hero/hero-img.png";
import heroShape from "../assets/img/hero/hero-shape.svg";
import whyUseImg from "../assets/img/why-use/why-use-img.jpg";
import whyUseShape from "../assets/img/why-use/why-use-shape.png";

const Crm = () => {
const [openAccordion, setOpenAccordion] = useState<number | null>(null);;
const [openAccordion3, setOpenAccordion3] = useState<number | null>(null);;

const toggleAccordion = (id: number) => {
  if (openAccordion === id) {
    setOpenAccordion(null);  // Close this accordion
  } else {
    setOpenAccordion(id);  // Open this accordion
  }

  if (openAccordion3 === id) {
    setOpenAccordion3(null);  // Close this accordion
  } else {
    setOpenAccordion3(id);  // Open this accordion
  }

};

  const counters = [
    {
      id: 1,
      icon: "lni lni-heart",
      value: 125000,
      label: "Happy Users",
      gradient: "gradient-2",
    },
    {
      id: 2,
      icon: "lni lni-star",
      value: 45000,
      label: "Great Reviews",
      gradient: "gradient-3",
    },
    {
      id: 3,
      icon: "lni lni-download",
      value: 305000,
      label: "Downloads",
      gradient: "gradient-4",
    },
  ];

  const faqData = [
    {
      id: 7,
      question: "Which license do I need?",
      answer:
        "The type of license you need depends on how you plan to use the product. We offer standard and extended licenses—standard is ideal for personal or small business use, while the extended license allows for broader distribution and commercial applications.",
    },
    {
      id: 8,
      question: "How do I get access?",
      answer:
        "Once you complete your purchase, you will receive an email with login credentials to access your account. If you don’t receive it within a few minutes, please check your spam folder or contact our support team.",
    },
    {
      id: 9,
      question: "How do I see my data?",
      answer:
        "You can view your data by logging into your dashboard, where you will find real-time analytics, reports, and insights based on your usage. Custom filters and export options are also available.",
    },
    {
      id: 10,
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 14-day money-back guarantee for all new purchases. If you're not satisfied with your product, you can request a refund within this period. Please review our refund policy for more details.",
    },
  ];
  const [linkAvailable] = useState(false);  // Set it to true or false based on your requirement


  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section img-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="hero-content-wrapper">
                <h1
                  className="wow fadeInDown"
                  data-wow-delay=".4s"
                  data-wow-duration="1.3s"
                >
                  Amazing Platform for Next-Gen CRM
                </h1>
                <p
                  className="wow fadeInLeft"
                  data-wow-delay=".6s"
                  data-wow-duration="1.3s"
                >
                  We provide all customer management services with one software.
                </p>
                <a
                  href={linkAvailable ? "#features" : "#"}
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".8s"
                  data-wow-duration="1.3s"
                >
                  Explore Features
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="hero-img">
                <img
                  src={heroImg}
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                  data-wow-duration="1.3s"
                  alt=""
                />
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
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Explore the range of services we offer to enhance your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                icon: "lni-money-protection",
                title: "Simple Pricing",
                description:
                  "Enjoy transparent and straightforward pricing with no hidden fees. Our flexible plans are designed to fit your needs and budget.",
              },
              {
                icon: "lni-ux",
                title: "Efficient Workflow",
                description:
                  "Streamline your processes and improve productivity with our optimized workflow solutions designed for maximum efficiency.",
              },
              {
                icon: "lni-users",
                title: "Built-in CRM",
                description:
                  "Manage customer relationships effectively with our integrated CRM system, enabling seamless communication and data tracking.",
              },
              {
                icon: "lni-reload",
                title: "Regular Updates",
                description:
                  "Stay ahead with frequent updates that enhance performance, security, and user experience with the latest features and improvements.",
              },
            ].map((feature, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-service text-center mb-30">
                  <div
                    className={`service-icon icon-gradient gradient-${index + 1} mb-30`}
                  >
                    <i className={`lni ${feature.icon}`}></i>
                  </div>
                  <h4 className="mb-15">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-use" className="why-use-section pt-150">
        <img src={whyUseShape} alt="" className="shape why-use-shape" />
        <div className="container">
          <div className="row">
            {/* Left Image Section */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="why-use-img wow fadeInLeft"
                data-wow-delay=".5s"
                data-wow-duration="1.3s"
              >
                <img src={whyUseImg} alt="Why Use" />
              </div>
            </div>
            {/* Right Content Section */}
            <div className="col-xl-6 col-lg-6 col-md-12 faq-column">
              <div className="section-title mb-30">
                <span className="wow fadeInDown" data-wow-delay=".2s">
                  We Offering
                </span>
                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  Simplest CRM Solution
                </h2>
                <p className="mb-50 wow fadeInUp" data-wow-delay=".6s">
                  Our CRM solution simplifies customer management with intuitive
                  features designed to enhance productivity and business growth.
                </p>
              </div>

              {/* Offfering / Accordion Section */}
              <div className="why-use-faq">
                <div className="accordion" id="accordionExample">
                  {[
                    {
                      id: 1,
                      icon: "lni-bullhorn gradient-1",
                      title: "Digital Marketing Tool",
                      description:
                        "Leverage powerful digital marketing tools to automate campaigns, engage audiences, and drive business growth effortlessly.",
                    },
                    {
                      id: 2,
                      icon: "lni-stats-up gradient-2",
                      title: "Detailed Analytics",
                      description:
                        "Gain deep insights into your business performance with real-time analytics, customizable reports, and data-driven decision-making tools.",
                    },
                    {
                      id: 3,
                      icon: "lni-consulting gradient-3",
                      title: "Human Resource Reports",
                      description:
                        "Track employee performance, manage HR processes, and generate detailed workforce reports to improve team efficiency and organization.",
                    },
                  ].map((faq) => (
                    <div
                      key={faq.id}
                      className="faq-item mb-15 wow fadeInUp"
                      data-wow-delay={`${faq.id * 0.2}s`}
                    >
                      <div className="faq-header" id={`faq-heading-${faq.id}`}>
                        <button
                          className={`faq-btn ${openAccordion === faq.id ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => toggleAccordion(faq.id)}
                          aria-expanded={openAccordion === faq.id}
                          aria-controls={`faq-${faq.id}`}
                        >
                          <i className={`lni ${faq.icon}`}></i>{" "}
                          <span>{faq.title}</span>
                        </button>
                      </div>

                      <div
                        id={`faq-${faq.id}`}
                        className={`collapse ${openAccordion === faq.id ? "show" : ""}`}
                        aria-labelledby={`faq-heading-${faq.id}`}
                      >
                        <div id={`faq-${faq.id}`} className="faq-body">
                          <p>{faq.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>{" "}
            {/* End Right Content Section */}
          </div>
        </div>
      </section>
      
      <section className="counterup-section pt-50 pb-50">
        <div className="container">
          <img
            src="assets/img/shape/repeat-shape.svg"
            alt=""
            className="shape counter-shape-1"
          />
          <img
            src="assets/img/shape/repeat-shape.svg"
            alt=""
            className="shape counter-shape-2"
          />
          <div className="counter-wrapper gradient-1 pt-50">
            <div className="row">
              {counters.map((counter) => (
                <div key={counter.id} className="col-xl-4 col-lg-4 col-md-4">
                  <div className="single-counter text-center mb-50">
                    <i
                      className={`icon-gradient ${counter.gradient} ${counter.icon} mb-30`}
                    ></i>
                    <h3 className="text-white">
                      <CountUp end={counter.value} duration={3} separator="," />
                      K
                    </h3>
                    <p className="mb-0">{counter.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="faq-img wow fadeInLeft" data-wow-delay=".5s">
                <img src="assets/img/faq/faq-img.svg" alt="FAQ" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="section-title mb-30">
                <span className="wow fadeInDown" data-wow-delay=".2s">
                  FAQ
                </span>
                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                  Frequently Asked Questions
                </h2>
                <p className="mb-50 wow fadeInUp" data-wow-delay=".6s">
                  We are committed to providing innovative digital solutions
                  that help businesses grow and succeed online. Our team of
                  experts works tirelessly to deliver impactful marketing
                  strategies, cutting-edge technology, and detailed analytics to
                  drive measurable results for our clients.
                </p>
              </div>
              <div className="process-faq">
                <div className="accordion" id="accordionExample3">
                  {faqData.map((faq, index) => (
                    <div
                      key={faq.id}
                      className={`faq-item mb-15 wow fadeInUp`}
                      data-wow-delay={`.${index * 2 + 2}s`}
                    >
                      <div className="faq-header" id={`faq-heading-${faq.id}`}>
                        <button
                          className="faq-btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#faq-${faq.id}`}
                          aria-expanded="true"
                          aria-controls={`faq-${faq.id}`}
                        >
                          <span className="pt-0">{faq.question}</span>
                        </button>
                      </div>
                      <div
                        id={`faq-${faq.id}`}
                        className={`collapse ${openAccordion3 === faq.id ? "show" : ""}`}
                        aria-labelledby={`faq-heading-${faq.id}`}
                        data-parent="#accordionExample3"
                      >
                        <div className="faq-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll Top */}
      <a 
      href={linkAvailable ? "#scroll" : "#"}
      className="scroll-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </div>
  );
};

export default Crm;
