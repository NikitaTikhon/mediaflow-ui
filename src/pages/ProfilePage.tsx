import {FC} from "react";
import UserGallery from "../component/User/Gallery/UserGallery";
import UserInfo from "../component/User/UserInfo/UserInfo";
import classes from "./ProfilePage.module.css"

const ProfilePage: FC = () => {

    return (
        <div className={classes.page_body}>
            <UserInfo/>
            <UserGallery/>
        </div>
    )
}

export default ProfilePage