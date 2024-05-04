import React from "react";
import { Fira_Code } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
const firacode = Fira_Code({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={`${firacode.className} items-center text-center mb-10`}>
        <p className="text-2xl text-zinc-200 py-20 px-3">
          &quot;Learning, Living and Leveling Up.&quot;
        </p>
        <p className="bg-gradient-to-r from-cyan-500 from-10% to-pink-300 text-xl bg-clip-text text-transparent">
          GetinTouch();
        </p>
        <div className="flex items-center justify-center">
          <Link
            target="_blank"
            href={"https://www.instagram.com/keshav_kamediya/"}
            className="m-2 md:mx-3 p-2 text-[40px] cursor-pointer"
            title="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/keshavkamediya/"}
            className="m-2 md:mx-3 p-2 text-[40px] cursor-pointer"
            title="Linked In"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/keshavkamediya"}
            className="m-2 md:mx-3 p-2 text-[40px] cursor-pointer"
            title="Github"
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            href={"mailto:keshavkamediya@gmail.com"}
            className="m-2 md:mx-3 p-2 text-[40px] cursor-pointer"
            title="Mail"
          >
            <CiMail />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative w-full -mb-10 -z-10">
        <Image
          src={"/footer.png"}
          height={300}
          width={300}
          alt="Keshav Kamediya"
        />
        <div className="absolute bottom-0 h-[150px] bg-[#8000ff] -z-50 from- w-full blur-[100px] animate-pulse opacity-40 rounded-t-[50%]"></div>
      </div>
      <div className="bg-[#0b0b0b] text-center w-full p-3 text-sm text-slate-200 tracking-wide">
        Designed & Built by splaxy © 2024
      </div>
    </div>
  );
};

export default Footer;
