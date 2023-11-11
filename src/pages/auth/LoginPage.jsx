import React, { useEffect, useState } from "react";
import { useLoginUser } from "../../services/auth/Login_user";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export const LoginPage = () => {
  //untuk menyimpan Password dan email
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const Navigate = useNavigate();

  const { mutate: loginUser, isSuccess, error, data, status } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      console.log(e.target.value);
    }
  };

  // if (error) {
  //   console.log(error.response.data.massage, "error guys");
  // }

  const login = () => {
    loginUser({
      email: Email,
      password: Password,
    });
  };

  useEffect(() => {
    if (data?.data.data.token) {
      toast.success("Anda berhasil login");
      Navigate("/dashboard");
    }
  }, [data]);

  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white drop-shadow-xl shadow-neutral-950 rounded-xl px-10 pt-10 pb-12 mb-4 w-1/3">
          <div className="mb-4">
            <h1> Email</h1>
            <input
              onChange={handleInput}
              id="email"
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 "
              type="email"
            />
          </div>
          <div className="mb-6">
            <h1> Password</h1>
            <input
              onChange={handleInput}
              id="password"
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 "
              type="password"
            />
          </div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          <button
            onClick={() => login()}
            className="border bg-gray-900 p-3 rounded-md w-full text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
