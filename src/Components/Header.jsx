import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const [toggle , setToggle] = useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] py-[20px]  mx-auto flex justify-between items-center'>
    <div className='text-3xl font-bold'>WsCubeTech</div>


    {
        toggle ?
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block '/>
        :
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block '/>



    }
    <ul className='hidden md:flex text-white gap-9'>
    <li>
    <a>Home</a>
    </li>
    <li>
    <a>Comapany</a>
    </li>
    <li>
    <a>Resouses</a>
    </li>
    <li>
    <a>About</a>
    </li>
    <li>
    <a>Contact us</a>
    </li>



    </ul>
    
{/* for Responsive Design */}
<ul className={`duration-500 md:hidden text-white gap-10 w-full h-screen fixed bg-black ${toggle ?'left-[0]':'left-[-100%]'} top-[105px]`}>
<li className='p-5'>
<a>Home</a>
</li>
<li className='p-5'>
<a>Comapany</a>
</li>
<li className='p-5'>
<a>Resouses</a>
</li>
<li className='p-5'>
<a>About</a>
</li>
<li className='p-5'>
<a>Contact us</a>
</li>



</ul>


    </div>
    </div>
  )
}

export default Header