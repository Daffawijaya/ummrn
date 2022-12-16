import { IoMdNotifications } from "react-icons/io";
import React from "react";
import { useState } from "react";

const Notification = () => {

    const [showOptions, setShowOptions] = useState(false);

    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <React.Fragment>
            <div className="flex flex-col items-end z-50">
                <button onClick={handleClick}>
                    <IoMdNotifications className="hover:-translate-x-1 duration-300 h-6 w-6 text-gray-400" />
                </button>

                {showOptions && (
                    <div onClick={handleClick} className="w-full h-full inset-0 fixed">
                        <div onClick={(event) => event.stopPropagation()} className="overflow-hidden absolute top-16 md:right-[200px] right-[120px] border bg-white divide-y divide-gray-100 rounded shadow w-[250px] md:w-[300px]">
                            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <p className="hover:-translate-x-1 duration-300 w-full h-full py-2 px-4">Anda Login 5 hari yang lalu</p>
                            </ul>
                            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <p className="hover:-translate-x-1 duration-300 w-full h-full py-2 px-4">Sawadikap kapunkap ikan kakap</p>
                            </ul>
                            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <p className="hover:-translate-x-1 duration-300 w-full h-full py-2 px-4">Ikan hiu makan paus, aku suka kamu</p>
                            </ul>
                            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <p className="hover:-translate-x-1 duration-300 w-full h-full py-2 px-4">Kenapa banyakan rumah makan dari pada bank? karena orang kerja buat cari makan, bukan buat cari uang</p>
                            </ul>
                            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <p className="hover:-translate-x-1 duration-300 w-full h-full py-2 px-4">capek dah</p>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Notification;
