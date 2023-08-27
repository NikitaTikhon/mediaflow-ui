import {FC, ReactNode} from 'react';
import UserKeycloak from "../keycloack/UserKeycloak";
import NotAllowed from "../component/Message/NotAllowed";

interface RenderOnRoleI {
    roles: string[],
    children: ReactNode
}

const RenderOnRole: FC<RenderOnRoleI> = ({roles, children}) => {
    return (
        UserKeycloak.hasRole(roles) ? children : <NotAllowed/>
    );
};

export default RenderOnRole;