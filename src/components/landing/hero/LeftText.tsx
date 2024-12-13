import { Image } from "@nextui-org/react";
import React from "react";

export const LeftText = () => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="bg-yellow-100 flex items-center justify-center p-3 rounded-full">
            <i
              className="icon-[fontisto--asterisk] py-4 text-black text-3xl lg:text-5xl"
              role="img"
              aria-hidden="true"
            ></i>
          </span>
          <p className="uppercase font-semibold text-4xl md:text-4xl lg:text-7xl 2xl:text-9xl">
            Hand crafts
          </p>
        </div>
        <p className="uppercase w-max font-medium font-work-sans text-[26px] md:text-4xl lg:text-6xl 2xl:text-9xl scale-y-105 italic lg:-ml-8">
          Make & sell academy
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <Image
          src="/landing/necklaces.jpg"
          alt="Fashion accessories example"
          className=" w-[150px] h-[80px] 2xl:w-[200px] 2xl:h-[130px]"
          classNames={{
            wrapper: "overflow-hidden px-4 py-2 bg-purple-200 rounded-[80%]",
          }}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p className="max-w-sm 2xl:max-w-md font-medium text-base 2xl:text-lg">
          Jewelry Creations Academy empowers you to craft stunning handmade
          jewelry while learning the skills to turn creativity into profit.
        </p>
      </div>
    </div>
  );
};
