import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import axios from "axios";
import React, { useState, useEffect } from 'react'

function Status() {
  const [changesInLast24Hours, setChangesInLast24Hours] = useState({
    YulBotV14: 0,
    YulRPG: 0,
    YulbotSite: 0
  });

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 300000);
    fetchData();
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTime = Date.now();
  const twentyFourHoursAgo = currentTime - 24 * 60 * 60 * 1000;

  const githubToken = import.meta.env.VITE_GIT_TOKEN;;

const fetchCommits = async (repoName) => {
  try {
    if (!githubToken) {
      throw new Error('GitHub token not provided');
    }

    const response = await axios.get(
      `https://api.github.com/repos/Enzzzzz/${repoName}/commits`,
      {
        headers: {
          Authorization: `Token ${githubToken}`,
        },
      }
    );

      

      const commitsInLast24Hours = response.data.filter(
        (commit) =>
          new Date(commit.commit.author.date).getTime() >= twentyFourHoursAgo
      );

      return commitsInLast24Hours.length;
    } catch (error) {
      console.error(`Erro ao buscar commits do repositório ${repoName}:`, error);
      return 0;
    }
  };

  const fetchData = async () => {
    const yulbotChanges = await fetchCommits('YulBotV14');
    const yulrpgChanges = await fetchCommits('YulRPG');
    const yulbotWebsiteChanges = await fetchCommits('YulbotSite');
  
    setChangesInLast24Hours({
      YulBotV14: yulbotChanges,
      YulRPG: yulrpgChanges,
      YulbotSite: yulbotWebsiteChanges
    });
  };

  return (
    <div className="bg-black w-full min-h-screen overflow-hidden h-full">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] min-h-screen w-full">
          <div className="flex flex-col sm:flex-row justify-between mt-8 gap-10">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4  p-4 transform transform-all duration-300 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 items-center py-6 px-0 sm:px-3 bg-gradient-to-br from-purple-400/20 rounded-[10px] relative">
            <h1 className="text-white text-lg mb-2 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pr-1 pl-1">Yulbot</h1>
              <h2 className="text-white mb-2 pr-1 pl-1 font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">Atualizando para versão 14</h2>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Código</p>
                <div className="relative h-4 bg-gray-500  rounded-md">
                  <div className="absolute h-full bg-purple-600  rounded-md w-[14%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    20/139
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Comandos</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[13%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    6/43
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Correções</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[95%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    10/11
                  </p>
                </div>
              </div>
              <p className="absolute bottom-0 text-gray-700 px-1 pb-1 sm:text-xs md:text-sm">{changesInLast24Hours.YulBotV14} mudança(s) nas últimas 24 horas</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 p-4 transform transform-all duration-300 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 items-center py-6 px-0 sm:px-3 bg-gradient-to-br from-purple-400/20 rounded-[10px] relative">
            <h1 className="text-white text-lg mb-2 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pr-1 pl-1">YulRPG</h1>
              <h2 className="text-white mb-2 pr-1 pl-1 font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">Criação do bot</h2>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Código</p>
                <div className="relative h-4 bg-gray-500  rounded-md">
                  <div className="absolute h-full bg-purple-600  rounded-md w-[31%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    81/260
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Comandos</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[0%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    0/3
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Arte</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[61%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    8/13
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Correções</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[93%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    41/44
                  </p>
                </div>
              </div>
              <p className="absolute bottom-0 text-gray-700 px-1 pb-1 sm:text-xs md:text-sm">{changesInLast24Hours.YulRPG} mudança(s) nas últimas 24 horas</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 p-4 transform transform-all duration-300 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 items-center py-6 px-0 sm:px-3 bg-gradient-to-br from-purple-400/20 rounded-[10px] relative">
            <h1 className="text-white text-lg mb-2 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pr-1 pl-1">Yulbot Website</h1>
              <h2 className="text-white mb-2 pr-1 pl-1 font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">Página "Status"</h2>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Código</p>
                <div className="relative h-4 bg-gray-500  rounded-md">
                  <div className="absolute h-full bg-purple-600  rounded-md w-[42%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    9/21
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Arte</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[60%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    3/5
                  </p>
                </div>
              </div><div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">Correções</p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md w-[96%]"></div>
                  <p className="absolute -top-1 right-14 transform translate-x-full flex items-center pr-1 text-gray-300">
                    8/9
                  </p>
                </div>
                <p className="absolute bottom-0 text-gray-700 px-1 pb-1 sm:text-xs md:text-sm">{changesInLast24Hours.YulbotSite} mudança(s) nas últimas 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Status;
