import axios from "axios";
import React, { useEffect, useState } from "react";
import RenderMovies from "../../assets/components/RenderMovies";
import http from "../../utils/http";
import { fetchDataMovie } from "../../services/get-data-movie";

const MovieList = () => {
  const[DataAwal, setDataAwal] = useState([])
  const[DataMovie, setDataMovie] = useState([])
  const [DataSearch, setDataSearch] = useState("")
  const [Load, setLoad] = useState(true)
  const [Page, setPage] = useState("")

  //versi 1 pake ini
  // const options = {
  //   method: "GET",
  //   url: '${process.env.REACT_APP_SERVER}3/movie/now_playing?language=en-US&page=1',
  //   headers: {
  //     accept: "application/json",
  //     Authorization:'Bearer ${process.env.REACT_APP_SERVER}'
  //   },
  // };

  const getDataMovie = async () => {
    //versi 1 (ga pake http.jsx)
    // const data = await axios.request(options)
    // console.log(data)
    // setPage(data.data.page , "data")

    //versi 2
    const data = await fetchDataMovie()
    console.log(data)
    setDataMovie(data.results)
   
    // http.get('3/movie/now_playing?language=en-US&page=1')
  };

  // const getDataMovie2 = () => {
  //   axios.request(options).then((result) => {
  //       console.log(result, "result")
  //       setDataMovie(result.data.results)
  //     }).catch((err) => {
  //       console.log(err , "ini console eror")
  //       alert(err.message)
  //     });
  // }

  useEffect(() => {
    // getDataMovie2()
    getDataMovie();
  }, []);

  const filterData = (e) =>{
    setDataMovie(DataAwal.filter(valueFilter =>
      valueFilter.name.includes(DataSearch)))
  }

  return (
    <div className="relative">
      {!Load && <div className="w-screen h-sreen bg-red-300">loading</div>}
      <div className="mb-[1rem]">
        <h1>Tittle {Page}</h1>
        <input className="border" onChange={(e) => {setDataSearch(e.target.value)}}/>
      </div>
      <button onClick={() => {filterData()}}>Search</button>
      <div className="flex flex-wrap">
        {DataMovie.map((value, index) => {
          return <RenderMovies key={index} setData={setDataMovie} dataMovie={value} DataAll = {DataMovie}/>
        })}
      </div>
    </div>
  )
}

export default MovieList;