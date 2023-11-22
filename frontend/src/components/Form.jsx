import { useState, useEffect } from "react";
import {
    Box,
    TextField,
    InputLabel,
    Paper,
    Button,
    Grid,
    IconButton,
    FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: "#f3f3f3",
    padding: "1rem",
    margin: "1rem 0 2rem 0",
}));

export default function Form() {
    const currentDate = new Date();
    const minDate = currentDate;

    const dateObj = new Date(minDate);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    const [productName, setProductName] = useState("");
    const [productUPC, setProductUPC] = useState("");
    const [availableOn, setAvailableOn] = useState(dayjs(formattedDate));
    const [properties, setProperties] = useState([]);
    const [upcError, setUpcError] = useState("");
    const [isValid, setIsValid] = useState(false);

    // const validateUPC = (upc) => {
    //     if (!/^[0-9]{10,13}$/.test(upc)) {
    //         setUpcError("UPC must be 10, 12, or 13 digits long.");
    //         return false;
    //     }
    //     setUpcError("");
    //     return true;
    // };

    // const validateProperty = (property) => {
    //     if (property.name.length > 255 || property.value.length > 255) {
    //         return "Property name and value must be no more than 255 characters.";
    //     }
    //     return "";
    // };

    // Update UPC validation to not directly set state
    const checkUPCValidity = (upc) => {
        return /^[0-9]{10,13}$/.test(upc);
    };

    // Update property validation to not directly set state
    const checkPropertyValidity = (property) => {
        return property.name.length <= 255 && property.value.length <= 255;
    };

    // Update validation on state changes
    useEffect(() => {
        const isProductNameValid = productName.length > 0;
        const isUPCValid = checkUPCValidity(productUPC);
        const arePropertiesValid = properties.every(checkPropertyValidity);

        setIsValid(isProductNameValid && isUPCValid && arePropertiesValid);

        // Set UPC error state
        if (!isUPCValid) {
            setUpcError("UPC must be 10, 12, or 13 digits long.");
        } else {
            setUpcError("");
        }

        // Set property error states
        const updatedProperties = properties.map((property) => ({
            ...property,
            error: checkPropertyValidity(property)
                ? ""
                : "Property name and value must be no more than 255 characters.",
        }));
        setProperties(updatedProperties);
    }, [productName, productUPC, properties]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let date = dayjs(availableOn).format("MM-DD-YYYY");

        let formData = {
            name: productName,
            upc: productUPC,
            available_on: date,
            properties: properties,
        };

        console.log(formData);
    };

    const handleAddProperty = () => {
        setProperties([...properties, { name: "", value: "" }]);
    };

    const handleUPCChange = (e) => {
        setProductUPC(e.target.value);
    };

    const handlePropertyChange = (index, type, value) => {
        const updatedProperties = [...properties];
        updatedProperties[index][type] = value;
        setProperties(updatedProperties);
    };

    const handleRemoveProperty = (index) => {
        const updatedProperties = properties.filter((_, i) => i !== index);
        setProperties(updatedProperties);
    };

    return (
        <Box component="form" autoComplete="off">
            <Item elevation={4}>
                <h2 className="page-heading">Add Product</h2>
                <div className="form form--product">
                    <TextField
                        id="product-name"
                        label="Product Name"
                        fullWidth
                        required
                        margin="normal"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <TextField
                        id="product-upc"
                        label="Product UPC"
                        fullWidth
                        required
                        margin="normal"
                        value={productUPC}
                        onChange={handleUPCChange}
                        error={upcError !== ""}
                        helperText={upcError}
                    />
                    <InputLabel htmlFor="available_on">Available On</InputLabel>
                    <DatePicker
                        minDate={dayjs(formattedDate)}
                        margin="normal"
                        value={availableOn}
                        onChange={(newValue) => setAvailableOn(newValue)}
                        fullWidth
                    />
                </div>
                <div className="form form--property">
                    <h2 className="page-heading">Properties</h2>
                    {properties.map((property, index) => (
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            key={index}
                        >
                            <Grid item xs={5} sm={5}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Property Name"
                                    value={property.name}
                                    onChange={(e) =>
                                        handlePropertyChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={5} sm={5}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Property Value"
                                    value={property.value}
                                    onChange={(e) =>
                                        handlePropertyChange(
                                            index,
                                            "value",
                                            e.target.value
                                        )
                                    }
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                {property.error && (
                                    <FormHelperText error>
                                        {property.error}
                                    </FormHelperText>
                                )}
                                <IconButton
                                    onClick={() => handleRemoveProperty(index)}
                                    aria-label="delete"
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))}
                </div>
                <div className="form-action">
                    <Button
                        variant="outlined"
                        onClick={(e) => handleAddProperty(e)}
                    >
                        Add Property
                    </Button>
                    <Button
                        variant="contained"
                        onClick={(e) => handleFormSubmit(e)}
                        disabled={!isValid}
                    >
                        Add Product
                    </Button>
                </div>
            </Item>
        </Box>
    );
}
