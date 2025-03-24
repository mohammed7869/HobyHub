"use client";

import { useState } from "react";
import Image from "next/image";
import VendorNavbar from "../layouts/navbar";


const data = [
  { id: 1, learnerId: '24578164', name: 'Bessie Cooper', program: 'GKH Karat Pune', className: 'Karate Class', date: '2024-06-15', activity: 'REGISTERED', time: '09:00 AM' },
  { id: 2, learnerId: '24578164', name: 'Annette Black', program: 'GKH Karat Pune', className: 'Karate Class', date: '2024-06-15', activity: 'REGISTERED', time: '09:00 AM' },
  { id: 3, learnerId: '24578164', name: 'Kristin Waston', program: 'GKH Karat Pune', className: 'Karate Class', date: '2024-06-15', activity: 'LEVEL CHANGE', time: '09:15 AM' },
  { id: 4, learnerId: '434343', name: 'Kristin Waston', program: 'GKH Karat Pune', className: 'Karate Class', date: '2024-06-15', activity: 'LEVEL CHANGE', time: '09:15 AM' },
  { id: 5, learnerId: '434343', name: 'Kristin Waston', program: 'GKH Karat Pune', className: 'Karate Class', date: '2024-06-15', activity: 'LEVEL CHANGE', time: '09:15 AM' },
  { id: 6, learnerId: '434343', name: 'Kristin Waston', program: 'GKH Karat Pune', className: 'Karate Class', date: '2024-06-15', activity: 'LEVEL CHANGE', time: '09:15 AM' },
  // Add more rows if needed
];


export default function ProgressSummaryPage() {
  const [items] = useState(data);

  return (
    <>
      <VendorNavbar />
      <div className="flex ">
      {/* <Sidebar /> */}
        

        {/* Main Content */}
        <div className="bg-[#fefefe] rounded-[7px] px-[10px] py-[18px] mt-[16px]">
          {/* Content */}
          <main className="ml-[20px] p-4 bg-[#F6F8F9] flex-1 overflow-auto rounded-[7px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl mb-[12px] font-['Minion_Pro']">Progress Summary</h2>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg font-['Minion_Pro']">+ Add</button>
            </div>

            {/* Table */}
            <div className="overflow-auto rounded-lg border bg-white ">
              <table className="min-w-full border-separate border-spacing-y-4 ">
                <thead >
                  <tr>
                    <th className="px-3 py-1 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Learner ID</th>
                    <th className="px-3 py-1 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Learner Name</th>
                    <th className="px-3 py-1 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Program</th>
                    <th className="px-3 py-2 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Class Name</th>
                    <th className="px-3 py-2 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Date</th>
                    <th className="px-3 py-2 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Activity</th>
                    <th className="px-3 py-2 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">System Time</th>
                    <th className="px-3 py-2 text-left font-normal text-gray-900 text-sm font-['Trajan_Pro']">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <td className="p-3 font-normal text-sm  font-['Trajan_Pro']">{item.learnerId}</td>
                      <td className="p-3 font-normal text-sm  font-['Trajan_Pro']">{item.name}</td>
                      <td className="p-3 font-normal text-sm  font-['Trajan_Pro']">{item.program}</td>
                      <td className="p-3 font-normal text-sm  font-['Trajan_Pro']">{item.className}</td>
                      <td className="p-3 font-normal text-sm  font-['Trajan_Pro']">{item.date}</td>
                      <td className="p-3 font-normal text-sm  font-['Trajan_Pro']">{item.activity}</td>
                      <td className="p-3 font-normal text-sm font-['Minion_Pro']">
                        <div className="flex items-center gap-2">
                          <Image src="/Icons/Time Circle 2.svg" alt="time-icon" width={14} height={14} />
                          <span>{item.time}</span>
                        </div>
                      </td>
                      <td className="p-3 flex gap-2">
                        <Image src={"/Icons/edit.svg"} alt="user" height={14} width={14} />                      
                        <Image src={"/Icons/delete.svg"} alt="user" height={14} width={14} />                  
                        <Image className="mb-2" src={"/Icons/dots.svg"} alt="user" height={16} width={16} />                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <button className="bg-gray-100 px-3 py-1  font-['Minion_Pro']">&lt; Back</button>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-100 font-['Minion_Pro']">1</button>
                <button className="px-3 py-1 bg-gray-800 text-white  font-['Minion_Pro']">2</button>
                <button className="px-3 py-1 bg-gray-100  font-['Minion_Pro']">3</button>
                <button className="px-3 py-1 bg-gray-100  font-['Minion_Pro']">4</button>
                <button className="px-3 py-1 bg-gray-100  font-['Minion_Pro']">5</button>
              </div>
              <button className="bg-gray-100 px-3 py-1  font-['Minion_Pro']">Next &gt;</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
