import {FC} from "react";
import {Photo} from "../../../../type/Photo";
import PhotoItemOt from "./PhotoItemOt/PhotoItemOt";
import classes from "./GalleryListOt.module.css"

interface PhotoListProps {
    photos: Photo[]
}

const GalleryListOt: FC<PhotoListProps> = ({photos}) => {
    return (
        <div className={classes.gallery_content_container}>
            {photos.map(photo => <PhotoItemOt key={photo.id} photo={photo}/>)}
        </div>
    )
}

export default GalleryListOt