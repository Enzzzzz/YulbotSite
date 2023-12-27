import React from 'react'
import Navbar from '../Layout/Navbar'
import { oniBranco } from '../assets'
import Footer from '../Layout/Footer'

function Sobre() {
    return (
    <div className={`bg-primary w-full h-full min-h-screen overflow-hidden`}>
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
                <Navbar />
            </div>
        </div>
  
      <div className={`flex w-full  mt-2 sm:mt-5 md:mt-36 pb-24 md:flex-col text-white `}>
        <div className='flex px-2 sm:px-8 md:px-16 flex-row'>
          <div className='h-[100%] w-[200%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-col sm:flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border'>
            <div className='flex flex-col scale-100 md:scale-[95%]'>
              <p className={`font-poppins  text-dimWhite  leading-[30.8px] ml-4 mt-8 text-lg sm:text-xl md:text-3xl ` }>
                <span className=' text-white font-bold'>Sobre mim</span>
              </p>
                <p className={`font-poppins text-dimWhite leading-[30.8px] ml-4 mr-4 md:mr-12 mb-4 py-4 flex text-xs sm:text-lg md:text-xl flex-col` }>
                  Fui criada no dia 16 de Agosto de 2022 por Enzzzzz#6007 com o objetivo de facilitar a vida de das pessoas em um servidor privado no discord, Recebendo novos comandos de acordo com suas necessidades. Depois de um tempo comecei a receber comandos que outras pessoas além desse grupo  poderiam precisar um dia. Agora toda vez que surge uma nova idéia ou uma nova sugestão meu dono se esforça e tenta de todas as formas possíveis adicionar e resolver os meus erros para que todos possam utilizar meus serviços sem nenhum problema!
                </p>
            </div>
            <img src={oniBranco} alt='oni' className='md:hover:scale-110 md:hover:opacity-100 hover:duration-500 h-72 w-72 sm:h-72 sm:w-72 sm:ml-9 sm:mr-10 md:w-96 md:h-96 md:pl-36 md:ml-18 md:mr-48 md:scale-100 opacity-100 mb-5 sm:mb-0 md:mb-0 md:opacity-80 object-contain' />
          </div>
          
        </div>
        
      </div>
      <div className={`sm:px-16 px-6`}>
          <div>
            <Footer />
          </div>
        </div>
    </div>
)}

export default Sobre