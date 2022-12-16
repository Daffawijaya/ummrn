import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import Link from 'next/link'
import { FaUserAlt } from "react-icons/fa";

const menu = [
    {
        title: "Beranda",
        url: "/"
    },
]

const Navbar = () => {
    const router = useRouter();

    return (
        <>
            <nav className="bg-black px-4 xl:px-20 2xl:px-32 py-5 dark:bg-gray-900 fixed w-full z-50 top-0 left-0">
                <div className="flex items-center justify-between container mx-auto">
                    <button className="flex items-center h-10">
                        <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="mr-24 hover:translate-x-1 duration-300 w-full h-full" />
                    </button>

                    <div className="items-center flex w-auto ">
                        <div className="flex order-2 items-center space-x-4 ml-12">
                            <Link href={"/login"}>
                            <div className="bg-white py-2 pl-2 pr-2.5 rounded-full hover:-translate-x-1 duration-300 hover:text-secondary-2">
                                <button
                                    className="font-base text-sm flex items-center space-x-3 "
                                >
                                    <p className='text-gray-400 ml-1'><FaUserAlt /></p>
                                    <div className="ml-2 ">
                                        <p className='mr-1 font-medium'>Masuk ke Akun</p>
                                    </div>
                                </button>
                            </div>
                            </Link>
                            
                        </div>
                        <ul className="lg:grid lg:grid-cols-1 lg:gap-8 lg:block hidden">
                            {menu.map((user: any, idx: number) => (
                                <li key={idx}>
                                    <Link href={user.url} className={` font-medium text-[17px] capitalize duration-300 hover:-translate-x-1 block  rounded lg:bg-transparent
                                        ${router.pathname === user.url
                                            ? "text-white hover:secondary-1"
                                            : "text-white hover:secondary-1"}
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