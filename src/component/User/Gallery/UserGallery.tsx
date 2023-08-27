import {FC} from 'react';
import GalleryList from "./GalleryList/GalleryList";
import GalleryHeader from "./GalleryHeader/GalleryHeader";
import classes from "./UserGallery.module.css"
import Loader from "../../Loader/Loader";
import usePhotos from "./usePhotos";
import MessageBox from "../../Message/MessageBox";
import {useObserverLoadMore} from "../../../hooks/useObserverLoadMore";

const UserGallery: FC = () => {
    const {
        photos,
        photosAreLoading,
        photosError,
        photosParams,
        setPhotosParams,
        isLoadMore
    } = usePhotos();
    const observerTarget = useObserverLoadMore(setPhotosParams, photosAreLoading);

    return (
        <div className={classes.gallery_container}>
            <div className={classes.gallery_items_container}>
                <GalleryHeader />
                {photosAreLoading && photosParams.page === 0 ? <Loader outer={true}/>
                    : photosError ? <MessageBox><h1>{photosError.message}</h1></MessageBox>
                        : photos.length > 0 ? <GalleryList photos={photos}/> : <MessageBox><h1>Upload photo</h1></MessageBox>
                }
                {photosAreLoading && photosParams.page > 0 && <Loader/>}
                {isLoadMore && <div ref={observerTarget}></div>}
            </div>
        </div>
    );
};

export default UserGallery;