import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="pt-50 font-bold text-3xl">{title}</h1>
      <p className="w-[30%] mt-2">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl p-3 my-3 w-32 rounded-md hover:bg-opacity-80">
        ▶️ Play
        </button>
        <button className="bg-slate-700 p-3 text-white text-xl ml-2 w-32 rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
