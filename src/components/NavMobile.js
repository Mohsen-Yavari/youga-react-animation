import React,{useState} from 'react';

//import menu btn icon
import { BiMenu } from 'react-icons/bi';

const NavMobile = () => {
  return (
    <nav>
        {/* menu btn */}
        <div className="cursor-pointer text-4xl text-heading
        ml-[10px] lg:hidden ">
            <BiMenu />
        </div>
        {/* menu items */}
    </nav>
  )
}

export default NavMobile