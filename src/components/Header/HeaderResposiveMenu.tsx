"use client"
import { useState } from "react";
import Menu from "./Menu";
import Image from 'next/image';
import logo from "@/images/logo.png";

function HeaderResposiveMenu(){
    const [isShowMenu, setIsShowMenu] = useState(false);

    return (
        <>
            <div className='relative sm:hidden'>
                <button className='px-2 py-1.5 hover:bg-main hover:text-black transition flex items-center'
                    onClick={(e) => { setIsShowMenu((isShowMenu) => isShowMenu = !isShowMenu) }}>
                    <Image alt='logo' src={logo}
                        className='w-7 h-7'
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className={`w-6 h-6 ${isShowMenu ? "rotate-180" : ""}`}>
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                </button>
                {
                    isShowMenu &&
                    <Menu
                        className="flex flex-col absolute top-full left-0 z-50 bg-black w-36"
                        buttonClassName="w-full pl-4 py-2 text-left hover:bg-main hover:text-black transition"
                        onClick={(e) => { setIsShowMenu(false); }}
                    />
                }
            </div>
            {
                isShowMenu &&
                <div className='absolute h-screen w-screen top-0 left-0 z-40'
                    onClick={(e) => { setIsShowMenu(false); }}>
                </div>
            }
        </>
    );
}

export default HeaderResposiveMenu;