import {Link} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web/lib/useKeycloak";
import {KeycloakLogoutOptions} from "keycloak-js";
import classes from './AppNavbar.module.css'
import Searchbar from "../Searchbar/Searchbar";
import {BiSolidHome} from "react-icons/bi";

const logoutOptions: KeycloakLogoutOptions = {
    redirectUri: import.meta.env.VITE_CLIENT_URL
}
const AppNavbar = () => {
    const {keycloak} = useKeycloak();

    return (
        <header className={classes.app_navbar_container}>
            <Link style={{fontWeight: "bold", color: "rgb(193 255 241)", zIndex: "1"}} to="/">Mediaflow</Link>
            <nav className={classes.nav_items_container}>
                <div className={classes.nav_start}>
                    <Link to="/profile"><BiSolidHome/>Profile</Link>
                </div>
                <div className={classes.nav_middle}>
                    <Searchbar/>
                </div>
                <div className={classes.nav_end}>
                    {keycloak.authenticated ?
                        <Link to={"##"} onClick={() => keycloak.logout(logoutOptions)}>Logout</Link>
                        :
                        <Link to={"##"} onClick={() => keycloak.login()}>Log In</Link>
                    }
                </div>

            </nav>
            <a className={classes.icon_menu} href={"##"}><span></span></a>
        </header>
    );
};

export default AppNavbar;