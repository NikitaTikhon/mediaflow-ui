import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./index.css";
import {store} from "./store/store"
import {Provider} from "react-redux";
import ScrollBack from "./component/ScrollBack/ScrollBack";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
                <ScrollBack/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
