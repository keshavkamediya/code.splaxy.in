import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="md:mx-10 flex cursor-pointer items-center max-h-[60px] *:hover:mt-28 *:hover:duration-150 ">
      <div className="transition-all ease-linear duration-500">
        <Image
          src={"/smile.png"}
          width={60}
          height={60}
          alt="Keshav Kamediya"
          title="Keshav Kamediya"
          className="aspect-square"
        />
      </div>
    </div>
  );
};

export default Logo;
