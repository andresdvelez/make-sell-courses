import { Image } from "@nextui-org/react";
import React from "react";

export const RightImage = () => {
  return (
    <div className="-mt-2 hidden md:block">
      <div className="w-32 h-32 2xl:w-40 2xl:h-40 relative z-10 -mb-4">
        <button className="w-full h-full rounded-full bg-purple-200 p-4 flex items-center justify-center">
          <div className="w-full h-full relative flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full animate-spin-slow"
            >
              <path
                id="textPath"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                fill="none"
                className="text-purple-700"
              />
              <text className="text-[12px] fill-purple-900 uppercase tracking-wider">
                <textPath
                  href="#textPath"
                  textLength="210"
                  className="animate-spin"
                >
                  make & sell academy
                </textPath>
              </text>
            </svg>
            <i
              className="icon-[whh--diamonds] text-yellow-100 text-5xl rotate-45"
              role="img"
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
      <Image
        src="/landing/necklaces.jpg"
        alt="Fashion accessories example"
        className=" w-[200px] h-[150px] 2xl:w-[300px] 2xl:h-[200px]"
        classNames={{
          wrapper: "overflow-hidden rotate-45",
          img: "border-2 border-black-100",
        }}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};
