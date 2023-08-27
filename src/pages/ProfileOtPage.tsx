import {useNavigate, useParams} from "react-router-dom";
import UserKeycloak from "../keycloack/UserKeycloak";
import {useEffect} from "react";
import classes from "./ProfileOtPage.module.css"
import UserInfoOt from "../component/UserOt/UserInfoOt/UserInfoOt";
import UserGalleryOt from "../component/UserOt/GalleryOt/UserGalleryOt";
import {useUser} from "../component/UserOt/UserInfoOt/useUser";
import ErrorPage from "./ErrorPage";

const ProfileOtPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {user, userError} = useUser(params.username);

    useEffect(() => {
        if (UserKeycloak.getUsername() === params.username) {
            navigate('/profile');
        }
    }, [params]);


    return (
        !userError ?
            <div className={classes.page_body}>
                <UserInfoOt user={user}/>
                <UserGalleryOt/>
            </div>
            : <ErrorPage>
            <p>User <span style={{color: "darkred"}}> {params.username} </span> hasn't been found</p>
            </ErrorPage>
    );
};

export default ProfileOtPage;