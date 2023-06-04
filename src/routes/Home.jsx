import Main from "../components/Main";
import FeatureHomeRight from "../components/FeatureRight";
import FeatureHomeLeft from "../components/FeatureLeft";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Main />
        </div>
      </div>

      <div
        className={`bg-primary sm:px-16 px-6 flex justify-center items-start`}
      >
        <div className={`xl:max-w-[1280px] w-full`}>
          <FeatureHomeLeft
            title="Moderação"
            description="Mutar, Remover e até Banir nunca foi tão fácil! Esses e muitos outros comandos para administrar seu servidor perfeitamente e com muita facilidade!"
            clickText="Veja os Comandos!"
            img="/direitoBranco.png"
            path="mod"
            altImg="direito"
          />

          <FeatureHomeRight
            title="Sistema de Level"
            description="Sistema de level e rank global para todos os meus usuários ou apenas para o seu servidor! Converse com seus amigos e ganhem pontos de xp para subir de nível e liberar novos temas para o seu perfil ou até comandos."
            clickText="Saiba mais!"
            img="/up.png"
            path="level"
            altImg="level"
          />

          <FeatureHomeLeft
            title="Totalmente Configurável"
            description="Você pode me configurar do jeito que voce quiser! setar canais de comando, setar canal de log adm, bloquear comandos em chat específico, bloquear um usuário ou cargo de usar um comando específico e ainda um pouco mais!"
            clickText="Veja Como!"
            img="/config.png"
            path="config"
            altImg="config"
          />
        </div>
      </div>

      <div className={`sm:px-16 px-6`}>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
