import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { CardComponent } from "./Card";
import { FEATURED_COURSES } from "@/constants/featured-curses";
import { Tags } from "./Tags";

export const Cards = () => {
  const t = useTranslations("hero-cards");

  return (
    <article className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-6 lg:items-end">
      {FEATURED_COURSES(t).map((feature, index) => (
        <CardComponent
          index={index}
          key={`${feature.title}-${index}`}
          feature={feature}
        />
      ))}
      <div className="flex flex-col lg:justify-end lg:-mt-6 col-span-2 lg:col-span-1">
        <Tags />
        <Card
          shadow="none"
          className="bg-yellow-100 rounded-3xl lg:pl-3 h-[180px]"
        >
          <CardHeader className="relative">
            <div>
              <Chip variant="bordered" className="border-black-100">
                10 - 25 min
              </Chip>
              <h3
                className="font-semibold text-3xl mt-2
          "
              >
                Necklace
              </h3>
              <p className="italic text-xl font-work-sans">creation</p>
            </div>
            <Button
              className="border-black-100 absolute top-4 right-4 hidden md:flex items-center justify-center"
              variant="bordered"
              radius="full"
              isIconOnly
            >
              <i
                className="icon-[material-symbols-light--arrow-outward-rounded] text-2xl"
                role="img"
                aria-hidden="true"
              ></i>
            </Button>
          </CardHeader>
          <CardBody className="relative min-h-20 overflow-hidden">
            <i
              className="icon-[mingcute--asterisk-2-fill] text-purple-300 text-[120px] absolute -bottom-8 left-0 rotate-45"
              role="img"
              aria-hidden="true"
            ></i>
          </CardBody>
        </Card>
      </div>
    </article>
  );
};
