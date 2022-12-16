import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';
import Notification from './Notification';

const menu = [
    {
        title: "Home",
        url: "/home"
    },
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
            <nav className="bg-primary md:bg-transparent px-4 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <button className="flex items-center h-10">
                        <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="mr-24 hover:translate-x-1 duration-300 w-full h-full" />
                    </button>
                    <div className="flex md:order-2 items-center space-x-4">
                        <Notification />
                        <ProfileMenu />

                        <div className='md:hidden'>
                            <MobileMenu />
                        </div>

                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex space-x-7">
                            {menu.map((user: any, idx: number) => (
                                <li key={idx}>
                                    <Link href={user.url} className={`text-sm capitalize hover:text-secondary-2 duration-300 hover:scale-105 block  rounded md:bg-transparent
                                        ${router.pathname === user.url
                                            ? "text-secondary-2"
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
        </>
    )
}

export default NavbarHome