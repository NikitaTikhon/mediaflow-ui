import useRequest from "../../../../hooks/useRequest";
import {ErrorResponse} from "../../../../type/ErrorResponse";
import MainPhotoService from "../../../../API/MainPhotoService";
import UserKeycloak from "../../../../keycloack/UserKeycloak";
import {useAppDispatch} from "../../../../hooks/redux";
import {mainPhotoSlice} from "../../../../store/reducers/MainPhotoSlice";

interface UsePhotoDeleteInf {
    deleteMainPhoto: (publicId: string | undefined) => void;
    mainPhotoDeleteIsLoading: boolean;
    mainPhotoDeleteError: ErrorResponse | null;
}

export const useUserMainPhotoDelete = (): UsePhotoDeleteInf => {
    const dispatch = useAppDispatch();
    const {
        request: deleteMainPhoto,
        isLoading: mainPhotoDeleteIsLoading,
        error: mainPhotoDeleteError
    } = useRequest(async (publicId: string) => {
        await MainPhotoService.deleteMainPhotoByPublicId(publicId, UserKeycloak.getToken());
        dispatch(mainPhotoSlice.actions.replacePhoto(undefined));
    });

    return {deleteMainPhoto, mainPhotoDeleteIsLoading, mainPhotoDeleteError};
}