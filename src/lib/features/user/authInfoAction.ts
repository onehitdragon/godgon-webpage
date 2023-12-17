import { RootState } from "@/lib/store";
import { ThunkAction } from "@reduxjs/toolkit";
import { z } from "zod";
import { updateAuthInfo } from "./authInfoSlice";

const resBodyLoginSchema = z.object({
    content: z.object({
        account: z.object({
            id: z.string(),
            username: z.string()
        }),
        token: z.string()
    })
});
type ResBodyLogin = z.infer<typeof resBodyLoginSchema>;

const loginThunkAction = (
    username: string, password: string, onFail: (mes: string) => void, onSuccess: () => void
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
            const resBody = await res.json();
            const validate = resBodyLoginSchema.safeParse(resBody);
            if(validate.success){
                dispatch(updateAuthInfo(validate.data.content));
                onSuccess();
            }
            else{
                onFail("Server respon dont map with client request")
            }
        }
    }

    return thunk;
}

export { loginThunkAction };