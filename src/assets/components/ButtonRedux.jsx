import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gantiBrand, hapusBedak, kurangiMakeup, tambahBedak, tambahMakeup } from "../../redux/action/manipulasiMakeUp";

export const ButtonRedux = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("")

  const handleTambahBedak = () =>{
    if (input) {
        dispatch(tambahBedak(input))
        setInput("")
    }
  }

  return (
    <div className="flex flex-col items-center">
      <input
        className="border-2 justify-center my-5 rounded-sm w-1/2 h-8"
        onChange={(e) => {
          dispatch(
            gantiBrand({
              namaBrand: e.target.value,
              penerbit: "sedang dicari",
            })
          );
        }}
      ></input>
      <div className="flex space-x-4">
        <button
          className="bg-green-400 rounded-sm px-7 py-2 font-bold w-48"
          onClick={() => {
            dispatch(tambahMakeup());
          }}
        >
          Tambah MakeUp
        </button>
        <button
          className="bg-yellow-400 rounded-sm px-7 py-2 font-bold w-1/2"
          onClick={() => {
            dispatch(kurangiMakeup());
          }}
        >
          Kurang MakeUp
        </button>
      </div>
      <h1 className="text-center text-white font-medium my-3">Input Bedak</h1>
      <input
        className="border-2 justify-center w-1/2 h-8 rounded-sm mb-3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <div className="flex space-x-4">
      <button className="bg-blue-400 rounded-sm px-7 py-2 font-bold w-48"
      onClick={handleTambahBedak}
      >Submit Bedak
      </button>
      <button
          className="bg-red-400 rounded-sm px-7 py-2 font-bold w-48"
          onClick={() => {
            dispatch(hapusBedak())
          }}
        >
          Hapus Bedak
        </button>
</div>
    </div>
  );
};
