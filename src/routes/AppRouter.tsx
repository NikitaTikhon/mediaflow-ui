import {Route, Routes} from 'react-router-dom';
import './routes';
import {FC} from "react";
import {routes} from "./routes";
import ErrorPage from "../pages/ErrorPage";
import PageLayout from "./PageLayout";

const AppRouter: FC = () => {

    return (
        <Routes>
            <Route element={<PageLayout/>}>
                {routes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>
                )}
            </Route>
            <Route path="*" element={<ErrorPage>Page not found</ErrorPage>}/>
        </Routes>
    );
};

export default AppRouter;