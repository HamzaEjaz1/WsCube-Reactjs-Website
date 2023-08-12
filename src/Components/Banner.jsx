import React from 'react'
import Typed from 'react-typed'
const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[80px] '>
    <div className='max-w-[1240px] my-[80px] mx-auto text-center '>
    <div className='text-4xl font-bold'>Learn With Us</div>
    <div className='text-white font-bold text-6xl my-4'>Grow With Us</div>
    <div className='text-4xl text-white font-bold'>Learn 
    <Typed 
    className='pl-3'
    strings={[" Digital Marketing " ," Web Development "," App Development"]}
    typeSpeed={100}
    backSpeed={50}
    loop={true}
    />
    
    </div>

    <button className='btn text-white px-10 py-2 rounded bg-black mt-5 w-[200px]'>Get Started </button>

    
    </div>
    
    </div>
  )
}

export default Banner