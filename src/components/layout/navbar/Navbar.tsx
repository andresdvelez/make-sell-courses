import LanguageChanger from "@/components/common/language-changer";
import { Logo } from "@/components/common/logo";
import { UserActions } from "./UserActions";

export const Navbar = async () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans flex items-center justify-between">
      <nav className="flex justify-between items-center">
        <Logo />
      </nav>
      <div className="flex items-center gap-6">
        <LanguageChanger />
        <UserActions />
      </div>
    </header>
  );
};
