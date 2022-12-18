import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';
import Search from './Search';
import Features from './Features';
import ModalLogout from './ModalLogout';

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
            <div className='lg:px-[105px] sticky top-0 w-full z-20 lg:mt-12'>
                <nav className="shadow-lg bg-white px-6 lg:py-0 dark:bg-gray-900 lg:rounded-md duration-300">
                    <div className='flex justify-between items-center '>
                        <div className='space-x-8 lg:flex hidden pt-5 lg:mr-[5%]'>
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
                        <div className='lg:hidden pt-5'><MobileMenu /></div>
                        <div className='flex pt-5 space-x-10 ml-[4%] lg:ml-0'>
                            <div className='lg:flex hidden'>
                                {menuRight.map((item: any, id: number) => (
                                    <div key={id}>
                                        <Link href={item.url}>
                                            <button className={`font-medium text-xl capitalize duration-300 hover:-translate-x-1
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

                            <div className={`${router.pathname === '/home' ? '-order-2 invisible' : ""}`}><Search setSearch={setSearch} /></div>
                        
                           
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar