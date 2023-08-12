import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Expert = () => {
  return (
    <div className='max-w-[1240px] mx-auto  md:grid grid-cols-2 my-10 p-4'>
    <div className='  col-span-1 md:w-[80%] text-center'>
    <img src={Laptop} alt=''></img>
    </div>
    <div className=' col-span-1 flex flex-col justify-center'>
    <h1 className='text-2xl font-bold text-[#0099df] '>Learn From Expert</h1>
    <p className='my-4 text-justify'>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consequatur architecto quae eius, tenetur laborum facere? Repellendus quia facilis architecto sit veritatis. Tempore officiis eos in, suscipit nemo distinctio dignissimos!</p>
    <button className='btn text-white px-10 py-2 rounded bg-black w-[200px]'>Get Started </button>
    </div>
    
    </div>
  )
}

export default Expert