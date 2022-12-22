import React from 'react'
import styles from '../style'
import { config, torii } from '../assets'
import { direitorosa, up, up1 } from '../assets'

const Config = () => (
  <section id='sobre3' className={`flex  px-0`}>

    <div className={`flex w-full pb-10 md:flex-col${styles.flexCenter} text-white `}>
      <div className='xl:px-0 sm:px-16 flex flex-row'>
        <div className='h-96 w-full ss:w-full sm:w-full md:w-full shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center py-6 px-2 bg-gradient-to-bl from-purple-400/20 rounded-[10px] mb-2'>
          <div className='flex flex-col '>
            <p className={`${styles.paragraph} ml-8 text-2xl ` }>
              <span className=' text-white font-bold'>Totalmente Configurável</span>
            </p>

            <p className={`${styles.paragraph} ml-8 py-6 ss:text-sm flex flex-col justify-center` }>
              <span className='text-lg justify-between'>Você pode me configurar do jeito que voce quiser! setar canais de comando, setar canal de log adm, bloquear comandos em chat específico, bloquear um usuário ou cargo de usar um comando específico e ainda um pouco mais!
              </span>
              <span className='text-purple-400 font-bold  text-xl cursor-pointer hover:underline hover:underline-offset-4'>
              Veja Como!
              </span>
            </p>
          </div>

          <img src={config} alt='config' className='relative hover:scale-[130%] hover:opacity-100 hover:duration-500 w-96 h-96 pl-28 ml-28 mr-28 sm:ml-0 scale-110 opacity-80 object-contain' />
        </div>
      </div>
    </div>
  </section>
)

export default Config