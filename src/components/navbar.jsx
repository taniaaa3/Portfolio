import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {AiFillGithub, AiOutlineMail, AiFillLinkedin, AiOutlineClose} from 'react-icons/ai';
import { CgMenuOreos } from 'react-icons/cg'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="flex my-5 flex-row justify-between px-5 font-mono items-center w-full text-white">
            <p className="font-bold text-6xl cursor-pointer head sm:ml-10 ml-2 font-mono">Taniya D.</p>
            <div className="">
                {toggleMenu?
                <AiOutlineClose size={35} className='mr-3 cursor-pointer sm:hidden' onClick={()=>{setToggleMenu(false)}}/> : 
                <CgMenuOreos size={35} className='mr-3 cursor-pointer sm:hidden' onClick={()=>{setToggleMenu(true)}}/>}
                
                {
                    toggleMenu && 
                    <ul className="flex flex-col list-none justify-start shadow-2xl z-10 items-left blue-glassmorphism w-[50vw] h-screen fixed -right-2 top-2 p-5 text-white">
                    <li><AiOutlineClose size={35} className=' cursor-pointer' onClick={()=>{setToggleMenu(false)}}/></li>
                    <ul className='flex flex-col justify-evenly mt-5 items-end'>
                    <Link to='/'><li className="mx-3 my-2 p-2 text-lg transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer">Home</li></Link>
                    <Link to='/aboutme'><li className="mx-3 p-2 my-2 text-lg transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer ">About Me</li></Link>
                    <Link to='/projects'><li className="mx-3 p-2 my-2 text-lg transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer">Projects</li></Link>
                    <Link to='/contact'><li className="mx-3 p-2 my-2 text-lg transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer">Contact</li></Link>
                    </ul>
                    </ul>
                    
                }
                <ul className="flex hidden sm:flex flex-col sm:flex-row list-none justify-evenly items-center blue-glassmorphism w-full text-white">
                    <Link to='/'><li className="mx-3 my-2 text-large transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer">Home</li></Link>
                    <Link to='/aboutme' className='w-full'><li className="mx-3 my-2 text-large transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer ">About Me</li></Link>
                    <Link to='/projects'><li className="mx-3 my-2 text-large transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer">Projects</li></Link>
                    <Link to='/contact'><li className="mx-3 my-2 text-large transition-all ease-in duration-300 text-white hover:text-[#0bc3f7] cursor-pointer">Contact</li></Link>
                    <span className="px-3 hidden md:flex">|</span>
                    <ul className="flex flex-row list-none hidden md:flex justify-evenly items-center w-full text-white">
                         <a href="https://github.com/taniaaa3" rel="noreferrer" target="_blank">
                         <li className="p-1 cursor-pointer transition-all ease-in duration-300 hover:text-[#0bc3f7]">
                            <AiFillGithub size={25}/>
                            </li>
                            </a>
                        <a href="https://linkedin.com/in/taniyad" rel="noreferrer" target="_blank">
                            <li className="p-1 cursor-pointer transition-all ease-in duration-300 hover:text-[#0bc3f7]">
                                <AiFillLinkedin size={25}/>
                        </li>
                        </a>
                        <a href="mailto:taniyadarwani3@gmail.com" rel="noreferrer" target="_blank">
                            <li className="p-1 cursor-pointer transition-all ease-in duration-300 hover:text-[#0bc3f7]">
                                <AiOutlineMail size={25}/>
                        </li>
                        </a>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Navbar