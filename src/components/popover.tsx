"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import Link from "next/link"
import { useState } from "react"


export default function PopoverMenu() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Popover open={open} onOpenChange={(e) => {
      setOpen(e)}}>
      <PopoverTrigger>
        <div className={`flex flex-col justify-center cursor-pointer ${open ? "text-[#D94CD3]" : "text-gray-500"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-bell-dot mx-auto`}><path d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /><circle cx="18" cy="8" r="3" /></svg>
          <p className="text-sm hidden md:flex">Notifications</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-3 sm:mr-12 md:mr-24 lg:mr:24 xl:mr-64 rounded-tl-none rounded-tr-none p-0 w-screen sm:w-[30rem]">
        <div className="p-4 flex flex-col bg-[#F4F4F4] cursor-pointer" onClick={() => setOpen(false)}>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Ellipse_244_algoqo.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col my-auto">
              <h4 className=" font-medium">Mie’s beauty parlour accepted your booking req...</h4>
              <p className="text-sm text-gray-500">$500 <span className="h-full w-[1px] bg-black" /> <span>For June 20th, 2023</span></p>

            </div>

          </div>

          <p className="text-gray-500 text-right text-xs">5m</p>
        </div>

        <Separator />


        <div className="flex flex-col p-4 bg-[#F4F4F4] cursor-pointer" onClick={() => setOpen(false)}>

          <div className="flex flex-col gap-2">
            <h4 className=" font-medium">Deposit sent to Jane’s beauty Parlour for medium short braids.</h4>
            <p className="text-gray-500 text-sm" >$50 <span className="h-full w-[1px] bg-black" /> <span>For June 20th, 2023</span></p>

          </div>
          <p className="text-gray-500 text-right text-xs">5m</p>
        </div>

        <Separator />

        <div className="p-4 flex flex-col bg-[#F4F4F4] cursor-pointer" onClick={() => setOpen(false)}>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Ellipse_243_rtu0es.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col my-auto">
              <h4 className="font-medium">Rebecca Wright  sent you a message.</h4>
              <p className="text-gray-500 text-sm">Hey are you available to do these conrows for me.....</p>
            </div>

          </div>

          <p className="text-gray-500 text-right text-xs">5m</p>

        </div>

        <Separator />


        <div className="flex flex-col p-4 cursor-pointer" onClick={() => setOpen(false)}>

          <div className="flex flex-col gap-2">
            <h4 className="font-medium">You have cancelled your Natural glam look appointment.</h4>
            <p className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-[#CC0087] w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
              <span className="font-medium text-sm">$70 charged</span>
            </p>

          </div>

          <p className="text-gray-500 text-right text-xs">5m</p>

        </div>

        <Separator />

        <div className="p-4 flex flex-col cursor-pointer" onClick={() => setOpen(false)}>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Mask_group_qdljrw.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col my-auto">
              <h4 className=" font-medium">Samantha accepted your booking request</h4>
              <p className="text-sm">$350 <span className="h-full w-[1px] bg-black" /> <span className='text-gray-500'>For June 20th, 2023</span></p>

            </div>

          </div>

          <p className="text-gray-500 text-right text-xs">5m</p>

        </div>

        <Separator />

        <div className="p-4 flex flex-col cursor-pointer" onClick={() => setOpen(false)}>
          <div className="flex gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Mask_group_qdljrw.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2">
              <h4 className=" font-medium">Samantha accepted your booking request</h4>

              <div className="flex gap-4">
                <Button size="sm" variant="default" className="font-medium bg-[#CC0087]">Review</Button>
                <Button size="sm" variant="outline" className="font-medium">Decline</Button>
              </div>

            </div>

          </div>
          <p className="text-gray-500 text-right text-xs">5m</p>
        </div>

        <Link href="/notifications" onClick={() => setOpen(false)}>
          <div className="p-4 bg-[#F1B8DD]">
            <p className="text-center " >See all</p>
          </div>
        </Link>

      </PopoverContent>
    </Popover>
  )
}