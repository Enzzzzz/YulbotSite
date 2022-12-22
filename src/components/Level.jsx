import React from 'react'
import styles from '../style'
import { torii, up } from '../assets'

const Level = () => (
  <section id='sobre2' className={`flex md:flex-row flex-col  px-0`}>

    <div className={`flex w-full pb-10 md:flex-col flex-row${styles.flexCenter} text-white `}>
      <div className='xl:px-0 sm:px-16 flex flex-row'>
        <div className='h-96 w-full ss:w-full md:w-full shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center py-6 px-3  bg-gradient-to-br from-purple-400/20 rounded-[10px] mb-2'>
        <img src={up} alt='gate2' className='relative hover:scale-[175%] hover:opacity-100 hover:duration-500 w-96 h-96 pr-28 ml-28 mr-0 scale-150 opacity-80 object-contain' />
          <div className='flex flex-col'>
            <p className={`${styles.paragraph} text-right mr-8 text-2xl` }>
              <span className=' text-white text-right font-bold'>Sistema de level</span>
            </p>

            <p className={`${styles.paragraph} mr-8 py-6 flex flex-col justify-center` }>
              <span className='text-lg justify-between text-right'>Sistema de level e rank global para todos os meus usuários ou apenas para o seu servidor! Converse com seus amigos e ganhem pontos de xp para subir de nível e liberar novos temas para o seu perfil ou até comandos.
              </span>
              <span className='text-purple-400 text-right font-bold text-xl cursor-pointer hover:underline hover:underline-offset-4'>
                Saiba mais!
              </span>
            </p>
          </div>

          
        </div>
      </div>
    </div>
  </section>
)

export default Level