"use client";

import Image from "next/image";

export default function AuthNavbar() {
  return (
    <nav className="w-full h-[145px] app-bg-color content-center p-4">
        <div className="container mx-auto flex justify-center">
          <div className="text-white font-bold text-lg flex items-center gap-2">
            <Image src="/images/HobyHub.ai.png" alt="Logo" width={284} height={70} />
            
          </div>
        </div>
      </nav>
  );
}
