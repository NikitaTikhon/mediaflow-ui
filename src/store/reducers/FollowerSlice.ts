import {ErrorResponse} from "../../type/ErrorResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {FollowerInf} from "../../type/Follower";

interface FollowerState {
    follower: FollowerInf | undefined;
    isLoading: boolean;
    error: ErrorResponse | null;
}

const initialState: FollowerState = {
    follower: undefined,
    isLoading: false,
    error: null
}

export const followerSlice = createSlice({
    name: 'follower',
    initialState,
    reducers: {
        actionLoading(state: FollowerState) {
            state.isLoading = true;
        },
        followerFetchingSuccess(state: FollowerState, action: PayloadAction<FollowerInf>) {
            state.isLoading = false;
            state.error = null;
            state.follower = action.payload;
        },
        actionError(state: FollowerState, action: PayloadAction<ErrorResponse>) {
            state.isLoading = false;
            state.follower = undefined;
            state.error = action.payload;
        }
    }
})

export const selectFollower = (state: RootState) => state.follower;
export default followerSlice.reducer;