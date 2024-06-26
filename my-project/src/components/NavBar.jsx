import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'skill'
        },
        {
            id: 4,
            link: 'conntact'
        }
    ]

    return (
        <div>
           <div className="flex justify-between items-center w-full h-20  px-8 text-white bg-black fixed">
               <h1 className="text-5xl font-signature ml-2"> Ibanez.</h1>

               <ul className="hidden md:flex">
                {links.map(( {id, link}) => (
                      <li key={id} className="px-6 cursor-pointer capitalize font-medium text-lg text-gray-500 hover:scale-105 duration-200">{link}</li>
                ))}
               </ul>

               <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
                    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
               </div>

               {nav && (
               <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
               {links.map(( {id, link}) => (
                      <li key={id} className="font-medium text-gray-500 hover:scale-105 duration-200 px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
                ))}
               </ul>
               )}
           </div>
        </div>
    );
};

 export default NavBar;