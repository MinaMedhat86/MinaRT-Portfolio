"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import { motion } from 'framer-motion'

export default function StairTransition() {
    const pathname = usePathname()
    const stairAnimation = {
        initial : {top : "0%"},
        animate : {top : "100%"},
        exit : { top : ["100%" , "0%"]}
    }
    const reverseIndex = (index:number)=>{
        const total = 6; // total number of divs
        return total - index - 1;
      }
  return <>
  <AnimatePresence mode='wait'>
  <div key={pathname}>
    <div className='h-screen w-screen fixed  top-0 
    left-0
    right-0
    z-40
    flex
    pointer-events-none' >
        {
            [...Array(6)].map((_,i)=>{
                return         <motion.div
                key={i}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut', delay : reverseIndex(i) * 0.1 }}
                className='w-full h-full bg-white relative'
                />

            })
        }
        
 
    </div>

    <motion.div
    initial={{opacity : 1}}
    animate={{opacity : 0 , transition : {duration : 0.4 , delay : 1 , ease : "easeInOut"}}}
    className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
    />
  </div>

  </AnimatePresence>
  </>
}
