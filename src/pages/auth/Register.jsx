import React, { useState } from "react";
import { useCreateUser } from "../../services/auth/Register_user";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const { mutate: regiterUser, isSuccess, error } = useCreateUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  if (error) {
    console.log(error.response.data.massage, "error guys");
  }

  const registerUser = () => {
    regiterUser({
      email: Email,
      name: Username,
      password: Password,
    });
  };

  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white drop-shadow-xl shadow-neutral-950 rounded-xl px-20 pt-10 pb-12 mb-4 w-1/3">
          <div className="mb-4">
            <h1> Name</h1>
            <input
              onChange={handleInput}
              id="username"
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700"
              type="text"
            />
          </div>
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
          <button
            onClick={() => registerUser()}
            className="border bg-gray-900 p-3 rounded-md w-full text-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
