import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
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
    const parallaxRef = React.useRef(null);

    return (
        <BrowserRouter basename="/Pires">
            <>
                <Navbar parallaxRef={parallaxRef}/>
                <Routes>
                    <Route path="/" element={<App parallaxRef={parallaxRef}/>}/>
                    <Route path="research" element={<Research/>}/>
                    <Route path="people" element={<People/>}/>
                    <Route path="/publications" element={<Publications/>}/>
                </Routes>
            </>
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<RootComponent />);

