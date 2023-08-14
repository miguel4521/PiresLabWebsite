import "./Navbar.css"
import {NavLink} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
    return (<>
        <nav className="panel">
            <div className="sections desktop">
                <div className="section-left">
                    <div className="lab-name">PIRES LAB</div>
                    <div className="">Comparative Lab Genetics</div>
                </div>

                <div className="section-center">
                    <div className="anchor-container">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/research">Research</NavLink>
                        <NavLink to="/people">People</NavLink>
                        <a href="#publications">Publications</a>
                        <NavLink to="/#contact">Contact</NavLink>
                    </div>
                </div>

                <div className="section-right">
                    <div className="anchor-container">
                        <a href="https://www.linkedin.com/in/andre-pires-da-silva-147a6416"
                           className="contact-button" target="_blank"
                           rel="noreferrer">
                            <LinkedInIcon sx={{fontSize: "1.5em"}}/>
                        </a>
                        <a href="https://twitter.com/andre_evol" className="contact-button" target="_blank"
                           rel="noreferrer"><img loading={"eager"} style={{height: "1.5em"}}
                                                 src="/images/TwitterX.svg"/></a>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar;
