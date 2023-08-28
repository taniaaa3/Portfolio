import React from 'react'
import Skills from './myskills.jsx'
import Welcome from './welcome.jsx'
import {Link} from 'react-router-dom';
import {BsArrowRightCircle} from 'react-icons/bs'

const Home = () => {
    return (
        <>
            <Welcome />
            <Skills />
            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col justify-center items-center aos-init">
                <h1 className="text-3xl py-3 font-bold">MY <span style={{color: 'rgb(43, 18, 76)'}}>PROJECTS</span>
                </h1>
                <div className="sm:grid md:grid md:grid-cols-3 sm:grid-cols-2 block w-full gap-4 place-content-evenly drop-shadow-xl m-5 mb-10">
                    <div className="flex flex-col justify-evenly rounded-lg bg-[rgb(214,214,214)] shadow-black shadow-2xl transition duration-150 ease-in hover:-translate-y-6 text-black m-3">
                        <img src="/static/media/krypt-img.cfce4ad802e2c0029f43.png" alt="image" className="rounded-t-lg w-full h-full" />
                        <h3 className="font-bold m-3 text-3xl">Krypt</h3>
                        <p className="mx-2">"Krypt" is a web3 dApp project through which a user can send and receive "Ethers (ETH)" easily and all the transactions done through krypt will be showed below on the page with all the details in a fun way!</p>
                        <br />
                        <div className="flex flex-row justify-between">
                            <a className="gradient rounded-full p-3 m-3" href="https://krypt-td.netlify.app" target="_blank" rel="noreferrer">Deployed Site</a>
                            <a className="gradient rounded-full p-3 m-3" href="https://github.com/taniaaa3/krypt" target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly rounded-lg bg-[rgb(214,214,214)] shadow-black shadow-2xl transition duration-150 ease-in hover:-translate-y-6 text-black m-3">
                        <img src="/static/media/weather-forecasting.992fd62488e97330ba33.png" alt="image" className="rounded-t-lg w-full h-full"/>
                            <h3 className="font-bold m-3 text-3xl">Weather Forecaster</h3>
                            <p className="mx-2">"Krypt" is a web3 dApp project through which a user can send and receive "Ethers (ETH)" easily and all the transactions done through krypt will be showed below on the page with all the details in a fun way!</p>
                            <br />
                            <div className="flex flex-row justify-between"><a className="gradient rounded-full p-3 m-3" href="https://weatherforecastingtd.netlify.app/" target="_blank" rel="noreferrer">Deployed Site</a>
                                <a className="gradient rounded-full p-3 m-3" href="https://github.com/taniaaa3/weather-forecasting" target="_blank" rel="noreferrer">Github Repo</a>
                            </div>
                    </div>
                    <div className="flex flex-col justify-evenly rounded-lg bg-[rgb(214,214,214)] shadow-black shadow-2xl transition duration-150 ease-in hover:-translate-y-6 text-black m-3">
                        <img src="/static/media/pokeapp.f34c9d3fafe8d64ebc21.png" alt="image" className="rounded-t-lg w-full h-full" />
                        <h3 className="font-bold m-3 text-3xl">Poke App</h3>
                        <p className="mx-2">"Krypt" is a web3 dApp project through which a user can send and receive "Ethers (ETH)" easily and all the transactions done through krypt will be showed below on the page with all the details in a fun way!</p>
                        <br />
                        <div className="flex flex-row justify-between">
                            <a className="gradient rounded-full p-3 m-3" href="https://pokeapptd.netlify.app" target="_blank" rel="noreferrer">Deployed Site</a>
                            <a className="gradient rounded-full p-3 m-3" href="https://github.com/taniaaa3/PokeApp" target="_blank" rel="noreferrer">
                                Github Repo
                            </a>
                        </div>
                    </div>
                </div>
                <Link to='/projects'>
                    <div className="flex flex-row gradient w-full projects mb-5 py-3 rounded-full text-black cursor-pointer justify-center items-center">
                        <button className="px-2">More Projects </button>
                        <BsArrowRightCircle className="gradient mr-2 " size={25} style={{borderRadius: "50px"}}/>
                    </div>
                    </Link>
            </div>
        </>
    )
}

export default Home