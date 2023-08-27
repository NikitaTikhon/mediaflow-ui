import Modal from "../../../Modal/Modal";
import classes from "./UserMainPhotoUploadModal.module.css";
import {FC} from "react";
import useUserMainPhotoUpload from "./useUserMainPhotoUpload";
import Loader from "../../../Loader/Loader";
import {useUserMainPhotoDelete} from "./useUserMainPhotoDelete";
import {useAppSelector} from "../../../../hooks/redux";
import {selectMainPhoto} from "../../../../store/reducers/MainPhotoSlice";

interface UserMainPhotoUploadModalInf {
    setShow: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}

const UserMainPhotoUploadModal: FC<UserMainPhotoUploadModalInf> = ({setShow}) => {
    const {mainPhoto} = useAppSelector(selectMainPhoto);

    const {
        selectedPhoto,
        selectionRef,
        onSelectFile,
        saveMainPhoto,
        mainPhotoSaveIsLoading,
        setMainPhotoSaveIsLoading,
        mainPhotoSaveError
    } = useUserMainPhotoUpload();

    const {
        deleteMainPhoto,
        mainPhotoDeleteIsLoading,
        mainPhotoDeleteError
    } = useUserMainPhotoDelete();

    return (
        <>
            <Modal setShow={setShow} setIsLoading={setMainPhotoSaveIsLoading}>
                <div className={classes.modal_children}>
                    <label ref={selectionRef} className={classes.upload_label} htmlFor="upload-photo"></label>
                    <input className={classes.upload_input_photo} onChange={onSelectFile} type="file"
                           id="upload-photo" disabled={mainPhotoSaveIsLoading}/>
                </div>
                <div className={classes.button_bar}>
                    <button className={classes.upload_button} onClick={() => saveMainPhoto(selectedPhoto)}
                            disabled={mainPhotoSaveIsLoading}>
                        {mainPhotoSaveIsLoading ? <><Loader size={"sm"}/> Processing</> : "Upload"}
                    </button>
                    <button className={classes.upload_button} onClick={() => deleteMainPhoto(mainPhoto?.publicId)}
                            disabled={mainPhotoDeleteIsLoading || !mainPhoto}>
                        {mainPhotoDeleteIsLoading ? <><Loader size={"sm"}/> Processing</> : "Delete"}
                    </button>
                </div>
            </Modal>
            {mainPhotoSaveError && alert(mainPhotoSaveError.message)}
            {mainPhotoDeleteError && alert(mainPhotoDeleteError.message)}
        </>
    );
};

export default UserMainPhotoUploadModal;