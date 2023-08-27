import {FC} from "react";
import {Photo} from "../../../../../type/Photo";
import classes from "./PhotoItem.module.css"
import PhotoAction from "./PhotoAction/PhotoAction";

interface PhotoItemProps {
    photo: Photo
}

const PhotoItem: FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className={classes.photo_container}>
            <PhotoAction publicId={photo.publicId}/>
            <img className={classes.photo} src={photo.imageURL} alt={"photo"} loading={"lazy"}/>
        </div>
    )
}

export default PhotoItem