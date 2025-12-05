import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex bg-slate-100 flex-col items-center justify-center min-h-screen text-slate-800">
      <h1 className="text-9xl font-extrabold text-[#0066cc]">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Destination Not Found</h2>
      <p className="text-lg mt-2 text-slate-600 max-w-md text-center">
        Oops! It looks like this location isn't on our map yet. Let's get you
        back on track.
      </p>
      <Link
        href="/"
        className="mt-8 px-8 py-3 bg-[#0066cc] text-white rounded-full font-semibold shadow-lg hover:bg-[#0055aa] transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
