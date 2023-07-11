import {FC} from "react";
import {Photo} from "../../../../type/Photo";
import classes from "./PhotoItem.module.css"

interface PhotoItemProps {
    photo: Photo
}

const PhotoItem: FC<PhotoItemProps> = ({photo}) => {
    return (
        <div className={classes.photo_container}>
            <img height={"230px"} width={"230px"} src={photo.imageURL} alt={"avatar"}/>
            {/*<div>{photo.name}</div>*/}
            {/*<div>{photo.year}</div>*/}
        </div>
    )
}

export default PhotoItem