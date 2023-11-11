//pondasi axios
//mengatur scurity level 2
import axios from "axios"

//level 4
const Token = localStorage.getItem("token") ? localStorage.getItem("token") : undefined
const Token2 = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : undefined

const http2 = axios.create ({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers:{
    Accept: "application/json",
    Authorization:`Bearer ${Token2}`
  },
});

export default http2;