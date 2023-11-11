export const Responsive = () => {
  return (
    <div className="p-4 w-full h-screen text-white font-medium text-3xl">
      {/* Kotak Merah */}
      <div className="flex justify-end tablet:justify-center w-full h-1/6 mb-4">
        <div className="bg-[#EB3838] w-2/5 tablet:w-full flex justify-center items-center">
          <h1>Merah</h1>
        </div>
      </div>
      <div className="flex flex-col web:flex-row gap-4 w-full h-5/6 ">
        {/* Kotak Ungu */}
        <div className="bg-[#5C38EB] w-1/3 justify-center items-center mb-4 hidden web:flex ">
          Unggu
        </div>
        <div className="flex flex-col gap-4 tablet:flex-col-reverse w-full h-full">
          <div className="bg-[#5C38EB] flex justify-center items-center h-2/6 w-full tablet:mb-4 web:hidden">
            Unggu
          </div>
          <div className="flex justify-between flex-row-reverse tablet:flex-row gap-4 items-center h-2/6 web:h-3/6 web:mb-4 w-full">
            {/*Biru */}
            <div className="bg-[#38C0EB] tablet:bg-[#EB38AE] web:bg-[#38C0EB] flex justify-center items-center h-full w-full">
              Biru
            </div>
            {/*Pink */}
            <div className="bg-[#EB38AE] flex justify-center items-center h-full w-full">
              Pink
            </div>
          </div>
          {/* Kotak Hijau */}
          <div className="bg-[#38EB55] flex justify-center items-center h-2/6 web:h-3/6 w-full mb-4 tablet:mb-0">
            Hijau
          </div>
        </div>
      </div>
    </div>
  );
};
