"use client";
import React, { useState } from "react";
import Logo from "../partials/logo";

import { Fira_Code } from "next/font/google";
import { RiMenuFoldLine } from "react-icons/ri";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
const firacode = Fira_Code({ subsets: ["latin"] });

const Navbar = () => {
  const [Sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full p-4 h-fit z-50 fixed top-0 left-0 flex justify-center">
      <div className="rounded-full container bg-gradient-to-br from-[#1a1a29] to-[#1b1b2800] border-[1px] border-[#e2e2e207] backdrop-blur-md flex items-center justify-between overflow-hidden p-3">
        <Logo />
        <div
          className={`${firacode.className} items-center tracking-widest text-sm p-4 hidden md:flex`}
        >
          <Link
            href={"#homepage"}
            className="mx-4 font-medium hover:scale-105 transition-all cursor-pointer flex items-center"
          >
            &lt;/Home&gt;
          </Link>
          <Link
            href={"#about"}
            className="mx-4 font-medium hover:scale-105 transition-all cursor-pointer flex items-center"
          >
            &lt;/About&nbsp;Me&gt;
          </Link>
          <Link
            href={"#skills"}
            className="mx-4 font-medium hover:scale-105 transition-all cursor-pointer flex items-center"
          >
            &lt;/Skills&gt;
          </Link>
          <Link
            href={""}
            className="mx-4 font-medium hover:scale-105 transition-all cursor-pointer flex items-center"
          >
            &lt;/Projects&gt;
          </Link>
        </div>
        <RiMenuFoldLine
          role="button"
          onClick={() => setSidebar(!Sidebar)}
          className="md:hidden text-[30px] mx-2"
        />
      </div>
      {Sidebar ? <SidebarMenu setSidebar={setSidebar} /> : null}
    </div>
  );
};
const SidebarMenu = ({ setSidebar }: any) => {
  const router = useRouter();

  const GotoPage = (route: string) => {
    router.push(route);
    setSidebar(false);
  };

  return (
    <div className="transition absolute top-0 left-0 bg-zinc-900/50 h-screen w-screen backdrop-blur-md scroll overflow-hidden flex flex-col justify-center md:hidden px-3">
      <button
        onClick={() => setSidebar(false)}
        className="bg-red-500 text-3xl items-center justify-center w-fit absolute top-0 right-0 m-6 p-2 rounded-lg text-slate-950"
      >
        <IoMdClose />
      </button>
      <div className="w-[80%] mx-auto">
        <button
          onClick={() => GotoPage("#homepage")}
          className="w-full font-medium cursor-pointer flex items-center bg-slate-900 p-3 px-5 my-2 text-lg rounded-2xl justify-center"
        >
          Home
        </button>
        <button
          onClick={() => GotoPage("#about")}
          className="w-full font-medium cursor-pointer flex items-center bg-slate-900 p-3 px-5 my-2 text-lg rounded-2xl justify-center"
        >
          About
        </button>
        <button
          onClick={() => GotoPage("#skills")}
          className="w-full font-medium cursor-pointer flex items-center bg-slate-900 p-3 px-5 my-2 text-lg rounded-2xl justify-center"
        >
          Skills
        </button>
        <button
          onClick={() => GotoPage("")}
          className="w-full font-medium cursor-pointer flex items-center bg-slate-900 p-3 px-5 my-2 text-lg rounded-2xl justify-center"
        >
          Projects
        </button>
      </div>
    </div>
  );
};
export default Navbar;
