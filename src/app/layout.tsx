import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Logo from '@/components/logo'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import PopoverMenu from '@/components/popover'
import Link from 'next/link'


const poppins = Poppins({
  weight: ['400', "500", '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Beautli',
  description: 'Where beauty meets beauty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="p-4 sm:px-12  md:px-24 lg:px-40 flex justify-between border-b-[1px] border-gray-200 max-w-screen overflow-hidden">
          <Link href="/">
            <Logo />
          </Link>


          <div className='flex gap-24'>
            <div className="relative hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search absolute w-6 h-6 top-[45%] -translate-y-1/2 left-2"
              >
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <Input className='md:w-[300px] w-[400px] pl-10' placeholder="Search" size={56} />
            </div>

            <div className="flex gap-16">
              <div className=" gap-4 flex text-gray-500">
                <div className=" flex-col justify-center cursor-pointer hidden xl:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home mx-auto"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  <p className="text-sm">Home</p>
                </div>

                <div className=" flex-col justify-center cursor-pointer hidden xl:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days mx-auto"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                  <p className="text-sm">Appointments</p>
                </div>

                <div className=" flex-col justify-center cursor-pointer hidden xl:flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus mx-auto"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                  <p className="text-sm">Following</p>
                </div>

                <PopoverMenu />
              </div>


              <Avatar className="hidden lg:block">
                <AvatarImage src="" />
                <AvatarFallback className="bg-pink-300">JK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
