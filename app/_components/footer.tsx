"use client"
import {motion, useScroll} from "framer-motion"
import Link from "next/link";
export default function Footer(){
  const { scrollYProgress } = useScroll();
    return(
        <motion.div id="skills" className="p-10 text-center" style={{ scaleX: scrollYProgress }}>
            <motion.h1 
                className="lg:text-3xl text-2xl block text-center text-white p-3 my-5 rounded-md bg-gradient-to-br from-gray-800/80 to-gray-900/80 duration-300">
                    Contacts
            </motion.h1>
            <div className=" grid grid-cols-2 gap-3">
                <Link 
                  className="w-full p-4 bg-gray-300 hover:bg-gray-400 font-bold text-black"
                  href={"https://github.com/nyinyi979"}
                >Github</Link>
                <Link 
                  className="w-full p-4 bg-gray-300 hover:bg-gray-400 font-bold text-black"
                  href={"https://twitter.com/TheZett04"}
                >Twitter</Link>
            </div>
        </motion.div>
    )
}