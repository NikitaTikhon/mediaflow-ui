import {FC} from "react";
import {UserMinInfo} from "../../../../type/UserMinInfo";
import classes from "./FollowerItem.module.css"
import {useNavigate} from "react-router-dom";
import useFollowDelete from "../../useFollowDelete";
import Loader from "../../../Loader/Loader";

interface FollowerItemProps {
    follower: UserMinInfo;
}

const FollowerItem: FC<FollowerItemProps> = ({follower}) => {
    const navigate = useNavigate();
    const {deleteFollow, followDeleteIsLoading} = useFollowDelete()

    return (
        <div onClick={() => navigate(`/profile/${follower.username}`)} className={classes.follower_container}>
            <img className={classes.follower_main_photo}
                 src={follower.imageURL ? follower.imageURL : `${window.location.origin}/default_photo.png`}
                 alt={"Photo"}
            />
            <p className={classes.follower_username}>{follower.username}</p>
            <button
                className={classes.unfollow_button}
                onClick={(e) => {
                    e.stopPropagation();
                    deleteFollow(follower.id);
                }}
                disabled={followDeleteIsLoading}
            >
                {followDeleteIsLoading
                    ? <><Loader size={"sm"}/>Unfollow</>
                    : "Unfollow"
                }
            </button>
        </div>
    );
};

export default FollowerItem;