import React, { useEffect } from "react";
import { useGetDataUser } from "../../services/auth/get_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { Navigate, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  // const cookies = new Cookies();
  // cookies.get("")
  
  const { data: paijo, isError, status } = useGetDataUser({});

  const navigate = useNavigate()
  //untuk hapus token dan mengarahkan ke login
  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken, {
      path:"/",
      expires:new Date(0)
    });

    navigate("/login")
  }

  // useEffect(() =>{
  //     console.log(paijo)
  // }, [paijo, status])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="m-5 text-xl text-white">Dashboard</h1>
      <button onClick={handleLogout}
        className="border px-5 py-2 rounded-md bg-red-600 text-white"
      >
        Logout
      </button>
    </div>
  );
};
