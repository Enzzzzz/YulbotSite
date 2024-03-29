import React from 'react'


const FeatureHomeRight = ({

    title,
    description,
    clickText,
    img,
    path,
    altImg,

}) => {
    return (
    <section path={path} className={`flex md:flex-row flex-col  px-0`}>

    <div className={`w-full pb-10 md:flex-col flex-row flex justify-center items-center text-white `}>
      <div className='xl:px-0 sm:px-16 flex flex-row'>
        <div className='h-56 sm:h-64 md:h-96 w-full ss:w-full md:w-full transform transform-all duration-300  shadow-purple-400/50 shadow-lg hover:shadow-xl hover:shadow-purple-400/50 flex flex-row items-center py-6 px-3  bg-gradient-to-br from-purple-400/20 rounded-[10px] mb-2'>
        <img src={img} alt={altImg} className='relative md:hover:scale-[165%] hover:opacity-100 hover:duration-500 h-28 w-28 sm:w-52 sm:h-52 md:h-96 md:w-96 ml-0 mr-2 sm:pr-10 sm:ml-15 sm:mr-15 md:pr-28 md:ml-28 md:mr-0 scale-100 md:scale-150 opacity-100 md:opacity-80 object-contain' />
          <div className='flex flex-col'>
            <p className={`font-poppins font-normal text-dimWhite mt-2 md:mt-0 leading-[30.8px] text-right mr-2 md:mr-8 text-sm sm:text-lg md:text-2xl` }>
              <span className=' text-white text-right font-bold'>{title}</span>
            </p>

            <p className={`font-poppins font-normal text-dimWhite leading-[30.8px] mr-2 md:mr-8 md:py-6 py-1 flex flex-col justify-center` }>
              <span className='md:text-lg sm:text-sm text-xs justify-between text-justify '>{description}
              </span>
              <span className='text-purple-400 text-right font-bold text-sm sm:text:lg md:text-xl cursor-pointer hover:underline hover:underline-offset-4 mb-4 md:mb-0'>
                {clickText}
              </span>
            </p>
          </div>

          
        </div>
      </div>
    </div>
  </section>

)}

export default FeatureHomeRight