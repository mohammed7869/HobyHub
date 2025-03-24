import Image from "next/image";

export default function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <div className="w-53 text-black flex flex-col justify-between" style={{ backgroundColor: '#F6F8F9' }}>
                <div className="">
                    {/* <h2 className="text-2xl font-bold p-4">HobyHub</h2> */}
                    <nav className="space-y-2 mt-8 ">
                        <a href="#" className="flex p-2 rounded gap-x-3 p-2 pl-6  bg-[#05244F] text-white font-['Minion_Pro'] group">
                            <Image
                                src={"/Icons/Activity 2.svg"}
                                alt="user"
                                height={20}
                                width={20}
                                className="brightness-0 invert"
                            />
                            Dashboard
                        </a>

                        <a href="#" className="flex items-center p-2 pl-6 rounded gap-x-3 font-['Minion_Pro'] group hover:sidebar hover:text-white transition-colors duration-200">
                            <Image
                                src={"/Icons/Program Registered.svg"}
                                alt="user"
                                height={20}
                                width={20}
                                className="group-hover:brightness-0 group-hover:invert transition-all duration-200"
                            />
                            Programs Registered
                        </a>

                        <a href="#" className="flex items-center p-2 pl-6 rounded gap-x-3 font-['Minion_Pro'] group hover:sidebar hover:text-white transition-colors duration-200">
                            <Image
                                src={"/Icons/Time Circle 1.svg"}
                                alt="user"
                                height={20}
                                width={20}
                                className="group-hover:brightness-0 group-hover:invert"
                            />
                            Student History
                        </a>
                        <a href="#" className="flex items-center p-2 pl-6 rounded gap-x-3 font-['Minion_Pro'] group hover:sidebar hover:text-white transition-colors duration-200">
                            <Image
                                src={"/Icons/Folder 2.svg"}
                                alt="user"
                                height={20}
                                width={20}
                                className="group-hover:brightness-0 group-hover:invert"
                            />
                            Progress Summary
                        </a>
                        <a href="#" className="flex items-center p-2 pl-6 rounded gap-x-3 font-['Minion_Pro'] group hover:sidebar hover:text-white transition-colors duration-200">
                            <Image
                                src={"/Icons/Calender 1.svg"}
                                alt="user"
                                height={20}
                                width={20}
                                className="group-hover:brightness-0 group-hover:invert"
                            />
                            Attendance
                        </a>
                    </nav>
                </div>

                {/* Bottom Section: Settings, Help, Profile */}
                <div className="">
                    {/* Settings */}
                    <a href="#" className="flex p-2 rounded p-2 pl-4  gap-x-3 hover:bg-gray-800 hover:text-white font-['Minion_Pro'] group">
                        <Image
                            src={"/Icons/Setting.svg"}
                            alt="user"
                            height={20}
                            width={20}
                            className="group-hover:brightness-0 group-hover:invert"
                        />
                        Settings
                    </a>

                    {/* Get Help */}
                    <a href="#" className="flex p-2 p-2 pl-4  rounded gap-x-3 hover:bg-gray-800 hover:text-white font-['Minion_Pro'] group">
                        <Image
                            src={"/Icons/Happy 1.svg"}
                            alt="user"
                            height={20}
                            width={20}
                            className="group-hover:brightness-0 group-hover:invert"
                        />
                        Get Help
                    </a>
                    <div>
                        {/* Profile Section */}
                        <div className="flex items-center gap-2 p-2 rounded-lg">
                            {/* Profile Image */}
                            <div className="w-[38px] h-[38px] relative rounded-full overflow-hidden">
                                <Image src="/images/profile-pooja.png" alt="Profile" width={38} height={38} />
                            </div>

                            {/* Name & Email */}
                            <div className="flex flex-col flex-grow">
                                <p className="text-sm font-medium">Mayank Kukroti</p>
                                <p className="text-xs text-gray-600">mayank9gmail.com</p>
                            </div>

                            {/* Icon on Right Side */}
                            <Image src="/Icons/Logout.svg" alt="Edit" width={22} height={22} className="cursor-pointer" />
                        </div>


                        {/* Horizontal Line */}
                        <div className="border-t border-gray-300 my-3"></div> {/* Horizontal line */}


                    </div>

                </div>
            </div>
        </>
    );
}
