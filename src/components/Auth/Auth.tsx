"use client"

import { updateAuthInfoThunkAction } from "@/lib/features/user/authInfoAction";
import { useAppDispatch } from "@/lib/hook";

function Auth({ auth }: { auth: any }){
    const dispatch = useAppDispatch();
    dispatch(updateAuthInfoThunkAction(auth));

    return <></>
}

export default Auth;