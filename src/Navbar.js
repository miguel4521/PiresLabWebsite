import "./Navbar.css"
import {NavLink, useLocation} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({parallaxRef}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const homePressed = () => {
        setIsMenuOpen(false);
        if (location.pathname === "/") {
            if (parallaxRef && parallaxRef.current)
                parallaxRef.current.scrollTo(0); // scroll to the top
        }
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (<>
        <nav role="navigation" className="panel">
            <div className="sections desktop">
                <NavLink to="/" className="section-left">
                    <div className="lab-name">PIRES LAB</div>
                    <div className="">Comparative Lab Genetics</div>
                </NavLink>

                <div className="section-center">
                    <div className="anchor-container">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/research">Research</NavLink>
                        <NavLink to="/people">People</NavLink>
                        <NavLink to="/publications">Publications</NavLink>
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
                                                 src="images/TwitterX.svg"/></a>
                    </div>
                </div>
            </div>
            <div className="sections mobile">
                <div className="section-left">
                </div>
                <NavLink onClick={homePressed} to="/" className="section-center">
                    PIRES LAB
                </NavLink>
                <button onClick={toggleMenu} className="section-right mobile">
                    {isMenuOpen ? <CloseIcon sx={{fontSize: "30px"}}/> : <MenuIcon sx={{fontSize: "30px"}}/>}
                </button>
            </div>
        </nav>
        <div className="mobile-menu" style={isMenuOpen ? {visibility: "visible", opacity: "1"} : {visibility: "hidden", opacity: "0"}}>
            <div className="menu-nav-option">
                <NavLink onClick={homePressed} className="menu-nav-link" to="/">Home</NavLink>
            </div>
            <div className="menu-nav-option">
                <NavLink onClick={toggleMenu} className="menu-nav-link" to="/research">Research</NavLink>
            </div>
            <div className="menu-nav-option">
                <NavLink onClick={toggleMenu} className="menu-nav-link" to="/people">People</NavLink>
            </div>
            <div className="menu-nav-option">
                <NavLink onClick={toggleMenu} className="menu-nav-link" to="/publications">Publications</NavLink>
            </div>
            <div className="menu-nav-option">
                <NavLink onClick={toggleMenu} className="menu-nav-link" to="/#contact">Contact</NavLink>
            </div>
        </div>
    </>)
}

export default Navbar;
