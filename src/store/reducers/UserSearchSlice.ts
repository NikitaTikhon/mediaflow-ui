import {ErrorResponse} from "../../type/ErrorResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {UserMinInfo} from "../../type/UserMinInfo";

interface UserSearchState {
    users: UserMinInfo[];
    isLoading: boolean;
    error: ErrorResponse | null;
}
interface UserPageInf {
    users: UserMinInfo[];
    page: number;
}

const initialState: UserSearchState = {
    users: [],
    isLoading: false,
    error: null
}

export const userSearchSlice = createSlice({
    name: 'userSearch',
    initialState,
    reducers: {
        actionLoading(state: UserSearchState) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state: UserSearchState, action: PayloadAction<UserPageInf>) {
            state.isLoading = false;
            state.error = null;
            if (action.payload.page === 0) {
                state.users = action.payload.users;
            } else {
                state.users.push(...action.payload.users);
            }
        },
        actionError(state: UserSearchState, action: PayloadAction<ErrorResponse>) {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})

export const selectUsers = (state: RootState) => state.userSearch
export default userSearchSlice.reducer;