import React from "react";
import "../../assets/css/home/HomeTransformSection.css";
import "../../assets/css/Animation.css";

const HomeTransformSection = () => {
  return (
    <div className="overflow-hidden bg-white py-24 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="hometransformheading">
              Ready to Transform Your Business?
            </h2>
            <p className="hometransformparagraph">
              Discover how Versabit can help you achieve your business goals
              with our customized solutions.
            </p>
            <p className="hometransformparagraph">
              Our team is ready to collaborate with you and deliver innovative
              enterprise solutions.
            </p>
            <div className="hometransformbutton">
              <button className="hometransformprimarybutton ">
                Contact Us
                <span className="hometransformprimarybutton:hover">→</span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                className="IMAGE aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-slate-100 object-cover"
                alt="Transform Business"
                src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1206&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVhbXdvcmt8fHx8fHwxNzE1NzMyMzgz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1552"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  className="IMAGE aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-slate-100 object-cover"
                  alt="Enterprise Solutions"
                  src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1004&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlfHx8fHx8MTcxNTczMjM4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1168"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  className="IMAGE aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-slate-100 object-cover"
                  alt="Innovation"
                  src="https://images.unsplash.com/photo-1630659508985-fbb56613d08b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1242&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29sbGFib3JhdGlvbnx8fHx8fDE3MTU3MzIzODM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1552"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  className="IMAGE aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-slate-100 object-cover"
                  alt="Business Goals"
                  src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1004&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVldGluZ3x8fHx8fDE3MTU3MzIzODM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1168"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTransformSection;
