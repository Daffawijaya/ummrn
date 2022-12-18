import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';
import Search from './Search';
import Features from './Features';

interface dataProps {
    setSearch?: any;
}

const menuRight = [
    {
        title: "NOTIFICATION",
        url: "/notification"
    },
]

const menuLeft = [
    {
        title: "DASHBOARD",
        url: "/home"
    },
]

const Navbar = ({ setSearch }: dataProps) => {
    const router = useRouter();

    return (
        <>
            <div className='lg:px-20 sticky top-0 w-full z-50 lg:mt-12'>
                <nav className="shadow-lg bg-white px-6 py-[11px] lg:py-0 dark:bg-gray-900 lg:rounded-md duration-300">
                    <div className='flex justify-between items-center '>
                        <div className='space-x-8 lg:flex hidden lg:mr-[2%] pt-5'>
                            {menuLeft.map((item: any, id: number) => (
                                <div key={id}>
                                    <Link href={item.url}>
                                        <button className={`font-medium text-xl capitalize duration-300 hover:translate-x-1
                                        ${router.pathname === item.url
                                                ? "text-red-600 border-b-[3px] pb-[9px] border-red-600"
                                                : "text-black hover:text-red-600 hover:translate-x-1 block pb-[9px]"}
                                    `}>{item.title}
                                        </button>
                                    </Link>
                                </div>
                            ))}
                            <div><Features /></div>
                        </div>
                        <button className="flex items-center h-8">
                            <Image alt='anjay' src={'/logo-um.png'} height={800} width={800} className="hover:scale-[103%] duration-300 w-full h-full" />
                        </button>
                        <div className='space-x-8 flex pt-5'>
                            <div className='space-x-8 lg:flex hidden'>
                                {menuRight.map((item: any, id: number) => (
                                    <div key={id}>
                                        <Link href={item.url}>
                                            <button className={`font-medium text-xl capitalize duration-300 hover:translate-x-1
                                        ${router.pathname === item.url
                                                    ? "text-red-600 border-b-[3px] pb-[9px] border-red-600"
                                                    : "text-black hover:text-red-600 hover:translate-x-1 block pb-[9px]"}
                                    `}>{item.title}
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className='lg:flex hidden'><ProfileMenu /></div>
                            
                            <div className={`${router.pathname === '/home' ? 'invisible' : ""}`}><Search setSearch={setSearch} /></div>
                        </div>
                    </div>
                </nav>
            </div>
            <button className='lg:hidden fixed inset-x-0 top-0 z-50'>
                <MobileMenu />
            </button>
            <button className='lg:hidden fixed inset-x-0 top-0 z-50'>
                <Search setSearch={setSearch} />
            </button>
        </>
    )
}

export default Navbar