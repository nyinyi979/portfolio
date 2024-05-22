"use client"
import React from "react"
import {motion} from "framer-motion";
export default function UI(){
    return(
        <>
            <motion.div 
              whileInView={{translateY:[40,0],scale:[.8,1]}}
              id="ui" className="p-5"
            >
                <motion.h1 
                    className="lg:text-3xl text-2xl cursor-pointer block text-center text-white p-3 my-5 rounded-md deep backdrop-blur-sm duration-300"
                >
                    UI works
                </motion.h1>
                
            </motion.div>
        </>
    )
}