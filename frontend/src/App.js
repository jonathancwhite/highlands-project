import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/main.scss";
import GeneralLayout from "./layouts/GeneralLayout.jsx";

const App = () => {
    return (
        <>
            <ToastContainer />
            <GeneralLayout>
                <h2>Yo</h2>
            </GeneralLayout>
        </>
    );
};

export default App;
