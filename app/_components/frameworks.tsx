"use client"
import React from "react"
import {motion} from "framer-motion";
export default function Skills(){
    const skills = React.useRef({
        frontEnd: ["HTML","CSS","SCSS","Javascript","Typescript","React","React native"],
        backEnd: ["Node","Bun","Express","Fastify","Elysia","MySQL","Postgres","MongoDB","PrismaORM","Redux","Redux Persist"],
        frameworks: ["NextJS","Expo","Framer motion","SwiperJS","ChartJS"],
        others: ["Photoshop","Figma","Github"]
    })
    const frontEle = "w-fit px-3 py-2 m-2 bg-blue-100 shadow shadow-md shadow-blue-300 hover:bg-blue-200 hover:rounded-md cursor-pointer duration-300";
    const backEle = "w-fit px-3 py-2 m-2 bg-cyan-100 shadow shadow-md shadow-cyan-300 hover:bg-cyan-200 hover:rounded-md cursor-pointer duration-300";
    const frameEle = "w-fit px-3 py-2 m-2 bg-emerald-100 shadow shadow-md shadow-emerald-300 hover:bg-emerald-200 hover:rounded-md cursor-pointer duration-300";
    const otherEle = "w-fit px-3 py-2 m-2 bg-purple-100 shadow shadow-md shadow-purple-300 hover:bg-purple-200 hover:rounded-md cursor-pointer duration-300";

    return(
        <motion.div id="skills" className="p-10">
            <motion.h1 
                className="lg:text-3xl text-2xl block text-center text-white p-3 my-5 rounded-md bg-gradient-to-br from-gray-800/80 to-gray-900/80 duration-300">
                    Skills (Draggable)
            </motion.h1>
            <h2 className="text-2xl text-underline text-blue-500">Front end</h2>
            <div className="flex flex-wrap gap-5">
                {skills.current.frontEnd.map((a)=>
                    <motion.div key={a}
                        drag
                        dragConstraints={{left:10,right:10,top:10,bottom:10}}
                        className={frontEle}>
                            {a}
                    </motion.div>
                )}
            </div>
            <h2 className="text-2xl text-underline text-cyan-500">Back end</h2>
            <div className="flex flex-wrap gap-5">
                {skills.current.backEnd.map((a)=>
                    <motion.div key={a}
                        drag
                        dragConstraints={{left:10,right:10,top:10,bottom:10}}
                        className={backEle}>
                            {a}
                    </motion.div>
                )}
            </div>
            <h2 className="text-2xl text-underline text-emerald-500">Frameworks</h2>
            <div className="flex flex-wrap gap-5">
                {skills.current.frameworks.map((a)=>
                    <motion.div key={a}
                        drag
                        dragConstraints={{left:10,right:10,top:10,bottom:10}}
                        className={frameEle}>
                            {a}
                    </motion.div>
                )}
            </div>
            <h2 className="text-2xl text-underline text-purple-500">Others</h2>
            <div className="flex flex-wrap gap-5">
                {skills.current.others.map((a)=>
                    <motion.div key={a}
                        drag
                        dragConstraints={{left:10,right:10,top:10,bottom:10}}
                        className={otherEle}>
                            {a}
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}