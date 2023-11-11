import React, { useState } from "react";

export const LatihanRenderList = (props) => {
  const [Nama, setNama] = useState(props.data.nama);
  const [Umur, setUmur] = useState(props.data.umur);
  const [Check, setCheck] = useState(props.data.check);
  const [OnEdit, setOnEdit] = useState(false);

  return (
    <div className={`bg-blue-200 py-5 px-5 w-[35rem] space-x-5 flex items-center ${Check ? "line-through" : ""}`}>
      {OnEdit ? (
        <input
          value={Nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
          className="border"
        />
      ) : (
        <span className={Check ? "line-through" : ""}>{Nama}</span>
      )}
      {OnEdit ? (
        <input
          value={Umur}
          onChange={(e) => {
            setUmur(e.target.value);
          }}
          className="border"
        />
      ) : (
        <span className={Check ? "line-through" : ""}>{Umur}</span>
      )}
      <div className="flex-grow"></div>
      <input
        checked={Check}
        type="checkbox"
        onChange={(e) => {
          setCheck(!Check);
          setOnEdit(false); 
        }}
      />
      <button
        onClick={() => {
          setOnEdit(!OnEdit);
        }}
      >
        {" "}
        {OnEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
};
