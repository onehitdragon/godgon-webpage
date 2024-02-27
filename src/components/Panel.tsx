"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { timeToString } from '@/util/util';
import widebg from "@/images/widebg.jpg";

function Panel(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className='relative'>
            <Image alt='sidebg' src={widebg} priority placeholder='blur'/>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex flex-col items-center'>
                <span className='font-bold text-xl text-main-2 mb-3'>
                    {timeToString(time)}
                </span>
            </div>
        </div>
    );
}

export default Panel;