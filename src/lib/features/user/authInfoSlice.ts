import { createSlice } from "@reduxjs/toolkit";

interface AuthInfoState{
    account?: {
        id: string,
        username: string
    },
    token?: string
};

const init: AuthInfoState = {}

const authInfoSlice = createSlice({
    name: "AuthInfo",
    initialState: init,
    reducers: {
        updateAuthInfo: (state, action: { payload: Required<AuthInfoState> }) => {
            state.account = action.payload.account;
            state.token = action.payload.token;
        },
        removeAuthInfo: (state) => {
            state.account = undefined;
            state.token = undefined;
        }
    }
});

export const authInfoReducer = authInfoSlice.reducer;
export const { updateAuthInfo, removeAuthInfo } = authInfoSlice.actions;