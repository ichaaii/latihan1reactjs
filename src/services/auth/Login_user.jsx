import { useMutation } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import { CookieKeys, CookieStorage } from "../../utils/cookies"
import http3 from "../../utils/http3";


const LoginUser = async (input) =>{
    return await http3.post(API_ENDPOINT.LOGIN_USER, input).then((result) => {
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)
        return result
    }).catch((err) => {
        console.log(err)
});;
}

const useLoginUser = () => {
    return useMutation(LoginUser)
};

export {LoginUser, useLoginUser }