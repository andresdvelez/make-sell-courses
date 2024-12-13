import { Image } from "@nextui-org/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FEATURED_COURSES = (t: (key: string) => string) => {
  return [
    {
      duration_time: "10 - 25 min",
      title: "Necklace",
      subtitle: "Creation",
      icon: (
        <i
          className="icon-[streamline--spiral-shape] text-green-300 text-[180px] absolute -bottom-8 left-0 rotate-45"
          role="img"
          aria-hidden="true"
        ></i>
      ),
      bg: "bg-green-400",
    },
    {
      duration_time: "10 - 25 min",
      title: "Necklace",
      subtitle: "Creation",

      icon: (
        <Image
          src="/landing/small-curve.svg"
          alt="Curve illustration"
          radius="full"
          width={180}
          height={180}
          className=""
          classNames={{
            wrapper: "size-48 absolute -bottom-8 left-0",
          }}
        />
      ),
      bg: "bg-blue-200",
    },
  ];
};
