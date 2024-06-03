"use client"
import Image, { StaticImageData } from "next/image";
import React from "react"
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
import ImageViewer from "./img_viewer";

export default function Works(){
    const [imageOpen, setImageOpen] = React.useState<StaticImageData|"">("");

    const openImage = (img: StaticImageData) =>{
        document.body.style.overflow = "hidden";
        setImageOpen(img);
    }
    const closeImage = () => {
        document.body.style.overflow = "auto";
        setImageOpen("");
    }

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
        description: "Open source project alternative to shadcn/ui for react native! CLI"},

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
        liveLink: "https://unistyle-ui-kit.vercel.app/",
        usedLanguages: ["Javascript","Typescript","CLI-Color","Simple GIT","Yargs"],
        description: "Open source project alternative to shadcn/ui for react native!"},

        {name: "Animated SVGs",
        date: "Currently ongoing",
        img_url: ANIMATED_SVG,
        githubLink: "https://github.com/nyinyi979/animated-svgs",
        liveLink: "https://animated-svgs-rose.vercel.app/",
        usedLanguages: ["React","React native", "SVG(XML)", "Reanimated", "Framer motion",],
        description: "Animated SVGs available in react, react native and svg."},

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
        <>
            <ImageViewer closeImage={closeImage} imageData={imageOpen}/>
            <motion.div 
              id="works" className="p-5">
                <motion.button 
                    onClick={()=>alert("Click the box of each project:)")}
                    className="lg:text-3xl text-2xl block w-full text-center text-white p-3 my-5 rounded-md deep backdrop-blur-sm duration-300"
                >
                    My Works 
                </motion.button>
                <div className="flex flex-col gap-5">
                    {works.current.map((work)=>
                        <EachWork key={work.name} openImage={openImage} {...work}/>
                    )}
                </div>
            </motion.div>
        </>
    )
}

function EachWork({description,date,githubLink,img_url,usedLanguages,liveLink,name,openImage}:{name: string;
    date: string;
    img_url: StaticImageData;
    githubLink: string;
    liveLink: string;
    usedLanguages: string[];
    description: string;
    openImage: (img: StaticImageData)=>void
}){
    const [open, setOpen] = React.useState(true);
    const [display, setDisplay] = React.useState(true);
    const animate = () =>{
        if(open){
            setOpen(false);
            setTimeout(()=>setDisplay(false),300)
        } else {
            setDisplay(true);
            setOpen(true)
        }
    }
    return(
        <motion.div 
          onClick={()=>animate()}
          whileInView={{scale:[1.3,1]}}
          animate={{opacity:[0,1]}}
          viewport={{once:true}}
          className="w-full py-2 px-5 rounded-md backdrop-blur-md duration-300 relative p-2 z-20 work h-full top-0 left-0 my-2"
        >
            <h1 className="text-2xl text-white px-3 my-3 underline underline-offset-4">{name}</h1>
            <motion.div 
                animate={{gridTemplateColumns: display? '1.3fr 2fr' : '2.5fr 1fr'}}
                layout="size"
                className={`grid gap-4 w-full my-3`}
            >
                <div className="w-full h-fit rounded-md mx-auto">
                    <Image onClick={(e)=>{e.stopPropagation();openImage(img_url)}} alt={img_url.src} src={img_url} className="bg-cover duration-300 rounded-md scale-95 hover:scale-[.96]"/>
                </div>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:open? 1 : 0}}
                    style={{display: display? "block" : "none"}}
                    className="text-white my-3 lg:text-lg"
                >
                    {description}
                    <p className="lg:block hidden py-2">
                        Finshed date - {date}
                    </p>
                </motion.div>
            </motion.div>
            <p className="text-gray-50">Used technology</p>
            <motion.div
                initial={{scaleY:0}}
                animate={{scaleY:open? 1 : 0}}
                style={{display: display? "flex" : "none"}}
                className="flex flex-wrap justify-normal gap-3 my-2"
            >
                {usedLanguages.map((lang)=>
                    <div key={lang} className="border text-white hover:text-black border-cyan-300 hover:bg-cyan-300 duration-300 md:px-2 p-1 w-fit  ">
                        {lang}
                    </div>
                )}
            </motion.div>
            <div className="flex flex-row gap-2 mb-2 mt-5 w-fit">
                <Link target="_blank" className="w-40 h-fit mx-auto inline-block p-1 py-1 text-center text-white bg-gradient-to-r from-red-500 to-red-600 hover:shadow-md hover:shadow-red-600 duration-300" href={githubLink} >See it on Github!</Link>
                <Link target="_blank" className="w-40 h-fit mx-auto inline-block p-1 py-1 text-center text-white bg-gradient-to-r from-cyan-400 to-cyan-500 hover:shadow-md hover:shadow-cyan-600 duration-300" href={liveLink} >See it Live!</Link>
            </div>
        </motion.div>
    )
}