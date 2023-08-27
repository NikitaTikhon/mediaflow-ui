import {ErrorResponse} from "../../../type/ErrorResponse";
import {useEffect} from "react";
import {FollowerInf} from "../../../type/Follower";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchFollower} from "../../../store/reducers/ActionCreators";
import {selectFollower} from "../../../store/reducers/FollowerSlice";

interface UseSaveFollowerInf {
    follower: FollowerInf | undefined;
    isFollowerIsLoading: boolean;
    isFollowerError: ErrorResponse | null;
}

const useIsFollower = (userReceiverId: any): UseSaveFollowerInf => {
    const dispatch = useAppDispatch();
    const {follower, isLoading: isFollowerIsLoading, error: isFollowerError} = useAppSelector(selectFollower);
    useEffect(() => {
        userReceiverId && dispatch(fetchFollower(userReceiverId));
    }, [userReceiverId]);

    return {follower, isFollowerIsLoading, isFollowerError};
}

export default useIsFollower;