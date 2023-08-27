import {FC} from 'react';
import classes from "./UserInfoOt.module.css"
import useMainPhoto from "../../User/UserInfo/useMainPhoto";
import Loader from "../../Loader/Loader";
import {useParams} from "react-router-dom";
import {User} from "../../../type/User";
import useSaveFollower from "./useSaveFollower";
import useIsFollower from "./useIsFollower";
import useDeleteFollower from "./useDeleteFollower";
import useFollowsInfo from "../../User/UserInfo/useFollowsInfo";

interface UserInfoOtInf {
    user: User | undefined
}

const UserInfoOt: FC<UserInfoOtInf> = ({user}) => {
    const params = useParams();
    const {follower, isFollowerIsLoading, isFollowerError} = useIsFollower(user?.id);
    const {mainPhoto, mainPhotoIsLoading, mainPhotoError} = useMainPhoto(params.username);
    const {followsInfo} = useFollowsInfo(params.username);
    const {saveFollower, saveFollowerIsLoading, saveFollowerError} = useSaveFollower();
    const {deleteFollower, deleteFollowerIsLoading, deleteFollowerError} = useDeleteFollower();

    return (
        <>
            <div className={classes.userinfo_container}>
                {mainPhotoIsLoading ?
                    <div className={classes.user_main_photo}>
                        <Loader outer={true}/>
                    </div>
                    : <img className={classes.user_main_photo}
                           src={(mainPhoto || !mainPhotoError) ? mainPhoto?.imageURL : `${window.location.origin}/default_photo.png`}
                           alt={"Photo"}
                    />
                }
                <div className={classes.user_description}>
                    <h4>{user?.username}</h4>
                    <p>{user?.lastName} {user?.firstName}</p>
                    <div className={classes.user_follows_description}>
                        <span>{followsInfo?.following} </span>Following
                        <span> {followsInfo?.followers} </span>Followers
                    </div>
                </div>

                {!isFollowerIsLoading && follower?.isFollower
                    ? <button onClick={() => deleteFollower(user?.id)} className={classes.follow_button}
                              disabled={deleteFollowerIsLoading}>
                        {deleteFollowerIsLoading
                            ? <><Loader size={"sm"}/>Unfollow</>
                            : "Unfollow"}
                    </button>
                    : <button onClick={() => saveFollower(user?.id)} className={classes.follow_button}
                              disabled={saveFollowerIsLoading}>
                        {saveFollowerIsLoading
                            ? <><Loader size={"sm"}/>Follow</>
                            : "Follow"}
                    </button>
                }
            </div>
            {saveFollowerError && alert(saveFollowerError.message)}
            {deleteFollowerError && alert(deleteFollowerError.message)}
            {isFollowerError && alert(isFollowerError.message)}
        </>
    );
};

export default UserInfoOt;