export const NAVBAR_LINKS = (t: (key: string) => string) => {
  return [
    {
      label: t("academy"),
      href: "#",
    },
    {
      label: t("about-us"),
      href: "#about",
    },
    {
      label: t("pricing"),
      href: "#pricing",
    },
    {
      label: t("contact"),
      href: "#contact",
    },
  ];
};
