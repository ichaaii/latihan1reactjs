import React from "react";
import profil from "./profil.png";

export const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="text-left d-flex rounded-sm bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded-lg shadow-md p-5 w-98 mr-4">
          <div className="m-4">
            <p>Nama     : Bagus Dwi Putra</p>
            <p>Alamat   : Surabaya</p>
            <p>Email    : sugab.dwi88@gmail.com</p>
            <p>Moto     : Hidup seperti larry.</p>
          </div>
          <div class="w-[10rem]">
          <img src={profil} alt="Profil" className="rounded-full" />
        </div>
        </div> */}
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 rounded-lg shadow-md p-6 w-96 ml-10 flex">
        <div className="flex-1">
            <h2 className="text-2xl   text-slate-600 font-semibold">Siti Fajriyatis Solikha</h2>
            <p className="text-white">Jakarta timur</p>
            <p className="text-white">fajriyatisolikha@gmail.com</p>
            <p className="mt-4">Hidup dijalanin aja.</p>
        </div>
        <div class="w-[10rem]">
          <img src={profil} alt="Profil" className="rounded-full" />
        </div>
      </div>
      <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 rounded-lg shadow-md p-6 w-96 ml-10 flex">
        <div className="flex-1">
            <h2 className="text-2xl  font-semibold">Bagus Dwi Putra</h2>
            <p className="text-black-300">Surabaya</p>
            <p className="text-black-300">sugab.dwi88@gmail.com</p>
            <p className="mt-4 text-white">Hidup seperti larry.</p>
        </div>
        <div class="w-[10rem]">
          <img src={profil} alt="Profil" className="rounded-full" />
        </div>
      </div>
    </div>
  );
};
