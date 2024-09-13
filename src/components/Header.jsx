import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdAssignmentInd } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
    const [toggle,setToggle]=React.useState(false);

    const showSideMenu = () => {
    console.log('hii');
    setToggle(true);
}


const hideSideMenu = () =>{
    setToggle(false);
}
  return (
    <> 
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden"
        }}>
            
            <div onClick={(e) => {
                e.stopPropagation();
            }}
            className='w-[500px] bg-white h-full absolute duration-[400ms]' 
            style={{
                left: toggle ? '0%' : '-100%'
            }}
            ></div>  
        </div>
   <header className='p-[15px] shadow-xl'>
        <div className='max-w-[1200px]  mx-auto  flex items-center '>          
            
            <div className='w-[100px] '>
                <img src='src\assets\image\images.png' className='w-full' alt=''/>
            </div>
            <div className=''>
               <span className='font-bold border-b-[3px] border-[black]'> civil lines</span> ,Buxar, India <RxCaretDown  fontSize={25} className=' font-bold inline text-[#fc8019] cursor-pointer ' onClick={showSideMenu}/>
            </div>
            <nav className='flex list-none gap-10  ml-auto text-[18px] font-semibold'>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                < CiSearch />
                    search
                </li>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                <CiDiscount1  />
                    offers
                </li>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                <IoHelpBuoyOutline />
                    Helps
                </li>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                <MdAssignmentInd />
                    sign In
                </li>
                <li className='flex hover:text-[#fc8019] items-center gap-2'>
                < CiShoppingCart />
                    Cart
                </li>
            </nav>
        </div>
    </header>
    </>
  )
}
