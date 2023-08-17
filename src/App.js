import "./App.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";

function App() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) element.scrollIntoView({behavior: 'smooth'});
        }
    }, [location]);


    return (<div className="page-container">
        <div className="content-container info">
            <div style={{padding: "10px", marginBottom: "50px"}}>
                <div className="home-title">PIRES LAB</div>
                <div className="lab-info">Recent advances such as technologies to easily edit genomes and affordable
                    whole genome
                    sequencing, are providing a paradigm shift in genetics research. New organisms can now be adopted
                    with
                    relatively little effort to complement the more established genetics model systems. We study
                    nematodes with that produce males, females and hermaphrodites simultaneously.
                </div>
            </div>
            <div className="buttons-collection-wrapper" style={{marginBottom: "50px"}}>
                <NavLink to="research" className={"button view"}>
                    VIEW RESEARCH
                    <div className="arrow-wrapper"><ArrowForwardIcon/></div>
                </NavLink>
                <NavLink to="people" className={"button view"}>
                    VIEW PEOPLE
                    <div className="arrow-wrapper"><ArrowForwardIcon/></div>
                </NavLink>
                <NavLink to="publications" className="button view">
                    VIEW PUBLICATIONS
                    <div className="arrow-wrapper"><ArrowForwardIcon/></div>
                </NavLink>
            </div>
            <div className="header-txt contact-header" id="contact">Contact</div>
            <div className="contact-info">
                <a href="https://warwick.ac.uk/fac/sci/lifesci/people/apiresdasilva/" target="_blank"
                   rel="noreferrer" className="contact-button">
                    <div className="contact-txt">Andre Pires da Silva, Ph.D.</div>
                </a>
                <a href="https://goo.gl/maps/wsA8s3jZv8oxeQen9" target="_blank" rel="noreferrer"
                   className="contact-button">
                    <div className="address">
                        <div>University of Warwick</div>
                        <div>School of Life Sciences</div>
                        <div>Gibbet Hill</div>
                        <div>Coventry CV4 7AL</div>
                        <div>United Kingdom</div>
                    </div>
                </a>
                <div className="phone">
                    <div>Office: +44 (0) 24765 73329</div>
                    <div>Lab: +44 (0) 24765 74246</div>
                </div>
                <a href="mailto: andre.pires@warwick.ac.uk" className="contact-button">
                    <div className="email">
                        andre.pires@warwick.ac.uk
                    </div>
                </a>
            </div>
            <div className="socials">
                <a href="https://www.linkedin.com/in/andre-pires-da-silva-147a6416"
                   className="contact-button"
                   target="_blank"
                   rel="noreferrer">
                    <LinkedInIcon sx={{fontSize: "3em"}}/>
                </a>
                <a href="https://twitter.com/andre_evol" className="contact-button" target="_blank"
                   rel="noreferrer"><img className="icon" src="images/TwitterX.svg" alt=""/>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=R4zSE5cAAAAJ&view_op=list_works&sortby=pubdate"
                   className="contact-button" target="_blank"
                   rel="noreferrer"><img loading={"eager"}
                                         src="images/google_scholar.png"
                                         className="icon"
                                         alt=""/>
                </a>
            </div>
            <div className="footer"/>
        </div>
    </div>)
}

export default App;
