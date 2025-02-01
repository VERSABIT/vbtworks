import React from "react";
import "../assets/css/FAQSection.css";
import "../assets/css/Animation.css";

const FAQSection = () => {
  return (
    <section className="faq-section py-6 sm:py-8 md:py-10 bg-white dark:bg-slate-800">
      <div className="faq-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="faq-grid">
          <div className="faq-intro opacity-100 transform-none">
            <div className="faq-intro-content flex flex-col gap-4 sm:gap-6 md:gap-8">
              <p className="faq-heading font-semibold tracking-widest text-sky-500 uppercase text-base sm:text-lg md:text-xl">
                FAQ
              </p>
              <h2 className="faq-title text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 dark:text-slate-50">
                Frequently Asked Questions
              </h2>
              <p className="faq-description text-sm sm:text-base md:text-lg font-normal text-slate-600 dark:text-slate-400">
                Find answers to common questions about Versabit's services.
              </p>
            </div>
          </div>
          <div className="faq-items flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="faq-item space-y-6 sm:space-y-8">
              <div className="faq-card bg-white dark:bg-slate-700 border border-black/10 dark:border-white/10 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="faq-card-content p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">
                  <p className="faq-card-title text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50">
                    What services does Versabit offer?
                  </p>
                  <p className="faq-card-text text-sm sm:text-base md:text-lg font-normal text-slate-600 dark:text-slate-400">
                    Versabit offers a range of services including IT advisory,
                    on-demand IT, infrastructure services, software development,
                    project management, enterprise solutions, testing, QA, and
                    cybersecurity.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-item space-y-6 sm:space-y-8">
              <div className="faq-card bg-white dark:bg-slate-700 border border-black/10 dark:border-white/10 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="faq-card-content p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">
                  <p className="faq-card-title text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50">
                    How can I get started with Versabit?
                  </p>
                  <p className="faq-card-text text-sm sm:text-base md:text-lg font-normal text-slate-600 dark:text-slate-400">
                    You can get started by contacting us through our website or
                    calling our support team. We will guide you through the
                    process and help you choose the right solutions for your
                    business.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-item space-y-6 sm:space-y-8">
              <div className="faq-card bg-white dark:bg-slate-700 border border-black/10 dark:border-white/10 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="faq-card-content p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">
                  <p className="faq-card-title text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50">
                    What industries does Versabit serve?
                  </p>
                  <p className="faq-card-text text-sm sm:text-base md:text-lg font-normal text-slate-600 dark:text-slate-400">
                    Versabit serves a variety of industries including
                    e-commerce, finance, healthcare, manufacturing, and more.
                    Our solutions are tailored to meet the specific needs of
                    each industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-button opacity-100 transform-none mt-4 sm:mt-6 md:mt-8">
              <button className="faq-link flex group items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-sky-500 hover:text-sky-400 focus:text-sky-500">
                Check all common questions
                <span className="faq-link-arrow group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
