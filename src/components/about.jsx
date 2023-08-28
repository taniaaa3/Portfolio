import React from 'react'
import img from '../images/1693044861785.jpg';
import img2 from '../images/1693044171358.jpg';
import img3 from '../images/7bb0d27e44d8c2eff47276ae86bfd6a3-removebg-preview.png';
import img4 from '../images/77618316-programming-line-icon-circle-design-vector-illustration-of-coding-resources-objects-removebg-preview.png';
import img5 from '../images/colorful-illustration-female-programmer-working_23-2148277397-removebg-preview.png';
import img6 from '../images/img6.jpg'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    const styleP = 'my-3 w-full sm:m-2 text-xl sm:text-2xl md:w-1/2';
    const styleDiv = 'flex flex-col sm:flex-row my-10 justify-evenly items-center aos-animate';
    const styleImg = 'border-2 sm:order-none order-first sm:w-2/6 border-black rounded-full  md:w-2/6 w-2/3';
    return (
        <div className="flex flex-col m-3 justify-between items-center">
            <h1 className="font-bold text-5xl text-gradient mt-3 mb-2">WHO AM I?</h1>
            <div data-aos="fade-up" data-aos-duration="2000" className={styleDiv}>
                <img className={styleImg} src={img2} alt="img" />
                <p className={styleP}> Hey there, I'm <span className=" text-3xl head font-bold"> Taniya Darwani </span>, an 18-year-old aspiring Web3 Frontend Developer on an exciting journey of self-discovery and innovation. Currently pursuing my undergraduate degree in Bcom Hons., I've embarked on an incredible adventure into the world of web development and decentralized technologies.
                    <br />
                    <a href="https://drive.google.com/file/d/1VxVBynG-EaHQgb5TZf2nx_Ys4coev62a/view?usp=drivesdk" className='self-center bg-black' target="_blank" rel="noreferrer">
                        <button className="mt-10 pink-gradient rounded-xl text-xl p-3">Download Resume</button>
                    </a>
                </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={styleDiv}>
                <p className={styleP}> My passion lies in a crafting captivating digital experiences that seamlessly blend form and function. As a self-taught Web3 Frontend Developer, I've honed my skills in a variety of cutting-edge technologies. With a solid gasp of ReactJs, I love building dynamic and responsive user interfaces that bring ideas to life.</p>
                <img className={styleImg} src={img5} alt="img" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={styleDiv}>
                <img className={styleImg} src={img6} alt="img" />
                <p className={styleP}> It doesn't stop there. I've delved into the world of decentralized applications, exploring the realms of Ethereum and Solidity. Crafting solutions that harness the power of blockchain technology, I've been amazed by the potential of decentralized applications to reshape industries and empower users.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={styleDiv}>
                <p className={styleP}> What's unique about my journey is that I've ventured into these realms on my own, driven by an insatiable curiosity and determination. Along the way, I've embarked on numerous projects that showcase my skills and creativity. From building interactive React applications to coding smart contracts, I've brought my visions to life, one project at a time.</p>
                <img className={styleImg} src={img3} alt="img" />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={styleDiv}>
                <img className={styleImg} src={img4} alt="img" />
                <p className={styleP}> As I balance my academic pursuits with my tech-driven passions, I'm excited about the possibilities that lie ahead. My goal is to continue expanding my knowledge, collaborating with fellow enthusiasts, and contributing to the ever-evolving landscape of technology.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className={styleDiv}>
                <p className={styleP}> Feel free to connect to me, whether it's for collaboration, a chat about the latest tech trends, or just to share our mutual love for innovation. Let's shape the future, one code snippet at a time.</p>
                <img className={styleImg} src={img} alt="img" />
            </div>
            <Link to='/contact'>
                <button className="mt-10 pink-gradient rounded-xl text-xl p-3">Connect with me</button>
            </Link>
        </div>
    )
}

export default AboutMe