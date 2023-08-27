import classes from './Setting.module.css'
import UserKeycloak from "../keycloack/UserKeycloak";
import {BiLogIn} from "react-icons/bi";

const SettingPage = () => {
    return (
        <div className={classes.page_body}>
            <div className={classes.setting_container}>
                <div className={classes.setting_item_container}>
                    <p>Logout</p>
                    <button onClick={() => UserKeycloak.doLogout()} title="logout">
                        <BiLogIn/>Logout
                    </button>
                </div>
                {/*<div className={classes.setting_item_container}>*/}
                {/*    <p>Theme</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default SettingPage;