import http3 from "../../utils/http3";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLoginSlice";

export const LoginUser = (input) => (dispatch) => {
  http3.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
          //CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
          dispatch(setToken(result.data.data.token))
  }).catch((err) => {
          
  });
}
