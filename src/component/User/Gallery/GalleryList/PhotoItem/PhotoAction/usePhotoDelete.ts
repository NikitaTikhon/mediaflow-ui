import {useAppDispatch} from "../../../../../../hooks/redux";
import {photoSlice} from "../../../../../../store/reducers/PhotoSlice";
import PhotoService from "../../../../../../API/PhotoService";
import UserKeycloak from "../../../../../../keycloack/UserKeycloak";
import useRequest from "../../../../../../hooks/useRequest";
import {ErrorResponse} from "../../../../../../type/ErrorResponse";

interface UsePhotosReturn {
    deletePhoto: (publicId: string) => void;
    photoDeleteIsLoading: boolean;
    photoDeleteError: ErrorResponse | null;
}

const usePhotoDelete = (): UsePhotosReturn => {
    const dispatch = useAppDispatch();

    const {request: deletePhoto, isLoading: photoDeleteIsLoading, error: photoDeleteError} = useRequest(async (publicId: string) => {
        await PhotoService.deletePhotoByPublicId(publicId, UserKeycloak.getToken());
        dispatch(photoSlice.actions.deletePhoto(publicId));
    });

    return {deletePhoto, photoDeleteIsLoading, photoDeleteError};
}

export default usePhotoDelete;