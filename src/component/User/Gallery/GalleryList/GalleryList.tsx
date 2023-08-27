import {FC} from "react";
import {Photo} from "../../../../type/Photo";
import PhotoItem from "./PhotoItem/PhotoItem";
import classes from "./GalleryList.module.css"

interface PhotoListProps {
    photos: Photo[]
}

const GalleryList: FC<PhotoListProps> = ({photos}) => {
    return (
        <div className={classes.gallery_content_container}>
            {photos.map(photo => <PhotoItem key={photo.id} photo={photo}/>)}
        </div>
    )
}

export default GalleryList