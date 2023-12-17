"use client"
import Link from "next/link";
import { MouseEvent } from "react";

function Menu(
    { className, buttonClassName, onClick }:
    { className: string, buttonClassName: string, onClick?: (e: MouseEvent<HTMLUListElement>) => void }
){
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
                <button className={buttonClassName}>
                    Đăng ký
                </button>
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