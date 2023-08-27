import {FC} from 'react';
import classes from "./SearchResultUserList.module.css"
import {UserMinInfo} from "../../../type/UserMinInfo";
import ResultUserItem from "./ResultUserItem/ResultUserItem";
import {ErrorResponse} from "../../../type/ErrorResponse";
import MessageBox from "../../Message/MessageBox";
import Loader from "../../Loader/Loader";
import {useObserverLoadMore} from "../../../hooks/useObserverLoadMore";
import {SearchUserParams} from "../useUserSearch";

interface UserMinInfoListProps {
    users: UserMinInfo[];
    usersAreLoading: boolean;
    usersError: ErrorResponse | null;
    activeUsername: string;
    searchUserParams: SearchUserParams;
    setSearchUserParams: (value: (((prevState: SearchUserParams) => SearchUserParams) | SearchUserParams)) => void;
    isLoadMore: boolean;
}

const SearchResultUserList: FC<UserMinInfoListProps> = (
    {
        users,
        usersAreLoading,
        usersError,
        activeUsername,
        searchUserParams,
        setSearchUserParams,
        isLoadMore
    }) => {
    const observerTarget = useObserverLoadMore(setSearchUserParams, usersAreLoading);

    return (
        <div className={classes.search_result_list_container}>
            <div className={classes.search_result_list_content_container}>
                {!activeUsername
                    ? <MessageBox noFill={true}><h2>Please, enter username</h2></MessageBox>
                    : usersAreLoading && searchUserParams.page === 0
                        ? <Loader outer={true}/>
                        : usersError
                            ? <MessageBox noFill={true}><h2>{usersError.message}</h2></MessageBox>
                            : users.length > 0
                                ? users.map(user => <ResultUserItem key={user.id} user={user}/>)
                                : <MessageBox noFill={true}>
                                    <h2>User <span style={{color: "#ad2727"}}>{activeUsername}</span> hasn't been found
                                    </h2>
                                </MessageBox>
                }
                {usersAreLoading && searchUserParams.page > 0 && <Loader/>}
                {isLoadMore && <div ref={observerTarget}></div>}
            </div>
        </div>
    );
};

export default SearchResultUserList;