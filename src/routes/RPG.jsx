import React from "react";
import Soon from "../components/Soon";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

function RPG() {
  return (
    <div className={`bg-primary w-full overflow-hidden'`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary sm:px-16 px-6 flex justify-center items-start`}>
        <Soon />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default RPG;
