"use client";


import { useRouter } from "next/navigation";
import { useSidebar } from "./sidebarContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

// Menu items.
const menuItems = [
    { name: "Hobby Classes",  link: "/hobby-list" },
    { name: "Join Hobby Hub",  link: "/vendor/registration" },
    { name: "Selling (Coming Soon)",  link: "/" },
  ];

export function AppSidebar() {
    const isMobile = useIsMobile();
        const router = useRouter();
    const { isSidebarOpen, toggleSidebar } = useSidebar();

    const handleNavigation= (route: string) => {
        router.push(route);
        toggleSidebar();
      };
  return (
    <Sheet open={isSidebarOpen} onOpenChange={toggleSidebar}>
    <SheetContent side={isMobile ? "left" : "right"} className="max-w-[50%] w-[400px] text-black px-[2px]">
      <nav className="mt-[36px]">
        <span className="  px-6 text-[24px] items-center mb-4">Search</span>
        {menuItems.map((item, index) => (
          <div key={index}  onClick={() => handleNavigation(item.link)}  className="flex items-center text-gray-800 gap-3 px-6 py-[0.5rem] hover:text-gray-800 hover:cursor-pointer">
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
  )
}
