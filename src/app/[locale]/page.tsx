import { Features } from "@/components/landing/hero/Features";
import { Hero } from "@/components/landing/hero/Hero";
import { Pricing } from "@/components/landing/hero/Pricing";
import { Navbar } from "@/components/landing/navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <main className="w-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default HomePage;
