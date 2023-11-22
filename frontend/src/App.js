import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/main.scss";

const App = ({ children }) => {
    return (
        <>
            <ToastContainer />
            <Outlet />
        </>
    );
};

export default App;
