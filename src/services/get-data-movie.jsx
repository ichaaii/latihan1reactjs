import { useQuery } from "@tanstack/react-query"
import http from "../utils/http"
import { API_ENDPOINT } from "../utils/api-endpoint"

// //versi no 1 dan 2
// // setting pertama untuk hit API
// const fetchDataMovie = async (page) =>{
//     //untuk handel api
//     const { data } = await http.get(`3/movie/now_playing?page=${page ? page : 1}`)
//     return data
// }

// //untuk Dinamis Handle
// const useMovieDataQuery = (page) => {
//     return useQuery(["userData", page], () => fetchDataMovie(page));
// };

// //versi no 3
// const fetchDataMovie = async (page) =>{
//     //untuk handel api
//     const { data } = await http.get(`${API_ENDPOINT.NOW_PLAYING}?page=${page ? page : 1}`)
//     return data
// }

// //untuk Dinamis Handle
// const useMovieDataQuery = (page) => {
//     return useQuery(["userData", page], () => fetchDataMovie(page));
// };

//versi 4
const fetchDataMovie = async ({queryKey}) =>{
    //untuk handel api
    const [_key, _params] = queryKey;
    const {data} = await http.get(_key , {_params: _params});
    return data
}

//untuk Dinamis Handle
const useMovieDataQuery = (options) => {
    return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie)
};

export {fetchDataMovie, useMovieDataQuery }