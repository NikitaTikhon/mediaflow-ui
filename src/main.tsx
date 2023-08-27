import ReactDOM from 'react-dom/client'
import App from "./App";
import UserKeycloak from "./keycloack/UserKeycloak";

const root = () => ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>,
)
UserKeycloak.initKeycloak(root);
