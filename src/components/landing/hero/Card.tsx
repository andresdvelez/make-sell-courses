import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  cn,
} from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  feature: {
    duration_time: string;
    title: string;
    subtitle: string;

    icon: ReactNode;
    bg: string;
  };
  index: number;
}

export const CardComponent = ({ feature, index }: Props) => {
  return (
    <Card
      shadow="none"
      className={cn(
        `rounded-3xl lg:pl-3 h-[180px] lg:h-[350px] ${feature.bg}`,
        {
          "lg:!max-h-[284px] lg:!min-h-[284px]": index == 0,
        }
      )}
    >
      <CardHeader className="relative">
        <div>
          <Chip variant="bordered" className="border-black-100">
            {feature.duration_time}
          </Chip>
          <h3
            className="font-semibold text-3xl mt-2
      "
          >
            {feature.title}
          </h3>
          <p className="italic text-xl font-work-sans">{feature.subtitle}</p>
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
      <CardBody className="relative min-h-40 overflow-hidden">
        {feature.icon}
      </CardBody>
    </Card>
  );
};
