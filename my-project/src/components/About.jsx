import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoSchool } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";


const About = () => {
    return (
        <div name="about" className="w-full bg-gradient-to-b from-gray-900 flex to-slate-900 md:h-screen text-white pt-20 sm:pr-0 md:pr-96">
            <div className="mx-auto h-full">
            <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold text-gray-400 pb-12">Education</h1>
                <div className="">
                     <IoSchool size={33} className="rounded-full bg-gradient-to-r from-green-800 to-green-500 p-1.5 bg-opacity-55"/>
                </div>
    
                {/* SMP */}
                <div className="smp border-l-4 border-gray-600 md:h-44 sm:h-40 h-36 ml-4 my-4 px-5">
                    <h1 className="font-bold text-gray-500 md:text text-xl sm:text-2xl py-4">Junior High School Nusaputera</h1>
                    <p className="max-w-80 text-justify font-semibold text-gray-300 text-xs md:text-sm">I Started learn coding since middle school, by learning my first language HTML CSS and PYTHON basic</p>
                    <p className="py-4 font-extralight">2020 - 2023</p>
                </div>

                {/* SMK */}
                <div className="pt-10">
                     <IoSchool size={33} color="" className="rounded-full bg-gradient-to-r from-green-800 to-green-500 p-1.5 bg-opacity-55"/>
                </div>
            
                <div className="smp border-l-4 border-gray-600 sm:h-36 h-32 md:h-36 ml-4 my-4 px-5">
                    <h1 className="font-bold text-gray-500 text-xl md:text-2xl py-4">SMKN 8 SEMARANG</h1>
                    <p className="max-w-80 text-justify font-bold text-gray-300 text-sm md:text-xl">Software Enginner</p>
                    <p className="py-4 font-extralight">2023 - Present</p>
                </div>
            {/* Work */}
            <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold text-gray-400 pb-6 pt-16">Work Experience</h1>
                <div className="">
                <PiBagFill  size={33} className="rounded-full bg-gradient-to-r from-green-800 to-green-500 p-1.5 bg-opacity-30"/>
                </div>
                {/* WFH */}
                <div className="smp border-l-4 border-gray-600 md:h-40 sm:h-44 h-44 ml-4 my-4 px-5">
                    <h1 className="font-bold text-gray-500 md:text text-xl sm:text-2xl pb-4">PT. Platinumetrix Global Inovasi</h1>
                    <p className=" font-extralight pb-4">2024 - currently</p>
                    <l>
                        <li className="text-sm font-semibold text-gray-300 pb-2">Create Simple Project Custum Charts Using ReactJS and Chart.Js</li>
                        <li className="text-sm font-semibold text-gray-300 pb-2">Build and Learn Rest API with Node Express</li>
                        <li className="text-sm font-semibold text-gray-300 pb-2">Learn Back-end with framework JavaScript (NextJS)</li>
                    </l>
                    
                </div>
            </div>
        </div>
    )
};


export default About;