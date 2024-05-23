"use client"
import {motion, useScroll} from "framer-motion"
import Link from "next/link";
export default function Footer(){
  const { scrollYProgress } = useScroll();
    return(
        <motion.div 
          whileInView={{translateY:[40,0],scale:[.8,1]}}
          id="skills" className="p-5 text-center" style={{ scaleX: scrollYProgress }}>
            <motion.h1 
              onClick={()=>alert("Contact no - +959971110798")}
              className="lg:text-3xl text-2xl cursor-pointer block text-center text-white p-3 my-5 rounded-md deep backdrop-blur-sm duration-300"
            >
              Contacts
            </motion.h1>
            <div className=" grid grid-cols-2 gap-3">
                <Link 
                  className="w-full p-4 bg-black/30 hover:bg-black/40 font-bold text-white hover:shadow-lg shadow-black/80 duration-300"
                  href={"https://github.com/nyinyi979"}
                >Github</Link>
                <Link 
                  className="w-full p-4 bg-black/30 hover:bg-black/40 font-bold text-white hover:shadow-lg shadow-black/80 duration-300"
                  href={"https://twitter.com/TheZett04"}
                >Twitter</Link>
            </div>
        </motion.div>
    )
}