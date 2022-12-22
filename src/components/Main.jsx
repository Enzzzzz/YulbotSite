import React from 'react'
import styles from '../style'
import { discount, robot, robot2 } from '../assets'
import GetStarted from './GetStarted'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Main = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-gradient-to-br from-purple-500/40 hover:scale-[105%] rounded-[10px] mb-2'>
        <img src={'https://cdn-icons-png.flaticon.com/512/992/992651.png'} 
        alt='addme'
        className='cursor-pointer w-[15px] h-[15px]'
        onClick={() => openInNewTab('https://discord.com/api/oauth2/authorize?client_id=1009242817429786744&permissions=1643260603510&scope=bot')}
        />
        <p className={`${styles.paragraph} ml-2 cursor-pointer` }
        onClick={() => openInNewTab('https://discord.com/api/oauth2/authorize?client_id=1009242817429786744&permissions=1643260603510&scope=bot')}>
          <span >Me Adicione</span>
          <span className='text-white font-bold'> AGORA!!</span>
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[48px] text-white ss:leading-[100px] leading-[68px]'>
        O mais<br className='sm:block hidden' /> {" "}
        <span className='text-white'>Completo</span> {"  "}
        
        </h1>
        <div className='ss:flex hidden md:mr-4 m4-0'>
          <GetStarted />

        </div>
      </div>
      
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>DiscordBot</h1>


      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>O meu criador está me desenvolvendo com todas as funções possíveis para que você possa utilizar em qualquer tipo de servidor que você tenha ou esteja criando!</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot2} alt='billing'
      className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full botton-40 white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient'/>


    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
    </div>
  </section>
)

export default Main