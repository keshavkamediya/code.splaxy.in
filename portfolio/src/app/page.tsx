import About from "./partials/about";

import { Fira_Code } from "next/font/google";
import Skills from "./partials/skills";
import Link from "next/link";
const firacode = Fira_Code({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div
        id="homepage"
        className="overflow-x-hidden absolute bg-[#cf59e6] blur-[200px] rounded-[50%] animate-pulse duration-1000 w-[200px] sm:w-[600px] opacity-30 h-screen top-0 -z-50 right-[0]"
      ></div>
      <div className={`${firacode.className} m-5`}>
        <div className="flex flex-col max-w-screen-lg mx-auto h-screen max-h-[50vh] sm:max-h-[70vh] justify-evenly">
          <div className="flex text-2xl md:text-[35px] font-semibold ">
            <div className="bg-gradient-to-b from-orange-500 from-30% via-slate-50 via-50% to-green-600 to-70% bg-clip-text text-transparent">
              <span>N</span>
              <span>a</span>
              <span>m</span>
              <span>a</span>
              <span>s</span>
              <span>t</span>
              <span>e</span>
              <span>(</span>
              <span>)</span>
              <span>;</span>
            </div>
            &nbsp;I&apos;m
          </div>
          <div className="flex text-[40px] md:text-[90px] font-bold bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Keshav Kamediya
          </div>
          <p className="flex text-xl md:text-[35px] font-bold leading-none text-wrap">
            I design and code for the web.
          </p>
          <div className="my-4 text-sm md:text-base">
            <p className="my-4">
              Web Developer with experience of Digital Concept Arts, Frontend
              Web Designs. I Love fun Web UI, collaboration and making products.
            </p>
            <p className="my-4">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </p>
          </div>

          <Link href={"/contact"} className="w-fit relative text-slate-950">
            <p className="bg-slate-200/20 backdrop-blur-md p-2 px-6 rounded-lg font-medium">
              Let&apos;s Connect !
            </p>
            <span className="bg-gradient-to-br from-[#71cbff] to-[#8000ff] absolute w-full h-full top-0 left-0 m-1.5 -z-10 rounded-lg"></span>
          </Link>
        </div>
      </div>
      <About />
      <Skills />
    </div>
  );
}
