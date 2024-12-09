"use client";

import { Link } from "@/i18n/routing";
import { Image } from "@nextui-org/react";
import React from "react";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src="/logo.png" radius="none" alt="Logo" width={120} />
    </Link>
  );
};
