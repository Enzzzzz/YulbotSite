import React from 'react'


const FeatureHomeLeft = ({

    title,
    description,
    clickText,
    img,
    path,
    altImg,

}) => {
    return (
    <section path={path} className={`flex px-0`}>
        <div className={`w-full pb-10 md:flex-col flex justify-center items-center text-white `}>
          <div className='xl:px-0 sm:px-16 flex flex-row'>
            <div className='h-56 sm:h-64 md:h-96 w-full ss:w-full md:w-full shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center py-6 px-0 sm:px-3  bg-gradient-to-br from-purple-400/20 rounded-[10px] mb-2'>
              <div className='flex flex-col '>
                <p className={`font-poppins font-normal text-dimWhite mt-2 md:mt-0 leading-[30.8px] ml-2 md:ml-8 text-sm sm:text-lg md:text-2xl` }>
                  <span className=' text-white font-bold'>
                    {title}
                  </span>
                </p>
    
                <p className={`font-poppins font-normal text-dimWhite  leading-[30.8px] ml-2 md:ml-8 py-1 md:py-6 ss:text-sm flex flex-col justify-center` }>
                  <span className='md:text-lg sm:text-sm text-xs justify-between'>
                    {description} 
                  </span>
                  <span className='text-purple-400 font-bold text-sm sm:text:lg md:text-xl cursor-pointer hover:underline hover:underline-offset-4 mb-4 md:mb-0'
                  >
                    {clickText}
                  </span>
                </p>
              </div>
    
              <img src={img} alt={altImg} className='relative md:hover:scale-[165%] hover:opacity-100 hover:duration-500 h-28 w-28 sm:w-52 sm:h-52 md:h-96 md:w-96 mr-0 ml-2 sm:pl-10 sm:ml-15 sm:mr-15 md:pr-28 md:ml-28 md:mr-0 scale-100 md:scale-150 opacity-100 md:opacity-80 object-contain' />
            </div>
          </div>
        </div>
      </section>

)}

export default FeatureHomeLeft