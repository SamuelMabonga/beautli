"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

export default function Menu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-8">
                        {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                        <div className="p-4 md:p-8 flex flex-col gap-4 bg-[#F4F4F4]">
                            <div className="flex gap-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col my-auto">
                                    <h4 className="md:text-lg font-bold">Mie’s beauty parlour accepted your booking req...</h4>
                                    <p className="text-gray-500">$500 <span className="h-full w-[1px] bg-black" /> <span>For June 20th, 2023</span></p>

                                </div>

                            </div>

                        </div>

                        <Separator />


                        <div className="flex gap-4 p-8 bg-[#F4F4F4]">

                            <div className="flex flex-col gap-2">
                                <h4 className="md:text-lg font-bold">Deposit sent to Jane’s beauty Parlour for medium short braids.</h4>
                                <p className="text-gray-500" >$50 <span className="h-full w-[1px] bg-black" /> <span>For June 20th, 2023</span></p>

                            </div>

                        </div>

                        <Separator />

                        <div className="p-4 md:p-8 flex flex-col gap-4 bg-[#F4F4F4]">
                            <div className="flex gap-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col my-auto">
                                    <h4 className="md:text-lg font-bold">Rebecca Wright  sent you a message.</h4>
                                    <p className="text-gray-500">Hey are you available to do these conrows for me.....</p>
                                </div>

                            </div>

                        </div>

                        <Separator />


                        <div className="flex gap-4 p-8">

                            <div className="flex flex-col gap-2">
                                <h4 className="md:text-lg font-bold">You have cancelled your Natural glam look appointment.</h4>
                                <p className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-[#CC0087]"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                                    <span className="font-bol">$70 charged</span>
                                </p>

                            </div>

                        </div>

                        <Separator />

                        <div className="p-4 md:p-8 flex flex-col gap-4">
                            <div className="flex gap-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col my-auto">
                                    <h4 className="md:text-lg font-bold">Samantha accepted your booking request</h4>
                                    <p>$350 <span className="h-full w-[1px] bg-black" /> <span className='text-gray-500'>For June 20th, 2023</span></p>

                                </div>

                            </div>

                        </div>

                        <Separator />

                        <div className="p-4 md:p-8 flex flex-col gap-4">
                            <div className="flex gap-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col gap-2">
                                    <h4 className="md:text-lg font-bold">Samantha accepted your booking request</h4>

                                    <div className="flex gap-4">
                                        <Button variant="default" className="font-bold bg-[#CC0087]">Review</Button>
                                        <Button variant="outline" className="font-bold">Decline</Button>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <Separator />


                        <div className="flex gap-4 p-8">

                            <div className="flex flex-col gap-2">
                                <h4 className="md:text-lg font-bold">You have cancelled your Natural glam look appointment.</h4>
                                <p className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-[#CC0087]"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                                    <span>$70 charged</span>
                                </p>

                            </div>

                        </div>

                        <Separator />

                        <div className="p-4 md:p-8 flex flex-col gap-4">
                            <div className="flex gap-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col gap-2">
                                    <h4 className="md:text-lg font-bold">Rebecca Wright  sent you a message.</h4>
                                    <p>Hey are you available to do these conrows for me.....</p>

                                </div>

                            </div>

                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}