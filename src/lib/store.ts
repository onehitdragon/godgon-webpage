import { configureStore } from "@reduxjs/toolkit";
import { authInfoReducer } from "@/lib/features/user/authInfoSlice";
import { dialogReducer } from "./features/dialog/dialogSlice";

function makeStore(){
    const store = configureStore({
        reducer: {
            authInfo: authInfoReducer,
            dialog: dialogReducer
        }
    });

    return store;
}

export { makeStore }

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];