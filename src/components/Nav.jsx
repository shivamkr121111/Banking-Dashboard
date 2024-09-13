import React from 'react'

export default function Nav() {
  return (
    <>
    <div className='font-bold  bg-slate-400 w-full h-12'>
   <nav className='  flex justify-end list-none gap-10  ml-auto text-[18px] font-semibold '>
                <li className=' hover:text-[#fc8019] items-center  gap-2'>
                HOME
                </li>
                <li className=' hover:text-[#fc8019] text-center gap-2'>
                
                ABOUT
                </li>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                
                HELP
                </li>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                CONTACT
                
                </li>
            </nav>
        </div>
    </>
  )
}
