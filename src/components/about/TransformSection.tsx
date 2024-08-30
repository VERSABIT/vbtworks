import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing Font Awesome icon

const TransformSection = () => {
  return (
    <div className="w-full bg-white dark:bg-slate-800">  

      <div className="max-w-7xl mx-auto py-10 px-4 ">
        <div style={{ color: "#002770"}} className="relative isolate overflow-hidden dark:bg-[#002770] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="TITLE-PRIMARY mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white/90 sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300/90">
            Join the many enterprises that have benefited from our customized
            solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button style={{ backgroundColor: "#007BFF"}} className="BTN-PRIMARY flex items-center justify-center text-white bg-[#007BFF] font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500">
              Get Started
            </button>
            <button className="BTN-SECONDARY text-sm group flex items-center gap-1 font-semibold leading-6 text-white">
              Learn More
              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300 ml-1" />
            </button>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#grad1)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="grad1">
                <stop offset="0%" stopColor="#007BFF" />
                <stop offset="100%" stopColor="#6610F2" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TransformSection;
