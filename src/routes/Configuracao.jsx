import React, { useEffect } from 'react';
import Soon from '../components/Soon';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function Configuracao() {
  useEffect(() => {
     

    window.onload = function () {
      checkLoginStatus();
    };
  }, []);

  function statusChangeCallback(response) {
    console.log(response);
  }

  function checkLoginStatus() {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div id="login-section">
        <h2>Fazer login</h2>
        <button onClick={checkLoginStatus} className='bg-orange-700 text-purple-500'>Fazer login</button>
      </div>

      <div>
        <Soon />
      </div>

      <div className="sm:px-16 px-6">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Configuracao;
