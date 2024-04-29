import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import react from "../assets/logo512.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";

const Skill = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500 shadow-md hover:scale-105 duration-500 py-2 grayscale hover:grayscale-0 rounded-lg'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 3,
            src: js,
            title: 'JS',
            style: 'shadow-yellow-500 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 4,
            src: ts,
            title: 'Type Script',
            style: 'shadow-blue-400 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 5,
            src: tailwind,
            title: 'tailwind',
            style: 'shadow-sky-500 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 6,
            src: react,
            title: 'react',
            style: 'shadow-blue-600 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 7,
            src: bootstrap,
            title: 'bootsrap',
            style: 'shadow-purple-500 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 8,
            src: php,
            title: 'php',
            style: 'shadow-gray-500 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
        {
            id: 9,
            src: mysql,
            title: 'mysql',
            style: 'shadow-indigo-500 shadow-md hover:scale-105 duration-500 py-2 rounded-lg grayscale hover:grayscale-0'
        },
    ]

    return (
        <div name='skill' className="bg-gradient-to-b from-black to-gray-900 w-full h-screen pb-40 pt-32">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                  <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">My Skill</p>
                  <p className="py-6 ">These are the technologies i've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-12 text-center py-8 px-12 sm:px-8">
                    {techs.map(({ id, src, title, style}) => {
                            return (
                                    <div key={id} className={style}>
                                        <img src={src} alt="" className="w-20 mx-auto" />
                                        <p className="mt-4 font-semibold">{title}</p>
                                    </div>  
                            )
                        })}
                </div>
            </div>
        </div>
    )
};

export default Skill;