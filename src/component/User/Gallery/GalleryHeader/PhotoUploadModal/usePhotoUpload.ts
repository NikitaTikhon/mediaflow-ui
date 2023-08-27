import React, {ChangeEvent, useRef, useState} from "react";
import useRequest from "../../../../../hooks/useRequest";
import PhotoService from "../../../../../API/PhotoService";
import UserKeycloak from "../../../../../keycloack/UserKeycloak";
import {ErrorResponse} from "../../../../../type/ErrorResponse";
import {useAppDispatch} from "../../../../../hooks/redux";
import {photoSlice} from "../../../../../store/reducers/PhotoSlice";

const errorMissingPhotoMessage = "Something went wrong, please choose photo again";
const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
const errorTypesMessage = "Please, choose a image with one of the following file extension: .jpg, .jpeg, .png, .gif, etc.";
const imageNotSelectedMessage = "Please, choose a photo";
// const successPhotoUploadMessage = "Photo has been successfully uploaded";

interface UsePhotoUploadReturn {
    selectedPhoto: File | null;
    selectionRef: React.MutableRefObject<HTMLLabelElement | null>;
    onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
    savePhoto: (photo: File | null) => void;
    photoIsLoading: boolean;
    setPhotoIsLoading?: (value: (((prevState: boolean) => boolean) | boolean)) => void;
    photoError: ErrorResponse | null;
}

const usePhotoUpload = (): UsePhotoUploadReturn => {
    const dispatch = useAppDispatch();
    const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null)
    const selectionRef = useRef<HTMLLabelElement | null>(null);

    const {
        request: savePhoto,
        isLoading: photoIsLoading,
        setIsLoading: setPhotoIsLoading,
        error: photoError
    } = useRequest(async (photo: File) => {
        if (!photo) {
            alert(imageNotSelectedMessage);
            return;
        }

        const response = await PhotoService.savePhoto(photo, UserKeycloak.getToken());
        dispatch(photoSlice.actions.addPhoto(response));

        afterUploadFile();

        // if(photoIsLoading) alert(successPhotoUploadMessage);
    });

    const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
        const photo: File | null = e.target?.files && e.target?.files[0];

        if (!photo) {
            alert(errorMissingPhotoMessage);
            return;
        }
        if (!validImageTypes.includes(photo.type)) {
            alert(errorTypesMessage);
            return;
        }

        const objectUrl = URL.createObjectURL(photo);
        selectionRef.current?.style.setProperty('--selected-image-background', `url(${objectUrl}) center center / cover no-repeat`);
        setSelectedPhoto(photo);
    }

    const afterUploadFile = () => {
        setSelectedPhoto(null);
        selectionRef.current?.style.setProperty('--selected-image-background', 'url("../public/upload_background.png") center center no-repeat');
    }

    return {selectedPhoto, selectionRef, onSelectFile, savePhoto, photoIsLoading, setPhotoIsLoading, photoError}
}

export default usePhotoUpload;