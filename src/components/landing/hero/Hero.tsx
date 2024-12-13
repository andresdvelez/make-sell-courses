import React from "react";
import { LeftText } from "./LeftText";
import { RightImage } from "./RightImage";

import { Cards } from "./Cards";

export const Hero = () => {
  return (
    <section className="content-container py-12 w-screen h-no-header relative flex flex-col justify-between gap-y-12">
      {/* Background Curve SVG */}
      <svg
        className="absolute inset-x-12 lg:inset-x-0 -inset-y-16 md:inset-y-12 lg:inset-y-32 w-full h-full -z-10 scale-150 lg:scale-100 lg:!scale-x-125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1000"
      >
        <path
          d="M3 186.999C479.416 -149.171 1071.74 52.7614 1342 218.031M1342 218.031C1370.85 235.671 1396.02 252.894 1417 268.999C1634.5 436 1540.5 622 1231 465C921.5 308 1045 126.5 1342 218.031ZM1342 218.031C1545.27 315.895 1649.62 378.865 1815.5 508.5"
          stroke="#E5E7B5"
          strokeWidth="3"
        />
      </svg>
      <aside className="flex items-start justify-around">
        <LeftText />
        <RightImage />
      </aside>
      <Cards />
    </section>
  );
};
