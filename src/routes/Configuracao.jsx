import React, { useEffect } from 'react';
import Soon from '../components/Soon';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function Configuracao() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '773538684462895',
        cookie: true,
        xfbml: true,
        version: 'v17.0',
      });

      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    // Função para lidar com o status de login
    function statusChangeCallback(response) {
      // Sua lógica de tratamento de resposta aqui
    }

    // Função para verificar o status de login ao carregar a página
    function checkLoginStatus() {
      FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    }

    // Executar a função quando a página é carregada
    checkLoginStatus();
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div id="login-section">
        <h2>Fazer login</h2>
        <div className="fb-login-button" data-scope="public_profile,email" data-onlogin="checkLoginStatus()"></div>
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
