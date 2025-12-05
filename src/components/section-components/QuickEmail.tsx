import React from "react";
import Send from "../buttons/Send";

const QuickEmail = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto my-16">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-3 tracking-tight">
          Subscribe to our{" "}
          <span className="italic text-[#FF6D1F]">Newsletter</span>
        </h2>
        <p className="text-secondary-font text-lg font-medium">
          Unlock exclusive travel deals & tips directly in your inbox.
        </p>
      </div>

      <div className="w-full max-w-lg">
        <form className="relative w-full flex items-center group">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full pl-8 pr-32 py-4 rounded-full border border-gray-200 bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-primary-font text-lg placeholder:text-gray-400"
          />
          <Send />
        </form>
      </div>
    </div>
  );
};

export default QuickEmail;
