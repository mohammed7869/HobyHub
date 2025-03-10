"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="">
      <div className="text-[#4f6a85] text-4xl font-medium text-center my-6">
        Welcome to HobyHub!
        </div>
        <div className=" h-[27px] relative text-center text-[#9c9e9e] text-lg trajan-pro font-bold">Start getting discovered locally and globally.</div>
      <div className="container mx-auto flex flex-col md:flex-row sm:col items-center gap-2 justify-center mt-10">
        {/* Login Card */}
        
        <Card className="p-6 rounded-none shadow-sm bg-white md:w-[569px] sm:w-[369px]">
          <h2 className="text-black text-xl font-bold trajan-pro mb-4">Login</h2>
   <div className="bg-[#fefefe] rounded-[7px] border-[3px] border-[#dddfe3] p-4">
          {/* Phone Input */}
          <label className="text-[#9d9d9d] text-[14.80px] font-bold trajan-pro">Phone Number</label>
          <div className="flex flex-row  mt-1 gap-4">
            {/* <span className="text-gray-600  px-3">+91</span> */}
            <Input
              type="text"
              placeholder=""
              className="items-center border border-gray-300 rounded-md outline-none flex-1 w-15 h-15"
            />
            <Input
              type="text"
              placeholder=""
              className="items-center border border-gray-300 rounded-md outline-none flex-1 w-15 h-15"
            />
            <Input
              type="text"
              placeholder=""
              className="items-center border border-gray-300 rounded-md outline-none flex-1 w-15 h-15"
            />
            <Input
              type="text"
              placeholder=""
              className="items-center border border-gray-300 rounded-md outline-none flex-1 w-15 h-15"
            />
          </div>

          <p className="text-[#c9c9c9] text-sm trajan-pro mt-2">
          <span className="text-[#345175] text-[14.90px] font-bold">00:53</span> Resend OTP
          </p>

          <p className="text-[#c9c9c9] text-sm trajan-pro mt-2">
            We ll send you an OTP via WhatsApp and SMS to verify your account.
          </p>

          {/* Features */}
          <ul className="text-[#b6b6b7] text-sm trajan-pro mt-3 space-y-1">
            <li>✔ Get discovered by local & international learners easily</li>
            <li>✔ Showcase your workshops & skills</li>
            <li>✔ Connect with passionate hobbyists</li>
          </ul>
          </div>

          <Card className="md:hidden sm:block md:w-[566px] sm:w-[350px] h-[273px]">
        <CardContent>
        <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center">
          <Image
            src="/images/otp-image.png"
            alt="Illustration"
            width={300}
            height={260}
            className="w-[300px] h-[238px]"
          />
        </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index ? "bg-[#3E606C]" : "bg-[#E4E4E4]"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
        
        </CardContent>
        </Card>
          {/* Checkbox & Policy */}
          <div className="flex items-center gap-2 mt-2">
          <Checkbox id="terms" />
            <label htmlFor="terms" className="text-[#c6c7c7] text-xs trajan-pro font-bold">
              By proceeding, you agree to our
              Terms & Conditions and
              Privacy Policy
            </label>
          </div>

          {/* Button */}
          <Button className="mt-4  sm:w-full md:w-[20%] app-bg-color text-white text-sm rounded-lg border border-[#90a2b7] trajan-pro">
            Login
          </Button>
        </Card>

        {/* Illustration */}
        <Card className="rounded-none shadow-sm hidden md:block md:w-[585px] sm:w-[350px] h-[451px]">
                <CardContent>
                <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center">
                  <Image
                    src="/images/otp-image.png"
                    alt="Illustration"
                    width={445}
                    height={445}
                    className="w-[445px] h-[420px]"
                  />
                </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all ${
                      currentIndex === index ? "bg-[#3E606C]" : "bg-[#E4E4E4]"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
                </CardContent>
                </Card>
      </div>
      </div>
  );
}
