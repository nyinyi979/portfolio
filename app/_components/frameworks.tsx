"use client"
import React from "react"
import {motion} from "framer-motion";
export default function Skills(){
    const skills = React.useRef({
        frontEnd: ["HTML","CSS","SCSS","Javascript","Typescript","React","React native"],
        backEnd: ["Node","Bun","Express","Fastify","Elysia"],
        data: ["MySQL","Postgres","MongoDB","PrismaORM","Redux","Redux Persist","Tanstack Query","RN Async Storage","Local Storage"],
        frameworks: ["NextJS","Expo","Framer motion","SwiperJS","ChartJS"],
        others: ["Photoshop","Figma","Github"]
    })
    const frontEle = "w-fit px-3 py-2 m-2 bg-blue-100 shadow shadow-md shadow-blue-300 hover:bg-blue-200 hover:rounded-md cursor-pointer duration-300";
    const backEle = "w-fit px-3 py-2 m-2 bg-cyan-100 shadow shadow-md shadow-cyan-300 hover:bg-cyan-200 hover:rounded-md cursor-pointer duration-300";
    const dataEle = "w-fit px-3 py-2 m-2 bg-amber-100 shadow shadow-md shadow-amber-300 hover:bg-amber-200 hover:rounded-md cursor-pointer duration-300";
    const frameEle = "w-fit px-3 py-2 m-2 bg-emerald-100 shadow shadow-md shadow-emerald-300 hover:bg-emerald-200 hover:rounded-md cursor-pointer duration-300";
    const otherEle = "w-fit px-3 py-2 m-2 bg-purple-100 shadow shadow-md shadow-purple-300 hover:bg-purple-200 hover:rounded-md cursor-pointer duration-300";

    return(
        <>
            <motion.div 
              whileInView={{translateY:[40,0],scale:[.8,1]}}
              id="skills" className="p-10"
            >
                <motion.h1 
                    className="lg:text-3xl text-2xl cursor-pointer block text-center text-white p-3 my-5 rounded-md bg-gradient-to-br from-black/80 to-gray-900/80 hover:to-black/90 backdrop-blur-sm duration-300"
                >
                    Skills (Have fun dragging)
                </motion.h1>
                <h2 className="my-2 text-2xl text-underline text-blue-500 hover:text-blue-600 duration-300">Front end</h2>
                <div className="flex flex-wrap gap-5">
                    {skills.current.frontEnd.map((a)=>
                        <motion.div 
                            key={a}
                            drag
                            dragSnapToOrigin
                            whileDrag={{scale:1.2,borderRadius:6,backgroundColor:"rgb(147 197 253)"}}
                            className={frontEle}
                        >
                                {a}
                        </motion.div>
                    )}
                </div>
                <h2 className="my-2 text-2xl text-underline text-cyan-500 hover:text-cyan-600 duration-300">Back end</h2>
                <div className="flex flex-wrap gap-5">
                    {skills.current.backEnd.map((a)=>
                        <motion.div 
                            key={a}
                            drag
                            dragSnapToOrigin
                            whileDrag={{scale:1.2,borderRadius:6,backgroundColor:"rgb(103 232 249)"}}
                            className={backEle}>
                                {a}
                        </motion.div>
                    )}
                </div>
                <h2 className="my-2 text-2xl text-underline text-amber-500 hover:text-amber-600 duration-300">Datastore</h2>
                <div className="flex flex-wrap gap-5">
                    {skills.current.data.map((a)=>
                        <motion.div 
                            key={a}
                            drag
                            dragSnapToOrigin
                            whileDrag={{scale:1.2,borderRadius:6,backgroundColor:"rgb(252 211 77)"}}
                            className={dataEle}>
                                {a}
                        </motion.div>
                    )}
                </div>
                <h2 className="my-2 text-2xl text-underline text-emerald-500 hover:text-emerald-600 duration-300">Frameworks</h2>
                <div className="flex flex-wrap gap-5">
                    {skills.current.frameworks.map((a)=>
                        <motion.div
                            key={a}
                            drag
                            dragSnapToOrigin
                            whileDrag={{scale:1.2,borderRadius:6,backgroundColor:"rgb(110 231 183)"}}
                            className={frameEle}>
                                {a}
                        </motion.div>
                    )}
                </div>
                <h2 className="my-2 text-2xl text-underline text-purple-500 hover:text-purple-600 duration-300">Others</h2>
                <div className="flex flex-wrap gap-5">
                    {skills.current.others.map((a)=>
                        <motion.div 
                            key={a}
                            drag
                            dragSnapToOrigin
                            whileDrag={{scale:1.2,borderRadius:6,backgroundColor:"rgb(216 180 254)"}}
                            className={otherEle}>
                                {a}
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </>
    )
}