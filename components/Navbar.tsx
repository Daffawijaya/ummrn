import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
import Notification from './Notification';
import MobileMenu from './MobileMenu';

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

const Navbar = () => {
    const router = useRouter();
    return (
        <>
            <nav className="bg-primary px-4 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 overflow-hidden">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://www.umm.ac.id/" className="flex items-center h-10 mr-24">
                        <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="hover:translate-x-1 duration-300 w-full h-full" />
                    </a>
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
                                    <Link href={user.url} className={`text-sm capitalize hover:text-secondary-2 duration-300 hover:scale-105 block
                                        ${router.pathname.includes(user.url)
                                            ? "text-secondary-2 scale-105"
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

export default Navbar