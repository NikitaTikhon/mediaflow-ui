import {ErrorResponse} from "../../type/ErrorResponse";
import {useAppDispatch} from "../../hooks/redux";
import useRequest from "../../hooks/useRequest";
import {followersSlice} from "../../store/reducers/FollowersSlice";
import FollowerService from "../../API/FollowerService";
import UserKeycloak from "../../keycloack/UserKeycloak";


interface UseFollowDeleteInf {
    deleteFollow: (publicId: string) => void;
    followDeleteIsLoading: boolean;
    followDeleteError: ErrorResponse | null;
}

const usePhotoDelete = (): UseFollowDeleteInf => {
    const dispatch = useAppDispatch();

    const {request: deleteFollow, isLoading: followDeleteIsLoading, error: followDeleteError} = useRequest(async (userReceiverId: string) => {
        await FollowerService.deleteFollower(userReceiverId, UserKeycloak.getToken());
        dispatch(followersSlice.actions.deleteFollow(userReceiverId));
    });

    return {deleteFollow, followDeleteIsLoading, followDeleteError};
}

export default usePhotoDelete;