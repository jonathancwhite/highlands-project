import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.js";
import CreateProduct from "./components/CreateProduct.jsx";
import ProductsDashboard from "./components/ProductsDashboard.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<CreateProduct />} />
            <Route path="/products" element={<ProductsDashboard />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
