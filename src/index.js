import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter, HashRouter,
    Route,
    Routes,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Research from "./Research";
import App from "./App";
import People from "./People";
import Publications from "./Publications";

const RootComponent = () => {

    return (
        <HashRouter>
            <>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/research" element={<Research/>}/>
                    <Route path="/people" element={<People/>}/>
                    <Route path="/publications" element={<Publications/>}/>
                </Routes>
            </>
        </HashRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);

