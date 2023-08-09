import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
], {
    basename: "/Pires",
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
