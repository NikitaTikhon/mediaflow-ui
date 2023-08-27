import {useNavigate} from "react-router-dom"
import UserKeycloak from "../keycloack/UserKeycloak";
import {FC, ReactNode, useEffect} from "react";

interface RenderOnAuthenticatedI {
    children: ReactNode
}

const RenderOnAuthenticated: FC<RenderOnAuthenticatedI> = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!UserKeycloak.isLoggedIn()) {
            const url = UserKeycloak.createLoginUrl()
            navigate(-1)
            location.assign(url)
        }
    })

    if (UserKeycloak.isLoggedIn()) {
        return children;
    }
};

export default RenderOnAuthenticated;
