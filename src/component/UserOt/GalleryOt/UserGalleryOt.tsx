import {FC} from 'react';
import GalleryListOt from "./GalleryListOt/GalleryListOt";
import classes from "./UserGalleryOt.module.css"
import Loader from "../../Loader/Loader";
import MessageBox from "../../Message/MessageBox";
import usePhotos from "../../User/Gallery/usePhotos";
import {useParams} from "react-router-dom";

const UserGalleryOt: FC = () => {
    const params = useParams();
    const {photos, photosAreLoading, photosError} = usePhotos(params.username);

    return (
        <div className={classes.gallery_container}>
            <div className={classes.gallery_items_container}>
                {photosAreLoading ? <Loader outer={true}/>
                    : photosError ? <MessageBox><h1>{photosError.message}</h1></MessageBox>
                        : photos.length > 0 ? <GalleryListOt photos={photos}/> : <MessageBox><h1>No photos</h1></MessageBox>
                }
            </div>
        </div>
    );
};

export default UserGalleryOt;