import Image from "next/image";
import { Inter } from "next/font/google";
import { CalendarDays, Eye, MapPin, User } from "lucide-react";

const hobbies = [
  { title: "Arihant Reiki Vedic Healing", img: "/images/yoga.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Art & Craft Workshop", img: "/images/yoga.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Cooking Class", img: "/images/cooking-workshop.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Cosmic Art Academy", img: "/images/cosmic.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Arihant Reiki Vedic Healing", img: "/images/yoga.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Art & Craft Workshop", img: "/images/yoga.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Cooking Class", img: "/images/cooking-workshop.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Cosmic Art Academy", img: "/images/cosmic.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Arihant Reiki Vedic Healing", img: "/images/yoga.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Art & Craft Workshop", img: "/images/yoga.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Cooking Class", img: "/images/cooking-workshop.jpeg", address: "Raviwar Peth - Pune" },
  { title: "Cosmic Art Academy", img: "/images/cosmic.jpeg", address: "Raviwar Peth - Pune" },
];

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function HobbyGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-6">
        {hobbies.map((hobby, index) => (
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm mx-auto bg-white relative">
        {/* Image Section */}
        <div className="relative">
          <img
            src={hobby.img} // Replace with your image path
            alt={hobby.title} className="h-[316px] w-full object-cover"
          />
          <div className="absolute top-2 left-2  bg-[#c8daeb] bg-opacity-70 rounded-full p-2 flex items-center">
            <Eye size={20} className="mr-1" />
            <span className="text-sm">88</span>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-[#212529] text-sm font-bold trajan-pro mb-2">{hobby.title}</h2>
  
          <div className="w-auto h-[29px] pl-[11px] pr-[9px] pt-0.5 pb-0.5 bg-[#c8daeb] rounded-[20px] justify-center items-center gap-[5px] inline-flex">
            <MapPin size={16} className="mr-2 text-gray-500" />
            <span className=" text-[#212529] text-sm font-medium trajan-pro leading-[21px]">{hobby.address}</span>
          </div>
  
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-gray-700 trajan-pro flex gap-2"><Image src={"/Icons/user-ic.svg"} alt="user" height={14} width={14}/>10 - 70 YEARS</span>
            <div className="flex items-center gap-2">
            <Image src={"/Icons/calender-blk.svg"} alt="user" height={14} width={14}/>
              <span className="text-sm text-gray-700">SESSION 25</span>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
    );
  }
