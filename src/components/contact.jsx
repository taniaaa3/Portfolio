import React from 'react'
import {AiFillGithub, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai';
import { AiFillCodepenSquare } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div data-aos="fade-down" data-aos-duration="2000" className="flex flex-col justify-center my-10 items-center aos-init aos-animate">
                <h1 className="font-bold text-black text-4xl">CONTACT ME</h1>
                <br />
                <p className="md:text-7xl sm:text-4xl text-2xl font-bold">WAYS TO CONTACT ME</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col sm:grid sm:grid-cols-2 aos-init aos-animate">
                <div className="gradient p-3 cursor-pointer m-4 sm:m-7 rounded-full w-48 flex flex-row justify-center items-center">
                    <a href="https://linkedin.com/in/taniyad" target="_blank" rel="noreferrer" className="flex flex-row">
                    <AiFillLinkedin size={37} />
                        <h2 className="text-2xl p-1">LINKEDIN</h2>
                    </a>
                </div>
                <div className="green-gradient p-3 cursor-pointer m-4 sm:m-7 rounded-full w-48 flex flex-row justify-center items-center">
                    <a href="https://github.com/taniaaa3" target="_blank" rel="noreferrer" className="flex flex-row">
                    <AiFillGithub size={37} />
                        <h2 className="text-2xl p-1">GITHUB</h2>
                    </a>
                </div>
                <div className="black-gradient p-3 cursor-pointer m-4 sm:m-7 rounded-full w-48 flex flex-row justify-center items-center">
                    <a href="https://codepen.io/taniyadarwani3/pens/showcase" target="_blank" rel="noreferrer" className="flex flex-row">
                    <AiFillCodepenSquare size={37} />
                        <h2 className="text-2xl p-1">CODEPEN</h2>
                    </a>
                </div>
                <div className="red-gradient p-3 cursor-pointer m-4 sm:m-7 rounded-full w-48 flex flex-row justify-center items-center">
                    <a href="mailto:taniyadarwani3@gmail.com" target="_blank" rel="noreferrer" className="flex flex-row">
                    <AiOutlineMail size={37} />
                        <h2 className="text-2xl p-1">EMAIL</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact