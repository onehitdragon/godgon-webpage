import { RootState } from "@/lib/store";
import { ThunkAction } from "@reduxjs/toolkit";
import { z } from "zod";
import { updateAuthInfo } from "./authInfoSlice";

const authInfoSchema = z.object({
    account: z.object({
        id: z.string(),
        username: z.string()
    }),
    token: z.string()
})
const resBodyLoginSchema = z.object({
    content: authInfoSchema
});
type AuthInfo = z.infer<typeof authInfoSchema>;
type ResBodyLogin = z.infer<typeof resBodyLoginSchema>;

const loginThunkAction = (
    username: string, password: string, onFail: (mes: string) => void, onSuccess: (authInfo: AuthInfo) => void
) => {
    const thunk: ThunkAction<void, RootState, any, any> = async (dispatch, getState) => {
        const reqBody = {
            username,
            password
        };
        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(res.status == 400){
            onFail("username or password invalidate");
        }
        if(res.status == 401){
            onFail("Wrong username or password");
        }
        if(res.status == 500){
            onFail("Server maintaining...");
        }
        if(res.status == 200){
            const validate = resBodyLoginSchema.safeParse(await res.json());
            if(validate.success){
                const resBodyLogin = validate.data;
                dispatch(updateAuthInfo(resBodyLogin.content));
                onSuccess(resBodyLogin.content);
            }
            else{
                onFail("Server's response dont map with client request")
            }
        }
    }

    return thunk;
}

const updateAuthInfoThunkAction = (data: any) => {
    const thunk: ThunkAction<void, RootState, any, any> = async (dispatch, getState) => {
        const validate = authInfoSchema.safeParse(data);
        if(validate.success){
            dispatch(updateAuthInfo(validate.data))
        }
    }

    return thunk;
}

export { loginThunkAction, updateAuthInfoThunkAction };