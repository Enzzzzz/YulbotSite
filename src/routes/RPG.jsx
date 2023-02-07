import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import classe from "../Data/classes.json";

function RPG() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;

    const list = [];

    for (const [i, classes] of classe.entries()) {
      list.push(
        <div className="table-cell text-white px-2 border border-purple-400/40 text-xs py-1">
          {classe.name}
        </div>
      );
    }
  };
  return (
    <div className={`bg-primary w-full overflow-hidden'`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div
        className={`bg-primary sm:px-16 px-6 flex justify-center items-start`}
      >
        <div className="flex-col h-full w-[100%] mt-8 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border">
          <div className="flex flex-col">
            <div className="font-poppins flex-row text-center font-semibold text-white leading-[30.8px] ml-4 mt-4">
              <p className="font-poppins text-xl font-semibold md:text-2xl xl:text-3xl text-white leading-[30.8px]">
                Em Breve
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                O jogo conta com diversas classes com habilidades individuais e
                exclusivas, uma grande variedade de monstros para batalhar,
                bosses e muito mais! <br /> <br />
                Jogue com seus amigos ou sozinho dentro do seu próprio servidor
                do discord!
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-lg md:text-xl xl:text-2xl ml-0 mt-4">
                Suba de Nível
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                Lute contra diversos tipos de monstros e suba de nível! Quanto maior o seu nível, monstros diferentes e mais fortes aparecerão para lutar com você. <br/> Será que você consegue se tornar o jogador mais forte em todo o meu sistema global?
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-lg md:text-xl xl:text-2xl ml-0 mt-4">
                Desbloqueie novas habilidades
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                Cada classe tem habilidades exclusivas. Você pode liberar novas habilidades ao subir de nível ou receber como recompensa de Boss ou Eventos! <br/> Você pode equipar suas próprias habilidades de acordo com o que você achar melhor!
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-lg md:text-xl xl:text-2xl ml-0 mt-4">
                Explore Dungeons
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                Explore Dungeons para encontrar itens e bosses, chegue até o final para conseguir recompensas incríveis!
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-lg md:text-xl xl:text-2xl ml-0 mt-4">
                Derrote Bosses
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                Bosses e Demônios podem ser encontrados enquanto joga ou ao entrar em uma Dungeon. Você sobreviverá a esse encontro?
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-lg md:text-xl xl:text-2xl ml-0 mt-4">
                Suba no Ranking
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                Existem alguns rankings para você competir e brigar pela liderança! Recompensas serão dadas aos primeiros colocados de cada ranking periodicamente.
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-lg md:text-xl xl:text-2xl ml-0 mt-4">
                Eventos
              </p>
              <p className="text-dimWhite font-normal mr-4 mt-2 md:mr-20 md:ml-16 text-sm md:text-lg xl:text-xl">
                Eventos especiais podem acontecer durante o jogo. A Caça aos Demônios é um evento que ficará ativo durante todo o jogo. Derrote demônios em sua jornada para coletar sua alma e entrar no ranking. <br/> Eventos ativos ficarão visíveis em minha Bio ou na aba de eventos no servidor de suporte.
              </p>
              <p className="text-white font-semibold flex-row mr-2 text-sm ml-0 mt-4">
                <img
                  src="/viking1.png"
                  className="w-14 md:w-52 xl:w-64 inline py-1 px-0 transform transform-all hover:-translate-y-2 md:hover:-translate-y-6 xl:hover:-translate-y-10 duration-200"
                />
                <img
                  src="/arqueiro1.png"
                  className="w-14 md:w-52 xl:w-64 inline py-1 px-0 transform transform-all hover:-translate-y-2 md:hover:-translate-y-6 xl:hover:-translate-y-10 duration-200"
                />
                <img
                  src="/samurai1.png"
                  className="w-14 md:w-52 xl:w-64 inline py-1 px-0 transform transform-all hover:-translate-y-2 md:hover:-translate-y-6 xl:hover:-translate-y-10 duration-200"
                />
                <img
                  src="/paladin1.png"
                  className="w-14 md:w-52 xl:w-64 inline py-1 px-0 transform transform-all hover:-translate-y-2 md:hover:-translate-y-6 xl:hover:-translate-y-10 duration-200"
                />
                <img
                  src="/demon1.png"
                  className="w-14 md:w-52 xl:w-64 inline py-1 px-0 transform transform-all hover:-translate-y-2 md:hover:-translate-y-6 xl:hover:-translate-y-10 duration-200"
                />
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default RPG;
