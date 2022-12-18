import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const features = [
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

const Features = () => {
    const router = useRouter();
    const [showOptions, setShowOptions] = useState(false);

    return (
        <React.Fragment>
            <div className="flex flex-col items-end">
                <button onClick={() => setShowOptions(!showOptions)} className={`${router.pathname.includes('/researches') ||
                    router.pathname === '/call-for-projects' ||
                    router.pathname === '/communities-of-practice' ||
                    router.pathname === '/projects' ?
                    "text-red-600 border-b-[3px] pb-[9px] border-red-600" : ""} text-xl font-medium hover:text-red-600 hover:translate-x-1 duration-300`}>FEATURES</button>

                {showOptions &&
                    <div onClick={(event) => event.stopPropagation()} className='lg:px-[105px] absolute inset-0 top-[26px] z-30 lg:mt-[37px] mt-[39px] z-0 max-h-16 '>
                        <div className='flex items-center w-full bg-gray-100 rounded-md pb-3 pt-4 px-6 text-xl  font-medium uppercase text-gray-400 space-x-10 justify-start'>
                            {features.map((item: any, id: number) => (
                                <div key={id}>
                                    <Link href={item.url}
                                        className={`font-medium text-xl capitalize duration-300 ${router.pathname === item.url
                                            ? "text-black hover:text-black duration-300 hover:translate-x-1 block"
                                            : "text-gray-400 hover:text-black duration-300 hover:translate-x-1 block"}`}>
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    );
};

export default Features;
