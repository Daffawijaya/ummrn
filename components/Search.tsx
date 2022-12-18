import React from 'react'
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

interface dataProps {
    setSearch: any;
}

const Search = ({ setSearch }: dataProps) => {

    const [showOptions, setShowOptions] = useState(false);
    const handleSearchChange = (e: any) => {
        setSearch(e.target.value);
    }

    return (
        <>
            <button onClick={() => setShowOptions(!showOptions)} className="">
                <IoSearch className='z-30 relative h-6 w-6 text-gray-500 hover:text-red-600 duration-300 hover:-translate-x-1' />
            </button>

            {showOptions &&
                <div onClick={() => setShowOptions(false)} className="absolute h-screen w-full inset-0">
                    <div onClick={(event) => event.stopPropagation()} className='lg:px-[105px] absolute inset-0 top-[26px] z-30 lg:mt-[37px] mt-[39px] z-0 max-h-16 '>
                        <input onChange={handleSearchChange} placeholder='Search...' type="text" className='focus:border-none duration-300 focus:ring-red-600 flex border-gray-200 items-center w-full bg-gray-50 pb-3 pt-4 px-6 lg:rounded-md text-xl'>
                        </input>
                    </div>

                </div>

            }

        </>
    )
}

export default Search