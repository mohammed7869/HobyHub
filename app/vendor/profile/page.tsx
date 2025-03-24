"use client";
import Image from "next/image";
import {  CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <div className="flex justify-center min-h-screen mt-[28px]">
      <div className="w-full max-w-6xl bg-white  px-6 ">
        <div className="flex flex-col items-center">
        <div className="justify-center text-[#636363] mb-[25px] text-3xl font-semibold">My Profile</div>
          {/* Profile Image */}
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
            <Image
              src="/images/thumb5.png" // Replace with actual image path
              alt="Profile Picture"
              width={140}
              height={140}
              className="w-[140px] h-[140px]"
            />
          </div>
          <h2 className="text-neutral-500 text-[21.30px] font-semibold mt-3">Mayank Kukreti</h2>
          <p className="text-[#bbbbbb] text-[16.90px] font-semibold mt-3">UI/UX Designer</p>
        </div>

        <hr className="my-4 h-[3px] bg-[#F5F5F5]" />

        {/* Profile Details */}
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-[#8e8e8e] text-base font-semibold mb-[16px]">User Email</p>
              <Input
                type="text"
                value="mayank354@gmail.com"
                disabled
                className="w-full h-[60] px-3 py-2 bg-[#ebebed] rounded-md border border-[#e4e6ea]"
              />
            </div>
            <div>
              <p className="text-[#8e8e8e] text-base font-semibold mb-[16px]">Joined Date</p>
              <Input
                type="text"
                value="12-01-2025"
                disabled
                className="w-full h-[60] px-3 py-2 bg-[#ebebed] rounded-md border border-[#e4e6ea]"
              />
            </div>
            <div>
              <p className="text-[#8e8e8e] text-base font-semibold mb-[16px]">Phone Number</p>
              <Input
                type="text"
                value="+914254875267"
                disabled
                className="w-full h-[60] px-3 py-2 bg-[#ebebed] rounded-md border border-[#e4e6ea]"
              />
            </div>
            <div>
              <p className="text-[#8e8e8e] text-base font-semibold mb-[16px]">Location</p>
              <Input
                type="text"
                value="M245, New York, USA"
                disabled
                className="w-full h-[60] px-3 py-2 bg-[#ebebed] rounded-md border border-[#e4e6ea]"
              />
            </div>
          </div>
          {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" className="bg-[#fefefe] rounded-[7px] border-[3px] border-[#505053] text-[#969696] text-base font-semibold">Close</Button>
          <Button className="app-bg-color rounded border border-[#57708e]">Edit Profile</Button>
        </div>
        </CardContent>

        
      </div>
    </div>
  );
}
