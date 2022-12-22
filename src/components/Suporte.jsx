import React from 'react'
import styles from '../style'
import Navbar from './Navbar'

function Suporte() {
    return (
    <div className={`bg-primary w-full overflow-hidden'`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
  
      <div className={`flex w-full  mt-10 pb-24 md:flex-col text-white `}>
        <div className='flex px-16 flex-row'>
          <div className='h-[100%] w-[200%] shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center bg-gradient-to-r from-purple-900/50 rounded-[10px] mb-2 border-purple-700 border'>
            <div className='flex flex-col scale-[90%]'>
              <p className={`${styles.paragraph} ml-8 mt-16 mb-96 text-3xl ` }>
                <span className=' text-white font-bold'>Site em construção. Volte em breve!</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
)}

export default Suporte