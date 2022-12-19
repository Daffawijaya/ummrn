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
        title: "COMMUNITIES OF PRACTICE",
        url: "/communities-of-practice"
    },
    {
        title: "PROJECTS",
        url: "/projects"
    },
    {
        title: "CALL FOR PROJECTS",
        url: "/call-for-projects"
    },
]


const menuBottom = [
    {
        title: "PROFILE",
        url: "/profil"
    },
    {
        title: "NOTIFICATION",
        url: "/notification"
    },
]

const MobileMenu = () => {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);
    const [isRotated, setIsRotated] = React.useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
        setIsRotated((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <div>
                <button
                    onClick={handleClick}
                    className="duration-300 font-medium text-xl flex items-center space-x-2 border-b-[3px] pb-[11px] border-red-500"
                >
                    <a className="capitalize">Menu</a>
                    <a className={`${isRotated ? 'rotate-180' : ''} transition`}><FiChevronDown /></a>
                </button>

                {showOptions && (
                    <div onClick={handleClick} className="absolute inset-x-0 text-center bg-white border-t py-5 rounded-b-lg shadow-lg">
                        <div onClick={(event) => event.stopPropagation()} className="">
                            <div className="space-y-2">
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
                            </div>

                            <div className="py-2">
                                <ModalLogout />
                            </div>

                            <div className="h-2 py-2"></div>

                            <div className="space-y-2">
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
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default MobileMenu;
