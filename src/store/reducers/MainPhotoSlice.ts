import {Photo} from "../../type/Photo";
import {ErrorResponse} from "../../type/ErrorResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface MainPhotoState {
    mainPhoto: Photo | undefined;
    isLoading: boolean;
    error: ErrorResponse | null;
}

const initialState: MainPhotoState = {
    mainPhoto: undefined,
    isLoading: false,
    error: null
}

export const mainPhotoSlice = createSlice({
    name: 'mainPhoto',
    initialState,
    reducers: {
        actionLoading(state: MainPhotoState) {
            state.isLoading = true;
        },
        mainPhotoFetchingSuccess(state: MainPhotoState, action: PayloadAction<Photo>) {
            state.isLoading = false;
            state.error = null;
            state.mainPhoto = action.payload;
        },
        actionError(state: MainPhotoState, action: PayloadAction<ErrorResponse>) {
            state.isLoading = false;
            state.mainPhoto = undefined;
            state.error = action.payload;
        },

        replacePhoto(state: MainPhotoState, action: PayloadAction<Photo | undefined>) {
            state.mainPhoto = action.payload;
        }
    }
})

export const selectMainPhoto = (state: RootState) => state.mainPhoto
export default mainPhotoSlice.reducer;