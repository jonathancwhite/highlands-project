import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/main.scss";
import GeneralLayout from "./layouts/GeneralLayout.jsx";
import Form from "./components/Form.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ToastContainer />
                <GeneralLayout>
                    <div className="container">
                        <Form />
                    </div>
                </GeneralLayout>
            </LocalizationProvider>
        </>
    );
};

export default App;
