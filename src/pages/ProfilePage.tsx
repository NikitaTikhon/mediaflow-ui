import {FC} from "react";
import classes from "./ProfilePage.module.css"
import Gallery from "../component/Gallery/Gallery";
import UserInfo from "../component/User/UserInfo/UserInfo";

const ProfilePage: FC = () => {

    return (
        <div className={classes.page_body}>
            {/*<UserInfo/>*/}
            {/*<Gallery/>*/}
        </div>
    )
}

export default ProfilePage