"use client";
import Image from "next/image";
import { useState } from "react";
import VendorNavbar from "../layouts/navbar";
// import { useRouter } from "next/navigation";



const data = [
    {
        id: 1,
        hhid: "24578164",
        name: "Bessie Cooper",
        location: "PUNE",
        status: "ACTIVE",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image.svg",
    },
    {
        id: 2,
        hhid: "24578164",
        name: "Annette Black",
        location: "MUMBAI",
        status: "CANCELLED",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image (1).svg",
    },
    {
        id: 3,
        hhid: "24578164",
        name: "Kristin Waston",
        location: "MUMBAI",
        status: "ON HOLD",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image (2).svg",
    },
    {
        id: 4,
        hhid: "24578164",
        name: "Guy Hawkins",
        location: "PUNE",
        status: "COMPLETED",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image (3).svg",
    },
    {
        id: 5,
        hhid: "24578164",
        name: "Kristin Waston",
        location: "MUMBAI",
        status: "COMPLETED",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image (4).svg",
    },
    {
        id: 6,
        hhid: "24578164",
        name: "Kristin Waston",
        location: "MUMBAI",
        status: "CANCELLED",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image (2).svg",
    },
    {
        id: 7,
        hhid: "24578164",
        name: "Kristin Waston",
        location: "MUMBAI",
        status: "CANCELLED",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Image (3).svg",
    },
];

export default function MusicClass() {
    const [items] = useState(data);
    // Define allowed status types
    type StatusType = "ACTIVE" | "CANCELLED" | "ON HOLD" | "IN REGISTRATION" | "COMPLETED" ;

    const getStatusChip = (status: string) => {
        const styles: Record<StatusType, string> = {
            ACTIVE: "bg-green-100 text-green-800 border-2 border-green-500 rounded-none px-3 py-1",
            CANCELLED: "bg-red-100 text-red-800 border-2 border-red-500 rounded-none px-3 py-1",
            "ON HOLD": "bg-yellow-100 text-yellow-800 border-2 border-yellow-500 rounded-none px-3 py-1",
            "IN REGISTRATION": "bg-gray-100 text-gray-800 border-2 border-gray-500 rounded-none px-3 py-1",
            COMPLETED: "bg-blue-100 text-blue-800 border-2 border-blue-500 rounded-none px-3 py-1",
        };

        // Type narrow to StatusType if valid, otherwise undefined
        const appliedStyle = (styles as Record<string, string>)[status] || "bg-gray-200 text-gray-700 border";

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${appliedStyle}`}>
                {status}
            </span>
        );
    };
    
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
                          <h2 className="text-xl mb-[12px] font-['Minion_Pro']">MUSIC CLASS</h2>
                            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg font-['Minion_Pro']">Student Attendance</button>
                        </div>
            
                        <div className=" rounded-lg border bg-white">
                            <table className="min-w-full border-separate border-spacing-y-2">
                                <thead>
                                    <tr>
                                        {/* S. No. header without checkbox */}
                                        <th className="px-4 py-3 text-left text-gray-700 font-['Trajan_Pro']">S. No.</th>

                                        {/* Other headers */}
                                        {["HHID", "Title", "Status", "Approved Date", "Expiry Date", "Last Renewal Date", "Action"].map((header) => (
                                            <th
                                                key={header}
                                                className="px-4 py-3 text-left text-gray-700 text-[13px] font-['Trajan_Pro']"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={item.id} className="bg-white shadow rounded-lg">

                                            {/* Checkbox + S. No. together */}
                                            <td className="p-3 font-['Trajan_Pro'] text-sm">
                                                <div className="flex items-center gap-1">
                                                    <input type="checkbox" className="w-3 h-3" />
                                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                                </div>
                                            </td>

                                            {/* HHID */}
                                            <td className="p-3 font-['Trajan_Pro'] text-sm">{item.hhid}</td>

                                            {/* Title with Image */}
                                            <td className="p-3 flex items-center gap-3">
                                                <Image
                                                    src={item.image}
                                                    alt="profile"
                                                    width={40}
                                                    height={40}
                                                />
                                                <div>
                                                    <div className="font-['Trajan_Pro'] text-sm">{item.name}</div>
                                                    <div className="text-sm text-gray-500">{item.location}</div>
                                                </div>
                                            </td>

                                            {/* Status */}
                                            <td className="p-3">{getStatusChip(item.status)}</td>

                                            {/* Approved Date */}
                                            <td className="p-3 font-['Trajan_Pro'] text-sm">{item.approvedDate}</td>

                                            {/* Expiry Date */}
                                            <td className="p-3 font-['Trajan_Pro'] text-sm">{item.expiryDate}</td>

                                            {/* Last Renewal Date */}
                                            <td className="p-3 font-['Trajan_Pro'] text-sm">{item.lastRenewalDate}</td>

                                            {/* Action Icons */}
                                            <td className="p-2 flex gap-2 items-center">
                                                <Image src="/Icons/edit.svg" alt="edit" width={16} height={16} />
                                                <Image src="/Icons/delete.svg" alt="delete" width={16} height={16} />
                                                <Image src="/Icons/dots.svg" alt="more" width={16} height={16} />
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
