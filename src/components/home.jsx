import React from 'react'
import Skills from './myskills.jsx'
import Welcome from './welcome.jsx'
import krypt from '../images/krypt.png';
import weatherApp from '../images/weatherApp.png';
import pokeApp from '../images/pokeApp.png'
import {Link} from 'react-router-dom';
import {BsArrowRightCircle} from 'react-icons/bs'

const Home = () => {
    const data = [{
        name: 'Krypt',
        desc: '"Krypt" is a web3 dApp project through which a user can send and receive "Ethers (ETH)" easily and all the transactions done through krypt will be showed below on the page with all the details in a fun way!',
        image: krypt,
        netlify: 'https://krypt-td.netlify.app',
        github: 'https://github.com/taniaaa3/krypt',
        source: 'Github Repo',
    },
    {
        name: 'Weather Forecaster',
        desc: '"Weather Forecaster" is a ReactJs project made for an online unpaid internship. This web app provides accurate weather forecasts, keeping you prepared for any conditions.',
        image: weatherApp,
        netlify: 'https://weatherforecastingtd.netlify.app',
        github: 'https://github.com/taniaaa3/weather-forecasting',
        source: 'Github Repo',
    },
    {
        name: 'Poke App',
        desc: '"Poke App" is a ReactJs based project as well made for an online unpaid internship. This web app is the ultimate source for exploring detailed information about Pokemon and their skills.',
        image: pokeApp,
        netlify: 'https://pokeapp.netlify.app',
        github: 'https://github.com/taniaaa3/pokeapp',
        source: 'Github Repo',
    }]
    return (
        <>
            <Welcome />
            <Skills />
            <div className="flex flex-col justify-center items-center aos-init">
                <h1 className="text-3xl py-3 font-bold">MY <span style={{color: 'rgb(43, 18, 76)'}}>PROJECTS</span>
                </h1>
                <div className="sm:grid md:grid md:grid-cols-3 sm:grid-cols-2 block w-full gap-4 place-content-evenly drop-shadow-xl m-5 mb-10">
                    {data.map((val)=>{
                        return(
                    <div className="flex flex-col justify-evenly rounded-lg bg-[rgb(214,214,214)] shadow-black shadow-2xl transition duration-150 ease-in hover:-translate-y-6 text-black m-3">
                        
                        <img src={val.image} alt="image" className="rounded-t-lg w-full h-full" />
                        <h3 className="font-bold m-3 text-3xl">{val.name}</h3>
                        <p className="mx-2">{val.desc}</p>
                        <br />
                        <div className="flex flex-row justify-between">
                            <a className="gradient rounded-full p-3 m-3" href={val.netlify} target="_blank" rel="noreferrer">Deployed Site</a>
                            <a className="gradient rounded-full p-3 m-3" href={val.github} target="_blank" rel="noreferrer">Github Repo</a>
                        </div>
                    </div>
                    )})}
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
