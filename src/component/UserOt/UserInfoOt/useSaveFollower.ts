import useRequest from "../../../hooks/useRequest";
import FollowerService from "../../../API/FollowerService";
import UserKeycloak from "../../../keycloack/UserKeycloak";
import {ErrorResponse} from "../../../type/ErrorResponse";
import {useAppDispatch} from "../../../hooks/redux";
import {fetchFollower} from "../../../store/reducers/ActionCreators";

interface UseSaveFollowerInf {
    saveFollower: (userReceiverId: string | undefined) => void;
    saveFollowerIsLoading: boolean;
    saveFollowerError: ErrorResponse | null;
}

const useSaveFollower = (): UseSaveFollowerInf => {
    const dispatch = useAppDispatch();
    const {request: saveFollower, isLoading: saveFollowerIsLoading, error: saveFollowerError} = useRequest(async (userReceiverId: string | undefined) => {
        await FollowerService.saveFollower(userReceiverId, UserKeycloak.getToken());
        await dispatch(fetchFollower(userReceiverId));
    });

    return {saveFollower, saveFollowerIsLoading, saveFollowerError}
}

export default useSaveFollower;