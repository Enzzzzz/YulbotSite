import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";

function Comandos() {
  return (
    <div className={`bg-primary w-full overflow-hidden'`}>
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`flex w-full mt-2 sm:mt-5 md:mt-10 pb-24 md:flex-col text-white `}
      >
        <div className="flex px-2 sm:px-8 md:px-16 flex-row">
          <div className="h-[100%] w-[200%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border">
            <div className="flex flex-col scale-100 md:scale-[95%]">
              <p
                className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-4 mt-8 text-lg sm:text-xl md:text-3xl `}
              >
                <span className=" text-white font-bold">Comandos</span>
              </p>

              <p
                className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-4 mt-6 sm:mt-12 md:mt-24 text-lg sm:text-xl md:text-2xl `}
              >
                <span className=" text-white font-bold">Geral - Utilidade</span>
              </p>
              <p
                className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-4 mr-0 py-4 flex flex-col`}
              >
                <span className="text-xs sm:text-lg md:text-xl  font-bold text-white">
                  /Help -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Mostra informações resumidas de cada comando, separados por
                    categorias. Você também pode clicar em um comando que está
                    sendo mostrado, ele aparecerá no chat pronto para ser
                    enviado.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Tag
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [tag] [imagem] [texto]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    Com o /Tag, você pode armazenar um texto e uma imagem ou
                    apenas um dos dois dentro do comando que voce criou. Após
                    isso, você ou qualquer outra pessoa no servidor pode puxar o
                    conteudo armazenado digitando /y [tag]. Depois de usar /y
                    [tag], todos no chat poderão ver o conteúdo armazenado,{" "}
                    <span className="font-bold text-white"> NÃO </span> use para
                    salvar senhas ou coisas importantes que devem permanecer
                    seguros!{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /y{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [tag]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Puxe o conteúdo armazenado de uma tag criada por alguém no
                    servidor.
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Serverinfo -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Veja as informações detalhadas do servidor onde o comando
                    foi digitado.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Userinfo{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [@User/Id]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Veja as informações detalhadas do usuário.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Avatar{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [@User/Id]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Veja a foto de perfil e o banner do usuário.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Np{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [@User/Id]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Veja o que um usuário está escutando no Spotify.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Gif{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [palavra-chave]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Procure um Gif de acordo com a sua palavra-chave.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /yt{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [palavra-chave]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Procure um vídeo no Youtube de acordo com a sua
                    palavra-chave.{" "}
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Feedback{" "}
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                  >
                    [mensagem]
                  </span>{" "}
                  -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Envie uma mensagem diretamente para o dono, com sua sugestão
                    ou crítica para ajudar no desenvolvimento.
                  </span>
                </span>

                <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                  /Yul -
                  <span
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                  >
                    {" "}
                    Leia sobre a YulBot.{" "}
                  </span>
                </span>
              </p>

              <p
                className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-4 mt-6 sm:mt-12 md:mt-24 text-lg sm:text-xl md:text-2xl `}
              >
                <span className=" text-white font-bold">Geral - Jogos</span>

                <p
                  className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-0 mr-4 py-4 ss:text-sm flex flex-col`}
                >
                  <span className="text-xs sm:text-lg md:text-xl font-bold text-white">
                    /Setlol{" "}
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Guarde o seu Nome de Invocador no banco de dados da YulBot
                      e não precisará digitar seu nick nos seguintes comandos:{" "}
                      <span className="font-bold text-white">
                        {" "}
                        /Perfillol e /Partidalol
                      </span>
                    </span>
                  </span>

                  <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                    /Setval
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick#tag]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Guarde o seu Nome#Tag Riot no banco de dados da YulBot e
                      não precisará digitar seu nick nos seguintes comandos:{" "}
                      <span className="font-bold text-white">
                        {" "}
                        /Rankval, /Perfilval e /Partidaval
                      </span>
                    </span>
                  </span>

                  <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                    /Perfillol{" "}
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Veja o perfil de um jogador de League of Legends
                    </span>
                  </span>

                  <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                    /Rankval{" "}
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick#tag]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Veja informações competitivas de um jogador de Valorant
                    </span>
                  </span>

                  <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                    /Perfilval{" "}
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick#tag]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Veja o perfil de um jogador de Valorant
                    </span>
                  </span>

                  <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                    /Partidalol{" "}
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Veja informações ao vivo da partida de um jogador de
                      League of Legends [Times, Campeões, Elos, Feitiços, Nicks,
                      Modo...]
                    </span>
                  </span>

                  <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                    /Lm{" "}
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                    >
                      [nick#tag]
                    </span>{" "}
                    -
                    <span
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                    >
                      Veja informações sobre a ultima partida competitiva de um
                      jogador de Valorant
                    </span>
                  </span>
                </p>

                <section id="config">
                  <p
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-0 mt-6 sm:mt-12 md:mt-24 text-lg sm:text-xl md:text-2xl`}
                  >
                    <span className=" text-white font-bold">
                      Moderação - Configuração
                    </span>

                    <p
                      className={`font-poppins font-normal text-dimWhite leading-[30.8px] mr-4 py-4 ss:text-sm flex flex-col`}
                    >
                      <span className="text-xs sm:text-lg md:text-xl font-bold text-white">
                        /Setbemvindo{" "}
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                        >
                          [canal]
                        </span>{" "}
                        -
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                        >
                          Defina o canal onde será enviado a mensagem de
                          boas-vindas.
                        </span>
                      </span>

                      <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                        /Setbg
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                        >
                          [imagem]
                        </span>{" "}
                        -
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                        >
                          Escolha a imagem que ficará no fundo da mensagem de
                          boas vindas.
                        </span>
                      </span>

                      <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                        /Removebemvindo -
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                        >
                          Remova o canal de boas vindas [Não enviará boas vindas
                          para os novos membros].
                        </span>
                      </span>

                      <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                        /Removebg -
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                        >
                          Remova a imagem de fundo da mensagem de boas vindas
                          [Retornará a imagem padrão].
                        </span>
                      </span>

                      <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                        /Setlog{" "}
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                        >
                          [canal]
                        </span>{" "}
                        -
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                        >
                          Defina o canal de logs [Logs apenas para comandos de
                          moderação da YulBot].
                        </span>
                      </span>

                      <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                        /Removelog -
                        <span
                          className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                        >
                          Remova o canal de logs.
                        </span>
                      </span>
                    </p>
                  </p>
                </section>

                <p
                  className={`font-poppins font-normal text-dimWhite leading-[30.8px] ml-0 mt-6 sm:mt-12 md:mt-24 text-lg sm:text-xl md:text-2xl`}
                >
                  <span className=" text-white font-bold">
                    Moderação - Geral
                  </span>

                  <p
                    className={`font-poppins font-normal text-dimWhite leading-[30.8px] mr-4 py-4 ss:text-sm flex flex-col`}
                  >
                    <span className="text-xs sm:text-lg md:text-xl font-bold text-white">
                      /Ban{" "}
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                      >
                        [@User/Id] [motivo]
                      </span>{" "}
                      -
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                      >
                        Bana um usuário do servidor.
                      </span>
                    </span>

                    <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                      /Unban
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                      >
                        [Id]
                      </span>{" "}
                      -
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                      >
                        Desbana um usuário do servidor através do ID.
                      </span>
                    </span>

                    <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                      /Lock{" "}
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                      >
                        [canal] [cargo]{" "}
                      </span>{" "}
                      -
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                      >
                        Escolha um canal e um cargo para bloquear o envio de
                        mensagens do cargo especificado no canal especificado,
                        caso não digite nenhum canal ou nenhum cargo, vai
                        bloquear o envio de mensagens no canal onde o comando
                        foi digitado e para @everyone [Se um cargo já tiver sido
                        usado no /Unlock, ele não será afetado se usar o /Lock
                        em @everyone].
                      </span>
                    </span>

                    <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                      /Unlock{" "}
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                      >
                        [canal] [cargo]{" "}
                      </span>{" "}
                      -
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                      >
                        Escolha um canal e um cargo para desbloquear o envio de
                        mensagens do cargo especificado no canal especificado,
                        caso não digite nenhum canal ou nenhum cargo, vai
                        desbloquear o envio de mensagens no canal onde o comando
                        foi digitado e para @everyone.
                      </span>
                    </span>

                    <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                      /Setlog{" "}
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                      >
                        [canal]
                      </span>{" "}
                      -
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                      >
                        Defina o canal de logs [Logs apenas para comandos de
                        moderação da YulBot].
                      </span>
                    </span>

                    <span className="text-xs sm:text-lg md:text-xl  font-bold mt-2 text-white">
                      /Clear{" "}
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px] bg-gray-900/90`}
                      >
                        [numero]
                      </span>{" "}
                      -
                      <span
                        className={`font-poppins font-normal text-dimWhite leading-[30.8px]`}
                      >
                        Apaga a quantitade de mensagens especificada que foram
                        enviadas nos últimos 14 dias [Até 150 mensagens por
                        comando].
                      </span>
                    </span>
                  </p>
                </p>
              </p>
            </div>
          </div>
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

export default Comandos;
