"use client"

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function HomePhoto() {
  return <>
  <div className='w-full h-full relative'>
    {/* Photo */}
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay:2.2, ease:"easeInOut"}}>
        <div className=' lg:w-[480px] lg:h-[480px]  w-[298px] h-[298px] absolute m-auto top-0 bottom-0 left-0 right-0'>
        <Image src="/assests/images/Mina Pic2.png" alt="home photo"
         className=' object-contain rounded-full'
         priority
         fill
         quality={100} />
        </div>
    </motion.div>
    {/* Circle */}
    <motion.svg className=" lg:w-[490px] lg:h-[490px]  w-[305px] h-[305px]"
    fill={"transparent"}
    viewBox={"0 0 506 506"}
    xmlns={"http://www.w3.org/2000/svg"}
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4, delay:2, ease:"easeInOut"}}
    >
    <motion.circle cx={"253"} cy={"253"} r={"250"} stroke={"#00ff99"} strokeWidth={"4"}
    strokeLinejoin={"round"} strokeLinecap={"round"} 
    initial={{strokeDasharray: "24 10 00"}}
    animate={{
        strokeDasharray:["15 120 25 25" , "16 25 92 72" , "4 250 22 22"],
        rotate:[120 ,360]
    }}
    transition={{
        duration :20,
        repeat : Infinity,
        repeatType : "reverse",
    }}
    ></motion.circle>
    </motion.svg>
  </div>
  </>
}
