"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PagesNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="app-bg-color text-white flex items-center p-4 gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
        </div>
        <div className={`md:flex gap-4 ${isMenuOpen ? "block" : "hidden"} md:block absolute md:static top-16 left-0 w-full bg-blue-900 md:bg-transparent p-4 md:p-0`}>
          <Button variant="ghost" className="bg-yellow-400 text-black w-full md:w-auto">Class Details</Button>
          <Button variant="ghost" className="w-full md:w-auto">Contact Details</Button>
          <Button variant="ghost" className="w-full md:w-auto">Location</Button>
          <Button variant="ghost" className="w-full md:w-auto">Excellence Score</Button>
        </div>
      </nav>
  );
}
