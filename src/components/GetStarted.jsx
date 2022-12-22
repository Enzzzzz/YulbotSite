import React from 'react'
import { arrowUp } from '../assets'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const GetStarted = () => (
  

    <div className={'flex justify-center items-center hover:scale-[103%] hover:shadow-lg hover:shadow-purple-400/40 w-[140px] h-[140px] rounded-full bg-gradient-to-t from-purple-500 to-white p-[2px] cursor-pointer'}>
      <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      onClick={() => openInNewTab('https://discord.com/api/oauth2/authorize?client_id=1009242817429786744&permissions=1643260603510&scope=bot')}
      >
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-white'>Comece</span>
        </p>
        <div className={`flex justify-center items-start flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-white mr-1'>Agora!</span>
          </p>
            <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
        </div>

      </div>
    </div>
)

export default GetStarted