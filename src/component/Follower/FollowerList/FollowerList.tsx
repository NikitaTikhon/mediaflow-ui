import {FC} from "react";
import {UserMinInfo} from "../../../type/UserMinInfo";
import classes from "./FollowerList.module.css"
import MessageBox from "../../Message/MessageBox";
import Loader from "../../Loader/Loader";
import {ErrorResponse} from "../../../type/ErrorResponse";
import FollowerItem from "./FollowerItem/FollowerItem";
import {SearchFollowingParams} from "../useFollowers";

interface FollowerListProps {
    followers: UserMinInfo[];
    followersAreLoading: boolean;
    followersError: ErrorResponse | null;
    activeUsername: string;
    searchFollowingParams: SearchFollowingParams;
}

const FollowerList: FC<FollowerListProps> = ({followers, followersAreLoading, followersError, activeUsername, searchFollowingParams}) => {
    return (
        <div className={classes.follower_container}>
            {followersAreLoading && searchFollowingParams.page === 0
                ? <Loader outer={true}/>
                : followersError
                    ? <MessageBox><h2>{followersError.message}</h2></MessageBox>
                    : followers.length > 0
                        ? followers.map(follower => <FollowerItem key={follower.id} follower={follower}/>)
                        : activeUsername
                            ? <MessageBox>
                                <h2>Follower <span style={{color: "#ad2727"}}>{activeUsername}</span> hasn't been found
                                </h2>
                            </MessageBox>
                            : <MessageBox>
                               <h2>Follows to other</h2>
                            </MessageBox>
            }
            {followersAreLoading && searchFollowingParams.page > 0 && <Loader/>}
        </div>
    );
};

export default FollowerList;