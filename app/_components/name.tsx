"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
export default function Name() {
  let box =
    "p-1 lg:text-xl text-lg border border-gray-400 lg:w-32 w-20 text-center hover:text-black hover:bg-white duration-300   active:scale-95";
  let [pos, setPos] = React.useState({ x: 200, y: 400 });
  React.useEffect(() => {
    document.getElementById("name_box")!.addEventListener("mousemove", (ev) => {
      setPos({ x: ev.screenX - 250, y: ev.screenY - 200 });
    });
  });
  return (
    <>
      <motion.div
        animate={{ translateY: [-40, 0], opacity: [0, 1] }}
        className="sticky top-0 font-bold text-white header px-4 py-5 z-[100] backdrop-blur-sm"
      >
        <Link
          href={"/"}
          className="p-2 lg:text-2xl text-xl border border-gray-400 w-fit hover:text-black hover:bg-white duration-300 active:scale-95"
        >
          PORTFOLIO
        </Link>
        <div className="float-right flex gap-4">
          <Link href={"/#works"} className={box}>
            Works
          </Link>
          {/* <Link 
                    href={"/#ui"}
                    className={box}>
                        UI
                    </Link> */}
          <Link href={"/#skills"} className={box}>
            Skills
          </Link>
        </div>
      </motion.div>
      <div className="relative overflow-hidden" id="name_box">
        <motion.div
          style={{ left: pos.x, top: pos.y }}
          className="w-[500px] h-[500px] absolute circle bg-gradient-to-tr from-[#5f5f5fbd] to-[#6a6a6a9e] -z-10 duration-150 blur-[200px] opacity-70 rounded-full"
        />

        <motion.div
          whileInView={{
            translateY: [40, 0],
            translateX: [-20, 0, 20, 0],
            scale: [0.8, 1],
          }}
        >
          <Link
            href={"/#works"}
            id="name"
            className="block font-semibold text-4xl text-center text-white py-40 my-32"
          >
            I am{" "}
            <span
              onClick={() => alert("Click on each heading for guides!")}
              className="underline text-cyan-500 underline-offset-8 hover:underline-offset-[20px] duration-300  "
            >
              a web/app developer.
            </span>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
