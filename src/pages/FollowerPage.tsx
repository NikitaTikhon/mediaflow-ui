import {FC} from "react";
import FollowerList from "../component/Follower/FollowerList/FollowerList";
import useFollowers from "../component/Follower/useFollowers";
import classes from "./FollowerPage.module.css"
import {IoSearch} from "react-icons/io5";

const FollowerPage: FC = () => {
    const {
        followers,
        followersAreLoading,
        followersError,
        activeUsername,
        searchFollowingParams,
        setSearchFollowingParams,
        isLoadMore
    } = useFollowers();

    return (
        <div className={classes.page_body}>
            <div className={classes.search_followers_container}>
                <div className={classes.search_container}>
                    <input className={classes.search_input}
                           onChange={e => {
                               setSearchFollowingParams({username: e.target.value, page: 0});
                           }}
                           type="search"/>
                    <div className={classes.search_icon_container}>
                        <IoSearch className={classes.search_icon}/>
                    </div>
                </div>
                <FollowerList
                    followers={followers}
                    followersAreLoading={followersAreLoading}
                    activeUsername={activeUsername}
                    followersError={followersError}
                    searchFollowingParams={searchFollowingParams}
                />
                {isLoadMore && !followersAreLoading &&
                    <button className={classes.more_load_button} onClick={() => setSearchFollowingParams(prevState => ({...prevState, page: prevState.page + 1}))}>
                        Load more
                    </button>}
            </div>
        </div>
    );
}

export default FollowerPage;