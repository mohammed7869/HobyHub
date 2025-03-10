
import Footer from "../footer/footer";
import HomeNavbar from "../navbar/homenavbar";
import { Categories } from "./categories";
import HobbyGrid from "./hobbygrid";


export default function Home() {
  return (
      <div>
          <Categories />
          <div className="w-full h-[30px] pr-8 bg-[#f1f1f1] md:justify-end justify-center items-center gap-[3.41px] inline-flex">
              <div className="self-stretch pl-[11px] pr-[23px] py-[7px] bg-white rounded-[5px] border-2 border-[#bfbebe] justify-start items-center inline-flex">
                  <div className="w-10 self-stretch pl-[0.47px] pr-[0.28px] py-px justify-center items-center inline-flex overflow-hidden">
                      <div className="w-[39.25px] h-3.5 text-center text-black text-[13.12px] font-semibold font-['Inter'] leading-[14px]">10 KM</div>
                  </div>
              </div>
              <div className="self-stretch pl-[11px] pr-[23px] py-[7px] bg-white rounded-[5px] border-2 border-[#bfbebe] justify-start items-center inline-flex">
                  <div className="w-[115px] self-stretch pl-[32.83px] pr-[32.64px] py-px justify-center items-center inline-flex overflow-hidden">
                      <div className="w-[49.53px] h-3.5 text-center text-black text-xs font-semibold font-['Inter'] leading-[14px]">Near Me</div>
                  </div>
              </div>
          </div>
          <HobbyGrid />
          <Footer/>
      </div>
  );
}