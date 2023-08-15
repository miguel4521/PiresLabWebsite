import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    createBrowserRouter, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Research from "./Research";
import App from "./App";
import People from "./People";
import {Switch} from "@mui/material";
import Publications from "./Publications";

const router = createBrowserRouter([
    {
        element: <Navbar/>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "research",
                element: <Research/>
            },
            {
                path: "people",
                element: <People/>
            },
        ]
    },
], {
    basename: "/Pires",
});


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/Pires">
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="research" element={<Research/>}/>
                <Route path="people" element={<People/>}/>
                <Route path="/publications" element={<Publications/>}/>
            </Routes>
        </>
    </BrowserRouter>
);
