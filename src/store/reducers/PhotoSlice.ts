import {ErrorResponse} from "../../type/ErrorResponse";
import {Photo} from "../../type/Photo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface PhotoState {
    photos: Photo[];
    isLoading: boolean;
    error: ErrorResponse | null;
}
interface PhotosPageInf {
    photos: Photo[];
    page: number;
}

const initialState: PhotoState = {
    photos: [],
    isLoading: false,
    error: null
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        actionLoading(state: PhotoState) {
            state.isLoading = true;
        },
        photosFetchingSuccess(state: PhotoState, action: PayloadAction<PhotosPageInf>) {
            state.isLoading = false;
            state.error = null;
            if (action.payload.page === 0) {
                state.photos = action.payload.photos;
            } else {
                state.photos.push(...action.payload.photos);
            }
        },
        actionError(state: PhotoState, action: PayloadAction<ErrorResponse>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        addPhoto(state: PhotoState, action: PayloadAction<Photo>) {
            state.photos.unshift(action.payload);
        },
        deletePhoto(state: PhotoState, action: PayloadAction<string>) {
            state.photos.splice(state.photos.findIndex((arrow) => arrow.publicId === action.payload), 1);
        }
    }
})

export const selectPhotos = (state: RootState) => state.photo
export default photoSlice.reducer;