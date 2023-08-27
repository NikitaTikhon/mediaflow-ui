import {useEffect, useState} from "react";
import {Photo} from "../../../type/Photo";
import {ErrorResponse} from "../../../type/ErrorResponse";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectPhotos} from "../../../store/reducers/PhotoSlice";
import {fetchPhotos} from "../../../store/reducers/ActionCreators";
import UserKeycloak from "../../../keycloack/UserKeycloak";

export interface PhotosParams {
    username: string;
    page: number;
}

interface UsePhotosInf {
    photos: Photo[],
    photosAreLoading: boolean,
    photosError: ErrorResponse | null,
    photosParams: PhotosParams;
    setPhotosParams: (value: (((prevState: PhotosParams) => PhotosParams) | PhotosParams)) => void;
    isLoadMore: boolean;
}

const usePhotos = (username: string = UserKeycloak.getUsername()): UsePhotosInf => {
    const [photosParams, setPhotosParams] = useState<PhotosParams>({username: username, page: 0});
    const [isLoadMore, setIsLoadMore] = useState<boolean>(true);

    const dispatch = useAppDispatch();
    const {photos, isLoading: photosAreLoading, error: photosError} = useAppSelector(selectPhotos);
    useEffect(() => {
        dispatch(fetchPhotos(username, photosParams.page, setIsLoadMore));
    }, [username, photosParams.page]);

    return {
        photos,
        photosAreLoading,
        photosError,
        photosParams,
        setPhotosParams,
        isLoadMore
    };
}

export default usePhotos;