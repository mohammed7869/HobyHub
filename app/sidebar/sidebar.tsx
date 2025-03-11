"use client";


import { useRouter } from "next/navigation";
import { useSidebar } from "./sidebarContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";

// Menu items.
const menuItems = [
    { name: "Hobby Classes",  link: "/hobby-list" },
    { name: "Join Hobby Hub",  link: "/vendor/registration" },
    { name: "Selling (Coming Soon)",  link: "/" },
  ];

export function AppSidebar() {
        const router = useRouter();
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    const handleNavigation= (route: string) => {
        router.push(route);
        toggleSidebar();
      };
  return (
    <Sheet open={isSidebarOpen} onOpenChange={toggleSidebar}>
    <SheetContent side="right" className="w-96 text-black p-6">
      <nav className="mt-[120px]">
        <span className="  px-6 text-lg items-center mb-4">Program</span>
        {menuItems.map((item, index) => (
          <div key={index}  onClick={() => handleNavigation(item.link)}  className="flex items-center text-gray-800 gap-3 px-6 py-3 hover:text-gray-800 hover:cursor-pointer">
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
  )
}
