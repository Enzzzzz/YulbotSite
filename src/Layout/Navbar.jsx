import { useState } from 'react'
import { close, menu, logo2 } from '../assets';
import { navLinks } from '../constants';




const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className='w-full flex py-3 justify-between items-center navbar'>
      <ul>
        <li>
            <a href='/'>
              <img src='/LogoBranco.png' alt='yulhome' className='cursor-pointer transform duration-200 hover:scale-150 scale-125 w-24' />
            </a>
        </li>
      </ul>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-nome cursor-pointer text-[16px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'} text-white  hover:text-purple-300 sub`}
          >
            <a href={`/${nav.id}`}>
              {nav.title}
            </a>
            

          </li>
          
        ))}
        <p className={`font-poppins font-nome cursor-pointer text-[16px] mr-0 text-white  hover:text-purple-300 sub`}
        onClick={() => openInNewTab('https://discord.gg/PV25tj6HTs')}>
          Suporte
        </p>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
        src={toggle ? close : menu} 
        alt="menu"
        className='w-[28px] h-[28] object-contain'
        onClick={() => setToggle((prev) => !prev)}
        />

        <div 
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-br from-purple-500/40 border-purple-600 border absolute top-20 right-0 mx-4 my-2 min-w- [140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-nome cursor-pointer text-[16px] ${index === navLinks.lenght - 1 ? 'mr-0' : 'mb-4'} text-white sub`}
              >            
            <a href={`/${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
        <p className={`font-poppins font-nome cursor-pointer text-[16px] mr-0 text-white  hover:text-purple-300 sub`}
        onClick={() => openInNewTab('https://discord.gg/PV25tj6HTs')}>
          Suporte
        </p>
      </ul> 
        </div>
      </div>  
    </div>
  )
}

export default Navbar