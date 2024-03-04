"use client";

import { updateDialog } from "@/lib/features/dialog/dialogSlice";
import { loginThunkAction } from "@/lib/features/user/authInfoAction";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

function Login(){
    const [isShowPass, setIsShowPass] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const [logining, setLogining] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const account = useAppSelector(state => state.authInfo.account);
    const router = useRouter();

    const loginHandler = () => {
        setLogining(true);
        dispatch(loginThunkAction(
            username,
            password,
            (mes) => {
                setLogining(false);
                dispatch(updateDialog({
                    isOpen: true,
                    message: mes,
                    type: "error"
                }));
            },
            (res) => {
                setCookie("auth_info", res, { secure: false, sameSite: "strict" }); // need change when deloy
                setLogining(false);
            }
        ));
    }

    useEffect(() => {
        if(account){
            router.replace("/");
        }
    }, [account])

    return (
        <main className="flex justify-center">
            <div className="flex flex-col justify-center items-start py-8
                w-48 sm:w-64 md:w-72">
                <div className="flex mb-4 w-full">
                    <input className="w-full border outline-none border-main-2 px-1.5 py-1"
                        placeholder="Tên đăng nhập..."
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                </div>
                <div className="flex mb-4 w-full relative">
                    <input className="w-full border outline-none border-main-2 px-1.5 py-1"
                        placeholder="Mật khẩu..."
                        type={!isShowPass ? "password" : "text"}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <button className="absolute left-full translate-x-1 top-1/2 -translate-y-1/2"
                        onClick={(e) => { setIsShowPass((v) => !v) }}>
                        {
                            !isShowPass ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        }
                    </button>
                </div>
                <div className="flex mb-4">
                    <button className='hover:bg-black transition
                        bg-main-2 w-28 h-8 flex justify-center items-center'
                        onClick={() => { loginHandler(); }}>
                        {
                            !logining
                            ?
                            <span className='text-white'>Đăng nhập</span>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                className="w-6 h-6 text-white animate-spin">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Login;