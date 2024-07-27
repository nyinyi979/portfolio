"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Github from "./image/github.svg";
import Mail from "./image/mail.svg";
import Facebook from "./image/facebook.svg";
export default function Footer() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      whileInView={{ translateY: [40, 0], scale: [0.8, 1] }}
      id="skills"
      className="p-5 text-center"
      style={{ scaleX: scrollYProgress }}
    >
      <motion.button
        onClick={() => alert("Contact no - +959971110798")}
        className="lg:text-3xl text-2xl block w-full text-center text-white p-3 my-5 rounded-md deep backdrop-blur-sm duration-300"
      >
        Contacts
      </motion.button>
      <div className="grid grid-cols-3 gap-3">
        <Link
          className="w-full flex justify-center gap-5 p-4 bg-black/30 hover:bg-black/40 font-bold text-white hover:shadow-lg shadow-black/80 duration-300"
          href={"https://github.com/nyinyi979"}
        >
        <Image 
          src={Github}
          alt="facebook"
          width={25}
          height={25}
        />
          <p>Github</p>
        </Link>
        <Link
          className="w-full flex justify-center gap-5 p-4 bg-black/30 hover:bg-black/40 font-bold text-white hover:shadow-lg shadow-black/80 duration-300"
          href={"mailto:nyinyi095062687@gmail.com"}
        >
        <Image 
          src={Mail}
          alt="mail"
          width={25}
          height={25}
        />
          <p>Mail</p>
        </Link>
        <Link
          className="w-full flex justify-center gap-5 p-4 bg-black/30 hover:bg-black/40 font-bold text-white hover:shadow-lg shadow-black/80 duration-300"
          href={"https://www.facebook.com/nyinyiaung04"}
        >
          <Image 
            src={Facebook}
            alt="facebook"
          width={25}
          height={25}
          />
          <p>Facebook</p>
        </Link>
      </div>
    </motion.div>
  );
}
