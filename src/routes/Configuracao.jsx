import React, { useEffect } from 'react';
import Soon from '../components/Soon';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function Configuracao() {
  useEffect(() => {
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
    window.onload = function () {
      checkLoginStatus();
    };
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
  
<fb:login-button 
  scope="public_profile,email"
  onlogin="checkLoginState();">
</fb:login-button>
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
