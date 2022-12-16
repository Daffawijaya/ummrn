import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import ModalLogout from "./ModalLogout";

const ProfileMenu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isRotated, setIsRotated] = React.useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
    setIsRotated((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-end z-50">
        <button
          onClick={handleClick}
          className="hover:-translate-x-1 duration-300 font-base text-sm flex items-center space-x-2 hover:text-secondary-2"
        >
          <Image
            src="/cindy.jpeg"
            width={30}
            height={30}
            alt="User Profile Image"
            className="rounded-full"
          />
          <a className="capitalize font-medium text-white hidden lg:block">cindy patika sari</a>
          <a className={`${isRotated ? 'rotate-180' : ''} transition duration-200 text-gray-400`}><FiChevronDown /></a>
        </button>

        {showOptions && (
          <div onClick={handleClick} className="w-full h-full inset-0 fixed">
            <div onClick={(event) => event.stopPropagation()} className="overflow-hidden absolute top-16 md:right-5 right-14 border bg-white divide-y divide-gray-100 rounded shadow w-44">
              <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                <div className="truncate">daffawijayaaa</div>
                <div className="font-medium truncate">cindypatikasari@gmail.com</div>
              </div>
              <ul
                className=" text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <Link
                  href={"/profil"}
                  className="block duration-300 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  <p className="hover:-translate-x-1 duration-300 w-full h-full py-2 px-4">Profile</p>
                </Link>
              </ul>
              <div className="w-full">
                <ModalLogout />
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProfileMenu;
