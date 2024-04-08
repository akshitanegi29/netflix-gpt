import React from "react";

const Shimmer = () => {
  return (
    <div className="p-4 m-2 bg-black text-white bg-opacity-70 h-screen">
      <div className="flex overflow-x-scroll">
        <div className="flex">
          <div className="w-36 m-3 h-64 md:w-48 pr-4 bg-slate-600 dark:bg-gray-700 max-w-sm animate-pulse"></div>
          <div className="w-36 m-3 h-64 md:w-48 pr-4 bg-slate-600 dark:bg-gray-700 max-w-sm animate-pulse"></div>
          <div className="w-36 m-3 h-64 md:w-48 pr-4 bg-slate-600 dark:bg-gray-700 max-w-sm animate-pulse"></div>
          <div className="w-36 m-3 h-64 md:w-48 pr-4 bg-slate-600 dark:bg-gray-700 max-w-sm animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
