import React from 'react'
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";

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
                        <div onClick={(event) => event.stopPropagation()} className="overflow-hidden absolute top-16 bg-primary w-full flex flex-col py-3 rounded-lg">
                            {menu.map((menu: any, idx: number) => (
                                <div key={idx}>
                                    <Link href={menu.url}>
                                        <button className={`text-sm capitalize hover:text-secondary-2 duration-300 hover:scale-105 block
                                        ${router.pathname === menu.url
                                                ? "text-secondary-2 scale-105"
                                                : "text-white"}
                                    `}>
                                            <p className="text-start capitalize hover:translate-x-1 duration-300 w-full h-full py-2 px-4 hover:text-secondary-2">
                                                {menu.title}
                                            </p>
                                        </button>
                                    </Link>

                                </div>

                            ))}

                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default MobileMenu