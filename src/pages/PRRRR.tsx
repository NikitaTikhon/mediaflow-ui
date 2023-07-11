import {FC} from "react";
import {useKeycloak} from "@react-keycloak/web";

const PRRRR: FC = () => {
    const {keycloak} = useKeycloak();

    const user = keycloak.tokenParsed;
    return (
        <div>
            <h1>Profile</h1>
            <h3>{user.email}</h3>
            <h3>{user.name}</h3>
        </div>
    );
};

export default PRRRR;