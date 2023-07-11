import React, {FC} from 'react';
import classes from "./UserInfo.module.css"

const UserInfo: FC = () => {
    return (
        <div className={classes.userinfo_container}>
            <img className={classes.user_main_avatar} src={"./img.jpg"} alt={"Avatar"}/>
            <div className={classes.user_description}>
                <p>Haof</p>
                <p>Tikhon Nikita</p>
            </div>
        </div>
    );
};

export default UserInfo;