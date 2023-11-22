import GeneralLayout from "../layouts/GeneralLayout.jsx";
import Form from "./Form.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CreateProduct = () => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <GeneralLayout>
                    <div className="container">
                        <Form />
                    </div>
                </GeneralLayout>
            </LocalizationProvider>
        </>
    );
};

export default CreateProduct;
