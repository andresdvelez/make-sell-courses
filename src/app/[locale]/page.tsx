import { Hero } from "@/components/landing/hero/Hero";
import { Navbar } from "@/components/landing/navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <main className="w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
    </main>
  );
};

export default HomePage;
