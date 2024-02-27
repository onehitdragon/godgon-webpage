"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import notifi from "@/images/ui/notifi.png";

function NotificationSlice(){
    const texts = [
        "Thông báo: Chào mừng đến với godgon",
        "Phiên bản hiện tại: 0.0.1-dev",
        "Server bảo trì hàng ngày: 5AM -> 6AM",
        "Phiên bản hiện tại chỉ là bản thử ngiệm"
    ];
    const [curTextIndex, setCurTextIndex] = useState(0);
    const [x, setX] = useState(224);

    useEffect(() => {
        const changeX = setInterval(() => {
            setX((x) => {
                if(x < (texts[curTextIndex].length * 10 + 50) * -1){
                    setCurTextIndex(curTextIndex => {
                        if(curTextIndex >= texts.length - 1) return 0;
                        return curTextIndex + 1;
                    })
                    return 224;
                }
                return x - 1;
            });
        }, 25);

        return () => {
            clearInterval(changeX);
        }
    }, [curTextIndex])

    return (
        <div className='flex items-center'>
            <Image src={notifi} className="w-6 h-6" alt='notifi.png'/>
            <div className='w-36 sm:w-56 overflow-hidden'>
                <span className="whitespace-nowrap text-sm block italic"
                style={{ transform: `translate(${x}px, 0px)` }}>
                    {texts[curTextIndex]}
                </span>
            </div>
        </div>
    );
}

export default NotificationSlice;