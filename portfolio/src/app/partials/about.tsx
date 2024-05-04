import Image from "next/image";
import React from "react";

import { Fira_Code } from "next/font/google";
const firacode = Fira_Code({ subsets: ["latin"] });

const About = () => {
  return (
    <div
      className="container mx-auto max-w-screen-lg my-16 relative scroll-mt-40"
      id="about"
    >
      <div className={`${firacode.className} m-5`}>
        <div className="flex items-center justify-start">
          <p className="text-lg">&lt;/About&nbsp;Me&gt;</p>
          <p className="w-1/2 border-t border-slate-300 mx-3"></p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
          <div className="p-2 sm:max-w-[70%]">
            <p className="my-2 text-sm md:text-base">
              Hi! My name is Keshav. I'm a web developer and digital visual
              artist. I love creating things that exist on the internet. My
              interest in web development started in 2019 when I decided to
              upload my digital concept arts online.
            </p>
            <p className="my-2 text-sm md:text-base">
              Instead of creating an online Concepts Art website, i started
              enjoying web development. Creating custom things for web taught me
              a lot about design & development!
            </p>
            <p className="my-2 text-sm md:text-base">
              My main focus these days is building interesting &amp; creative
              web designs, I like to code things from scratch, and enjoy
              bringing ideas to life in the browser.
            </p>
          </div>
          <div className="m-4 sm:m-0 w-60">
            <Image
              src={"/face.png"}
              height={300}
              width={300}
              alt="Keshav Kamediya"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
