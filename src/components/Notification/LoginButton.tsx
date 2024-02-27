"use client"

import human1 from "@/images/ui/human-1.png";
import Link from 'next/link';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { removeAuthInfo } from "@/lib/features/user/authInfoSlice";

function LoginButton(){
    const account = useAppSelector(state => state.authInfo.account);
    const [cookies, setCookie, removeCookie] = useCookies();
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
        removeCookie("auth_info");
        dispatch(removeAuthInfo());
    };

    return (
        account ?
        <div>
            <span className="font-bold mr-1">{account.username}</span>
            <button className='hover:brightness-95 transition bg-main-2 py-1 px-3'>
                <span className='text-white' onClick={() => { logoutHandler(); }}>Đăng xuất</span>
            </button>
        </div>
        :
        <Link href="/login">
            <button className='hover:brightness-95 transition bg-main-2 py-1 px-3 relative'>
                <span className='text-white'>Đăng nhập</span>
                <Image src={human1} alt='human-1.png'
                    className='absolute top-1/2 -translate-y-1/2 -translate-x-2/3 w-20 sm:w-28'
                />
            </button>
        </Link>
    );
}

export default LoginButton;