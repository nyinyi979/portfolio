"use client"
import {motion} from "framer-motion"
import Link from "next/link"
export default function Name(){
    return(
        <>
            <motion.div animate={{translateY:[-40,0],opacity:[0,1]}} className="sticky top-0 text-white shadow-sm shadow-gray-200 bg-black/30 px-4 py-5 z-[100]">
                <Link 
                  href={"/"}
                  className="p-2 lg:text-2xl text-xl border border-gray-400 w-fit hover:text-black hover:bg-white duration-300 cursor-pointer active:scale-95">
                    Portfolio
                </Link>
                <div className="float-right flex gap-4">
                    <Link 
                    href={"/#works"}
                    className="p-1 lg:text-xl text-lg border border-gray-400 w-fit hover:text-black hover:bg-white duration-300 cursor-pointer active:scale-95">
                        Works
                    </Link>
                    <Link 
                    href={"/#skills"}
                    className="p-1 lg:text-xl text-lg border border-gray-400 w-fit hover:text-black hover:bg-white duration-300 cursor-pointer active:scale-95">
                        Skills
                    </Link>
                </div>
            </motion.div>
            <motion.div>
                <h1 className="text-4xl text-center text-white py-32 my-20">
                    I am <span className="underline text-cyan-500 underline-offset-8 hover:underline-offset-[20px] duration-300 cursor-pointer">a web/app developer.</span>         
                </h1>
            </motion.div>
        </>
    )
}