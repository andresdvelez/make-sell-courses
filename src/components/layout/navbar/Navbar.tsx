import LanguageChanger from "@/components/common/language-changer";
import { Logo } from "@/components/common/logo";
import React from "react";
import { UserActions } from "./UserActions";

export const Navbar = async () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans flex items-center justify-between">
      <nav className="flex justify-between items-center">
        <Logo />
      </nav>
      <UserActions />
      <div className="min-w-[4rem]">
        <LanguageChanger />
      </div>
    </header>
  );
};
