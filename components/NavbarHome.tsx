import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';

const menu = [
    {
        title: "Beranda",
        url: "/home"
    },
    {
        title: "Notifikasi",
        url: "/notification"
    },
]

const tab = [
    {
        title: "Researchers",
        url: "/researches"
    },
    {
        title: "Communities of Practice",
        url: "/communities-of-practice"
    },
    {
        title: "Projects",
        url: "/projects"
    },
    {
        title: "call for projects",
        url: "/call-for-projects"
    },
]

const NavbarHome = () => {
    const router = useRouter();

    return (
        <>
            <nav className="bg-black px-4 xl:px-20 2xl:px-32 py-5 dark:bg-gray-900 fixed w-full z-50 top-0 left-0">
                <div className="flex items-center justify-between container mx-auto">
                    <button className="flex items-center h-10">
                        <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="mr-24 hover:translate-x-1 duration-300 w-full h-full" />
                    </button>

                    <div className="items-center flex w-auto lg:order-1">
                        <div className="flex lg:order-2 items-center space-x-4 ml-12">
                            <ProfileMenu />
                            <div className='text-white lg:hidden'>
                                <MobileMenu />
                            </div>
                        </div>
                        <ul className="lg:grid lg:grid-cols-2 lg:gap-8 lg:block hidden">
                            {menu.map((user: any, idx: number) => (
                                <li key={idx}>
                                    <Link href={user.url} className={`font-medium text-[17px] capitalize duration-300 hover:-translate-x-1 block  rounded lg:bg-transparent
                                        ${router.pathname === user.url
                                            ? "text-secondary-1"
                                            : "text-white"}
                                    `}>
                                        {user.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="hidden lg:block bg-white px-4 xl:px-20 2xl:px-32 py-5 dark:bg-gray-900 fixed z-40 top-[80px] w-full left-0">
                <div className="container flex flex-wrap items-center justify-center mx-auto">
                    <ul className="flex space-x-10">
                        {tab.map((user: any, idx: number) => (
                            <li key={idx}>
                                <Link href={user.url} className={`font-medium text-[17px] capitalize duration-300 hover:-translate-x-1 block rounded lg:bg-transparent
                                        ${router.pathname.includes(user.url)
                                        ? "text-secondary-2"
                                        : "text-black"}
                                    `}>
                                    {user.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavbarHome