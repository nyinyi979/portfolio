import {motion} from "framer-motion"
import Image, { StaticImageData } from "next/image"
export default function ImageViewer({closeImage,imageData}:{
    imageData: StaticImageData|"",
    closeImage: ()=>void
}){
    return(
        <motion.div
            initial={{scale:0,opacity:0}}
            animate={{scale:imageData===""? 0 : 1,opacity: imageData===""? 0 : 1}}
            transition={{duration:.3}}
            className="fixed bg-gray-300/50 top-0 left-0 z-[200] w-full h-[100vh] flex items-center"
            onClick={closeImage}
        >
            <Image onClick={(e)=>e.stopPropagation()} src={imageData} alt={imageData.toString()} className="w-[90%] h-fit mx-auto justify-center items-center"/>
        </motion.div>
    )
}