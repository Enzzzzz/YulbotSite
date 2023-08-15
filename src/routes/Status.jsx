import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

function Suporte() {
  return (
    <div className={`bg-primary w-full overflow-hidden'`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary w-full overflow-hidden'`}>
        <div
          className={`flex w-full items-center md:ml-0 ml-0 sm:ml-32 mt-10 pb-24 md:flex-col text-white `}
        >
          <div className="flex px-4 sm:px-8 md:px-16 items center flex-row">
            <div className="h-[100%] w-[100%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border">
              <div className="flex flex-col items-center md:scale-[95%]">
                <p
                  className={`font-poppins font-normal text-center text-dimWhite leading-[30.8px] mr-4 ml-2 md:ml-8 mt-4 sm:mt-8 md:mt-16 sm:text-2xl md:text-3xl text-2xl mb-10`}
                >
                  <span className=" text-white font-bold pb-5">
                    O Bot está atualmente{" "}
                    <span className="text-red-500 font-bold "> OFFLINE </span>
                  </span>
                  <br />
                  <br />
                  <span className=" text-white font-bold pb-5">
                    Atualizando da versão 13 para a versão 14!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Suporte;
