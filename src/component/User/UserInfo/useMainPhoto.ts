import {useEffect} from "react";
import {Photo} from "../../../type/Photo";
import {ErrorResponse} from "../../../type/ErrorResponse";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectMainPhoto} from "../../../store/reducers/MainPhotoSlice";
import {fetchMainPhoto} from "../../../store/reducers/ActionCreators";
import UserKeycloak from "../../../keycloack/UserKeycloak";

interface UseMainPhotoInf {
    mainPhoto: Photo | undefined,
    mainPhotoIsLoading: boolean,
    mainPhotoError: ErrorResponse | null,
}

const useMainPhoto = (username: string = UserKeycloak.getUsername()): UseMainPhotoInf => {
    const dispatch = useAppDispatch();
    const {mainPhoto, isLoading: mainPhotoIsLoading, error: mainPhotoError} = useAppSelector(selectMainPhoto);
    useEffect(() => {
        dispatch(fetchMainPhoto(username));
    }, [username]);

    return {mainPhoto, mainPhotoIsLoading, mainPhotoError};
}

export default useMainPhoto;