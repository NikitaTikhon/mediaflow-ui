import {ErrorResponse} from "../../../../../../type/ErrorResponse";
import {useAppDispatch} from "../../../../../../hooks/redux";
import useRequest from "../../../../../../hooks/useRequest";
import UserKeycloak from "../../../../../../keycloack/UserKeycloak";
import MainPhotoService from "../../../../../../API/MainPhotoService";
import {mainPhotoSlice} from "../../../../../../store/reducers/MainPhotoSlice";

interface UsePhotoReturn {
    selectMainPhoto: (publicId: string) => void;
    mainPhotoIsLoading: boolean;
    mainPhotoError: ErrorResponse | null;
}

const usePhotoDelete = (): UsePhotoReturn => {
    const dispatch = useAppDispatch();

    const {request: selectMainPhoto, isLoading: mainPhotoIsLoading, error: mainPhotoError} = useRequest(async (publicId: string) => {
        const response = await MainPhotoService.selectMainPhoto(publicId, UserKeycloak.getToken());
        dispatch(mainPhotoSlice.actions.replacePhoto(response));
    });

    return {selectMainPhoto, mainPhotoIsLoading, mainPhotoError};
}

export default usePhotoDelete;