import "./Research.css";
import Header from "./Header";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Research = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element)
                element.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }, [location]);


    return (
        <div className="page-container">
            <div className="content-container info">
                <Header header={"Research"}/>

                <div style={{padding: "10px"}}>
                    Recent advances such as technologies to easily edit genomes and affordable whole genome
                    sequencing, are providing a paradigm shift in genetics research. New organisms can now be adopted
                    with
                    relatively little effort to complement the more established genetics model systems. We study
                    nematodes with that produce males, females and hermaphrodites simultaneously. Some of them were
                    described by us recently.
                </div>


                <div className="research-txt-wrapper" id="evolution-of-sex-determination">
                    <div className="header-txt">Evolution of sex determination</div>
                    <div>How did a male/female species evolve into a male/hermaphrodite species
                        like <i>C. elegans</i>? We are studying a recently described species of nematode, <i>Auanema
                            rhodensis</i>, which produces males, females and hermaphrodites. This nematode may give some
                        clues as to how new mating systems evolved. Species that produce three genders might be an
                        evolutionary intermediate between males/females and males/hermaphrodites.
                    </div>
                    <img src="/images/PiresLabResearchPg5.png" alt="" className="img"/>
                    <div className="content-txt" style={{textAlign: 'center'}}><i>A. rhodensis</i> hermaphrodites
                        self-fertilize to make males, females and hermaphrodites
                    </div>
                </div>
                <div className="research-txt-wrapper" id="intergenerational-inheritance">
                    <div className="header-txt">Intergenerational inheritance</div>
                    <div>
                        Information sensed by the maternal generation may be transmitted to the offspring to increase
                        their
                        fitness. However, the mechanisms of inheritance of adaptive maternal effects through the
                        germline
                        are largely unknown. The nematode <i>Auanema freiburgensis</i> offers many advantages for
                        studying
                        this phenomenon, due to the easy-to-score phenotypes, short lifecycle and large reproductive
                        output.
                        We found that environmental stress experienced by the parental generation induces the production
                        of
                        stress-resistant offspring. Environmental signals sensed by neurons send signals to the germline
                        to
                        change its epigenetic and transcriptional profile. The signals to the germline are mediated by
                        highly conserved energy sensors, raising the possibility that the same mechanism could be
                        present in
                        other organisms that display intergenerational inheritance.
                        <img src="/images/PiresLabResearchPg4.png" alt="" className="img"/>
                    </div>
                </div>
                <div className="research-txt-wrapper" id="polar-body-formation-in-males">
                    <div className="header-txt">"Polar-body" formation in males</div>
                    <div>
                        We discovered that <i>A. rhodensis males</i>, although being of the XO karyotype, produce only
                        one
                        type of viable sperm: sperm with an X chromosome. The sperm without the X chromosome (the
                        nullo-X
                        sperm) is discarded before being used. This is similar to polar bodies in females, in which 3
                        out of
                        the 4 potential formed gametes are discarded. During spermatocyte division, all cytoplasmic
                        components necessary for sperm function (e.g., mitochondria, cytoskeleton proteins for sperm
                        motility) co-segregate with the X chromosome. The unnecessary components (e.g., endosplasmic
                        reticulum, nuclear pore proteins) are dumped into the nullo-spermatid. We are studying in how
                        this
                        asymmetric cell division occurs.
                        <img src="/images/PiresLabResearchPg3.png" alt="" className="img"/>
                    </div>
                </div>
            </div>
        </div>)
};

export default Research;
