import classes from "./PhotoAction.module.css";
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import {FC, useState} from "react";
import usePhotoDelete from "./usePhotoDelete";
import useMainPhotoSelect from "./useMainPhotoSelect";
import Loader from "../../../../../Loader/Loader";

interface PhotoActionInf {
    publicId: string;
}

const PhotoAction: FC<PhotoActionInf> = ({publicId}) => {
    const [show, setShow] = useState<boolean>(false);
    const {deletePhoto, photoDeleteIsLoading} = usePhotoDelete();
    const {selectMainPhoto, mainPhotoIsLoading} = useMainPhotoSelect();

    return (
        <div onMouseLeave={() => {show && setShow(false)}} className={classes.dropdown_ellipsis}>
            <IoEllipsisVerticalSharp
                className={classes.ellipsis}
                onClick={() => setShow(prevState => !prevState)}
            />
            {show &&
                <div className={classes.dropdown_options}>
                    <button onClick={() => deletePhoto(publicId)} disabled={photoDeleteIsLoading}>{photoDeleteIsLoading ? <><Loader size={"sm"}/>Delete</> : "Delete"}</button>
                    <button onClick={() => selectMainPhoto(publicId)} disabled={mainPhotoIsLoading}>{mainPhotoIsLoading ? <><Loader size={"sm"}/>Make main</> : "Make main"}</button>
                </div>
            }
        </div>
    );
};

export default PhotoAction;