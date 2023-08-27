import {ErrorResponse} from "../../type/ErrorResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {UserMinInfo} from "../../type/UserMinInfo";

interface FollowersState {
    followers: UserMinInfo[];
    isLoading: boolean;
    error: ErrorResponse | null;
}
interface FollowersPageInf {
    followers: UserMinInfo[];
    page: number;
}

const initialState: FollowersState = {
    followers: [],
    isLoading: false,
    error: null
}

export const followersSlice = createSlice({
    name: 'followers',
    initialState,
    reducers: {
        actionLoading(state: FollowersState) {
            state.isLoading = true;
        },
        followersFetchingSuccess(state: FollowersState, action: PayloadAction<FollowersPageInf>) {
            state.isLoading = false;
            state.error = null;
            if (action.payload.page === 0) {
                state.followers = action.payload.followers;
            } else {
                state.followers.push(...action.payload.followers);
            }
        },
        actionError(state: FollowersState, action: PayloadAction<ErrorResponse>) {
            state.isLoading = false;
            state.followers = [];
            state.error = action.payload;
        },

        deleteFollow(state: FollowersState, action: PayloadAction<string>) {
            state.followers.splice(state.followers.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
})

export const selectFollowers = (state: RootState) => state.followers;
export default followersSlice.reducer;