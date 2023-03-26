import React from 'react';
import { Link } from 'react-router-dom';
import { thanks, back } from "../assets/images";

const Thanks = ({ count }) => {
  return (
    <section className="flex justify-center items-center flex-col">
        <div className="w-[450px] h-[450px] rounded-[30px] bg-[#212830] px-10">
            <div className="flex justify-center mt-12">
                <img src={thanks} alt="thanks for the feedback"/>
            </div>
            <div className="flex justify-center mt-11"> 
                <div className="flex justify-center items-center w-[192px] h-[32px] py-2 rounded-[30px] bg-[#252D37]">
                    <p className="text-[#FB7413] text-sm">You selected {count} out of 5</p>
                </div>
            </div>
            <h1 className="flex justify-center mt-6">Thank you</h1>
            <p className="font-medium text-base text-center mt-4 opacity-70">We appreciate you taking the time to give us a rating. If you ever need more support, don’t hesistate to get in touch</p>
            <div className="flex justify-end mt-2">
                <Link to="/">
                    <div className="flex flex-row group">
                        <img src={back} alt="back arrow" className="px-2 group-hover:translate-x-[-0.25rem]"/>
                        <p className="group-hover:scale-110">Go back</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex pt-4">
            <p className="text-base">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="hover:text-[#FB7413]">Frontend Mentor</span></a>. Coded by <a href="https://github.com/AsteriskM1" target="_blank"><span className="hover:text-[#FB7413]">Arthur</span></a>.</p>
        </div>
    </section>
  )
}

export default Thanks;