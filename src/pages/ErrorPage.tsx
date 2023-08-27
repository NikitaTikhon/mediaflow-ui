import {FC} from 'react';
import classes from './ErrorPage.module.css'
import {Link} from "react-router-dom";

interface ErrorPageProps {
    children?: any;
}

const ErrorPage: FC<ErrorPageProps> = ({children}) => {
    return (
        <div className={classes.page_body}>
            <div className={classes.outer_error_container}>
                <div className={classes.error_image_container}>
                    <img className={classes.error_image} src={`${window.location.origin}/404.png`} alt={"error image"}/>
                </div>
                {children}
                <Link className={classes.back_page} to={"/profile"}>back to profile page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;