import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import ModalLogout from "./ModalLogout";
import { useRouter } from "next/router";
const menuHead = [
    {
        title: "DASHBOARD",
        url: "/home"
    },
]

const menuBody = [
    {
        title: "RESEARCHERS",
        url: "/researches"
    },
    {
        title: "COP",
        url: "/communities-of-practice"
    },
    {
        title: "PROJECTS",
        url: "/projects"
    },
    {
        title: "CFP",
        url: "/call-for-projects"
    },
]


const menuBottom = [
    {
        title: "PROFILE",
        url: "/profile"
    },
    {
        title: "NOTIFICATION",
        url: "/notification"
    },
    {
        title: "SIGNOUT",
        url: "/notification"
    },
]

const ProfileMenu = () => {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);
    const [isRotated, setIsRotated] = React.useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
        setIsRotated((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <div className="fixed flex w-full flex-col top-[24px] items-center z-50">
                <button
                    onClick={handleClick}
                    className="duration-300 font-medium text-xl flex items-center space-x-2 border-b-[3px] pb-[11px] border-red-500"
                >
                    <a className="capitalize">Menu</a>
                    <a className={`${isRotated ? 'rotate-180' : ''} transition`}><FiChevronDown /></a>
                </button>

                {showOptions && (
                    <div onClick={handleClick} className="w-full inset-0 top-10 bg-white py-5 border-t rounded-b-md shadow-md">
                        <div onClick={(event) => event.stopPropagation()} className="w-full space-y-2">
                            {menuBottom.map((item: any, id: number) => (
                                <div key={id}>
                                    <Link href={item.url} className={`font-medium text-xl capitalize duration-300 hover:translate-x-1
                                     ${router.pathname === item.url
                                            ? "text-red-600 "
                                            : "text-black hover:text-red-600"}
                                 `}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                            <div className="h-2"></div>
                            {menuHead.map((item: any, id: number) => (
                                <div key={id}>
                                    <Link href={item.url} className={`font-medium text-xl capitalize duration-300 hover:translate-x-1
                                     ${router.pathname === item.url
                                            ? "text-red-600 "
                                            : "text-black hover:text-red-600"}
                                 `}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                            {menuBody.map((item: any, id: number) => (
                                <div key={id}>
                                    <Link href={item.url} className={`font-medium text-xl capitalize duration-300 hover:translate-x-1
                                     ${router.pathname === item.url
                                            ? "text-red-600 "
                                            : "text-black hover:text-red-600"}
                                 `}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default ProfileMenu;
