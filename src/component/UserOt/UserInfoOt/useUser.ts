import useRequest from "../../../hooks/useRequest";
import UserService from "../../../API/UserService";
import UserKeycloak from "../../../keycloack/UserKeycloak";
import {useEffect, useState} from "react";
import {User} from "../../../type/User";
import {ErrorResponse} from "../../../type/ErrorResponse";

interface UseUserInf {
    user: User | undefined;
    userIsLoading: boolean;
    userError: ErrorResponse | null;
}

export const useUser = (username: string | undefined): UseUserInf => {
    const [user, setUser] = useState<User>();

    const {request: fetchUserByUsername, isLoading: userIsLoading, error: userError} = useRequest(async () => {
        const response = await UserService.fetchUserByUsername(username ? username : UserKeycloak.getUsername(), UserKeycloak.getToken());
        setUser(response);
    })

    useEffect(() => {
        fetchUserByUsername();
    }, [username]);

    return {user, userIsLoading, userError}
}