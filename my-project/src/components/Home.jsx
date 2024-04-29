import React, { useState } from "react";
import NeezImage from "../assets/profile-removebg.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { ReactTyped } from "react-typed";

const Home = () => {
    const [home, setNav] = useState(false);

    return (
    <div nane="home" className="flex h-screen w-full bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white">I'm  
            <span className="text-indigo-600 pl-4">
      <ReactTyped
        strings={[
          "Frontend Dev",
          "Software Dev",
          "Fullstack Dev",
        ]}
        typeSpeed={80}
        backSpeed={80}
        loop
      >
      </ReactTyped>
            </span>
         </h2>
            <p className="text-gray-400 py-4 max-w-lg mr-8 text-justify">I have 2 years of experience building and designing software.
                Currently, i love to work on web application using technologies like
                React, Tailwind, NextJS and PHP.
            </p>

            <div>
                <button onClick={() => setNav(!home)} className="group transition duration-300 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  Portofolio 
                     <span className="pl-4">
                       {home ? <GoArrowRight size={20}/> : <GoArrowDown size={20}/>}
                     </span>
                 </button>
            </div>
        </div>

        <div className="mx-5">
            <img src={NeezImage} alt="Ibanez" width={400} className="rounded-xl mx-auto md:w-[400px] bg-gradient-to-b from-slate-900 to-indigo-600" />
        </div>
      </div>
    </div>
    );
};

export default Home;