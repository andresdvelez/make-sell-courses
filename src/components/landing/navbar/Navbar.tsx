import LanguageChanger from "@/components/common/language-changer";
import { Logo } from "@/components/common/logo";
import { UserActions } from "@/components/layout/navbar/UserActions";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white font-work-sans flex items-center justify-between">
      <nav className="flex justify-between items-center w-full">
        <Logo />
        <NavbarLinks />
      </nav>
      <div className="flex items-center gap-4">
        <LanguageChanger />
        <UserActions />
      </div>
    </header>
  );
};
