import React from "react";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="w-full flex py-4 mt-4 shadow-inner shadow-purple-400/50 border transform transform-all duration-200 border-purple-500/80 hover:shadow-purple-400/90 h-40">
      <div className="flex w-full flex-row">
        <div className="flex w-full flex-col">
          <a href='/'>
            <p className="text-white text-xs md:text-lg xl:text-xl font-poppins cursor-pointer font-semibold ml-8 md:ml-32 xl:ml-44 mt-2 hover:text-purple-300 transform transform-all duration-200 hover:translate-x-4">
              Início
            </p>
          </a>
          <a href="/">
            <img
              src="/LogoRoxo.png"
              alt="logoFooter"
              className="w-20 md:w-36 mt-0 mb-5 ml-5 md:ml-28 xl:ml-40 cursor-pointer transform duration-200 hover:scale-110"
            />
          </a>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex-row">
            <p className="text-white text-xs md:text-lg xl:text-xl font-poppins cursor-pointer font-semibold mt-2 ml-6 md:ml-16 xl:ml-20 hover:text-purple-300 transform transform-all duration-200 hover:translate-x-4">
              Contato
            </p>
          </div>
          <p
            className="text-white text-xs md:text-lg xl:text-xl font-poppins cursor-pointer font-semibold ml-6 md:ml-16 xl:ml-20 hover:text-purple-300 transform transform-all duration-200 hover:translate-x-4"
            onClick={() => openInNewTab("https://github.com/Enzzzzz")}
          >
            Github
          </p>
          <p className="text-white text-xs md:text-lg xl:text-xl font-poppins cursor-pointer font-semibold ml-6 md:ml-16 xl:ml-20 hover:text-purple-300 transform transform-all duration-200 hover:translate-x-4">
            Enzzzzz#6007
          </p>
        </div>
        <div className="flex w-full flex-col">
          <p
            className="text-white text-xs md:text-lg xl:text-xl font-poppins cursor-pointer font-semibold ml-6 md:ml-16 xl:ml-20 mt-2 hover:text-purple-300 transform transform-all duration-200 hover:translate-x-4"
            onClick={() => openInNewTab("https://discord.gg/PV25tj6HTs")}
          >
            YulBot Support Server
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
