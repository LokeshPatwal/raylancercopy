import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-[11vh] gap-x-[2%] bg-gradient-to-r from-[#000000_43.21%] via-[#5B4E5B_85.75%] to-[#000000F0_99.24%] shadow-[0px_18px_9px_rgba(0,0,0,0.25)] font-anybody'>
      <img src='Images/Raylancerlogo.png' alt='Raylancer' className='h-[90%] flex mr-[3%]' />
      <form className='text-white text-sm'>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>NFT</option>
          <option>NFT2</option>
          <option>NFT3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer font-normal text-base'>
          <option>Marketing</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>NFT Gaming</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>Metaverse</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>Crypto Development</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>Crypto Exchange</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>Defl</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>Blog</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
        <select className='bg-transparent w-fit cursor-pointer'>
          <option>Contact</option>
          <option>Option-2</option>
          <option>Option-3</option>
        </select>
      </form>
      <div className='flex gap-x-2 float-right '>
        <img src='Images/Whatsapplogo.png' alt='Whatsapp' className='h-10' />
        <img src='Images/Skypelogo.png' alt='Skype' className='h-10' />
      </div>
    </nav>
  )
}

export default Navbar