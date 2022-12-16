import Link from "next/link";
import React from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import ModalLogout from "./ModalLogout";

const ProfileMenu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-end">
        <div className="bg-white py-2 pl-2 pr-2.5 rounded-full hover:-translate-x-1 duration-300 hover:text-secondary-2">
          <button
            onClick={handleClick}
            className="font-base text-sm flex items-center space-x-3 "
          >
            <Image
              src="/cindy.jpeg"
              width={30}
              height={30}
              alt="User Profile Image"
              className="rounded-full"
            />
            <div className="ml-2">
              <HiMenu className="duration-300 h-5 w-5 text-gray-500" />
            </div>
          </button>
        </div>

        {showOptions && (
          <div onClick={handleClick} className="w-full h-full inset-0 fixed z-50">
            <div onClick={(event) => event.stopPropagation()} className="z-50 overflow-hidden absolute top-20 md:right-[120px] right-20 border bg-white divide-y divide-gray-100 rounded shadow w-44">
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
