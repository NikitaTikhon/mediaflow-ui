import {FC} from "react";
import {Photo} from "../../../../../type/Photo";
import classes from "./PhotoItemOt.module.css"

interface PhotoItemProps {
    photo: Photo
}

const PhotoItemOt: FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className={classes.photo_container}>
            <img className={classes.photo} src={photo.imageURL} alt={"photo"} loading={"lazy"}/>
        </div>
    )
}

export default PhotoItemOt