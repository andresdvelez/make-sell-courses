import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";

export const Pricing = () => {
  return (
    <section className="flex flex-col gap-12 items-center content-container pt-44 relative">
      {/* Background Curve SVG */}
      <svg
        className="absolute inset-x-[28rem] md:inset-x-[40rem] lg:inset-x-[74rem] inset-y-28 md:inset-y-36 lg:inset-y-[300px] w-full h-full -z-10 scale-[3] md:scale-[2] lg:scale-150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1000"
      >
        <path
          d="  M2 356.009C178.338 132.901 348 33.5162 528 98.5094C708 163.503 677 289.512
      481.5 213.507C286 137.502 373 -8.49639 491 4.0018C609 16.5 771.5 134 816.5
      222.502"
          stroke="#E5E7B5"
          strokeWidth="4"
        />
      </svg>
      <aside className="flex lg:items-center justify-between w-full">
        <div className="flex flex-col gap-6 font-semibold text">
          <h3 className="flex flex-col font-semibold text-6xl lg:text-7xl text-center md:text-start">
            Start now{" "}
            <span className="font-work-sans font-normal italic">learning</span>
          </h3>
          <p className="max-w-md">
            Begin your courses and start your side hustle to lay a strong
            fundation of your future.
          </p>
        </div>
        <Card
          shadow="none"
          className="bg-yellow-100 p-6 lg:p-8 lg:-rotate-12 rounded-3xl gap-4 lg:-translate-x-28 lg:scale-110 hidden md:flex h-max w-max"
        >
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </AvatarGroup>
          <p className="font-medium w-max">+345 studying with us</p>
        </Card>
      </aside>
      <Card shadow="sm" className="h-96 rounded-3xl p-6">
        <CardHeader className="flex flex-col gap-2">
          <p className="text-4xl self-start">
            $7<span className="text-sm">/month</span>
          </p>
          <p className="">Perfect to start your side hustle business</p>
        </CardHeader>
        <Divider />
        <CardBody as="ul" className="flex flex-col gap-4 mt-4 overflow-hidden">
          <li className="flex items-center gap-3">
            <i
              className="icon-[lineicons--check] text-blue-300 text-xl"
              role="img"
              aria-hidden="true"
            ></i>
            <p>More than 150 products courses</p>
          </li>
          <li className="flex items-center gap-3">
            <i
              className="icon-[lineicons--check] text-blue-300 text-xl"
              role="img"
              aria-hidden="true"
            ></i>
            <p>Sugestions of how to sell each product</p>
          </li>
          <li className="flex items-center gap-3">
            <i
              className="icon-[lineicons--check] text-blue-300 text-xl"
              role="img"
              aria-hidden="true"
            ></i>
            <p>Unlimited access</p>
          </li>
        </CardBody>
        <CardFooter>
          <Button radius="full" className="bg-blue-200 w-full drop-shadow-sm">
            Get started
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
