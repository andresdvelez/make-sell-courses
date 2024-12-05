import { Navbar } from "@/components/layout/navbar/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
