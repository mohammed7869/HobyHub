'use client';

import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface PopupScreenProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ContactPopupScreen({ open, setOpen  }: PopupScreenProps) {

      const [images, setImages] = useState<string[]>([]);
      const fileInputRef = useRef<HTMLInputElement>(null);

      const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from((event.target as HTMLInputElement)?.files || []);
        const newImages = files.map((file) => URL.createObjectURL(file as Blob));
        setImages([...images, ...newImages]);
      };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
  <DialogOverlay className="bg-[#003161] opacity-[50%] fixed inset-0" />
  
  <DialogContent className="bg-white p-6 min-w-[90%] rounded-xl overflow-y-scroll max-h-[90%] mx-auto text-center">
    <div className="grid grid-cols-1 gap-6 items-center">

      

      {/* Form Section */}
      <div className="bg-white  p-4 w-full">
      <div className="relative justify-start text-start text-[#05244f] text-2xl font-medium font-['Minion_Pro'] mb-4">Contact Details</div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Program Tittle</Label>
            <Input placeholder="Program Tittle" className="h-[52px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Institute Name</Label>
            <Input placeholder="Institute Name" className="h-[52px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Enter Phone No.</Label>
            <Input placeholder="Enter Phone No." className="h-[52px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Enter Phone No.</Label>
            <Input placeholder="Enter Phone No." className="h-[52px] border-[#05244f]" />
          </div>
          <div className="flex items-center gap-2">
            
            <Checkbox id="terms" className="border-black"/>
            <Label className="w-[177px] text-black text-[11.6px] font-semibold" htmlFor="terms">Select Year</Label>
          </div>
          <div className="flex items-center gap-2">
            <div  className="flex items-center gap-2">
            <Checkbox id="b" className="border-black"/>
            <Label className="w-[177px] text-black text-[11.6px] font-semibold" htmlFor="b">Select Year</Label>
            </div>
            <div  className="flex items-center gap-2">
            <Checkbox id="b" className="border-black"/>
            <Label className="w-[177px] text-black text-[11.6px] font-semibold" htmlFor="b">Select Year</Label>
            </div>
            <div  className="flex items-center gap-2">
            <Checkbox id="b" className="border-black"/>
            <Label className="w-[177px] text-black text-[11.6px] font-semibold" htmlFor="b">Select Year</Label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Program Tittle</Label>
            <Input placeholder="Program Tittle" className="h-[52px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Program Tittle</Label>
            <Input placeholder="Program Tittle" className="h-[52px] border-[#05244f]" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Email Address</Label>
            <Input placeholder="Email Address" className="h-[52px] border-[#05244f]" />
          </div>
          
        </div>
        <div className="mb-6 mt-[50px] w-full">
                            
                            {images.length >0 && ( <div className="grid grid-cols-4 gap-4 my-4 rounded-[10px]">
                              {images.map((src, index) => (
                                <Image key={index} src={src} alt="Uploaded" width={224} height={224} className="rounded-md" />
                              ))}
                            </div>)}
                            <Label className="w-[177px] text-black text-[11.6px] font-semibold">Profile photo</Label>
                            <div
                              className="h-[222px] flex flex-col justify-between items-center py-4 my-3 rounded-[15px] border border-[#05244f] cursor-pointer p-4"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              {/* Top - Upload Icon */}
                              <div className="flex justify-center">
                                <Image src={"/Icons/file-upload.svg"} alt="file-upload" height={45} width={59} />
                              </div>
          
                              {/* Middle - Text */}
                              <div className="text-center text-[#acacac] trajan-pro text-[11.6px] font-medium">
                                Drag your file(s) to start uploading
                              </div>
          
                              {/* Bottom - Browse Button */}
                              <div>
                                <Button variant="outline" className="">Browse File</Button>
                              </div>
          
                              <input
                                type="file"
                                multiple
                                onChange={handleImageUpload}
                                ref={fileInputRef}
                                className="hidden"
                              />
                            </div>
          
                            <div className="relative justify-center text-[#cecece] text-[11.6px] font-medium">Only support ipg. ,png and.av9 and zip %es</div>
                          </div>
      </div>
    </div>

    {/* Close Button */}
    <div className="flex justify-end gap-3">
    <Button variant="outline" onClick={() => setOpen(false)} className="mt-4">
      Cancel
    </Button>
    <Button variant="outline" onClick={() => setOpen(false)} className="bg-[#05244F] mt-4 text-white">
      Submit
    </Button>
    </div>
  </DialogContent>
</Dialog>

  );
}
