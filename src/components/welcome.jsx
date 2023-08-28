import React from 'react'
import img from '../images/1693043931688.jpg';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <div className="p-5 flex flex-col sm:flex-row justify-between items-center text-white">
                <div className="flex flex-col items-left justify-evenly ml-3 mt-3">
                    <p className="">Hello Everyone!</p>
                    <h1 className="text-4xl my-3 font-bold">I'm <span className=" text-gradient">Taniya Darwani</span></h1>
                    <p className="text-2xl">A Web3 Enthusiast who loves turning ideas into reality, whether it's editing or coding, I enjoy creating awesome things that make people smile. </p>
                    <br />
                    <p className="text-2xl">Let's build something amazing together!</p>
                    <Link to="/contact" className="my-5 gradient rounded-xl text-xl p-2"  style={{width:' max-content'}}>
                        <button>Reach Out</button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center mr-3 mt-3">
                    <img src={img} className=" w-2/3 sm:w-full md:w-3/4  border-black border-2 rounded-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Welcome