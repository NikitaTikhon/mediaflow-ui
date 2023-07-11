import {useKeycloak} from "@react-keycloak/web";
import {FC} from "react";
import classes from "./MediaflowPage.module.css"

const MediaflowPage: FC = () => {
    const {keycloak} = useKeycloak();

    // const bearerAuth = () => {
    //     return 'Bearer ' + keycloak.token
    // }
    //
    // const onClick = () => {
    //     return fetch("http://localhost:8081/api/v1/authenticateRole", {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': bearerAuth(),
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((d) => console.log(d))
    // }

    return (
        <div className={classes.page_body}>
            Mediaflow
        </div>
    );
};

export default MediaflowPage;