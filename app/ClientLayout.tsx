"use client";
import { usePathname } from "next/navigation";
import HomeNavbar from "./navbar/homenavbar";
import { AppSidebar } from "./sidebar/sidebar";

 // ✅ Mark this as a client component


export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideHomeNavbarRoutes = ["/auth/login","/auth/otp", "/vendor/registration", "/hobby-list", "/hobby-list/hobby-details-page"];
  return (
    <>
      {!hideHomeNavbarRoutes.includes(pathname) && <HomeNavbar />}
      <div>{children}</div>
      <AppSidebar />
    </>
  );
}
