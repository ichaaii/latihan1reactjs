import React from "react";

const RenderMovies = (props) => {
  return (
    <div className="ml-4 mb-10 border border-slate-400 rounded-xl shadow-md shadow-gray-700 relative">
      <img
        className="h-[20rem] rounded-xl"
        src={`https://image.tmdb.org/t/p/original/${props.dataMovie.poster_path}`}
      />
      <span className="font-mono text-white absolute bottom-0 left-0 w-full text-center py-2 bg-black bg-opacity-50 rounded-xl">
        {props.dataMovie.original_title}
      </span>
    </div>
  );
};
export default RenderMovies;
