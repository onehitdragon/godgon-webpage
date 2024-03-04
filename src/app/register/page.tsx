"use client"

import { updateDialog } from "@/lib/features/dialog/dialogSlice";
import { registerThunkAction } from "@/lib/features/user/authInfoAction";
import { useAppDispatch } from "@/lib/hook";
import { useState } from "react";

type ValidateField = "username" | "password" | "rePassword";
type ValidateValue = {
    content: string,
    status: false,
    err: string
} | {
    content: string,
    status: true,
}
type ValidateState = {[_ in ValidateField]?: ValidateValue};

function Register(){
    const [validates, setValidates] = useState<ValidateState>({});
    const checkUsername = (username: string) => {
        if(/^[a-zA-Z0-9]{3,12}$/.test(username)){
            validates.username = {
                content: username,
                status: true
            }
        }
        else{
            validates.username = {
                content: username,
                status: false,
                err: "Yêu cầu 3->12 kí tự chứa chữ cái hoặc số"
            }
        }
        setValidates(validates => { return { ...validates }; });
    };
    const checkPassword = (password: string) => {
        if(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#~?!@$%&*-]).{8,}$/.test(password)){
            validates.password = {
                content: password,
                status: true
            }
        }
        else{
            validates.password = {
                content: password,
                status: false,
                err: "Yêu cầu 8 kí tự trở lên phải chứa chữ cái, số và kí tự đặc biệt"
            }
        }
        setValidates(validates => { return { ...validates }; });
    };
    const checkRePassword = (password: string, rePassword: string) => {
        if(rePassword === password){
            validates.rePassword = {
                content: rePassword,
                status: true
            }
        }
        else{
            validates.rePassword = {
                content: rePassword,
                status: false,
                err: "Mật khẩu không khớp"
            }
        }
        setValidates(validates => { return { ...validates }; });
    };
    const canSubmit = () => {
        if(!validates.username) return false;
        if(!validates.password) return false;
        if(!validates.rePassword) return false;
        if(!validates.username.status) return false;
        if(!validates.password.status) return false;
        if(!validates.rePassword.status) return false;
        return true;
    };

    const [registing, setRegisting] = useState(false);
    const dispatch = useAppDispatch();
    const registerHandler = () => {
        setRegisting(true);
        dispatch(registerThunkAction(
            validates.username!.content,
            validates.password!.content,
            (mes) => {
                setRegisting(false);
                dispatch(updateDialog({
                    isOpen: true,
                    message: mes,
                    type: "error"
                }));
            },
            () => {
                setRegisting(false);
                setValidates({});
                dispatch(updateDialog({
                    isOpen: true,
                    message: "Đăng ký thành công",
                    type: "info"
                }));
            }
        ));
    };

    return (
        <main className="flex justify-center">
            <div className="flex flex-col justify-center items-start py-8
                w-48 sm:w-64 md:w-72">
                <div className="flex flex-col mb-4 w-full">
                    <input className="w-full border outline-none border-main-2 px-1.5 py-1"
                        placeholder="Tên đăng nhập..."
                        value={validates.username ? validates.username.content : ""}
                        onChange={(e) => {
                            checkUsername(e.target.value);
                        }}
                        onBlur={() => {
                            if(!validates.username) checkUsername("");
                        }}
                    />
                    {
                        validates.username
                        &&
                        !validates.username.status
                        &&
                        <div className="flex items-center mt-1.5">
                            <div className="w-fit h-fit mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 text-red-500 block">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-red-500 text-sm">{validates.username.err}</span>
                        </div>
                    }
                </div>
                <div className="flex flex-col mb-4 w-full relative">
                    <input className="w-full border outline-none border-main-2 px-1.5 py-1"
                        placeholder="Mật khẩu..."
                        type="password"
                        value={validates.password ? validates.password.content : ""}
                        onChange={(e) => {
                            checkPassword(e.target.value);
                            if(validates.rePassword){
                                checkRePassword(e.target.value, validates.rePassword.content);
                            }
                        }}
                        onBlur={() => {
                            if(!validates.password) checkPassword("");
                        }}
                    />
                    {
                        validates.password
                        &&
                        !validates.password.status
                        &&
                        <div className="flex items-center mt-1.5">
                            <div className="w-fit h-fit mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 text-red-500 block">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-red-500 text-sm">{validates.password.err}</span>
                        </div>
                    }
                </div>
                <div className="flex flex-col mb-4 w-full relative">
                    <input className="w-full border outline-none border-main-2 px-1.5 py-1"
                        placeholder="Nhập lại mật khẩu..."
                        type="password"
                        value={validates.rePassword ? validates.rePassword.content : ""}
                        onChange={(e) => {
                            if(validates.password){
                                checkRePassword(validates.password.content, e.target.value);
                            }
                            else{
                                checkRePassword("", e.target.value);
                            }
                        }}
                        onBlur={() => {
                            if(validates.password){
                                if(!validates.rePassword) checkRePassword(validates.password.content, "");
                            }
                        }}
                    />
                    {
                        validates.rePassword
                        &&
                        !validates.rePassword.status
                        &&
                        <div className="flex items-center mt-1.5">
                            <div className="w-fit h-fit mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 text-red-500 block">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-red-500 text-sm">{validates.rePassword.err}</span>
                        </div>
                    }
                </div>
                <div className="flex mb-4">
                    {
                        canSubmit()
                        &&
                        <button className='hover:bg-black transition
                            bg-main-2 w-28 h-8 flex justify-center items-center'
                            onClick={() => { registerHandler(); }}>
                            {
                                !registing
                                ?
                                <span className='text-white'>Đăng ký</span>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                    className="w-6 h-6 text-white animate-spin">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            }
                        </button>
                    }
                </div>
            </div>
        </main>
    );
}

export default Register;