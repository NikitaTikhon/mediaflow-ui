import MediaflowPage from "../pages/MediaflowPage";
import ProfilePage from "../pages/ProfilePage";
import {ReactNode} from "react";
import RenderOnAuthenticated from "../helpers/RenderOnAuthenticated";
import FollowerPage from "../pages/FollowerPage";
// import RenderOnRole from "../helpers/RenderOnRole";
import ProfileOtPage from "../pages/ProfileOtPage";
import SettingPage from "../pages/SettingPage";

interface RouteInf {
    path: string,
    element: ReactNode
}

export const routes: RouteInf[] = [
    {path: "/", element: <MediaflowPage/>},
    {path: "/profile", element: <RenderOnAuthenticated><ProfilePage/></RenderOnAuthenticated>},
    {path: "/profile/:username", element: <RenderOnAuthenticated><ProfileOtPage/></RenderOnAuthenticated>},
    {path: "/followers", element: <RenderOnAuthenticated><FollowerPage/></RenderOnAuthenticated>},
    // {path: "/followers", element: <RenderOnRole roles={["ROLE_ADMIN"]}><FollowerPage/></RenderOnRole>},
    {path: "/settings", element: <RenderOnAuthenticated><SettingPage/></RenderOnAuthenticated>},
]
