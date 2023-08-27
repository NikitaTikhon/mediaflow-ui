import {Outlet} from 'react-router-dom';
import AppNavbar from "../component/Navbar/AppNavbar";
import AppFooter from "../component/Footer/AppFooter";
import {FC} from "react";

const PageLayout: FC = () => (
    <>
        <AppNavbar/>
        <Outlet/>
        <AppFooter/>
    </>
);

export default PageLayout;