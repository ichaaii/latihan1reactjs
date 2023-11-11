import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

const fetchUserData = async ({ queryKey }) => {
  // let ValueData = "";

  const [_key] = queryKey;
  const { data } = await http3.get(_key).
  then((value) => {

    let Datahasil ={
      chaa : value.data.data.name,
      email : value.data.data.email
    }
    return {data : Datahasil}

  }).catch((err) => {
    // alert(err.response.status)
    if (err.response.status === 401) {
      window.location.href = "/login"
    }
  })
  return data;
};

//untuk Dinamis handle
const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

export { fetchUserData, useGetDataUser};
