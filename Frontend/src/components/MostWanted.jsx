import React, { useState } from "react";
import NavBar from "./NavBar";

function MostWanted() {
  const [topImage, setTopImage] = useState("./logo_real.png");

  return (
    <div
      className=" bg-cover bg-center h-screen  w-full flex flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url("/mostWantedbg.gif")` }}
    >
      <div className="bg-[#11304D] border-[#11304D] border-4 bg-opacity-80 h-4/5 w-1/2 flex flex-col p-3">
        <div className="h-4/5 w-full flex">
          <div className="h-full w-1/3"></div>
          <div className="h-full w-1/3 flex flex-col gap-3">
            <div className="w-full h-15  text-whitish text-3xl font-gtaHeadingText1 flex justify-center align-middle">
              <span>Most Wanted</span>
            </div>
            <div className="w-full h-full transition-all duration-500 ease-in-out">
              <img
                className="h-full w-full rounded-md  shadow-black shadow-md border-black border-2 box-content"
                src={topImage}
              />
            </div>
          </div>
          <div className="h-full w-1/3"></div>
        </div>

        <div className="h-20 w-full flex items-center">
          <input
            placeholder="Search"
            className="w-1/3 pl-5 py-2 text-whitish bg-[#0B3039] outline-none rounded-full shadow-black shadow-sm"
          />
        </div>

        <div className="h-3/5 w-full flex flex-col gap-2 cursor-pointer overflow-y-scroll overflow-x-hidden">
          <div className="h-fit w-full flex gap-2">
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim1.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim2.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim3.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim4.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
          </div>
          <div className="h-fit w-full flex gap-2">
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim1.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim2.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim3.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim4.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
          </div>
          <div className="h-fit w-full flex gap-2">
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim1.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim2.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim3.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
            <div className="h-full w-1/4 ">
              <img
                className="h-full w-full rounded-md"
                src="./crim4.jpeg "
                onClick={(e) => setTopImage(e.target.src)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostWanted;
