import {FC} from 'react';
import {UserMinInfo} from "../../../../type/UserMinInfo";
import classes from "./ResultUserItem.module.css"
import {useNavigate} from "react-router-dom";

interface UserMinInfoProps {
    user: UserMinInfo
}

const ResultUserItem: FC<UserMinInfoProps> = ({user}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/profile/${user.username}`)} className={classes.user_min_info_container}>
            <img className={classes.user_min_avatar} src={user.imageURL ? user.imageURL : `${window.location.origin}/default_photo.png`} alt="avatar"/>
            <p className={classes.user_min_username}>{user.username}</p>
        </div>
    );
};

export default ResultUserItem;