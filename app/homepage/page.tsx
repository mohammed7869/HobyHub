
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Footer from "../footer/footer";
import { Categories } from "./categories";
import HobbyGrid from "./hobbygrid";
import { ChevronDown } from "lucide-react";


export default function Homepage() {
  return (
      <div>
          <Categories />
          <div className="w-full h-[30px] pr-8 bg-[#f1f1f1] md:justify-end justify-center items-center gap-[3.41px] inline-flex">
              {/* <div className="self-stretch pl-[11px] pr-[23px] py-[7px] bg-white rounded-[5px] border-2 border-[#bfbebe] justify-start items-center inline-flex">
                  <div className="w-10 self-stretch pl-[0.47px] pr-[0.28px] py-px justify-center items-center inline-flex overflow-hidden">
                      <div className="w-[39.25px] h-3.5 text-center text-black text-[13.12px] font-semibold font-['Inter'] leading-[14px]">10 KM</div>
                  </div>
              </div> */}
              <Select value="10">
                  <SelectTrigger className="self-stretch pl-[10px] pr-[5px] bg-white rounded-[5px] border-2 border-[#bfbebe] justify-between items-center inline-flex min-w-[144px] md:min-w-[74px] max-h-[30px] text-black text-[13.12px] font-semibold font-['Inter'] leading-[14px] [&_svg:last-child]:hidden">
                      <div className="flex-1 text-center"> {/* Center the text */}
                          <SelectValue />
                      </div>
                      <ChevronDown className="w-4 h-4 text-black peer-focus:text-black" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="2">2 KM</SelectItem>
                      <SelectItem value="5">5 KM</SelectItem>
                      <SelectItem value="10">10 KM</SelectItem>
                  </SelectContent>
              </Select>
              {/* <div className="self-stretch pl-[11px] pr-[23px] py-[7px] bg-white rounded-[5px] border-2 border-[#bfbebe] justify-start items-center inline-flex">
                  <div className="w-[115px] self-stretch pl-[32.83px] pr-[32.64px] py-px justify-center items-center inline-flex overflow-hidden">
                      <div className="w-[49.53px] h-3.5 text-center text-black text-xs font-semibold font-['Inter'] leading-[14px]">Near Me</div>
                  </div>
              </div> */}
              <Select value="2">
                  <SelectTrigger className="self-stretch pl-[10px] pr-[5px] bg-white rounded-[5px] border-2 border-[#bfbebe] justify-between  min-w-[144px] md:min-w-[149px] items-center inline-flex max-h-[30px] text-black text-[13.12px] font-semibold font-['Inter'] leading-[14px] [&_svg:last-child]:hidden">
                  <div className="flex-1 text-center"> {/* Center the text */}
                  <SelectValue />
                  </div>
                      <ChevronDown className="w-4 h-4 text-black peer-focus:text-black" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="2">Near Me</SelectItem>
                      <SelectItem value="5">Popular</SelectItem>
                      <SelectItem value="10">Whats New</SelectItem>
                  </SelectContent>
              </Select>
          </div>
          <HobbyGrid />
          <Footer/>
      </div>
  );
}