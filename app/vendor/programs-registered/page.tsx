"use client";
import Image from "next/image";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
        image: "/Icons/Bessie Cooper.svg",
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
        image: "/Icons/Annette Black.svg",
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
        image: "/Icons/Kristin Waston.svg",
    },
    {
        id: 4,
        hhid: "24578164",
        name: "Guy Hawkins",
        location: "PUNE",
        status: "IN REGISTRATION",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Guy Hawkins.svg",
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
        image: "/Icons/Kristin Waston.svg",
    },
    {
        id: 6,
        hhid: "24578164",
        name: "Annette Black",
        location: "MUMBAI",
        status: "CANCELLED",
        approvedDate: "2024-06-15",
        expiryDate: "2024-06-15",
        lastRenewalDate: "2025-01-10",
        image: "/Icons/Annette Black.svg",
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
        image: "/Icons/Kristin Waston.svg",
    },
];

export default function ProgramsRegistered() {
    const [items] = useState(data);
    // Define allowed status types
    type StatusType = "ACTIVE" | "CANCELLED" | "ON HOLD" | "IN REGISTRATION" | "COMPLETED";

    const getStatusChip = (status: string) => {
        const styles: Record<StatusType, string> = {
            ACTIVE: "bg-green-100 text-green-800 border-3 font-['Trajan_Pro'] border-green-500 rounded-sm px-3 py-1",
            CANCELLED: "bg-red-100 text-red-800 border-3 font-['Trajan_Pro'] border-red-500 rounded-sm px-3 py-1",
            "ON HOLD": "bg-yellow-100 text-yellow-800 border-3 font-['Trajan_Pro'] border-yellow-500 rounded-sm px-3 py-1",
            "IN REGISTRATION": "bg-gray-100 text-gray-800 border-3 font-['Trajan_Pro'] border-gray-500 rounded-sm px-3 py-1",
            COMPLETED: "bg-blue-100 text-blue-800 border-3 font-['Trajan_Pro'] border-blue-500 rounded-sm px-3 py-1",
        };

        // Type narrow to StatusType if valid, otherwise undefined
        const appliedStyle = (styles as Record<string, string>)[status] || "bg-gray-200 text-gray-700 border rounded-full px-3 py-1";

        return (
            <span className={`px-3 py-1  text-xs  ${appliedStyle}`}>
                {status}
            </span>
        );
    };

    return (
        <>
            


                {/* Main Content */}
                <div className="bg-[#fefefe] rounded-[7px] px-[10px] py-[18px] mt-[16px]">
                    {/* Content */}
                    <main className="ml-[20px] p-4 bg-[#F6F8F9] flex-1 overflow-auto ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-md mb-[12px] font-['Trajan_Pro']">PROGRAMS REGISTERED</h2>
                            <button className="flex items-center gap-2 bg-[#04244F]  text-white px-2 py-2 rounded-lg font-['Trajan_Pro'] text-sm">
                                <Image src="/Icons/Add.svg" className="mb-1" width={15} height={15} alt="Back" />
                                <span className="text-white">ADD PROGRAM</span>
                            </button>
                        </div>

                        {/* Table */}
                        {/* Table */}
                        <div className="overflow-auto rounded-lg border bg-[#F6F8F9]">
                            <Table className="w-full min-w-[960px] border-separate border-spacing-y-1">
                                
                                <TableHeader >
                                    <TableRow>
                                        {["HHID", "Title", "Status", "Approved Date", "Expiry Date", "Last Renewal Date", "Action"].map((header) => (
                                            <TableHead
                                                key={header}
                                                className="justify-center text-gray-500 text-xs  bg-white font-['Trajan_Pro']"
                                            >
                                                {header}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {items.map((item) => (
                                        <TableRow key={item.id} className="bg-white shadow rounded-lg">
                                            <TableCell className="justify-center p-3 text-gray-500 text-xs font-['Trajan_Pro']" width={20}>
                                                {item.hhid}
                                            </TableCell>

                                            <TableCell className="justify-center p-3">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={item.image}
                                                        alt="profile"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    <div>
                                                        <div className="text-gray-500 text-xs font-bold font-['Trajan_Pro']">{item.name}</div>
                                                        <div className="text-xs text-gray-500 font-['Trajan_Pro']">{item.location}</div>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            <TableCell className="justify-center text-gray-500 text-xs   font-['Trajan_Pro']">
                                                {getStatusChip(item.status)}
                                            </TableCell>

                                            <TableCell className="justify-center text-gray-500 text-xs  font-['Trajan_Pro']">
                                                {item.approvedDate}
                                            </TableCell>

                                            <TableCell className="justify-center text-gray-500 text-xs  font-['Trajan_Pro']">
                                                {item.expiryDate}
                                            </TableCell>

                                            <TableCell className="justify-center text-gray-500 text-xs  font-['Trajan_Pro']">
                                                {item.lastRenewalDate}
                                            </TableCell>

                                            <TableCell className="justify-center">
                                                <div className="flex gap-2 items-center">
                                                    <Image src="/Icons/edit.svg" alt="edit" width={16} height={16} />
                                                    <Image src="/Icons/delete.svg" alt="delete" width={16} height={16} />
                                                    <Image src="/Icons/dots.svg" alt="more" width={16} height={16} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>


                        {/* Pagination */}
                        <div className="flex justify-between items-center mt-4">
                            <button className="flex items-center gap-2 border border-gray-200 font-['Trajan_Pro'] bg-white ml-6">
                                <Image src="/Icons/Down 4.svg" className="mb-1" width={30} height={30} alt="Back" />
                                <span className="text-gray-500 mr-1 text-xs">BACK</span>
                            </button>                          <div className="flex gap-2">
                                <button className="px-3 py-1 border text-gray-400 border-gray-200 bg-white font-['Trajan_Pro']">1</button>
                                <button className="px-3 py-1 bg-gray-800 text-white font-['Trajan_Pro'] rounded-md">2</button>
                                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-400  font-['Trajan_Pro']">3</button>
                                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-400  font-['Trajan_Pro']">4</button>
                                <button className="px-3 py-1 bg-white border border-gray-200 text-gray-400 font-['Trajan_Pro']">5</button>
                            </div>
                            <button className="flex items-center gap-2 border border-gray-200 font-['Trajan_Pro'] bg-white mr-6">

                                <span className="text-gray-500 ml-1 text-xs">NEXT</span>
                                <Image src="/Icons/Down 5.svg" className="mb-1" width={30} height={30} alt="Back" />
                            </button>                          </div>
                    </main>
                </div>
            

        </>
    );
}
