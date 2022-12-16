import Link from 'next/link';
import React from 'react';
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ModalLogout = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <React.Fragment>
            <button
                className="w-full flex duration-300 text-sm text-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={() => setShowModal(true)}
            >
                <p className='hover:-translate-x-1 duration-300 py-3 px-4 w-full flex justify-start'>Sign out</p>
            </button>
            {showModal && (
                <div onClick={() => setShowModal(false)} className='fixed inset-0 z-40 w-screen flex items-center justify-center h-screen bg-opacity-30 bg-black duration-300 backdrop-blur-sm'>
                    <div onClick={(event) => event.stopPropagation()} className='duration-300 hover:scale-[102%] relative flex-col space-y-5 inset-0 bg-white shadow-md z-50 px-9 py-9 flex items-center justify-center rounded-lg w-96'>
                        <AiOutlineInfoCircle className='h-14 w-14 text-red-500' />
                        <p className='font-medium text-xl text-black text-center'>Apakah Anda Yakin Ingin Keluar?</p>
                        <div className='flex space-x-2'>
                            <button onClick={() => setShowModal(false)} className='font-medium hover:scale-[103%] duration-300 w-24 py-1 rounded-md hover:bg-gray-200 bg-white border border-2 border-gray-500 hover:border-red-500 hover:text-red-500'>Tidak</button>
                            <Link href={"/"}>
                                <button onClick={() => setShowModal(false)} className='hover:scale-[103%] duration-300 w-24 py-1 rounded-md bg-red-500 hover:bg-red-700 text-white border border-2 border-red-500 hover:border-red-700'>Iya</button>
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default ModalLogout;

