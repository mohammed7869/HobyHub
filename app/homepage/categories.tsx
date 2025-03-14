'use client';

import * as React from "react"

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const categories = [
    { title: "Games", img: "/images/player-with.png",sucategories:['All','Skating','Carft','Piano',] },
    { title: "Artistry", img: "/images/artistry.png",sucategories:['All','Skating','Carft','Piano','Pottery','Drawing','Sketch','Stiching'] },
    { title: "Martial Arts", img: "/images/martial-art.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Music", img: "/images/music.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Perform", img: "/images/perform.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Read and Write", img: "/images/readwrite.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Cooking Class", img: "/images/kitchen-women.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Perform", img: "/images/perform.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Read and Write", img: "/images/readwrite.png",sucategories:['All','Skating','Carft','Piano'] },
        { title: "Perform", img: "/images/perform.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Stem", img: "/images/stem.png",sucategories:['All','Skating','Carft','Piano'] },
    { title: "Language", img: "/images/language.png",sucategories:['All','Skating','Carft','Piano'] },
  ];

export function Categories() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };
  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);
  return (
    <div className="bg-white md:px-4 sm:px-2 w-full sticky top-42 md:top-16 z-9  border-b-1 border-gray ">
  <Carousel setApi={setCarouselApi} opts={{ align: "start"  }} className="w-[90%] mx-auto mb-3">
    <CarouselContent className="items-center text-center  gap-4">
      {categories.map((cat, index) => (
        <CarouselItem key={index} className="basis-1/4 sm:basis-1/3 lg:basis-1/11 md:basis-1/12 hover:-translate-y-1">
          {/* <div className=" pt-2 pb-[8px] flex-col justify-center items-center gap-px inline-flex">
            <Image
              src={cat.img} // Replace with your image path
              alt={cat.title}
              width={50} // Adjust as needed
              height={50}
            />
            <div className="h-[13px] text-center text-[#003161] text-[10.87px] font-bold font-['Inter'] leading-none">
              {cat.title}
            </div>
          </div> */}

<DropdownMenu 
              open={activeCategory === index} 
              onOpenChange={(open) => setActiveCategory(open ? index : null)}
            >
              <DropdownMenuTrigger asChild>
                <div
                  className="pt-2 pb-[8px] flex-col justify-center items-center gap-px inline-flex cursor-pointer"
                >
                  <Image src={cat.img} alt={cat.title} width={50} height={50} />
                  <div className="h-[13px] text-center text-[#003161] text-[10.87px] font-bold">
                    {cat.title}
                  </div>
                </div>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-56 max-h-[234px] gap-4">
                {cat.sucategories?.length > 0 ? (
                  cat.sucategories.map((scat, sindex) => (
                    <DropdownMenuItem key={sindex} onClick={() => setActiveCategory(null)}>
                      {scat}
                    </DropdownMenuItem>
                  ))
                ) : (
                  <DropdownMenuItem disabled>No Subcategories</DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          
        </CarouselItem>
          
      ))}
        
    </CarouselContent>
  </Carousel>

  {/* Left Arrow - Positioned before the first item */}
  <Button
    onClick={() => scrollToIndex(currentIndex - 1)}
    className="hidden md:block absolute left-[40px] top-1/2 transform justify-items-center -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-white shadow-lg shadow-[0px_6px_20px_0px_rgba(0,0,0,0.19)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] hover:bg-gray-100"
  >
    <ChevronLeft className="w-8 h-8 text-[#121111]" strokeWidth={3.0} />
  </Button>

  {/* Right Arrow - Positioned after the last item */}
  <Button
    onClick={() => scrollToIndex(currentIndex + 1)}
    className="hidden md:block absolute right-[40px] top-1/2 transform justify-items-center -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-white shadow-lg shadow-[0px_6px_20px_0px_rgba(0,0,0,0.19)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] hover:bg-gray-100"
  >
    <ChevronRight className="w-8 h-8 text-[#121111]" strokeWidth={3.0} />
  </Button>
  <div className="absolute left-0 right-0 bottom-0 mb-3">
    <div className="w-full border-b border-[#DEE2E6]"></div>
  </div>
</div>

  )
}
