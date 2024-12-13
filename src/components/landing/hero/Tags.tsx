import { Button, Chip } from "@nextui-org/react";
import React from "react";

export const Tags = () => {
  return (
    <div className="lg:flex items-center flex-col gap-8 hidden">
      <div className="flex items-center gap-3">
        <Chip
          variant="solid"
          className="bg-blue-300 rotate-[25deg] p-4 -translate-x-20 !py-6"
        >
          <span className="font-semibold text-lg">#Handcrafted</span>
        </Chip>
        <Button
          isIconOnly
          radius="full"
          variant="solid"
          className="bg-yellow-100 -translate-x-20 text-lg"
        >
          <i
            className="icon-[ri--quill-pen-fill]"
            role="img"
            aria-hidden="true"
          ></i>
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button
          isIconOnly
          radius="full"
          variant="solid"
          className="bg-yellow-200 -translate-y-4 -translate-x-6 text-lg -rotate-12"
        >
          <i
            className="icon-[solar--star-fall-minimalistic-2-bold]"
            role="img"
            aria-hidden="true"
          ></i>
        </Button>
        <Chip
          variant="solid"
          className="bg-purple-300 font-medium -rotate-[25deg] p-4 !py-6 translate-x-4 -translate-y-6"
        >
          <span className="font-semibold text-lg">#Jewelry</span>
        </Chip>
      </div>
      <div className="flex items-center gap-1">
        <Chip
          variant="solid"
          className="bg-green-300 font-medium rotate-[15deg] p-4 !py-6 -translate-y-8 -translate-x-8"
        >
          <span className="font-semibold text-lg">#Artwork</span>
        </Chip>
        <Button
          isIconOnly
          radius="full"
          variant="solid"
          className="bg-blue-300 rotate-45 -translate-y-10 -translate-x-6"
        >
          <i
            className="icon-[gridicons--heart] text-lg"
            role="img"
            aria-hidden="true"
          ></i>
        </Button>
      </div>
    </div>
  );
};
