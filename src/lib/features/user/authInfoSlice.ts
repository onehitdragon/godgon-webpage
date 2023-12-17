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
        }
    }
});

export const authInfoReducer = authInfoSlice.reducer;
export const { updateAuthInfo } = authInfoSlice.actions;