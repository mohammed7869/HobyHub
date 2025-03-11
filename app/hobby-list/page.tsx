"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Grid, List } from "lucide-react";


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
      

      <div className="flex justify-between items-center my-6">
        <h2 className="text-xl font-bold">Classes</h2>
        <div className="flex gap-2">
          <ToggleGroup type="single" className="border-2 border-gray-300 rounded-md p-1">
            <ToggleGroupItem value="list" >
              <List className="h-5 w-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="grid" className="yellow-bg" defaultChecked>
              <Grid className="h-5 w-5" />
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
          <Card key={index} className="shadow-md bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Image src="/images/yoga-img.png" alt="class" height={52} width={52}/> {item.title}
              </h3>
              <p className="flex justify-between mt-2"><strong>Week Day:</strong> <p className="text-value">{item.weekDay}</p></p>
              <p className="flex justify-between mt-2"><strong>Time:</strong><p className="text-value"> {item.time}</p></p>
              <p className="flex justify-between mt-2"><strong>Age:</strong><p className="text-value"> {item.age}</p></p>
              <p className="flex justify-between mt-2"><strong>Session:</strong><p className="text-value"> {item.session}</p></p>
              <p className="flex justify-between mt-2"><strong>Gender:</strong><p className="text-value"> {item.gender}</p></p>
              <p className="flex justify-between mt-2"><strong>Price:</strong><p className="text-value"> {item.price}</p></p>
              <Button  className="w-full app-bg-color mt-4">Inquire Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
