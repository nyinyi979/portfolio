"use client"
import Image, { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction } from "react"
import { motion } from "framer-motion";
import Link from "next/link";
import TCDL from "./image/tcdl.png"
import UNI_UI from "./image/uni_ui.png"
import UNI_UI_CLI from "./image/uni_ui_cli.png"
import ANIMATED_SVG from "./image/animated_svg.png"
import MUSIC_APP from "./image/music_app.png"
import BLOG_APP from "./image/blog_app.png"
import BLOG_APP_SERVER from "./image/blog_app_server.png"
import UI_MOCKUP from "./image/ui_mockup.png"
import CHARTS from "./image/charts.png"
import WEATHER_APP from "./image/weather_app.png"

export default function Works(){
    const [open, setOpen] = React.useState(false);
    const works = React.useRef([
        {name: "TCDL",
        date: "December 2023",
        img_url: TCDL,
        githubLink: "https://github.com/nyinyi979/tcdl",
        liveLink: "https://tcdl.vercel.app/",
        usedLanguages: ["React", "Tailwind", "Vercel", "DaisyUI"],
        description: "A contract project about tarot's and the creator of the page with various type of subscriptions!"},

        {name: "Unistyle UI CLI",
        date: "December 2023",
        img_url: UNI_UI_CLI,
        githubLink: "https://github.com/nyinyi979/unistyles_components",
        liveLink: "https://unistyle-ui-kit.vercel.app/",
        usedLanguages: ["React native", "Unistyles", "Expo", "CLI",],
        description: "Open source project alternative to shadcn/ui for react native!"},

        {name: "Weather App",
        date: "July 2023",
        img_url: WEATHER_APP,
        githubLink: "https://github.com/nyinyi979/weather-app",
        liveLink: "https://weather-app-six-omega-77.vercel.app/",
        usedLanguages: ["React","Tailwind","DaisyUI","GeoWeatherAPI"],
        description: "Weather app to get the current weather for the location"},

        {name: "Unistyle UI Kit",
        date: "December 2023",
        img_url: UNI_UI,
        githubLink: "https://github.com/nyinyi979/unistyle-ui",
        liveLink: "https://www.npmjs.com/package/uni-ui-kit",
        usedLanguages: ["Javascript","Typescript","CLI-Color","Simple GIT","Yargs"],
        description: "Open source project alternative to shadcn/ui for react native!"},

        {name: "Animated SVGs",
        date: "Currently ongoing",
        img_url: ANIMATED_SVG,
        githubLink: "https://github.com/nyinyi979/animated-svgs",
        liveLink: "https://animated-svgs-rose.vercel.app/",
        usedLanguages: ["React","React native", "SVG(XML)", "Reanimated", "Framer motion",],
        description: "Open source project alternative to shadcn/ui for react native!"},

        {name: "Music app",
        date: "March 2024",
        img_url: MUSIC_APP,
        githubLink: "https://github.com/nyinyi979/music_app",
        liveLink: "-",
        usedLanguages: ["React","React native","Typescript","Unistyle", "Unistyle UI", "Reanimated"],
        description: "Music app prototype developed for cross platform(The project was cancelled after the prototype)"},

        {name: "Blog app",
        date: "August 2023",
        img_url: BLOG_APP,
        githubLink: "https://github.com/nyinyi979/blogs_app",
        liveLink: "https://blogs-app-one.vercel.app/",
        usedLanguages: ["React","NextJS","Typescript","Dropbox API", "TailwindCSS", "Reanimated","React Query","TinyMCE"],
        description: "Blog app where you can post, edit, delete, like, comment and share the posts."},

        {name: "Chart Generator",
        date: "July 2023",
        img_url: CHARTS,
        githubLink: "https://github.com/nyinyi979/chart_generator",
        liveLink: "https://chart-generator-opal.vercel.app/",
        usedLanguages: ["React","NextJS","ChartJS","Framer motion","SwiperJS"],
        description: "Project to generate charts. Wrapper for chartJS"},

        {name: "Blog app server",
        date: "August 2023",
        img_url: BLOG_APP_SERVER,
        githubLink: "https://github.com/nyinyi979/blogs_app_server",
        liveLink: "https://blogs-app-server-sable.vercel.app/",
        usedLanguages: ["Express","Typescript","Postgres","JSONWebToken","Nodemailer","PassportJS","Auth","Multer"],
        description: "Blog app where you can post, edit, delete, like, comment and share the posts."},

        {name: "UI Mockup",
        date: "July 2023",
        img_url: UI_MOCKUP,
        githubLink: "https://github.com/nyinyi979/UI-Mockup",
        liveLink: "https://ui-mockup-seven.vercel.app/",
        usedLanguages: ["React","NextJS","Image optimisation","Tailwind","DaisyUI","AnimeJS"],
        description: "UI Mockup app with a lot of pictures. Focused on animation"},
    ])
    return(
        <div id="works" className="p-10">
            <motion.h1 
                className="lg:text-3xl text-2xl block text-center text-white p-3 my-5 rounded-md bg-gradient-to-br from-gray-800/80 to-gray-900/80 duration-300">
                    My Works (Draggable)
            </motion.h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {works.current.map((work)=>
                    <EachWork open={open} setOpen={setOpen} key={work.name} {...work}/>
                )}
            </div>
        </div>
    )
}

function EachWork({description,githubLink,img_url,usedLanguages,liveLink,name,open,setOpen}:{name: string;
    date: string;
    img_url: StaticImageData;
    githubLink: string;
    liveLink: string;
    usedLanguages: string[];
    description: string;
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}){
    return(
        <motion.div 
          onClick={()=>setOpen(!open)}
          animate={{opacity:[0,1]}}
          drag={true}
          dragConstraints={{left:20,right:20,top:20,bottom:20}}
          className="w-full py-5 px-2 rounded-md bg-gradient-to-br from-gray-700/50 to-gray-800/50 shadow-md shadow-gray-600 hover:shadow-xl duration-300"
        >
            <h1 className="text-xl text-center text-white">{name}</h1>
            <div className="w-[80%] h-fit rounded-md shadow-sm shadow-gray-200 mx-auto my-3">
                <Image alt={img_url.src} src={img_url} className="bg-cover hover:scale-105 duration-300 rounded-md border border-gray-700 shadow-md"/>
            </div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:open? 1 : 0}}
                style={{display:open? "block":"none"}}
                className="text-center text-white"
            >
                {description}
            </motion.div>
            <motion.div
                initial={{scaleY:0}}
                animate={{scaleY:open? 1 : 0}}
                style={{display:open? "flex":"none"}}
                className="flex flex-wrap md:justify-normal justify-center gap-3 my-2"
            >
                {usedLanguages.map((lang)=>
                    <div key={lang} className="border text-white border-cyan-300 hover:bg-cyan-300 duration-300 md:px-2 p-1 w-fit cursor-pointer">
                        {lang}
                    </div>
                )}
            </motion.div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mb-2 mt-5 lg:pl-10">
                <Link target="_blank" className="md:w-full w-[75%] mx-auto md:text-[18px] text-xs inline-block lg:py-2 p-1 py-[5px] text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-red-500 to-red-600 rounded-md hover:shadow-md hover:shadow-red-600 duration-300" href={githubLink} >Github</Link>
                <Link target="_blank" className="md:w-full w-[75%] mx-auto md:text-[18px] text-xs inline-block lg:py-2 p-1 py-[5px] text-center text-black bg-gradient-to-r hover:bg-gradient-to-l from-cyan-400 to-cyan-500 rounded-md hover:shadow-md hover:shadow-cyan-600 duration-300" href={liveLink} >Live</Link>
            </div>
        </motion.div>
    )
}