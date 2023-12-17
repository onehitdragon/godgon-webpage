import { createSlice } from "@reduxjs/toolkit";

interface DialogState{
    isOpen: boolean,
    type: "info" | "error" | "warn"
    message: string,
    cancerHandler?: () => void,
    agreeHandler?: () => void
}

const init: DialogState = {
    isOpen: false,
    type: "info",
    message: ""
}

const dialogSlice = createSlice({
    name: "Dialog",
    initialState: init,
    reducers: {
        updateDialog: (state, action: { payload: DialogState }) => {
            return action.payload;
        },
        closeDialog: (state, action: { payload: undefined }) => {
            state.isOpen = false;
        }
    }
});

export const dialogReducer = dialogSlice.reducer;
export const { updateDialog, closeDialog } = dialogSlice.actions;