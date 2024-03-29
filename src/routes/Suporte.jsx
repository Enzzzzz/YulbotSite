import React from "react";
import Soon from "../components/Soon";
import Navbar from "../Layout/Navbar";

function Suporte() {
  return (
    <div className={`bg-primary w-full overflow-hidden'`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div>
        <Soon />
      </div>
    </div>
  );
}

export default Suporte;
