import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Research from "./Research";
import App from "./App";

const router = createBrowserRouter([
    {
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "research",
                element: <Research />
            }
        ]
    },
], {
    basename: "/Pires",
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
