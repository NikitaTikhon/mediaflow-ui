import {useEffect, useState} from "react";
import {ErrorResponse} from "../../type/ErrorResponse";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchUserSearch} from "../../store/reducers/ActionCreators";
import {UserMinInfo} from "../../type/UserMinInfo";
import {selectUsers} from "../../store/reducers/UserSearchSlice";
import {useDebounce} from "../../hooks/useDebounce";

export interface SearchUserParams {
    username: string;
    page: number;
}

interface UseUsersMinInfoInf {
    users: UserMinInfo[];
    usersAreLoading: boolean;
    usersError: ErrorResponse | null;
    activeUsername: string;
    searchUserParams: SearchUserParams;
    setSearchUserParams: (value: (((prevState: SearchUserParams) => SearchUserParams) | SearchUserParams)) => void;
    isLoadMore: boolean;
}

const initialSearchUserParams = {
    username: "",
    page: 0
}

const useUserSearch = (): UseUsersMinInfoInf => {
    const [searchUserParams, setSearchUserParams] = useState(initialSearchUserParams);
    const [isLoadMore, setIsLoadMore] = useState<boolean>(true);

    const activeUsername = useDebounce(searchUserParams.username, 700);
    const dispatch = useAppDispatch();

    const {users, isLoading: usersAreLoading, error: usersError} = useAppSelector(selectUsers);
    useEffect(() => {
        dispatch(fetchUserSearch(activeUsername, searchUserParams, setIsLoadMore));
    }, [activeUsername, searchUserParams.page]);

    return {
        users,
        usersAreLoading,
        usersError,
        activeUsername,
        searchUserParams,
        setSearchUserParams,
        isLoadMore
    };
}

export default useUserSearch;