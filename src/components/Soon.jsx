import React from "react";

function Soon() {
  return (
    <div className={`bg-primary w-full overflow-hidden'`}>
      <div className={`flex w-full items-center md:ml-0 ml-0 sm:ml-32 mt-10 pb-24 md:flex-col text-white `}>
        <div className="flex px-4 sm:px-8 md:px-16 items center flex-row">
          <div className="h-[100%] w-[100%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border">
            <div className="flex flex-col items-center md:scale-[95%]">
              <p
                className={`font-poppins font-normal text-dimWhite leading-[30.8px] mr-2 ml-2 md:ml-8 mt-4 sm:mt-8 md:mt-16 sm:text-2xl md:text-3xl text-2xl mb-10`}
              >
                <span className=" text-white font-bold">
                  Site em construção. Volte em breve!
                </span>
              </p>
              <img src='/Ferramenta.png' alt='ferramenta' className="h-52 w-52 mb-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soon;
