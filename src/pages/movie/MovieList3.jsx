import axios from "axios";
import React, { useEffect, useState } from "react";
import RenderMovies from "../../assets/components/RenderMovies";
import http from "../../utils/http";
import { fetchDataMovie, useMovieDataQuery } from "../../services/get-data-movie";
import { useMovieDataQueryDetail } from "../../services/get-data-movie-detail";


const MovieList3 = () => {
  //pake versi 3
//   const [PageNow, setPageNow] = useState(1)

//   const {data: fetchUser, refetch: refetchUser } = useMovieDataQuery (PageNow);

//   useEffect(() => {
//     console.log(fetchUser, "fetchUser")
//   }, [fetchUser]);

    // //pake versi 4
    // const [PageNow, setPageNow] = useState(1)

    // const {data: paijoSalto} = useMovieDataQuery ({
    //     language : "en-US",
    //     page : PageNow
    // })

    //versi buat detail
    const [PageNow, setPageNow] = useState(1)

    const {data: paijoSalto} = useMovieDataQueryDetail ({
        id : "980489"
    })
    console.log(paijoSalto, "data")

  return (
    <div className="relative">
        <h1>{PageNow}</h1>
        <button onClick={() => {
            setPageNow(PageNow + 1)
        }}>Plus</button>
    </div>
  )
}

export default MovieList3