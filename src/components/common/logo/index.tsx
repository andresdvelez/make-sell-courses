import { Link } from "@/i18n/routing";

export const Logo = () => {
  return (
    <Link href={"/"}>
      {/* <Image src="/logo.png" radius="none" alt="Logo" width={120} /> */}
      <h1 className="font-work-sans font-bold uppercase tracking-wider">
        Artistry
      </h1>
    </Link>
  );
};
