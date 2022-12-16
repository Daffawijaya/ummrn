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

interface dataProps {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}

const NavbarLandingPage = ({ isAuth, setIsAuth }: dataProps) => {
    const router = useRouter();

    const handleClick = () => {
        setIsAuth(!isAuth)
    }

    return (
        <>
            <nav className="bg-primary md:bg-transparent px-4 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <button onClick={handleClick} className="flex items-center h-10">
                        <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="hover:translate-x-1 duration-300 w-full h-full" />
                    </button>
                    <div className="flex md:order-2 items-center space-x-2">
                        {!isAuth ?
                            <Link href={'login'}>
                                <button type="button" className="text-white bg-secondary-2 px-5 py-1.5 rounded-lg hover:bg-secondary-3 duration-300 hover:-translate-x-1">Masuk</button>
                            </Link>
                            :
                            <ProfileMenu />}
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

export default NavbarLandingPage