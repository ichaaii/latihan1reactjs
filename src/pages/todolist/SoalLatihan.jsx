import React, { useEffect, useState } from "react";
import {LatihanRenderList} from "../../assets/components/LatihanRenderList"

export const SoalLatihan = () => {
  const [InputValue, setInputValue] = useState ("")
  const [DataValue, setDataValue] = useState(
      [{
        "id": 1,
        "task": "Nyuci mobil",
        "complete": true
      }, {
        "id": 2,
        "task": "Memberi makan kucing",
        "complete": true
      }, {
        "id": 3,
        "task": "Olahraga 10 menit",
        "complete": false
      }, {
        "id": 4,
        "task": "Sarapan sereal",
        "complete": true
      }, {
        "id": 5,
        "task": "Belanja harian",
        "complete": false
      }, {
        "id": 6,
        "task": "Ngeprint tugas",
        "complete": true
      }, {
        "id": 7,
        "task": "Bayar tagihan bulanan",
        "complete": true
      }, {
        "id": 8,
        "task": "Berangkat kuliah",
        "complete": false
      }, {
        "id": 9,
        "task": "Les bahasa Inggris",
        "complete": true
      }, {
        "id": 10,
        "task": "Ke rumah Sabrina",
        "complete": false
      }]
  )

  useEffect(()=> {
    console.log(DataValue , "DataValue")
}, [DataValue])

  let data = [
    {
      nama: "Bagus",
      umur: 22,
      check: false
    },
    {
      nama: "Risma",
      umur: 20,
      check: false
    },
    {
      nama: "Anita",
      umur: 17,
      check: false
    },
    {
      nama: "Winata",
      umur: 20,
      check: false
    },
    {
      nama: "Anya",
      umur: 17,
      check: false
    },
  ];

  const renderList = () => {
    return data.map((value)=>{
      return <LatihanRenderList data={value}/>
    })
  }

    // return dataProses.map((value) => {
    //   return <div>
    //     <h1 className="bg-blue-200 py-1 flex justify-center items-center w-[10rem]">{value.nama}</h1>
    //     <h1 className="bg-blue-200 py-1 flex justify-center items-center w-[10rem]">{value.umur}</h1>
    //   </div>;
    // });
    
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-3">
      {renderList()}
    </div>
  );
};
