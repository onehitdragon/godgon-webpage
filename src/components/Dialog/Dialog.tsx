"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import dialogAgrent from "@/images/dialog/dialogAgrent.gif";
import { closeDialog } from "@/lib/features/dialog/dialogSlice";

function Dialog(){
    const dialogData = useAppSelector(state => state.dialog);
    const dispatch = useAppDispatch();
    const [mes, setMes] = useState("");
    const incrementMesTimer = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if(dialogData.isOpen){
            let i = 0;
            incrementMesTimer.current = setInterval(() => {
                setMes((state) => {
                    if(i < dialogData.message.length){
                        return state += dialogData.message[i++];
                    }
                    else return state;
                })
            }, 50)
        }
        else{
            setMes("");
            if(incrementMesTimer.current) clearInterval(incrementMesTimer.current);
        }
    }, [dialogData.isOpen])

    return (
        dialogData.isOpen &&
        <div 
            className="w-screen h-screen absolute z-50 bg-black bg-opacity-25
                flex justify-center items-center"
            onClick={() => {
                dispatch(closeDialog());
                if(dialogData.cancerHandler) dialogData.cancerHandler();
            }}
        >
            <div className="w-60 h-52 bg-white opacity-90 rounded-md
                flex flex-col">
                <p className="text-center pt-2 uppercase font-medium text-main-2">Thông báo</p>
                <div className="flex">
                    <Image src={dialogAgrent} alt="dialogAgrent" className="h-fit"/>
                    <p className="p-3 pl-0 text-sm text-red-600">
                        {mes}
                    </p>
                </div>
                <div className="mt-auto flex justify-evenly">
                    <button
                        className="p-2 hover:text-main-2 transition"
                        onClick={() => {
                            dispatch(closeDialog());
                            if(dialogData.cancerHandler) dialogData.cancerHandler();
                        }}
                    >
                        Huỷ bỏ
                    </button>
                    <button
                        className="p-2 hover:text-main-2 transition"
                        onClick={() => {
                            dispatch(closeDialog());
                            if(dialogData.agreeHandler) dialogData.agreeHandler();
                        }}
                    >
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(Dialog);