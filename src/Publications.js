import "./Publications.css"
import {NavLink, useLocation} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useEffect} from "react";

const Publications = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element)
                window.scrollTo({top: element.getBoundingClientRect().top - 150, behavior: 'smooth'})
        }
    }, [location]);

    const videos = [
        {
            iframe: <iframe title="vimeo-player" src="https://player.vimeo.com/video/734752415?h=617663e1a1"
                            width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>,
            videoLink: "https://player.vimeo.com/video/734752415?h=617663e1a1",
            title: <div className="title">Liposome-mediated CRISPR and RNAi in parasitic and free-living nematodes. 7th
                International Congress of Nematology, Antibes Juan-les-Pines,
                France. 2 May, 2022</div>
        },
        {
            iframe: <iframe title="vimeo-player" src="https://player.vimeo.com/video/734752257?h=f95d1561c2" width="100%"
                            height="100%" frameBorder="0" allowFullScreen></iframe>,
            videoLink: "https://player.vimeo.com/video/734752257?h=f95d1561c2",
            title: <div className="title">Plasticity and evolution of reproductive system development.Institute of
                Biodiversity, Animal Health & Comparative Medicine,
                University of Glasgow, UK. 24 November, 2021.</div>
        },
        {
            iframe: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/id_Z3ieOaLc"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>,
            videoLink: "https://www.youtube.com/live/id_Z3ieOaLc?feature=share",
            title: <div className="title">Energy-sensing pathways mediate intergenerational inheritance (in Portuguese).
                Institute of Biology, Universidade de Brasília, Brazil. 5 May, 2021.</div>
        }
    ]

    const publications = [
        {
            authors: "Al-Yazeedi T., Adams S., Tandonnet S., Turner A., Kim, J., Lee, J., Pires-daSilva, A. (2023).",
            title: <div className="publication-title">A QTL influences sex ratios by controlling asymmetric organelle positioning during male spermatogenesis in <em>Auanema freiburgense</em>.</div>,
            link: "https://www.biorxiv.org/content/10.1101/2023.05.16.540925v1",
            journal: "bioRxiv doi: https://doi.org/10.1101/2023.05.16.540925",
        },
        {
            authors: "Tandonnet, S., Haq M., Turner, A.,Grana, T., Paganopoulou, P., Adams, S., Dhawan, S., Kanzaki, N., Nuez, I., Felix, M.-A., Pires-daSilva, A. (2022)",
            title: <div className="publication-title">De novo genome assembly of <em>Auanema melissensis</em>, a trioecious free-living nematode.</div>,
            link: "https://sciendo.com/article/10.2478/jofnem-2022-0059",
            journal: "J Nematol, doi: 10.2478/jofnem-2022-0059 (in press).",
        },
        {
            authors: "Al-Yazeedi, T., Xu, E., Kaur, J., Shakes, D., and Pires-daSilva, A. (2022).",
            title: <div className="publication-title">Lagging X chromatids specify the orientation of asymmetric organelle partitioning in XX spermatocytes of <em>Auanema rhodensis</em>.</div>,
            link: "https://doi.org/10.1093/genetics/iyac159",
            journal: "Genetics, iyac159."
        },
        {
            authors: "Adams, S., Pathak, P., Kittelman, M., Jones, A.R.C., Mallon, E. B., and Pires-daSilva, A. (2022).",
            title: <div className="publication-title">Sexual morph specialisation in a trioecious nematode balances opposing selective forces.</div>,
            link: "https://www.nature.com/articles/s41598-022-09900-8",
            journal: "Sci Rep 12, 6402."
        },
        {
            authors: "Robles, P., Turner, A., Zuco, G., Adams, S., Paganopolou, P., Winton, M., Hill, B., Kache, V., Bateson, C., and Pires-daSilva, A. (2021).",
            title: <div className="publication-title">Parental energy-sensing pathways control intergenerational offspring sex determination in the nematode Auanema freiburgensis.</div>,
            link: "https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-021-01032-1",
            journal: "BMC Biology 19, 102."
        },
        {
            authors: "Kranse, O., Beasley, H., Adams, S., Pires-da Silva, A., Bell, C., Lilley, C., Urwin, P., Bird, D., Miska, E., Smant, G., et al. (2021).",
            title: <div className="publication-title">Towards genetic modification of plant-parasitic nematodes: delivery of macromolecules to adults and expression of exogenous mRNA in second stage juveniles.</div>,
            link: "https://academic.oup.com/g3journal/article/11/2/jkaa058/6135037",
            journal: "G3 11, jkaa058."
        },
        {
            
        }
    ]

    return (
        <div className="page-container">
            <div className="content-container info">
                <NavLink to={"/publications/#publications"} style={{margin: "10px"}} className={"button"}>Go to publications<div className="arrow-wrapper"><ArrowForwardIcon/></div></NavLink>
                <div className="publications-container">
                    <div className="video-publications-container">
                        <div className="header-txt">Videos of recent talks</div>
                        {videos.map((video, index) => {
                            return <a href={video.videoLink} className="video-container" target="_blank"
                                      rel="noreferrer" key={index}>
                                {video.iframe}
                                {video.title}
                            </a>
                        })}
                    </div>
                    <div className="header-txt" id="publications">Publications</div>
                    <div className="video-publications-container">
                        {publications.map((publication, index) => {
                           return <a href={publication.link} target="_blank" rel="noreferrer" className="journal-publication" key={index}>
                                {publication.title}
                                <div className="publication-authors">{publication.authors}</div>
                                <div className="publication-journal">{publication.journal}</div>
                               <div className="publication-read-more">Read more</div>
                           </a>
                        })}
                    </div>
                </div>
                <div className="footer" />
            </div>
        </div>
    )
}

export default Publications;