import {UserMinInfo} from "../../type/UserMinInfo";
import {ErrorResponse} from "../../type/ErrorResponse";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectFollowers} from "../../store/reducers/FollowersSlice";
import {useEffect, useState} from "react";
import {fetchFollowers} from "../../store/reducers/ActionCreators";
import {useDebounce} from "../../hooks/useDebounce";

export interface SearchFollowingParams {
    username: string;
    page: number;
}

interface UseFollowersInf {
    followers: UserMinInfo[];
    followersAreLoading: boolean;
    followersError: ErrorResponse | null;
    activeUsername: string;
    searchFollowingParams: SearchFollowingParams;
    setSearchFollowingParams: (value: (((prevState: SearchFollowingParams) => SearchFollowingParams) | SearchFollowingParams)) => void;
    isLoadMore: boolean;
}

const initialSearchFollowingParams = {
    username: "",
    page: 0
}

const useFollowers = (): UseFollowersInf => {
    const [searchFollowingParams, setSearchFollowingParams] = useState(initialSearchFollowingParams);
    const [isLoadMore, setIsLoadMore] = useState<boolean>(true);

    const activeUsername = useDebounce(searchFollowingParams.username, 700);
    const dispatch = useAppDispatch();

    const {followers, isLoading: followersAreLoading, error: followersError} = useAppSelector(selectFollowers);
    useEffect(() => {
        dispatch(fetchFollowers(activeUsername, searchFollowingParams, setIsLoadMore));
    }, [activeUsername, searchFollowingParams.page]);

    return {
        followers,
        followersAreLoading,
        followersError,
        activeUsername,
        searchFollowingParams,
        setSearchFollowingParams,
        isLoadMore
    };
}

export default useFollowers;