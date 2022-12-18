import Link from "next/link";
import React from "react";
import { useState } from "react";
import ModalLogout from "./ModalLogout";
import { useRouter } from "next/router";

const ProfileMenu = () => {
  const [showOptions, setShowOptions] = useState(false);

  const router = useRouter();

  return (
    <React.Fragment>
      <div className="flex flex-col items-end">
        <button onClick={() => setShowOptions(!showOptions)} className={`${router.pathname === '/profil' ?
          "text-red-600 border-b-[3px] pb-[9px] border-red-600" : ""} text-xl font-medium hover:text-red-600 hover:translate-x-1 duration-300`}>PROFILE</button>

        {showOptions &&
          <div onClick={() => setShowOptions(false)} className="fixed h-screen w-full inset-0 bg-black">
            <div onClick={(event) => event.stopPropagation()} className='lg:px-20 absolute inset-0 top-[26px] z-30 lg:mt-[85px] mt-[39px] z-0 max-h-16 '>
              <div className='flex items-center w-full bg-gray-100 rounded pb-3 pt-4 px-6 text-xl  font-medium uppercase text-gray-400 space-x-10 justify-end'>
                <Link href={'/profil'}
                  className={`font-medium text-xl capitalize duration-300 ${router.pathname === '/profil'
                    ? "text-black hover:text-black duration-300 hover:translate-x-1 block"
                    : "text-gray-400 hover:text-black duration-300 hover:translate-x-1 block"}`}>
                  DETAIL
                </Link>
                <button className="hover:text-black duration-300 hover:-translate-x-1">SIGN OUT</button>
              </div>
            </div>
          </div>
        }
      </div>
    </React.Fragment>
  );
};

export default ProfileMenu;
