import {FC} from "react";
import {Link, NavLink} from "react-router-dom";
import classes from './AppNavbar.module.css'
import UserSearchbar from "../Searchbar/UserSearchbar";
import {BiLogIn} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {RiUserFollowLine} from "react-icons/ri";
import {IoSettingsSharp} from "react-icons/io5";
import UserKeycloak from "../../keycloack/UserKeycloak";

const AppNavbar: FC = () => {
    return (
        <header className={classes.app_navbar_container}>
            <div className={classes.site_name}>
                <NavLink to="/" className={({ isActive }) => isActive ? classes.active_link : ""}>Mediaflow</NavLink>
            </div>
            <nav className={classes.nav_items_container}>
                <div className={classes.nav_start}>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? classes.active_link : ""} title="profile">
                        <CgProfile/>
                        <p>Profile</p>
                    </NavLink>
                    <NavLink to="/followers" className={({ isActive }) => isActive ? classes.active_link : ""} title="followers">
                        <RiUserFollowLine/>
                        <p>Followers</p>
                    </NavLink>
                </div>
                <div className={classes.nav_middle}>
                    <UserSearchbar/>
                </div>
                <div className={classes.nav_end}>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? classes.active_link : ""} title="settings">
                        <IoSettingsSharp/>
                        <p>Settings</p>
                    </NavLink>
                    {!UserKeycloak.isLoggedIn() &&
                        <Link to={"##"} onClick={() => UserKeycloak.doLogin()} title="log in">
                            <BiLogIn/><p>Log In</p>
                        </Link>
                    }
                </div>
            </nav>
        </header>
    );
};

export default AppNavbar;