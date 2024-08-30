import React from "react";
import "../assets/css/Animation.css";
import "../assets/css/index.css"


const EnterpriseSection = () => {
  return (
    <section className="relative w-full h-[40rem] px-6 py-24 md:px-8 md:py-32 animate-fadeInMoveUp">
      <div className="w-full h-full mx-auto max-w-7xl flex flex-col justify-between gap-16 md:gap-20">
        <div className="z-20 w-full h-full flex flex-col gap-14 justify-between md:items-center md:gap-20">
          <div className="relative w-full h-full flex flex-col gap-10">
            <div className="h-[1px] bg-white/40" style={{ width: "40%" }}></div>
            <h1
              className="title-primary text-5xl font-extrabold text-white md:text-8xl md:w-4/5"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="_editable_jwu41_1 undefined"
                data-link="link=&target=_blank&text=Empower%20Your%20Enterprise"
              >
                Empower Your Enterprise
              </div>
            </h1>
            <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3">
              <p
                className="w-full text-white font-light"
                style={{ opacity: 1, transform: "none" }}
              >
                <div
                  className="_editable_jwu41_1 undefined"
                  data-link="link=&target=_blank&text=Versabit%20offers%20tailored%20solutions%20to%20streamline%20your%20business%20operations%20and%20drive%20innovation."
                >
                  Versabit offers tailored solutions to streamline your business
                  operations and drive innovation.
                </div>
              </p>
              <div
                className="h-[1px] bg-white/40 mt-3.5"
                style={{ width: "100%" }}
              ></div>
              <p
                className="w-full text-white font-light"
                style={{ opacity: 1, transform: "none" }}
              >
                <div
                  className="_editable_jwu41_1 undefined"
                  data-link="link=&target=_blank&text=Customized%20enterprise%20solutions%20across%20e-commerce,%20payment%20processing,%20POS,%20ECM,%20DMS,%20BI,%20and%20more."
                >
                  Customized enterprise solutions across e-commerce, payment
                  processing, POS, ECM, DMS, BI, and more.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-black">
          <img
            className="w-full h-full opacity-70 bg-black/10 dark:bg-white/10 object-cover"
            alt="backgroundImage"
            src="https://images.unsplash.com/photo-1581092800573-6afa755dcdc7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1400&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neSxlbnRlcnByaXN8fHx8fHwxNzE1NzMyNDQw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2000"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </div>
      <div className="enterprisecustom-element-container">
        <div className="enterprisecustom-element">
          <div className="enterprisecustom-inner-element"></div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
