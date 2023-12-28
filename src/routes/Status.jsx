import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Status() {
  const [changesInLast24Hours, setChangesInLast24Hours] = useState({
    YulBotV14: 0,
    YulRPG: 0,
    YulbotSite: 0,
  });

  const [commitHistory, setCommitHistory] = useState({
    YulBotV14: [],
    YulRPG: [],
    YulbotSite: [],
  });

  const [activeTab, setActiveTab] = useState("YulBotV14");

  const [statsData, setStatsData] = useState({});

  useEffect(() => {
    async function fetchStatsData() {
      try {
        const timestamp = new Date().getTime();
        const response = await axios.get(
          `https://raw.githubusercontent.com/Enzzzzz/Stats/main/Stats.json?timestamp=${timestamp}`
        );
        setStatsData(response.data);
      } catch (error) {
        console.error("Error fetching commands data:", error);
      }
    }

    fetchStatsData();
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const fetchCommitHistory = async (repoName) => {
    try {
      if (!githubToken) {
        throw new Error("GitHub token not provided");
      }

      const response = await axios.get(
        `https://api.github.com/repos/Enzzzzz/${repoName}/commits`,
        {
          headers: {
            Authorization: `Token ${githubToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(
        `Erro ao buscar commits do repositório ${repoName}:`,
        error
      );
      return [];
    }
  };

  const changelog = [
    { message: "Primeiro commit" },
    { message: "Correção de bugs" },
    { message: "Nova funcionalidade adicionada" },
  ];

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

  const githubToken = import.meta.env.VITE_GIT_TOKEN;

  const fetchCommits = async (repoName) => {
    try {
      if (!githubToken) {
        throw new Error("GitHub token not provided");
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
      console.error(
        `Erro ao buscar commits do repositório ${repoName}:`,
        error
      );
      return 0;
    }
  };

  const fetchData = async () => {
    const yulbotChanges = await fetchCommits("YulBot-2.0");
    const yulrpgChanges = await fetchCommits("YulRPG");
    const yulbotWebsiteChanges = await fetchCommits("YulbotSite");

    const yulbotChangelog = await fetchCommitHistory("YulBot-2.0");
    const yulrpgChangelog = await fetchCommitHistory("YulRPG");
    const yulbotWebsiteChangelog = await fetchCommitHistory("YulbotSite");

    setCommitHistory({
      YulBotV14: yulbotChangelog,
      YulRPG: yulrpgChangelog,
      YulbotSite: yulbotWebsiteChangelog,
    });

    setChangesInLast24Hours({
      YulBotV14: yulbotChanges,
      YulRPG: yulrpgChanges,
      YulbotSite: yulbotWebsiteChanges,
    });
  };

  const yulBotStats = statsData["YulBotV14"];
  const yulBotProgress =
  yulBotStats &&
  `${yulBotStats.coded}/${yulBotStats.totalCode}`;

  const yulRPGStats = statsData["YulRPG"];
const yulRPGProgress =
  yulRPGStats &&
  `${yulRPGStats.coded}/${yulRPGStats.totalCode}`;

  const yulSiteStats = statsData["YulbotSite"];
const yulSiteProgress =
  yulSiteStats &&
  `${yulSiteStats.coded}/${yulSiteStats.totalCode}`;

  return (
    <div className="bg-primary bg-gradient-to-br from-primary to-purple-900/20 w-full  overflow-hidden h-full">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      <div className="sm:px-16 px-6  flex h-screen justify-center items-center">
        <div className="xl:max-w-[1280px] space-y-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between mt-8 gap-10">
            {/* YulBot Bar */}

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4  p-4 transform transform-all duration-300 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 items-center py-6 px-0 sm:px-3 bg-gradient-to-br from-purple-400/20 rounded-[10px] relative">
              <h1 className="text-white text-lg mb-2 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pr-2 pl-2">
                Yulbot Rework
              </h1>
              <div className="absolute top-7 right-4 bg-red-500 rounded-full w-12 h-6 flex items-center justify-center">
                <p className="text-white text-xs font-bold">Offline</p>
              </div>
              <h2 className="text-white mb-2 pr-2 pl-2 font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Recriação de YulBot
              </h2>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Código
                </p>
                <div className="relative h-4 bg-gray-500  rounded-md">
                  <div className="absolute h-full bg-purple-600  rounded-md"
                  style={{
                    width: yulBotStats
                      ? `${(yulBotStats.coded / yulBotStats.totalCode) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulBotV14"]
                      ? `${statsData["YulBotV14"].coded}/${statsData["YulBotV14"].totalCode}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Comandos
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md"
                  style={{
                    width: yulBotStats
                      ? `${(yulBotStats.updatedCommands / yulBotStats.totalCommands) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulBotV14"]
                      ? `${statsData["YulBotV14"].updatedCommands}/${statsData["YulBotV14"].totalCommands}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Correções
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md "
                  style={{
                    width: yulBotStats
                      ? `${(yulBotStats.bugFixes / yulBotStats.bugs) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulBotV14"]
                      ? `${statsData["YulBotV14"].bugFixes}/${statsData["YulBotV14"].bugs}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <p className="absolute bottom-0 text-gray-700 px-1 pb-1 sm:text-xs md:text-sm">
                {changesInLast24Hours.YulBotV14} mudança(s) nas últimas 24 horas
              </p>
            </div>

            {/* YulRPG Bar */}

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 p-4 transform transform-all duration-300 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 items-center py-6 px-0 sm:px-3 bg-gradient-to-br from-purple-400/20 rounded-[10px] relative">
              <h1 className="text-white text-lg mb-2 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pr-2 pl-2">
                YulRPG
              </h1>
              <div className="absolute top-7 right-4 bg-gray-500 rounded-full w-12 h-6 flex items-center justify-center">
                <p className="text-white text-xs font-bold">Paused</p>
              </div>
              <h2 className="text-white mb-2 pr-2 pl-2 font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Criação do bot
              </h2>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Código
                </p>
                <div className="relative h-4 bg-gray-500  rounded-md">
                  <div className="absolute h-full bg-purple-600  rounded-md"
                  style={{
                    width: yulRPGStats
                      ? `${(yulRPGStats.coded / yulRPGStats.totalCode) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulRPG"]
                      ? `${statsData["YulRPG"].coded}/${statsData["YulRPG"].totalCode}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Comandos
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md"
                  style={{
                    width: yulRPGStats
                      ? `${(yulRPGStats.updatedCommands / yulRPGStats.totalCommands) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulRPG"]
                      ? `${statsData["YulRPG"].updatedCommands}/${statsData["YulRPG"].totalCommands}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Arte
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md"
                  style={{
                    width: yulRPGStats
                      ? `${(yulRPGStats.art / yulRPGStats.totalArt) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulRPG"]
                      ? `${statsData["YulRPG"].art}/${statsData["YulRPG"].totalArt}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Correções
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md"
                  style={{
                    width: yulRPGStats
                      ? `${(yulRPGStats.bugFixes / yulRPGStats.bugs) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulRPG"]
                      ? `${statsData["YulRPG"].bugFixes}/${statsData["YulRPG"].bugs}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <p className="absolute bottom-0 text-gray-700 px-1 pb-1 sm:text-xs md:text-sm">
                {changesInLast24Hours.YulRPG} mudança(s) nas últimas 24 horas
              </p>
            </div>

            {/* YulbotSite Bar */}

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 p-4 transform transform-all duration-300 shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 items-center py-6 px-0 sm:px-3 bg-gradient-to-br from-purple-400/20 rounded-[10px] relative">
              <h1 className="text-white text-lg mb-2 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pr-2 pl-2">
                Yulbot Website
              </h1>
              <div className="absolute top-7 right-4 bg-green-500 rounded-full w-12 h-6 flex items-center justify-center">
                <p className="text-white text-xs font-bold">Online</p>
              </div>
              <h2 className="text-white mb-2 pr-2 pl-2 font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Página "Status"
              </h2>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Código
                </p>
                <div className="relative h-4 bg-gray-500  rounded-md">
                  <div className="absolute h-full bg-purple-600  rounded-md"
                  style={{
                    width: yulSiteStats
                      ? `${(yulSiteStats.coded / yulSiteStats.totalCode) * 100}%`
                      : "0%"
                  }}
                  ></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulbotSite"]
                      ? `${statsData["YulbotSite"].coded}/${statsData["YulbotSite"].totalCode}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Arte
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md"
                  style={{
                    width: yulSiteStats
                      ? `${(yulSiteStats.art / yulSiteStats.totalArt) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulbotSite"]
                      ? `${statsData["YulbotSite"].art}/${statsData["YulbotSite"].totalArt}`
                      : "Carregando..."}
                  </p>
                </div>
              </div>
              <div className="flex pr-1 pl-1 flex-col">
                <p className="text-gray-300 mb-1 pl-1 md:pl-2 lg:pl-4 sm:text-sm md:text-lg xl:text-2xl text-lg">
                  Correções
                </p>
                <div className="relative h-4 bg-gray-500 rounded-md">
                  <div className="absolute h-full bg-purple-600 rounded-md"
                  style={{
                    width: yulSiteStats
                      ? `${(yulSiteStats.bugFixes / yulSiteStats.bugs) * 100}%`
                      : "0%"
                  }}></div>
                  <p className="absolute -top-1 right-14  translate-x-full flex items-center pr-1 text-gray-300">
                    {statsData["YulbotSite"]
                      ? `${statsData["YulbotSite"].bugFixes}/${statsData["YulbotSite"].bugs}`
                      : "Carregando..."}
                  </p>
                </div>
                <p className="absolute bottom-0 text-gray-700 px-1 pb-1 sm:text-xs md:text-sm">
                  {changesInLast24Hours.YulbotSite} mudança(s) nas últimas 24
                  horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Changelog */}
      <div className="mt-8 p-4 bg-gray-800 md:mt-40 m-2 md:m-10 rounded-md ">
        <h2 className="text-white text-lg font-bold mb-4">
          Registro de Atividades
        </h2>
        <div className="flex space-x-4">
          <button
            className={`text-white text-lg sm:text-lg md:text-xl xl:text-1xl border p-2 rounded-md border-purple-600 ${
              activeTab === "YulBotV14"
                ? "font-bold bg-purple-500 bg-opacity-10"
                : ""
            }`}
            onClick={() => handleTabChange("YulBotV14")}
          >
            YulBot Rework
          </button>
          <button
            className={`text-white text-lg sm:text-lg md:text-xl xl:text-1xl border p-2 rounded-md border-purple-600 ${
              activeTab === "YulRPG"
                ? "font-bold bg-purple-500 bg-opacity-10"
                : ""
            }`}
            onClick={() => handleTabChange("YulRPG")}
          >
            YulRPG
          </button>
          <button
            className={`text-white text-lg sm:text-lg md:text-xl xl:text-1xl border p-2 rounded-md border-purple-600 ${
              activeTab === "YulbotSite"
                ? "font-bold bg-purple-500 bg-opacity-10"
                : ""
            }`}
            onClick={() => handleTabChange("YulbotSite")}
          >
            Yulbot Site
          </button>
        </div>
        <ul className="list-disc list-inside text-sm sm:text-lg text-white mt-4">
          {commitHistory[activeTab].slice(0, 5).map((commit, index) => (
            <li key={index}>
              <p>{commit.commit.message}</p>
              <p className="text-gray-500 text-sm">
                {new Date(commit.commit.author.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Status;
