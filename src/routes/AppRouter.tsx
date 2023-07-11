import {Route, Routes} from 'react-router-dom';
import './routes';
import {FC} from "react";
import {routes} from "./routes";

const AppRouter: FC = () => {

    return (
        <Routes>
            {routes.map(route =>
                <Route key={route.path} path={route.path} element={route.element}/>
            )}
        </Routes>
    );
};

export default AppRouter;