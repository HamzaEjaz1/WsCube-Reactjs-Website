import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full bg-[#2699fb] p-4">
      <div className="max-w-[1240px] md:flex justify-between mx-auto py-[40px]">
        <div className="  text-white px-3 my-5">
          <h1 className="text-xl  md:text-4xl mt-4">Want to Learn Latest I.T Skills ?</h1>
          <p>sigin in to our newslater and stay up to date</p>
        </div>
        <div className=" ">
        <input type="text" className=" py-2 px-10 mx-2 text-slate-500 rounded  " placeholder="Email"></input>
        <button className='btn text-white px-10 py-2 rounded bg-black mt-5'>Subscribe </button>
        <br/>
        <p className="mt-4 px-3">
        We can care about you data protection for further queries   read our <br/> <a href="#" className="text-[white]">privacy policay</a></p>

        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
