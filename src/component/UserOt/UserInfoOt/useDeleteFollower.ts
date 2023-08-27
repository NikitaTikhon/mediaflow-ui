import useRequest from "../../../hooks/useRequest";
import FollowerService from "../../../API/FollowerService";
import UserKeycloak from "../../../keycloack/UserKeycloak";
import {ErrorResponse} from "../../../type/ErrorResponse";
import {fetchFollower} from "../../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../../hooks/redux";

interface UseDeleteFollowerInf {
    deleteFollower: (userReceiverId: string | undefined) => void;
    deleteFollowerIsLoading: boolean;
    deleteFollowerError: ErrorResponse | null;
}

const useDeleteFollower = (): UseDeleteFollowerInf => {
    const dispatch = useAppDispatch();
    const {request: deleteFollower, isLoading: deleteFollowerIsLoading, error: deleteFollowerError} = useRequest(async (userReceiverId: string | undefined) => {
        await FollowerService.deleteFollower(userReceiverId, UserKeycloak.getToken());
        await dispatch(fetchFollower(userReceiverId));
    });

    return {deleteFollower, deleteFollowerIsLoading, deleteFollowerError}
}

export default useDeleteFollower;