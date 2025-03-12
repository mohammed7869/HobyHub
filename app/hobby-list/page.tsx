"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";


const classes = Array(6).fill({
  title: "Yoga Classes",
  weekDay: "All day of week",
  time: "6:30-21:30",
  age: "10-70",
  session: 25,
  gender: "Male, Female",
  price: "$239 - $499",
});

export default function ClassDetails() {
  return (
    <div className="p-6">
      

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#767676] text-[22.70px] font-semibold ">Classes</h2>
        <div className="flex gap-2">
          <ToggleGroup type="single" className="hidden md:block border-2 border-gray-300 rounded-md p-1">
            <ToggleGroupItem value="list" >
              {/* <List className="h-5 w-5" /> */}
              <Image src="/Icons/classes-menu-list.png" alt="class" height={18} width={18}/>
            </ToggleGroupItem>
            <ToggleGroupItem value="grid" className="yellow-bg" defaultChecked>
            <Image src="/Icons/Menu Candy Box.png" alt="class" height={18} width={18}/>
              {/* <Grid className="h-5 w-5" /> */}
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="border-2 border-gray-300 rounded-md p-1 flex">
          <Button className="app-bg-color text-white">Online Classes</Button>
          <Button variant="outline" className="ml-1">Offline Classes</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((item, index) => (
          <Card key={index} className=" bg-neutral-50 rounded-[19px] border-2 border-[#e9e9e9]">
            <CardContent className="px-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Image src="/images/yoga-img.png" alt="class" height={48} width={48}/><span className="text-black text-[18px] font-normal font-['Trajan_Pro'] mt-1">{item.title}</span> 
              </h3>
              <p className="flex justify-between mt-[18px] text-black text-sm font-bold font-['Trajan_Pro']"><strong>Week Day:</strong> <p className="text-[#aaaaaa] text-sm font-bold font-['Trajan_Pro']">{item.weekDay}</p></p>
              <p className="flex justify-between mt-[18px]  text-black text-sm font-bold font-['Trajan_Pro'] "><strong>Time:</strong><p className="text-[#aaaaaa] text-sm font-bold font-['Trajan_Pro']"> {item.time}</p></p>
              <p className="flex justify-between mt-[18px]  text-black text-sm font-bold font-['Trajan_Pro']"><strong>Age:</strong><p className="text-[#aaaaaa] text-sm font-bold font-['Trajan_Pro']"> {item.age}</p></p>
              <p className="flex justify-between mt-[18px]  text-black text-sm font-bold font-['Trajan_Pro']"><strong>Session:</strong><p className="text-[#aaaaaa] text-sm font-bold font-['Trajan_Pro']"> {item.session}</p></p>
              <p className="flex justify-between mt-[18px]  text-black text-sm font-bold font-['Trajan_Pro']"><strong>Gender:</strong><p className="text-[#aaaaaa] text-sm font-bold font-['Trajan_Pro']"> {item.gender}</p></p>
              <p className="flex justify-between mt-[18px]  text-black text-sm font-bold font-['Trajan_Pro']"><strong>Price:</strong><p className="text-[#aaaaaa] text-sm font-bold font-['Trajan_Pro']"> {item.price}</p></p>
              <Button  className="w-full app-bg-color mt-4"><div className=" text-white text-[14px] font-medium font-['Minion_Pro']">Inquire Now</div></Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
