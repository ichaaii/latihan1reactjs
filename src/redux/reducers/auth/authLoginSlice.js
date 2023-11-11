import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : "",
    isLogin : "",
    user : ""
}

const authLoginSlice = createSlice({ 
    name : "loginAuth",
    initialState ,
    reducers: {
        setToken: (state, action) => {
          if (action.payload) {
            localStorage.setItem("token", action.payload);
          } else {
            localStorage.removeItem("token");
          }
    
          state.token = action.payload;
        },
        setIsLoggedIn: (state, action) => {
          state.isLogin = action.payload;
        },
        setUser: (state, action) => {
          state.user = action.payload;
        },
      },
 })

 export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;
 export default authLoginSlice.reducer;