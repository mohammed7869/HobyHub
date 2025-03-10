'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PopupScreen from "./addInfoPopupScreen";
import VendorNavbar from "./layouts/navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SelectIcon } from "@radix-ui/react-select";
import LocationPopupScreen from "./locationSelection";
import ContactPopupScreen from "./contactSelection";

export default function RegistrationForm() {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showClassFields, setShowClassFields] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const handleImageUpload = (event: any) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file as Blob));
    setImages([...images, ...newImages]);
  };

  return (
    <>
      <VendorNavbar />
      <div className="mx-auto p-6">
        <h2 className="text-[#05244f] text-[40px] font-medium text-center font-['Minion Pro'] py-2">Registration Form</h2>
        <p className="text-center text-[#a3a4a4] text-[18.90px] font-bold trajan-pro py-3">Add details about your Institute with high-quality photos and class details</p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" >
            <div className="bg-white rounded-[15px] border-1 border-[#05244f] py-2 px-12 mb-3">
            <AccordionTrigger><div className="text-[#05244f] text-lg trajan-pro font-bold mb-2">Institute Details</div></AccordionTrigger>
            <AccordionContent>
              <div  >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex flex-col gap-2">
                    <Label className="w-[177px] text-black text-sm font-semibold">Program Title</Label>
                    <Input placeholder="Program Title" className="h-[67px] border-[#05244f]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="w-[177px] text-black text-sm font-semibold">Institute Name</Label>
                    <Input placeholder="Institute Name" className="h-[67px] border-[#05244f]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="w-[177px] text-black text-sm font-semibold">Since</Label>
                    <Input placeholder="Since" className="h-[67px] border-[#05244f]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="w-[177px] text-black text-sm font-semibold">GST No</Label>
                    <Input placeholder="GST No." className="h-[67px] border-[#05244f]" />
                  </div>
                </div>



                <div className="mb-6 mt-[50px]">
                  <h3 className="text-[#05244f] trajan-pro  text-xl font-semibold">Photos</h3>
                  {images.length >0 && ( <div className="grid grid-cols-4 gap-4 my-4 rounded-[10px]">
                    {images.map((src, index) => (
                      <Image key={index} src={src} alt="Uploaded" width={224} height={224} className="rounded-md" />
                    ))}
                  </div>)}
                  <div
                    className="h-[222px] flex flex-col gap-3 justify-center items-center py-4 my-3 rounded-[15px] border border-dashed border-[#05244f] cursor-pointer p-4"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {/* Top - Upload Icon */}
                    <div className="flex justify-center">
                      <Image src={"/Icons/file-upload.svg"} alt="file-upload" height={45} width={59} />
                    </div>

                    {/* Middle - Text */}
                    <div className="text-center text-[#acacac] trajan-pro text-sm font-medium">
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

                  <div className="relative justify-center text-[#cecece] text-sm font-medium">Only support ipg. ,png and.av9 and zip %es</div>
                </div>

                <Textarea placeholder="Introduction" rows={5} className="rounded-[15px] h-[87px] mb-6 border-[#05244f]" />
              </div>
            </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>

        <div className="text-[#05244f] text-lg font-bold my-4">Additional information</div>
        <div className="bg-white rounded-[15px] border border-[#05244f] p-4" >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <Label className="w-[177px] text-black text-sm font-semibold">Website Name</Label>
              <Input placeholder="Website Name" className="h-[67px] border-[#05244f]" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="w-[177px] text-black text-sm font-semibold">Class Level</Label>
              <Input placeholder="Class Level" className="h-[67px] border-[#05244f]" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="w-[177px] text-black text-sm font-semibold">Instagram Account</Label>
              <Input placeholder="Instagram Account" className="h-[67px] border-[#05244f]" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="w-[177px] text-black text-sm font-semibold">YouTube Account</Label>
              <Input placeholder="YouTube Account" className="h-[67px] border-[#05244f]" />
            </div>
          </div>
        </div>
        <Button variant="outline" className="border-[#05244f] mt-4" onClick={() => setIsOpen(true)}>+ Add Class Details</Button>
        <PopupScreen open={isOpen} setOpen={setIsOpen} setShowClassFields={setShowClassFields} />
        {showClassFields && (<>
          <div className="text-[#05244f] text-lg font-bold my-4">Class Details</div>
          <div className="bg-white rounded-[15px] border border-[#05244f] p-4" >
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Class Name</Label>
                <Input placeholder="Class Name" className="h-[67px] border-[#05244f]" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Category</Label>
                <Input placeholder="Category" className="h-[67px] border-[#05244f]" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Sub Category</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Sub Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Sub Category</SelectItem>
                    <SelectItem value="light">Sub Category</SelectItem>
                    <SelectItem value="light">Sub Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Location</Label>
                <Select onValueChange={(value) => { if(value === 'map') setIsLocationPopupOpen(true); }}>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem  value="map">Select From Map</SelectItem>
                    <SelectItem value="light">Pune</SelectItem>
                    <SelectItem value="dark">Nashik</SelectItem>
                    <SelectItem value="system">Mumbai</SelectItem>
                    
                  </SelectContent>
                  {/* <SelectIcon><Image src={'Icons/location-pin-black.svg'} onClick={() => setIsLocationPopupOpen(true)} height={24} alt="" width={24}/></SelectIcon> */}
                </Select>
                <LocationPopupScreen open={isLocationPopupOpen} setOpen={setIsLocationPopupOpen}  />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Contact</Label>
                <Input placeholder="Contact"  onFocus={() => setIsContactPopupOpen(true)} className="h-[67px] border-[#05244f]" />
              </div>
              <ContactPopupScreen open={isContactPopupOpen} setOpen={setIsContactPopupOpen}  />
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Time</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Time</SelectItem>
                    <SelectItem value="dark">Time</SelectItem>
                    <SelectItem value="system">Time</SelectItem>
                  </SelectContent>
                </Select>

              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Institute Name</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Institute Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Pune</SelectItem>
                    <SelectItem value="dark">Nashik</SelectItem>
                    <SelectItem value="system">Mumbai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Gender</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Male</SelectItem>
                    <SelectItem value="dark">Female</SelectItem>
                  </SelectContent>
                </Select>

              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Age</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">12 Years</SelectItem>
                    <SelectItem value="dark">15 Years</SelectItem>
                  </SelectContent>
                </Select>

              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Institute Name</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Institute Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">12 Years</SelectItem>
                    <SelectItem value="dark">15 Years</SelectItem>
                  </SelectContent>
                </Select>

              </div>
              <div className="flex flex-col gap-2">
                <Label className="w-[177px] text-black text-sm font-semibold">Institute Name</Label>
                <Select>
                  <SelectTrigger className="w-full h-[67px] border-[#05244f]">
                    <SelectValue placeholder="Institute Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">12 Years</SelectItem>
                    <SelectItem value="dark">15 Years</SelectItem>
                  </SelectContent>
                </Select>

              </div>
            </div>
          </div></>
        )}
        <Button className="mt-4 w-20% app-bg-color text-white float-right">
          Submit
        </Button>
      </div>
    </>
  );
}
