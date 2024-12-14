import { FEATURES } from "@/constants/features";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

export const Features = () => {
  const t = useTranslations("features");

  return (
    <section className="flex flex-col items-center justify-start mt-8 relative">
      {/* Background Curve SVG */}
      <svg
        className="absolute inset-x-[14rem] -rotate-45 md:-rotate-0 lg:inset-x-[32rem] -inset-y-16 md:inset-y-64 lg:inset-y-48 w-full h-full -z-10 scale-150 !scale-x-[2.5] md:!scale-x-[1.6] lg:scale-100 lg:!scale-x-[3.8]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1000"
      >
        <path
          d="M2 21.9905C409.659 250.383 827 72.9807 988.5 21.9905C1150 -28.9997 1229 36
      1274 59.9905"
          stroke="#E5E7B5"
          strokeWidth="4"
        />
      </svg>
      <div className="flex flex-col">
        <h3 className="flex flex-col font-semibold text-6xl lg:text-7xl text-center">
          Why choose{" "}
          <span className="font-work-sans font-normal italic">Artistry?</span>
        </h3>
        <p className="font-medium text-center max-w-md mt-2">
          We believe in a better world and we want to give back the knowledge
          we&apos;ve got
        </p>
      </div>
      <ul className="flex flex-col md:flex-row items-center justify-around gap-y-6 w-full px-6 lg:px-0">
        {FEATURES(t).map((feature, index) => (
          <li
            key={feature.id}
            className={clsx("flex flex-col gap-4 items-center justify-center", {
              "md:translate-y-20": index === 1,
            })}
          >
            {feature.icon}
            <h4 className="text-2xl font-semibold">{feature.title}</h4>
            <p className="max-w-xs text-sm lg:text-base lg:max-w-sm">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
