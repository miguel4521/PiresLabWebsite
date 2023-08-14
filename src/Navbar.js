import "./Navbar.css"
import { Outlet } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {useEffect} from "react";

const Navbar = () => {
    return (
        <>
            <nav className="panel">
                <div className="sections desktop">
                    <div className="section-left">
                        <div className="lab-name">PIRES LAB</div>
                        <div className="">Comparative Lab Genetics</div>
                    </div>

                    <div className="section-center">
                        <div className="anchor-container">
                            <a href="/Pires">Home</a>
                            <a href="/Pires/research">Research</a>
                            <a href="#people">People</a>
                            <a href="#publications">Publications</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    <div className="section-right">
                        <div className="anchor-container">
                            <a href="https://www.linkedin.com/in/andre-pires-da-silva-147a6416" className="contact-button" target="_blank"
                               rel="noreferrer">
                                <LinkedInIcon sx={{fontSize: "1.5em"}}/>
                            </a>
                            <a href="https://twitter.com/andre_evol" className="contact-button" target="_blank" rel="noreferrer"><img style={{height: "1.5em"}} src="/images/XIcon.png" /></a>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;
