import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
const Skills = () => {
    const data = [{
        name: 'Html',
        percent: '50'
    },
    {
        name: 'CSS',
        percent: '50'
    },
    {
        name: 'Javascript',
        percent: '75'
    },
    {
        name: 'ReactJs',
        percent: '60'
    },
    {
        name: 'Tailwind CSS',
        percent: '40'
    },
    {
        name: 'Solidity',
        percent: '70'
    },
    {
        name: 'Ethers.JS',
        percent: '65'
    },
    {
        name: 'Blockchain',
        percent: '45'
    }]
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col py-5 justify-evenly items-center">
            <h1 className="text-3xl py-3 font-bold">MY SKILLS</h1>
            <div className="py-5 grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4">
                {data.map((val)=>{
                    return(
                <div className="flex mx-5 my-2 flex-col md:w-32 p-2 sm:w-40 justify-evenly items-center ">
                    <CircularProgressbar strokeWidth={10} value={val.percent} text={`${val.percent}%`} styles={{
                        path:{
                            stroke: 'rgb(43, 18, 76)'
                        },
                        text:{
                            fill:'white',
                            fontSize: '18px'
                        }
                    }}/>
                    <br />
                    <p className="text-xl" style={{width: 'max-content'}}>{val.name}</p>
                </div>
                    )
})}
{/* <CircularProgressbar value={55} text='55%'/> */}
            </div>
        </div>
  )
}

export default Skills