import * as React from "react"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const categories = [
    { title: "Games", img: "/images/music.png" },
    { title: "Artistry", img: "/images/artistry.png" },
    { title: "Martial Arts", img: "/images/music.png" },
    { title: "Music", img: "/images/music.png" },
    { title: "Perform", img: "/images/perform.png" },
    { title: "Read and Write", img: "/images/readwrite.png" },
    { title: "Cooking Class", img: "/images/music.png" },
    { title: "Perform", img: "/images/perform.png" },
    { title: "Read and Write", img: "/images/readwrite.png" },
    { title: "Cooking Class", img: "/images/cooking.png" },
  ];

export function Categories() {
  return (
    <div className="bg-white md:p-4 sm:p-2 w-full">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto"
    >
        <CarouselPrevious className="hidden md:block"/>
      <CarouselContent className="items-center justify-center gap-4">
        {categories.map((cat, index) => (
          <CarouselItem key={index} className="basis-1/6 lg:basis-1/12">
            <div className="px-4 pt-2 pb-[9.59px] flex-col justify-center items-center gap-px inline-flex">
                <Image
                            src={cat.img} // Replace with your image path
                            alt={cat.title}
                            width={50} // Adjust as needed
                            height={50} // Adjust as needed
                            layout="responsive"
                          />
            <div className="w-[37.39px] h-[13px] text-center text-[#003161] text-[10.87px] font-bold font-['Inter'] leading-none">{cat.title}</div>
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselNext className="hidden md:block" />
    </Carousel>
    </div>
  )
}
