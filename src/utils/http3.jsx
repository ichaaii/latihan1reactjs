import axios from "axios"
import { CookieKeys, CookieStorage } from "./cookies";

//level 5
// const Token = localStorage.getItem("token") ? localStorage.getItem("token") : undefined
// const Token2 = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : undefined

const http3 = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json"
  },
});

http3.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`,
    }
    return config
  },
)

export default http3;