import {FC, useState} from 'react';
import Modal from "../../../../Modal/Modal";
import classes from "./PhotoUploadModal.module.css"
import {PiUploadSimple} from "react-icons/pi";
import Loader from "../../../../Loader/Loader";
import usePhotoUpload from "./usePhotoUpload";

const PhotoUploadModal: FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const {
        selectedPhoto,
        selectionRef,
        onSelectFile,
        savePhoto,
        photoIsLoading,
        setPhotoIsLoading,
        photoError
    } = usePhotoUpload();

    return (
        <>
            <button className={classes.upload_button} onClick={() => setShow(true)}><PiUploadSimple/>Upload</button>
            {show &&
                <Modal setShow={setShow} setIsLoading={setPhotoIsLoading}>
                    <div className={classes.modal_children}>
                        <label ref={selectionRef} className={classes.upload_label} htmlFor="upload-photo"></label>
                        <input className={classes.upload_input_photo} onChange={onSelectFile} type="file"
                               id="upload-photo" disabled={photoIsLoading}/>
                    </div>
                    <div>
                        <button className={classes.upload_button} onClick={() => savePhoto(selectedPhoto)} disabled={photoIsLoading}>
                            {photoIsLoading ? <><Loader size={"sm"}/> Processing</> : "Upload"}
                        </button>
                    </div>
                </Modal>
            }
            {photoError && alert(photoError.message)}
        </>
    );
};

export default PhotoUploadModal;