"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const FormResetBtn = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <Button
      type="reset"
      onClick={reset}
      isIconOnly
      radius="full"
      className="search-btn"
    >
      <Link
        href={"/"}
        className="text-white-100 flex items-center justify-center text-xl"
      >
        <i className="icon-[line-md--close]" role="img" aria-hidden="true"></i>
      </Link>
    </Button>
  );
};
