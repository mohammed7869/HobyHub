'use client'

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartConfig, ChartContainer,  ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const data = [
    { name: "02 Jan", active: 80, inactive: 40 },
    { name: "02 Jan", active: 90, inactive: 42 },
    { name: "03 Jan", active: 80, inactive: 40 },
    { name: "04 Jan", active: 85, inactive: 35 },
    { name: "05 Jan", active: 90, inactive: 40 },
    { name: "06 Jan", active: 70, inactive: 25 },
    { name: "07 Jan", active: 88, inactive: 30 },
    { name: "09 Jan", active: 95, inactive: 35 },
    { name: "10 Jan", active: 70, inactive: 25 },
    { name: "11 Jan", active: 88, inactive: 30 },
    { name: "12 Jan", active: 95, inactive: 35 },
];

const studentsdata = [
    { name: "02 Jan", active: 5, inactive: 4 },
    { name: "03 Jan", active: 6, inactive: 5 },
    { name: "04 Jan", active: 5, inactive: 4 },
    { name: "05 Jan", active: 7, inactive: 5 },
    { name: "06 Jan", active: 6, inactive: 5 },
    { name: "07 Jan", active: 5, inactive: 4 },
    { name: "08 Jan", active: 9, inactive: 8 },
    { name: "05 Jan", active: 8, inactive: 7 },
    { name: "06 Jan", active: 7, inactive: 6 },
    { name: "07 Jan", active: 9, inactive: 8 },
    { name: "08 Jan", active: 8, inactive: 7 },
];

export default function VendorDashboard() {

    const chartConfig = {
        desktop: {
            label: "Active",
            color: "#ffff",
        },
        inactive: {
            label: "InActive",
            color: "#F4F4F5",
        },
    } satisfies ChartConfig



    return (
        <div className="flex h-screen bg-white">
            <div className="flex-1 p-6">
                <div className="flex justify-between">
                    <h1 className="text-[#626363] text-[21.20px] font-medium font-['Minion_Pro'] mb-4">Dashboard</h1>
                    <Select value="7 Days">
                        <SelectTrigger className="w-[133px] h-[41px] rounded-[7px]">
                            <SelectValue className="text-[#9fa2a8] text-sm font-bold font-['Trajan_Pro']"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7 Days" className="text-[#9fa2a8] text-sm font-bold font-['Trajan_Pro']">Last 7 Days</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-[#fefefe] shadow-none rounded-none border-[3px] border-zinc-100 p-2 px-0">
                        <CardContent className="relative px-0">
                            <div className="absolute px-4">
                                <h2 className="text-[#5c7492] text-[22.20px] font-bold font-['Trajan_Pro']">4,573</h2>
                                <p className="text-[#a6a6a6] text-base font-bold font-['Trajan_Pro']">Active Programs</p>
                            </div>
                            <ChartContainer config={chartConfig} className="p-0 w-full h-50">
                                <AreaChart
                                    accessibilityLayer
                                    data={studentsdata}
                                >


                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="dot" />}
                                    />
                                    <Area
                                        dataKey="active"
                                        type="natural"
                                        fill="#fff"
                                        fillOpacity={1.8}
                                        stroke="#05244F"
                                        stackId="a"
                                        strokeWidth={2}
                                    />
                                    <Area
                                        dataKey="inactive"
                                        type="natural"
                                        fill="#C8CBD3"
                                        fillOpacity={0.4}
                                        stroke="#C8CBD3"
                                        stackId="b"
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#fefefe] shadow-none rounded-none border-[3px] border-zinc-100 p-2 px-0">
                        <CardContent className="relative px-0">
                            <div className="absolute px-4">
                                <h2 className="text-[#5c7492] text-[22.20px] font-bold font-['Trajan_Pro']">156</h2>
                                <p className="text-[#a6a6a6] text-base font-bold font-['Trajan_Pro']">Expired Programs</p>
                            </div>
                            <ChartContainer config={chartConfig} className="p-0 w-full h-50">
                                <AreaChart
                                    accessibilityLayer
                                    data={studentsdata}
                                >


                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="dot" />}
                                    />
                                    <Area
                                        dataKey="active"
                                        type="natural"
                                        fill="#fff"
                                        fillOpacity={1.8}
                                        stroke="#05244F"
                                        stackId="a"
                                        strokeWidth={2}
                                    />
                                    <Area
                                        dataKey="inactive"
                                        type="natural"
                                        fill="#C8CBD3"
                                        fillOpacity={0.4}
                                        stroke="#C8CBD3"
                                        stackId="b"
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#fefefe] shadow-none rounded-none border-[3px] border-zinc-100 p-2 px-0">
                        <CardContent className="relative px-0">
                            <div className="absolute px-4">
                                <h2 className="text-[#5c7492] text-[22.20px] font-bold font-['Trajan_Pro']">1,206</h2>
                                <p className="text-[#a6a6a6] text-base font-bold font-['Trajan_Pro']">Prospect Students</p>
                            </div>
                            <ChartContainer config={chartConfig} className="p-0 w-full h-50">
                                <AreaChart
                                    accessibilityLayer
                                    data={studentsdata}
                                >


                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent indicator="dot" />}
                                    />
                                    <Area
                                        dataKey="active"
                                        type="natural"
                                        fill="#fff"
                                        fillOpacity={1.8}
                                        stroke="#05244F"
                                        stackId="a"
                                        strokeWidth={2}
                                    />
                                    <Area
                                        dataKey="inactive"
                                        type="natural"
                                        fill="#C8CBD3"
                                        fillOpacity={0.4}
                                        stroke="#C8CBD3"
                                        stackId="b"
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Active Student Chart */}
                <Card className="bg-white rounded-[14px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                    <CardContent>
                    <div className="flex justify-between">
                    <h1 className="text-[#6b6b6b] text-[21.40px] font-normal font-['Trajan_Pro'] mb-2">Active Student</h1>
                    <div className="flex justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#179ff3] rounded-full h-4 w-4"></div>
                                <span className="text-[#bbbbbb] text-xs font-bold font-['Trajan_Pro']">Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#ff4e4e] rounded-full h-4 w-4"></div>
                                <span className="text-[#bbbbbb] text-xs font-bold font-['Trajan_Pro']">InActive</span>
                        </div>
                    <Select value="7 Days">
                        <SelectTrigger className="w-[133px] h-[41px] rounded-[7px]">
                            <SelectValue className="text-[#9fa2a8] text-sm font-bold font-['Trajan_Pro']"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7 Days" className="text-[#9fa2a8] text-sm font-bold font-['Trajan_Pro']">1 Week</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                </div>
                        <ChartContainer config={chartConfig} className="p-0 w-full h-85">
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="active" stroke="#2563EB" fill="#93C5FD" />
                            <Area type="monotone" dataKey="inactive" stroke="#EF4444" fill="#FECACA" />
                        </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
