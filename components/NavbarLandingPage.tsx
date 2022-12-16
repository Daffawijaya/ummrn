import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';

const menu = [
    {
        title: "Home",
        url: "/"
    },
]

const NavbarLandingPage = () => {
    const router = useRouter();

    return (
        <>
            <nav className="bg-transparent 2xl:px-32 px-4 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <button  className="flex items-center h-10">
                        <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="hover:translate-x-1 duration-300 w-full h-full" />
                    </button>
                    
                    <div className="items-center justify-between w-full flex w-auto order-1" id="navbar-sticky">
                        <ul className="flex space-x-7">
                            {menu.map((user: any, idx: number) => (
                                <li key={idx}>
                                    <Link href={user.url} className={`text-sm capitalize hover:text-secondary-2 duration-300 hover:scale-105 block  rounded md:bg-transparent
                                        ${router.pathname === user.url
                                            ? "text-white"
                                            : "text-white"}
                                    `}>
                                        {user.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex order-2 items-center space-x-2">
                        <Link href={'login'}>
                            <button type="button" className="text-white bg-secondary-2 px-5 py-1.5 rounded-lg hover:bg-secondary-3 duration-300 hover:-translate-x-1">Masuk</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarLandingPage