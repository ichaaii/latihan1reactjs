import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";
import authRatingSlice from "./rating/authRatingSlice";

//combine reducer adalah tempat mensetup
//apa saja reducer yang kita gunakan di aplikasi
export default combineReducers({ 
    auth: authLoginSlice,
    movie: authMovieSlice,
    rating: authRatingSlice
 })