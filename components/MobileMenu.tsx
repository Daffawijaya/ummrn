import React from 'react'
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { MdOutlineClose } from "react-icons/md";

const menu = [
    {
        title: "Beranda",
        url: "/home"
    },
    {
        title: "Notification",
        url: "/notification"
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

const MobileMenu = () => {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setShowOptions(!showOptions);
    };
    return (
        <React.Fragment>
            <div className="flex flex-col items-end z-50">
                <button onClick={handleClick}>
                    <HiMenu className="hover:-translate-x-1 duration-300 h-6 w-6 text-gray-400" />
                </button>

                {showOptions && (
                    <div onClick={handleClick} className="w-full h-full inset-0 fixed">
                        <div onClick={(event) => event.stopPropagation()} className="overflow-hidden absolute bg-white w-full flex flex-col pt-3 pb-6">
                            <div className='container mx-auto px-4 mt-6'>
                                <div className='text-black pb-4 flex justify-end'>
                                    <div onClick={handleClick} className='hover:text-red-500 duration-300 hover:scale-110'>
                                        <MdOutlineClose />
                                    </div>
                                </div>
                                <h1 className='text-gray-500 font-thin text-xs pb-2'>Menu</h1>
                                {menu.map((menu: any, idx: number) => (
                                    <div key={idx} className="">
                                        <Link href={menu.url}>
                                            <button className={`text-sm font-medium capitalize hover:text-secondary-2 duration-300 hover:scale-105 block
                                        ${router.pathname === menu.url
                                                    ? "text-secondary-2 scale-105"
                                                    : "text-black"}
                                    `}>
                                                <p className="text-start capitalize hover:translate-x-1 duration-300 w-full h-full py-2 hover:text-secondary-2">
                                                    {menu.title}
                                                </p>
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default MobileMenu