import {FC} from 'react';
import PhotoUploadModal from "./PhotoUploadModal/PhotoUploadModal";
import classes from "./GalleryHeader.module.css";

const GalleryHeader: FC = () => {
    return (
        <div className={classes.gallery_header}>
            <PhotoUploadModal/>
        </div>
    );
};

export default GalleryHeader;