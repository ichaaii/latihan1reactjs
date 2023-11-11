import axios from "axios";
import React, { useEffect, useState } from "react";
import RenderMovies from "../../assets/components/RenderMovies";

const TodolistAPI = () => {
  const [DataMovie, setDataMovie] = useState([]);
  //   const [DataAwal, setDataAwal] = useState([]);
  //   const [DataSearch, setDataSearch] = useState("");

  const options = {
    method: "GET",
    url: "3/movie/now_playing?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTgxN2RlY2ZiZjBjNGMxYTkyOWUzYmIwNDAyNDMzZiIsInN1YiI6IjY1MTJlNDZlOGUyYmE2MDE0MTQ3OTViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.joJ1ypKZ68LBb80loAp_OMPrUh8VOrMUOa7pDJP2UG8",
    },
  };

  const getDataMovie = async () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.results);
        setDataMovie(response.data.results);
      })

      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  return (
    <div className="flex flex-col items-center w-full justify-center bg-slate-900">
      <div className="text-white text-5xl font-bold my-8">
        <h1>Movie List </h1>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {DataMovie.map((value, index) => {
          return <RenderMovies key={index} dataMovie={value} />;
        })}
      </div>
    </div>
  );
};

export default TodolistAPI;
