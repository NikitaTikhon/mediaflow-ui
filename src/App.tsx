import {BrowserRouter} from "react-router-dom";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import AppNavbar from "./component/Navbar/AppNavbar";
import AppRouter from "./routes/AppRouter";
import AppFooter from "./component/Footer/AppFooter";
import keycloak from "./keycloack/keycloak.js"
import "./index.css";

function App() {

    return (
        <ReactKeycloakProvider
            authClient={keycloak}
        >
            <BrowserRouter>
                <AppNavbar/>
                <AppRouter/>
                <AppFooter/>
            </BrowserRouter>
        </ReactKeycloakProvider>
    )
}

export default App
