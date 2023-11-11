//rfc
// import React from 'react'

// export default function HomePage() {
//   return (
//     <div>HomePage</div>
//   )
// }

//rafc
import React, { useState } from "react";

//Percobaan 1
// export const HomePage = () => {
//   const [nama, setNama] = useState("icha");
//   let umur = 20;
//   let hobi = "Ga ada";

//   return (
//     <div>
//       <h1>Nama : {nama}</h1>
//       <h1>Umur : {umur}</h1>
//       <h1>Hobi : {hobi}</h1>
//       <input
//         onChange={(e) => {
//           setNama(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

//TUGAS 1
export const HomePage = () => {
  const [namaku, setNamaku] = useState("Paijo");
  const [umurku, setUmurku] = useState(20);
  const [kotaku, setKotaku] = useState("");
  const [jenisKelamin, setjenisKelamin] = useState("");

  const tambahUmur = () => {
    let data = umurku + 1;
    setUmurku(data);
  };
  const kurangUmur = () => {
    let data = umurku - 1;
    setUmurku(data);
  };

  const gantiKota = kotaBaru => {
    setKotaku(kotaBaru);
  }

  return (
    <div>
      <h2>Nama : {namaku}</h2>
      <input
        onChange={(e) => {
          setNamaku(e.target.value);
        }}
      />
      <h2>Umur : {umurku}</h2>
      <button onClick={kurangUmur}>Pengurang umur</button>
      <button onClick={tambahUmur}>Penambah umur</button>
      <h2>Kota : {kotaku}</h2>
      <button onClick={() => gantiKota("Jakarta")}>Ubah ke Jakarta</button>
      <button onClick={() => gantiKota("Depok")}>Ubah ke Depok</button>
      <button onClick={() => gantiKota("Bekasi")}>Ubah ke Bekasi</button>
      <h2>Jenis kelamin : {jenisKelamin}</h2>
      <input
        onChange={(e) => {
          setjenisKelamin(e.target.value);
        }}
      />
    </div>
  );
};
