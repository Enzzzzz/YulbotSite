import React from 'react'
import Navbar from '../Layout/Navbar'
import { oniBranco } from '../assets'

function Sobre() {
    return (
    <div className={`bg-primary w-full h-full overflow-hidden'`}>
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
                <Navbar />
            </div>
        </div>
  
      <div className={`flex w-full max-w-[2400px] mt-10 pb-24 md:flex-col text-white `}>
        <div className='flex px-16 flex-row'>
          <div className='h-[100%] w-[200%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border'>
            <div className='flex flex-col scale-[90%]'>
              <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-8 mt-16 text-3xl ` }>
                <span className=' text-white font-bold'>Sobre min</span>
              </p>
                <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-8 mr-8 mb-16 py-4 flex flex-col` }>
                  Fui criada no dia 16 de Agosto de 2022 por Enzzzzz#6007 com o objetivo de facilitar a vida de das pessoas em um servidor privado no discord, Recebendo novos comandos de acordo com suas necessidades. Depois de um tempo comecei a receber comandos que outras pessoas além desse grupo  poderiam precisar um dia. Agora toda vez que surge uma nova idéia ou uma nova sugestão meu dono se esforça e tenta de todas as formas possíveis adicionar e resolver os meus erros para que todos possam utilizar meus serviços sem nenhum problema!
                         
                </p>


            </div>
            <img src={oniBranco} alt='oni' className='hover:scale-125 hover:opacity-100 hover:duration-500 w-96 h-96 pl-28 ml-18 mr-48 scale-110 opacity-80 object-contain' />
          </div>
          
        </div>
        
      </div>
    </div>
)}

export default Sobre