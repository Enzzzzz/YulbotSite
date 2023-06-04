import Soon from '../components/Soon';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function Configuracao() {


  function statusChangeCallback(response) {
    console.log(response);
  }

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    console.log(response)
});

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div id="login-section">
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
