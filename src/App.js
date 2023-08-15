import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import "./App.css";
import Home from "./Home";
import ResearchPreview from "./ResearchPreview";
import Header from "./Header";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

function App({parallaxRef}) {
    const [childLoaded, setChildLoaded] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element)
                element.scrollIntoView({behavior: 'smooth'});
        }
    }, [location, childLoaded]);

    const getOptimalHeight = (contentElement) => {
        const children = contentElement.children;
        let height = 0;
        if (window.innerHeight < 400)
            height = 1400;
        else if (window.innerHeight < 500)
            height = 1500;
        else {
            for (let i = 0; i < children.length; i++) {
                if (i < 2 || i > 3)
                    height += children[i].offsetHeight
            }
        }
        return `${height + 200}px`;
    }

    useEffect(() => {
        if (parallaxRef.current && !childLoaded) {
            setChildLoaded(true)
            return;
        }

        if (childLoaded) {
            parallaxRef.current.content.current.style.transition = "height 0.5s ease-in-out";
            parallaxRef.current.content.current.style.height = getOptimalHeight(parallaxRef.current.content.current)
        }

        if (parallaxRef.current && parallaxRef.current.content.current) {
            const contentElement = parallaxRef.current.content.current;

            const observer = new MutationObserver(mutationsList => {
                for (let mutation of mutationsList) {
                    if (mutation.attributeName === 'style') {
                        const newHeight = getOptimalHeight(contentElement);
                        if (newHeight !== contentElement.style.height)
                            contentElement.style.height = newHeight;
                    }
                }
            });

            observer.observe(contentElement, {attributes: true, childList: false, subtree: false});

            // Cleanup the observer on component unmount
            return () => observer.disconnect();
        }
    }, [parallaxRef, childLoaded]);

    return (
        <div style={{height: "100vh", overflow: "hidden"}}>
            <Parallax ref={parallaxRef} pages={3}
                      style={{minHeight: "660px", maxHeight: "1000px", position: "relative"}}>
                <ParallaxLayer className="parallax" offset={0} speed={6.5} factor={0.6}>
                    <Home/>
                </ParallaxLayer>
                <ParallaxLayer className="parallax" offset={0.7} speed={3} factor={0.1}>
                    <Header header="Research"/>
                </ParallaxLayer>
                <ParallaxLayer className="parallax" offset={0.8} speed={0} factor={0.6}>
                    <ResearchPreview researchTitle='"Polar-body" formation in males'
                                     imageSrc="images/PiresLabResearchPg3.png"
                                     id="polar-body-formation-in-males"/>
                </ParallaxLayer>
                <ParallaxLayer className="parallax" offset={0.8} speed={1} factor={0.6}>
                    <ResearchPreview researchTitle="Intergenerational inheritance"
                                     imageSrc="images/PiresLabResearchPg5.png"
                                     id="intergenerational-inheritance"/>
                </ParallaxLayer>
                <ParallaxLayer className="parallax" offset={0.8} speed={3} factor={0.6}>
                    <ResearchPreview researchTitle="Evolution of sex determination"
                                     imageSrc="images/PiresLabResearchPg4.png"
                                     id="evolution-of-sex-determination"/>
                </ParallaxLayer>
                <ParallaxLayer className="parallax" id="contact" offset={1.4} speed={0} factor={0.7}>
                    <div className="page-container info">
                        <div className="header-txt contact-header">People</div>
                        <NavLink to={"people"} className={"button"}>
                            VIEW PEOPLE
                            <div className="arrow-wrapper"><ArrowForwardIcon/></div>
                        </NavLink>
                        <div className="header-txt contact-header">Publications</div>
                        <button className="button">
                            VIEW PUBLICATIONS
                            <div className="arrow-wrapper"><ArrowForwardIcon/></div>
                        </button>
                        <div className="header-txt contact-header">Contact</div>
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
                               rel="noreferrer"><img className="icon" src="/images/TwitterX.svg" alt=""/></a>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default App;
