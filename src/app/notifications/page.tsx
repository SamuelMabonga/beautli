
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Home() {
    return (
        <main className="flex min-h-screen  max-w-screen overflow-hidden flex-col sm:items-center">

            <div className="md:border-x-[1px] border-gray-200 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-screen">

                <div className="flex justify-between p-4 pt-8" >
                    <h6 className="font-medium text-xl md:text-2xl">Notifications</h6>

                    <div className="flex gap-2 my-auto">
                        <p className="text-sm md:text-base">Personal</p>
                        <Badge variant="outline" className="w-fit h-fit bg-[#CC0087] text-white">20</Badge>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>

                <div className="p-4 md:p-8 flex flex-col bg-[#F4F4F4]">
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 md:w-16 md:h-16">
                            <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Ellipse_243_rtu0es.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col my-auto">
                            <h4 className="md:text-lg font-medium">Mie’s beauty parlour <span className="font-thin">accepted your booking req...</span></h4>
                            <p className="text-gray-500">$500 <span className="h-full w-[1px] bg-black" /> <span>For June 20th, 2023</span></p>

                        </div>

                    </div>
                    <p className="text-gray-500 text-right text-sm">5m</p>
                </div>

                <Separator />


                <div className="flex flex-col p-4 md:p-8 bg-[#F4F4F4]">

                    <div className="flex flex-col">
                        <h4 className="md:text-lg font-medium">Deposit sent to Jane’s beauty Parlour for medium short braids.</h4>
                        <p className="text-gray-500" >$50 <span className="h-full w-[1px] bg-black" /> <span>For June 20th, 2023</span></p>

                    </div>
                    <p className="text-gray-500 text-right text-sm">10m</p>
                </div>

                <Separator />

                <div className="p-4 md:p-8 flex flex-col bg-[#F4F4F4]">
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 md:w-16 md:h-16">
                            <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Mask_group_qdljrw.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col my-auto">
                            <h4 className="md:text-lg font-medium">Rebecca Wright  sent you a message.</h4>
                            <p className="text-gray-500">Hey are you available to do these conrows for me.....</p>
                        </div>

                    </div>
                    <p className="text-gray-500 text-right text-sm">2m</p>
                </div>

                <Separator />


                <div className="flex flex-col p-4 md:p-8">

                    <div className="flex flex-col gap-1">
                        <h4 className="md:text-lg font-medium">You have cancelled your Natural glam look appointment.</h4>
                        <p className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-[#CC0087]"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                            <span className="font-bol">$70 charged</span>
                        </p>

                    </div>
                    <p className="text-gray-500 text-right text-sm">30m</p>
                </div>

                <Separator />

                <div className="p-4 md:p-8 flex flex-col ">
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 md:w-16 md:h-16">
                            <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Ellipse_244_algoqo.pngg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col my-auto">
                            <h4 className="md:text-lg font-medium">Samantha accepted your booking request</h4>
                            <p>$350 <span className="h-full w-[1px] bg-black" /> <span className='text-gray-500'>For June 20th, 2023</span></p>

                        </div>

                    </div>
                    <p className="text-gray-500 text-right text-sm">50m</p>
                </div>

                <Separator />

                <div className="p-4 md:p-8 flex flex-col">
                    <div className="flex gap-4">
                        <Avatar className="w-10 h-10 md:w-16 md:h-16">
                            <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Mask_group_qdljrw.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-1">
                            <h4 className="md:text-lg font-medium">Samantha accepted your booking request</h4>

                            <div className="flex gap-4">
                                <Button variant="default" className="font-medium bg-[#CC0087]">Review</Button>
                                <Button variant="outline" className="font-medium">Decline</Button>
                            </div>

                        </div>

                    </div>
                    <p className="text-gray-500 text-right text-sm">5m</p>
                </div>

                <Separator />

                <div className="flex flex-col p-4 md:p-8">
                    <div className="flex flex-col ">
                        <h4 className="md:text-lg font-medium">You have cancelled your Natural glam look appointment.</h4>
                        <p className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card text-[#CC0087]"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                            <span>$70 charged</span>
                        </p>

                    </div>
                    <p className="text-gray-500 text-right text-sm">5m</p>
                </div>

                <Separator />

                <div className="p-4 md:p-8 flex flex-col ">
                    <div className="flex gap-4">
                        <Avatar className="w-10 md:w-16 h-10 md:h-16">
                            <AvatarImage src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702669061/Ellipse_243_rtu0es.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                            <h4 className="md:text-lg font-medium">Rebecca Wright  sent you a message.</h4>
                            <p className="text-sm md:text-base text-gray-500">Hey are you available to do these conrows for me.....</p>

                        </div>

                    </div>
                    <p className="text-gray-500 text-right text-sm">5m</p>
                </div>
            </div>
        </main>
    )
}
