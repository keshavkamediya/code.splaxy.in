import Image from "next/image";
import React from "react";

import { Fira_Code } from "next/font/google";
const firacode = Fira_Code({ subsets: ["latin"] });
const Skills = () => {
  return (
    <div
      className="container mx-auto max-w-screen-lg my-16 relative scroll-mt-40"
      id="skills"
    >
      <div className={`${firacode.className} m-5`}>
        <div className="flex items-center justify-start">
          <p className="text-lg">&lt;/Skills&gt;</p>
          <p className="w-1/2 border-t border-slate-300 mx-3"></p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-4 justify-items-center">
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/ailogo.png"}
              height={200}
              width={200}
              alt="Adobe Illustrator"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/pslogo.png"}
              height={200}
              width={200}
              alt="Photoshop"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/xdlogo.png"}
              height={200}
              width={200}
              alt="Adobe XD"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/bootstraplogo.png"}
              height={200}
              width={200}
              alt="Bootstrap"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/canvalogo.png"}
              height={200}
              width={200}
              alt="Canva"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image src={"/clogo.png"} height={200} width={200} alt="C" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image src={"/cpplogo.png"} height={200} width={200} alt="C++" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image src={"/csslogo.png"} height={200} width={200} alt="CSS" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/figmalogo.png"}
              height={200}
              width={200}
              alt="Figma"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/githublogo.png"}
              height={200}
              width={200}
              alt="Github"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image src={"/gitlogo.png"} height={200} width={200} alt="git" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image src={"/htmllogo.png"} height={200} width={200} alt="HTML" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/jslogo.png"}
              height={200}
              width={200}
              alt="Javascript"
            />
          </div>
          <div className="p-5 relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square">
            <Image
              src={"/nextjslogo.png"}
              height={200}
              width={200}
              alt="Next JS"
            />
          </div>

          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-2">
            <Image
              src={"/reactlogo.png"}
              height={200}
              width={200}
              alt="React"
            />
          </div>

          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-3">
            <div className="bg-slate-200 rounded-2xl p-2">
              <Image
                src={"/unitylogo.png"}
                height={200}
                width={200}
                alt="Unity"
              />
            </div>
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-5">
            <Image src={"/awslogo.png"} height={200} width={200} alt="AWS" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-5">
            <Image
              src={"/mongologo.png"}
              height={200}
              width={200}
              alt="Mongo DB"
            />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-3">
            <div className="bg-slate-200 rounded-2xl p-2">
              <Image
                src={"/nodelogo.png"}
                height={200}
                width={200}
                alt="Node JS"
              />
            </div>
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-3">
            <Image src={"/csharplogo.png"} height={200} width={200} alt="C#" />
          </div>
          <div className="relative bg-zinc-800/20 backdrop-blur-sm rounded-3xl flex flex-col sm:flex-row justify-center items-center border-slate-200/20 border aspect-square p-5">
            <Image
              src={"/tailwindlogo.svg"}
              height={200}
              width={200}
              alt="Tailwind CSS"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-hidden absolute bg-[#cf59e6] blur-[400px] rounded-[50%] animate-pulse duration-1000 w-[200px] sm:w-[600px] opacity-20 h-screen top-0 -z-50 right-0"></div>
    </div>
  );
};

export default Skills;
