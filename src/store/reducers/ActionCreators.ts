import {AppDispatch} from "../store";
import PhotoService from "../../API/PhotoService";
import {photoSlice} from "./PhotoSlice";
import {mainPhotoSlice} from "./MainPhotoSlice";
import MainPhotoService from "../../API/MainPhotoService";
import {userSearchSlice} from "./UserSearchSlice";
import UserService from "../../API/UserService";
import UserKeycloak from "../../keycloack/UserKeycloak";
import {followerSlice} from "./FollowerSlice";
import FollowerService from "../../API/FollowerService";
import {followersSlice} from "./FollowersSlice";
import {SearchFollowingParams} from "../../component/Follower/useFollowers";
import {SearchUserParams} from "../../component/Searchbar/useUserSearch";

export const fetchPhotos = (username: string, page : number, setIsLoadMore: (value: (((prevState: boolean) => boolean) | boolean)) => void) => async (dispatch: AppDispatch) => {
    try {
        dispatch(photoSlice.actions.actionLoading());
        const response = await PhotoService.fetchPhotosByUsername(username, page, UserKeycloak.getToken());
        if (response.length < 8) {
            setIsLoadMore(false);
        }

        dispatch(photoSlice.actions.photosFetchingSuccess({photos: response, page: page}));
    } catch (e: any) {
        dispatch(photoSlice.actions.actionError(e))
    }
}

export const fetchMainPhoto = (username: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(mainPhotoSlice.actions.actionLoading());
        const response = await MainPhotoService.fetchMainPhotoByUsername(username, UserKeycloak.getToken());
        dispatch(mainPhotoSlice.actions.mainPhotoFetchingSuccess(response));
    } catch (e: any) {
        dispatch(mainPhotoSlice.actions.actionError(e))
    }
}

export const fetchUserSearch = (activeUsername: string, searchUserParams : SearchUserParams, setIsLoadMore: (value: (((prevState: boolean) => boolean) | boolean)) => void) => async (dispatch: AppDispatch) => {
    try {
        if (searchUserParams.username) {
            dispatch(userSearchSlice.actions.actionLoading());
            const response = await UserService.fetchUsersByUsername(activeUsername, searchUserParams.page, UserKeycloak.getToken());
            if (response.length < 20) {
                setIsLoadMore(false);
            }

            dispatch(userSearchSlice.actions.usersFetchingSuccess({users: response, page: searchUserParams.page}));
        }
    } catch (e: any) {
        dispatch(userSearchSlice.actions.actionError(e))
    }
}

export const fetchFollower = (userReceiverId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(followerSlice.actions.actionLoading());
        const response = await FollowerService.isFollower(userReceiverId, UserKeycloak.getToken());
        dispatch(followerSlice.actions.followerFetchingSuccess(response));
    } catch (e: any) {
        dispatch(followerSlice.actions.actionError(e))
    }
}

export const fetchFollowers = (activeUsername: string, searchFollowingParams : SearchFollowingParams, setIsLoadMore: (value: (((prevState: boolean) => boolean) | boolean)) => void) => async (dispatch: AppDispatch) => {
    try {
        dispatch(followersSlice.actions.actionLoading());
        const response = await UserService.fetchUserFollows(activeUsername, searchFollowingParams.page, UserKeycloak.getToken());
        if (response.length < 20) {
            setIsLoadMore(false);
        }

        dispatch(followersSlice.actions.followersFetchingSuccess({followers: response, page: searchFollowingParams.page}));
    } catch (e: any) {
        dispatch(followersSlice.actions.actionError(e))
    }
}