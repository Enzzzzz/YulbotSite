import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

function Comandos() {
  return (
    <div className={`bg-primary w-full h-full min-h-screen overflow-hidden`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`flex w-full mt-2 sm:mt-5 md:mt-10 pb-24 md:flex-col text-white `}
      >
        <div className="flex px-2 sm:px-8 md:px-16 flex-row">
          <div className="h-[100%] w-[200%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border">
            <div className="flex flex-col scale-100 md:scale-[95%] pb-10">
            <p
                className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-4 mt-8 text-lg sm:text-xl md:text-3xl `}
              >
                <span className=" text-white font-bold">Comandos</span>
              </p>
              <p className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-4 mt-8 text-lg sm:text-xl md:text-3xl `}> Os comandos estão atualmente sendo retrabalhados! Mais informações em breve.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comandos;
