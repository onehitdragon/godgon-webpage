"use client"

import { useAppSelector } from "@/lib/hook";
import Link from "next/link";
import { MouseEvent } from "react";

function Menu(
    { className, buttonClassName, onClick }:
    { className: string, buttonClassName: string, onClick?: (e: MouseEvent<HTMLUListElement>) => void }
){
    const account = useAppSelector(state => state.authInfo.account);

    return (
        <ul className={className} onClick={(e) => { onClick && onClick(e); }}>
            <li>
                <Link href="/">
                    <button className={buttonClassName}>
                        Trang chủ
                    </button>
                </Link>
            </li>
            <li>
                {
                    !account &&
                    <Link href="/register">
                        <button className={buttonClassName}>
                            Đăng ký
                        </button>
                    </Link>
                }
            </li>
            <li>
                <button className={buttonClassName}>
                    Hướng dẫn
                </button>
            </li>
            <li>
                <Link href="#downloaderlist">
                    <button className={buttonClassName}>
                        Tải về
                    </button>
                </Link>
            </li>
        </ul>
    );
}

export default Menu;