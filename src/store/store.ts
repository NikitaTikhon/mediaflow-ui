import {configureStore} from "@reduxjs/toolkit";
import photoSlice from "./reducers/PhotoSlice";
import mainPhotoSlice from "./reducers/MainPhotoSlice";
import userSearchSlice from "./reducers/UserSearchSlice";
import followerSlice from "./reducers/FollowerSlice";
import followersSlice from "./reducers/FollowersSlice";

export const store = configureStore({
    reducer: {
        photo: photoSlice,
        mainPhoto: mainPhotoSlice,
        follower: followerSlice,
        followers: followersSlice,
        userSearch: userSearchSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;