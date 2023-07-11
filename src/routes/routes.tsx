import MediaflowPage from "../pages/MediaflowPage";
import PRRRR from "../pages/PRRRR";
import ProfilePage from "../pages/ProfilePage";
import {ReactNode} from "react";
import PrivateRoute from "../helpers/PrivateRoute";

interface RouteInf {
    path: string,
    element: ReactNode
}

export const routes: RouteInf[] = [
    {path: "/", element: <MediaflowPage/>},
    {path: "/profile", element: <ProfilePage/>},
    // {path: "/secured", element: <PrivateRoute><ProfilePage/></PrivateRoute>},
]
