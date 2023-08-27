import {useEffect, useState} from "react";
import {ErrorResponse} from "../../../type/ErrorResponse";
import UserKeycloak from "../../../keycloack/UserKeycloak";
import useRequest from "../../../hooks/useRequest";
import {FollowsInfoInf} from "../../../type/FollowsInfo";
import FollowerService from "../../../API/FollowerService";

interface UseMainPhotoInf {
    followsInfo: FollowsInfoInf | undefined,
    followsInfoIsLoading: boolean,
    followsInfoError: ErrorResponse | null,
}

const useFollowsInfo = (username: string = UserKeycloak.getUsername()): UseMainPhotoInf => {
    const [followsInfo, setFollowsInfo] = useState<FollowsInfoInf>();
    const {request: fetchFollowsInfo, isLoading: followsInfoIsLoading, error: followsInfoError} = useRequest(async () => {
        const response = await FollowerService.countFollows(username, UserKeycloak.getToken());
        setFollowsInfo(response);
    });
    useEffect(() => {
        fetchFollowsInfo();
    }, []);

    return {followsInfo, followsInfoIsLoading, followsInfoError};
}

export default useFollowsInfo;