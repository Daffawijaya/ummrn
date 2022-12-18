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

const Navbar = ({ setSearch }: dataProps) => {
    const router = useRouter();

    return (
        <>
            <div className='lg:px-[105px] sticky top-0 w-full z-20 lg:mt-12'>
                <nav className="shadow-lg bg-white px-6 py-2.5 dark:bg-gray-900 lg:rounded-md duration-300">
                    <div className='flex justify-center items-center '>
                        <button className="flex items-center h-8">
                            <Image alt='anjay' src={'/logo-um.png'} height={800} width={800} className="hover:scale-[103%] duration-300 w-full h-full" />
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar