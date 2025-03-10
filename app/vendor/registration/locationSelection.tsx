'use client';

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PopupScreenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function LocationPopupScreen({ open, setOpen  }: PopupScreenProps) {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogOverlay className="bg-[#003161] opacity-[50%] fixed inset-0" />
  
  <DialogContent className="bg-white p-6 min-w-[90%] rounded-xl overflow-y-scroll max-h-screen mx-auto text-center">
    <div className="grid grid-cols-1 gap-6 items-center">

      {/* Centering Image */}
      <div className="flex justify-center w-full">
        <Image 
          src={'/images/map.png'} 
          height={490} 
          width={1450} 
          className="max-w-full w-auto sm:w-[80%] object-contain mx-auto" 
          alt="Books" 
        />
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-[15px] border border-[#05244f] p-4 w-full">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">Address</Label>
            <Input placeholder="Address" className="h-[67px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">Joined Date</Label>
            <Input placeholder="Joined Date" className="h-[67px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">Area</Label>
            <Input placeholder="Area" className="h-[67px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">City</Label>
            <Input placeholder="City" className="h-[67px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">Code</Label>
            <Input placeholder="Code" className="h-[67px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">Country</Label>
            <Input placeholder="Country" className="h-[67px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-sm font-semibold">Pincode</Label>
            <Input placeholder="Pincode" className="h-[67px] border-[#05244f]" />
          </div>
        </div>
      </div>
    </div>

    {/* Close Button */}
    <Button variant="outline" onClick={() => setOpen(false)} className="mt-4">
      Close
    </Button>
  </DialogContent>
</Dialog>

  );
}
