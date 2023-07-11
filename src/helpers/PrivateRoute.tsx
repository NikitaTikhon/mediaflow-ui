import {useKeycloak} from "@react-keycloak/web";
import {Navigate, useLocation} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {keycloak} = useKeycloak();
    const prevRoute = useLocation();

    const isLoggedIn = keycloak.authenticated;
    if (isLoggedIn === undefined) {
        return children;
    }

    if (!isLoggedIn) {
        keycloak.login()
        return <Navigate to={"/"} state={{ prevRoute }} replace />
    }

    return children;
};

export default PrivateRoute;
