import React from "react";
import buku from "../assets/buku.jpg"
import node from "../assets/node.jpg"
import webS from "../assets/scraping.webp"
import hack from "../assets/charts.jpg"
import test from "../assets/web6.png"
import earn from "../assets/earnitt.jpeg"

const Project = () => {

    const project = [
        {
            id: 1,
            src: node,
        },
        {
            id: 2,
            src: buku,
        },
        {
            id: 3,
            src: webS,
        },
        {
            id: 4,
            src: earn,
        },
        {
            id: 5,
            src: test,
        },
        {
            id: 6,
            src: hack,
        },
    ];

    return (
        <div className="bg-gradient-to-b from-slate-900 to-black w-fulll text-white md:h-screen pb-28 pt-20 sm:pt-16 lg:pt-44 md:pt-48">
            <div className=" flex flex-col justify-center max-w-screen-lg p-4 mx-auto w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Project</p>
                    <p className="py-6 ">Check out some of my project right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14 px-12 sm:px-0">
                    {project.map(({ id, src }) => {
                        return (
                        <div name='project' key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                        <img className="duration-300 hover:scale-105" src={src} alt="" width={400}/>
                          <div className="flex items-center justify-center">
                             <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">Code</button>
                             <button className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105">Demo</button>
                          </div>
                     </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Project;