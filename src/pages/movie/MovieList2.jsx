import axios from "axios";
import React, { useEffect, useState } from "react";
import RenderMovies from "../../assets/components/RenderMovies";
import http from "../../utils/http";
import { fetchDataMovie, useMovieDataQuery } from "../../services/get-data-movie";

const MovieList2 = () => {
  //pake cara 2
  const [PageNow, setPageNow] = useState(1)

  const {data: fetchUser, refetch: refetchUser } = useMovieDataQuery (PageNow);

  useEffect(() => {
    console.log(fetchUser, "fetchUser")
  }, [fetchUser]);

  return (
    <div className="relative">
        <h1>{PageNow}</h1>
        <button onClick={() => {
            setPageNow(PageNow + 1)
        }}>Plus</button>
    </div>
  )
}

export default MovieList2