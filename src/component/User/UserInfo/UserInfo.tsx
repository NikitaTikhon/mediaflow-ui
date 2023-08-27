import {FC, useState} from 'react';
import classes from "./UserInfo.module.css"
import UserKeycloak from "../../../keycloack/UserKeycloak";
import UserMainPhotoUploadModal from "./UserMainPhotoUploadModal/UserMainPhotoUploadModal";
import useMainPhoto from "./useMainPhoto";
import Loader from "../../Loader/Loader";
import useFollowsInfo from "./useFollowsInfo";

const UserInfo: FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const {mainPhoto, mainPhotoIsLoading} = useMainPhoto();
    const {followsInfo} = useFollowsInfo();

    return (
        <div className={classes.userinfo_container}>
            {mainPhotoIsLoading ?
                <div className={classes.user_main_photo}>
                    <Loader outer={true}/>
                </div>
                : <img className={classes.user_main_photo} onClick={() => setShow(true)}
                           src={mainPhoto ? mainPhoto.imageURL : "./default_photo.png"} alt={"Avatar"}/>
            }
            {show && <UserMainPhotoUploadModal setShow={setShow}/>}
            <div className={classes.user_description}>
                <h4>{UserKeycloak.loggedInUser.getUsername()}</h4>
                <p>{UserKeycloak.loggedInUser.getFullName()}</p>
                <div className={classes.user_follows_description}>
                    <span>{followsInfo?.following} </span>Following
                    <span> {followsInfo?.followers} </span>Followers
                </div>
            </div>
        </div>
    );
};

export default UserInfo;