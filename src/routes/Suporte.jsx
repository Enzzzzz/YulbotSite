import React from 'react'
import Navbar from '../Layout/Navbar'

function Suporte() {
    return (
    <div className={`bg-primary w-full overflow-hidden'`}>
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
            <div className={`xl:max-w-[1280px] w-full`}>
                <Navbar />
            </div>
        </div>
  
      <div className={`flex w-full  mt-10 pb-24 md:flex-col text-white `}>
        <div className='flex px-16 flex-row'>
          <div className='h-[100%] w-[200%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border'>
            <div className='flex flex-col scale-[90%]'>
              <p className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-8 mt-16 mb-96 text-3xl ` }>
                <span className=' text-white font-bold'>Site em construção. Volte em breve!</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
)}

export default Suporte