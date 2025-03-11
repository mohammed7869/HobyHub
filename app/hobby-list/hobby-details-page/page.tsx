"use client";

import { Card } from "@/components/ui/card";
import { Inter } from "next/font/google";
import { useState } from "react";

const thumbnails = [
  "/images/thumb2.png",
  "/images/thumb3.png",
  "/images/thumb4.png",
  "/images/thumb5.png",
  "/images/thumb6.png",
];

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function ClassDetailsPage() {
  const [selectedImage, setSelectedImage] = useState("/images/main.png");

  return (
    <>
    <div className="p-6">
      

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {/* Main Image */}
        <div className="lg:col-span-3">
          <img src={selectedImage} alt="Class" className="w-full  h-128 rounded-md" />
        </div>
        {/* Thumbnail Images */}
        <div className="flex lg:flex-col gap-2 overflow-auto">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt="Thumbnail"
              className="w-48 h-24 rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
              onClick={() => setSelectedImage(thumb)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-2xl font-bold">Arihant Reiki Vedic Healing</h1>
        <p className=" mt-1 text-address">212 Rale5e Peth Road, Pune, India</p>
        <span className=" bg-blue-50 text-gray-700 text-sm px-4 py-1 rounded-full inline-block mt-2">Since 2001</span>
        <p className={`${inter.variable} mt-4 text-brief`}>
          Welcome to Arihant Reiki and Yoga. We specialize in holistic wellness through Reiki,
          Vedic healing, and yoga, offering both in-person and online sessions tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-6">
        <Card className="p-4 text-center bg-blue-50 gap-0">
          <h3 className="text-lg font-semibold">Age Restriction</h3>
          <p className="text-lg font-semibold">10 - 70 Years</p>
        </Card>
        <Card className="p-4 text-center bg-blue-50  gap-0">
          <h3 className="text-lg font-semibold">Session</h3>
          <p className="text-lg font-semibold">25</p>
        </Card>
        <Card className="p-4 text-center bg-blue-50  gap-0">
          <h3 className="text-lg font-semibold">Rate</h3>
          
            <span className="text-lg font-semibold">₹2,999</span>
          
        </Card>
      </div>
    </div>
    </>
    
  );
}
