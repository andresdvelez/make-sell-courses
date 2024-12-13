import { NAVBAR_LINKS } from "@/constants/navbar";
import { Link } from "@/i18n/routing";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

export const NavbarLinks = () => {
  const t = useTranslations("navbar-links");

  return (
    <ul className="lg:flex items-center gap-4 flex-1 justify-center hidden">
      {NAVBAR_LINKS(t).map((link) => (
        <li key={link.label} className="group">
          <Link href={link.href}>
            <Button variant="bordered" radius="full" className="hover-btn">
              <span className="z-10 font-medium">{link.label}</span>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
