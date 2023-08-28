import React from 'react'
import krypt from '../images/krypt.png';
import weatherApp from '../images/weatherApp.png';
import pokeApp from '../images/pokeApp.png'
import saynotofoodwaste from '../images/saynotofoodwaste.png';
import currencyConverter from '../images/currencyConverter.png';
import userGenerator from '../images/userGenerator.png';
import BmiCalc from '../images/BMICalc.png'
import mathCalc from '../images/mathCalc.png'
import leapYearChecker from '../images/leapYearChecker.png'
import loveCalc from '../images/loveCalc.png'
import loginForm from '../images/loginForm.png'
import textReverser from '../images/textReverser.png'
import clock from '../images/clock.png'

const Projects = () => {
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
    },
    {
        name: 'SayNoToFoodWaste',
        desc: '"SayNoToFoodWaste" is also a ReactJs based project made for the same online unpaid internship. It raises awareness about food waste and ways how to prevent it and to donate for the same cause.',
        image: saynotofoodwaste,
        netlify: 'https://saynotofoodwaste.netlify.app',
        github: 'https://github.com/taniaaa3/saynotofoodwaste',
        source: 'Github Repo',
    },
    {
        name: 'Currency Converter',
        desc: '"Currency Converter" is a web app for seamless currency conversion made with javascript, by which one can effortlessly calculate exchange rates between different currencies.',
        image: currencyConverter,
        netlify: 'https://codepen.io/taniyadarwani3/full/QWxRQez',
        github: 'https://codepen.io/taniyadarwani3/pen/QWxRQez',
        source: 'Codepen',
    },
    {
        name: 'Fake User Generator',
        desc: 'Simplify your testing and development process using this javascript-powered Fake User Generator. Perfect for design mock-ups and application testing, a time-saving solution for fellow developers.',
        image: userGenerator,
        netlify: 'https://codepen.io/taniyadarwani3/full/BaVgEMN',
        github: 'https://codepen.io/taniyadarwani3/pen/BaVgEMN',
        source: 'Codepen',
    },
    {
        name: 'BMI Calc',
        desc: "This is a javascript-based BMI calculator, where you've to input your weight and height and it'll instantly determine your Body Mass Index. Stay on track with your fitness by using this project.",
        image: BmiCalc,
        netlify: 'https://codepen.io/taniyadarwani3/full/YzLovEJ',
        github: 'https://codepen.io/taniyadarwani3/pen/YzLovEJ',
        source: 'Codepen',
    },
    {
        name: 'Simple Calc',
        desc: "Perform basic arithmetic effortlessly with this javascript-driven simple calculator, whether it's Addition, subtraction, multiplication, or division, our calculator has you covered.",
        image: mathCalc,
        netlify: 'https://codepen.io/taniyadarwani3/full/xxzJNRm',
        github: 'https://codepen.io/taniyadarwani3/pen/xxzJNRm',
        source: 'Codepen',
    },
    {
        name: 'Leap Year Checker',
        desc: '"Leap Year Checker" is a Vanilla Javascript Project, Which tells us about whether a certain year is a leap year or not. Simply input the year, hit the button, and get the answer instantly.',
        image: leapYearChecker,
        netlify: 'https://codepen.io/taniyadarwani3/full/ZEodoGP',
        github: 'https://codepen.io/taniyadarwani3/pen/ZEodoGP',
        source: 'Codepen',
    },
    {
        name: 'Love Calc',
        desc: 'With this Javascript project, you can explore the fun side of relationships, just input two names and discover the compatibility score between them. A entertaining way to share a laugh with friends.',
        image: loveCalc,
        netlify: 'https://codepen.io/taniyadarwani3/full/wvjmMGL',
        github: 'https://codepen.io/taniyadarwani3/pen/wvjmMGL',
        source: 'Codepen',
    },
    {
        name: 'Neobrutalism Login Form',
        desc: "This is a blend of modern  design and practical functionality, all created just using HTML and CSS. It's a perfect combination of aesthetics and user-friendliness. Embrace the simplicity of the form.",
        image: loginForm,
        netlify: 'https://codepen.io/taniyadarwani3/full/bGMvVXy',
        github: 'https://codepen.io/taniyadarwani3/pen/bGMvVXy',
        source: 'Codepen',
    },
    {
        name: 'Text Reverser',
        desc: "Uncover the playful side of language with our javascript-powered Text Reverser. Instantly reverse any text you input, creating fun and intriguing results. Explore &amp; give it a try.",
        image: textReverser,
        netlify: 'https://codepen.io/taniyadarwani3/full/vYjqjPd',
        github: 'https://codepen.io/taniyadarwani3/pen/vYjqjPd',
        source: 'Codepen',
    },
    {
        name: 'Simple Clock',
        desc: "This is a simple clock made with javascript, using a minimal design that tells you the current time accurately. Place it on your desktop or website to always keep track of time.",
        image: clock,
        netlify: 'https://codepen.io/taniyadarwani3/full/YzLovLd',
        github: 'https://codepen.io/taniyadarwani3/pen/YzLovLd',
        source: 'Codepen',
    }];
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col justify-center items-center aos-init aos-animate">
                <h1 className="text-3xl py-3 border-b-2  border-[white]  font-bold">MY PROJECTS</h1>
                <div className="sm:grid md:grid md:grid-cols-3 md:max-lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 block w-full gap-4 place-content-evenly drop-shadow-xl m-5 mb-10">
                    {data.map((val)=>{
                        return (

                    <div className="flex flex-col justify-evenly rounded-lg bg-[rgb(214,214,214)] shadow-black shadow-2xl transition duration-150 ease-in hover:-translate-y-6 text-black m-3">
                        <img src={val.image} alt="image" className="rounded-t-lg w-full h-full" />
                        <h3 className="font-bold m-3 text-3xl">{val.name}</h3>
                        <p className="mx-2">{val.desc}</p>
                        <br />
                        <div className="flex flex-row justify-between">
                            <a className="gradient rounded-full  p-3 m-3" href={val.netlify} target="_blank" rel="noreferrer">Deployed Site</a>
                            <a className="gradient rounded-full  p-3 m-3  " href={val.github} target="_blank" rel="noreferrer">{val.source}</a>
                        </div>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects