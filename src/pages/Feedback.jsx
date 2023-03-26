import React, { useState } from 'react';
import { star } from '../assets/images/index';
import { Link } from 'react-router-dom';

const Rating = ({ num, onClick }) => (
    <button 
    className={`w-[50px] h-[50px] rounded-full bg-[#343C43] focus:bg-[#959EAC] hover:bg-[#FB7413] hover:text-white cursor-pointer flex justify-center items-center`}
    onClick={onClick}>
      {num}
    </button>
  )

const Feedback = ({ onData }) => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="w-[450px] h-[450px] rounded-[30px] bg-[#212830] px-10">
        <div className="w-[45px] h-[45px] rounded-full bg-[#343C43] flex justify-center items-center mt-12">
            <img src={star} alt="star" className="w-[18px] h-[18px]" />
        </div>
        <h1 className="mt-10">How did we do?</h1>
        <p className="mt-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="flex flex-row justify-between max-w-[365px] mt-4">
            <Rating num="1" onClick={() => onData(1)} />
            <Rating num="2" onClick={() => onData(2)} />
            <Rating num="3" onClick={() => onData(3)} />
            <Rating num="4" onClick={() => onData(4)} />
            <Rating num="5" onClick={() => onData(5)} />
        </div>
        <Link to="/thanks">
            <button className="w-[365px] h-[45px] mt-6">Submit</button>
        </Link>
      </div>
      <div className="flex pt-4">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="hover:text-[#FB7413]">Frontend Mentor</span></a>. Coded by <a href="https://github.com/AsteriskM1" target="_blank"><span className="hover:text-[#FB7413]">Arthur</span></a>.</p>
      </div>
    </section>
    )
}

export default Feedback;