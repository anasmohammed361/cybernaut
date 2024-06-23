"use client"
import { Building, Filter } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const demoClgs = [
  "Vivekanandha College Of Engineering",
  "SRM Institute of Science & Technology",
  "Meenakshi Engineering College",
  "Kings Engineering College",
  "Vivekanandha College Of Engineering",
  "SRM Institute of Science & Technology",
  "Meenakshi Engineering College",
  "Kings Engineering College",
]

const demoSortBy = [
  "Recent Events",
  "College MOU's",
  "Partnership Events",
  "Recent Events",
  "College MOU's",
  "Partnership Events",
  "Recent Events",
  "College MOU's",
  "Partnership Events",
]

const Events = () => {

  const [imageSrc, setImageSrc] = useState<string>('/bg.png')

  return (
    <div className={`font-poppins grid relative lg:grid-cols-5 h-[70vh] py-5 sm:py-0 gap-x-10 place-items-center bg-neutral-200 px-10 rounded-2xl bg-center bg-cover bg-[url("/bg.png")] `}>

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl" />


      {/* Left Filter */}
      <div className="col-span-1 bg-white rounded-2xl z-[1]">
        {/* Tablet and Below Optimization */}
        <div className="flex items-center justify-center p-2 lg:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Building className="text-neutral-400"/>
            </PopoverTrigger>
            <PopoverContent side="bottom" className="ml-6 sm:ml-14 block lg:hidden w-[250px] focus-visible:ring-0 focus-visible:outline-none">
              <div className="bg-white shadow-sm rounded-2xl px-3 py-4 2xl:px-5 2xl:py-6">
                <h5 className="text-lg font-bold mb-2">Colleges</h5>
                <div className="max-h-[290px] overflow-auto">
                  <div className="flex flex-col gap-2.5">
                    {demoClgs.map((item, i) => (
                      <div key={i} className="p-2 text-sm cursor-pointer rounded-lg hover:bg-neutral-100 transition-all">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="lg:block hidden px-3 py-4 2xl:px-5 2xl:py-6">
          <h5 className="text-lg font-bold mb-2">Colleges</h5>
          <div className="max-h-[290px] overflow-auto">
            <div className="flex flex-col gap-2.5">
              {demoClgs.map((item, i) => (
                <div key={i} className="p-2 text-sm cursor-pointer rounded-lg hover:bg-neutral-100 transition-all">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main */}
      <div className="col-span-3 flex flex-col gap-6 px-0 sm:px-5 md:px-10 text-white z-[1]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2.5">
          <span className="max-[400px]:text-[30px] text-[40px] sm:text-[80px] font-bebas md:max-w-[5ch] whitespace-normal break-words text-right leading-[80%] -mt-2">CYBERNAUT</span>
          <span className="max-[400px]:text-[100px] text-[130px] sm:text-[170px] font-bebas leading-none text-[#E3EFFF] -mt-5 md:mt-0">EVENTS</span>
        </div>
        <div className="text-lg sm:text-[26px] font-bold text-center -mt-5">
          A Lane Back to our accomplishments
        </div>
        <div className="flex flex-col sm:flex-row items-center max-sm:justify-center gap-3">
          <div className="flex flex-col gap-3 text-center sm:text-right">
            <h4 className="text-lg font-bold">Campus Ambassador Program</h4>
            <p className="text-sm font-medium">Engage students as ambassadors to represent Cybernaut on campus</p>
          </div>
          <div className="p-10 bg-blue-500 rounded-full relative flex items-center justify-center">
            <Image src='/play.svg' alt="play button" height={60} width={60} />
          </div>
          <div className="text-lg font-bold">
            1000+ Events Conducted
          </div>
        </div>
      </div>

      {/* Right Filter */}
      <div className="col-span-1 bg-white rounded-2xl z-[1]">
        <div className="flex items-center justify-center p-2 lg:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Filter className="text-neutral-400" />
            </PopoverTrigger>
            <PopoverContent side="bottom" className="ml-6 sm:ml-14 block lg:hidden w-[250px] focus-visible:ring-0 focus-visible:outline-none">
              <div className="bg-white shadow-sm rounded-2xl px-3 py-4 2xl:px-5 2xl:py-6">
                <h5 className="text-lg font-bold mb-2">Sort by</h5>
                <div className="max-h-[180px] overflow-auto">
                  <div className="flex flex-col gap-2.5">
                    {demoSortBy.map((item, i) => (
                      <div key={i} className="p-2 text-sm cursor-pointer rounded-lg hover:bg-neutral-100 transition-all">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="lg:block hidden px-3 py-4 2xl:px-5 2xl:py-6">
          <h5 className="text-lg font-bold mb-2">Sort By</h5>
          <div className="max-h-[180px] overflow-auto">
            <div className="flex flex-col gap-2.5">
              {demoClgs.map((item, i) => (
                <div key={i} className="p-2 text-sm cursor-pointer rounded-lg hover:bg-neutral-100 transition-all">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Image src={imageSrc} alt="cover image" className="object-cover" /> */}
    </div>
  )
}

export default Events