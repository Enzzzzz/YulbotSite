import Soon from '../components/Soon';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

function Configuracao() {

  window.fbAsyncInit = function () {
    FB.init({
      appId: "773538684462895",
      cookie: true,
      xfbml: true,
      version: "v17.0",
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
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

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

      <div className="fb-login-button" scope="public_profile,email" onlogin="checkLoginStatus();"></div>

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
