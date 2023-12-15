import ResponsiveImage from '@/components/responsiveImage'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen  max-w-screen overflow-hidden flex-col sm:items-center">

      <div className="border-x-[1px] border-gray-200 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-screen">

        <h6 className="font-medium text-xl md:text-2xl p-4 pt-8 md:p-8 md:pb-0">Booking Details</h6>
        <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-8">
          <div className="flex gap-4">
            <div className="w-[4rem] md:w-[8rem]">
              <ResponsiveImage
                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702645611/IMG_9577_gs8kfe.png"
                aspectRatio={1 / 1}
                alt="test"
                layout="responsive"
                width={0}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-base md:text-lg font-medium">Natural Weave and charcoal black</h4>
              <div className="flex gap-2 md:gap-4">
                <div className="w-[2rem] md:w-[4rem]">
                  <ResponsiveImage
                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1702651287/Rectangle_2776_ddqljy.png"
                    aspectRatio={1 / 1}
                    alt="test"
                    layout="responsive"
                    // objectFit="cover"
                    width={0}
                  />
                </div>

                <div>
                  <h6>Mie’s Stylist Parlor</h6>
                  <p className="text-gray-500 text-sm md:text-base">Owned by <span className="text-black">Angella Valdez</span></p>
                  <p className="text-gray-500 text-sm md:text-base">Contact:<span className="text-black">{`(276) 496-7367`}</span></p>
                </div>
              </div>

            </div>

          </div>

          <div className="flex gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days text-[#CC0087] w-5 h-5 md:w-6 md:h-6"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                <p className="font-medium text-sm md:text-base my-auto">Friday, 20th February 2023</p>
              </div>

              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-3 text-[#CC0087] w-5 h-5 md:w-6 md:h-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16.5 12" /></svg>

                <p className="font-medium text-sm md:text-base my-auto">11:00am</p>
              </div>

              <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#CC0087] w-5 h-5 md:w-6 md:h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>

                <p className="font-medium text-sm md:text-base my-auto">Chicago</p>
              </div>

            </div>

          </div>

        </div>



        <Separator />



        <div className="p-4 md:p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-x text-[#CC0087] w-5 h-5 md:w-6 md:h-6"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><line x1="10" x2="14" y1="14" y2="18" /><line x1="14" x2="10" y1="14" y2="18" /></svg>
              <p className="md:text-lg font-medium">Cancellation Policy</p>
            </div>

            <p className='text-gray-500 text-sm md:text-lg'>
              You will not be charged if you cancel or modify this booking at least 48 hours before your original booking start date.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-x text-[#CC0087] w-5 h-5 md:w-6 md:h-6"><circle cx="12" cy="12" r="10" /><path d="m4.9 4.9 14.2 14.2" /></svg>
              <p className="md:text-lg font-medium">No show Policy</p>
            </div>

            <p className='text-gray-500 text-sm md:text-lg'>
              You will not be charged if you cancel or modify this booking at least 48 hours before your original booking start date.
            </p>
          </div>


          <div className="flex flex-col gap-1">
            <div className='flex gap-2'>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                <g clip-path="url(#clip0_1_1058)">
                  <path d="M8.45652 17.173L6.4044 14.0949H7.43046V12.0427H9.48257V14.0949H10.5086L8.45652 17.173ZM15.6389 1.78216V9.99063H1.27411V1.78216H15.6389ZM16.665 0.756104H0.248047V11.0167H16.665V0.756104Z" fill="#CC0087" />
                  <path d="M8.45616 2.80835C9.27254 2.80835 10.0555 3.13266 10.6328 3.70993C11.21 4.2872 11.5343 5.07014 11.5343 5.88653C11.5343 6.70291 11.21 7.48585 10.6328 8.06312C10.0555 8.64039 9.27254 8.9647 8.45616 8.9647H13.5864V7.93864H14.6125V3.83441H13.5864V2.80835H8.45616ZM5.37798 5.88653C5.37798 5.07014 5.70229 4.2872 6.27956 3.70993C6.85683 3.13266 7.63977 2.80835 8.45616 2.80835H3.32586V3.83441H2.2998V7.93864H3.32586V8.9647H8.45616C7.63977 8.9647 6.85683 8.64039 6.27956 8.06312C5.70229 7.48585 5.37798 6.70291 5.37798 5.88653Z" fill="#CC0087" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1058">
                    <rect width="16.4169" height="16.4169" fill="white" transform="translate(0.248047 0.756104)" />
                  </clipPath>
                </defs>
              </svg>

              <p className="md:text-lg font-medium">Deposit Policy</p>
            </div>

            <p className='text-gray-500 text-sm md:text-lg'>
              You will not be charged if you cancel or modify this booking at least 48 hours before your original booking start date.
            </p>
          </div>
        </div>

        <Separator />

        <div className="p-4 md:p-8 flex flex-col gap-8 max-w-[30rem]">
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-x text-[#CC0087] w-5 h-5 md:w-6 md:h-6"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><line x1="10" x2="14" y1="14" y2="18" /><line x1="14" x2="10" y1="14" y2="18" /></svg>
            <p className="md:text-lg font-medium">Cost breakdown</p>

            <Badge variant="outline" className="ml-6 md:ml-12 font-medium bg-[#EFEFEF]">Credit Card</Badge>
          </div>

          <div className="flex flex-col gap-1">
            <div className='w-full flex justify-between'>
              <p className=" text-[#1E1E1E]">Natural Glam Look </p>
              <p className="text-[#505050]">$200</p>
            </div>

            <div className='w-full flex justify-between'>
              <p className=" text-[#1E1E1E]">Add on 1</p>
              <p className="text-[#505050]">$3.75</p>
            </div>

            <div className='w-full flex justify-between'>
              <p className=" text-[#1E1E1E]">Tax</p>
              <p className="text-[#505050]">$5.00</p>
            </div>

            <Separator />

            <div className='w-full flex justify-between'>
              <p className="font-medium text-lg text-[#1E1E1E]">Total</p>
              <p className="font-medium text-lg">$207.75</p>
            </div>
            <Separator />
          </div>

        </div>
      </div>


    </main>
  )
}
