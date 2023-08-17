import "./Publications.css"
import {NavLink, useLocation} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useEffect} from "react";

const Publications = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) window.scrollTo({top: element.getBoundingClientRect().top - 150, behavior: 'smooth'})
        }
    }, [location]);

    const videos = [{
        iframe: <iframe title="vimeo-player" src="https://player.vimeo.com/video/734752415?h=617663e1a1"
                        width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>,
        videoLink: "https://player.vimeo.com/video/734752415?h=617663e1a1",
        title: <div className="title">Liposome-mediated CRISPR and RNAi in parasitic and free-living nematodes. 7th
            International Congress of Nematology, Antibes Juan-les-Pines,
            France. 2 May, 2022</div>
    }, {
        iframe: <iframe title="vimeo-player" src="https://player.vimeo.com/video/734752257?h=f95d1561c2"
                        width="100%"
                        height="100%" frameBorder="0" allowFullScreen></iframe>,
        videoLink: "https://player.vimeo.com/video/734752257?h=f95d1561c2",
        title: <div className="title">Plasticity and evolution of reproductive system development.Institute of
            Biodiversity, Animal Health & Comparative Medicine,
            University of Glasgow, UK. 24 November, 2021.</div>
    }, {
        iframe: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/id_Z3ieOaLc"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>,
        videoLink: "https://www.youtube.com/live/id_Z3ieOaLc?feature=share",
        title: <div className="title">Energy-sensing pathways mediate intergenerational inheritance (in Portuguese).
            Institute of Biology, Universidade de Brasília, Brazil. 5 May, 2021.</div>
    }]

    const publications = [{
        authors: "Al-Yazeedi T., Adams S., Tandonnet S., Turner A., Kim, J., Lee, J., Pires-daSilva, A. (2023).",
        title: <div className="publication-title">A QTL influences sex ratios by controlling asymmetric organelle
            positioning during male spermatogenesis in <em>Auanema freiburgense</em>.</div>,
        link: "https://www.biorxiv.org/content/10.1101/2023.05.16.540925v1",
        journal: "bioRxiv doi: https://doi.org/10.1101/2023.05.16.540925",
    }, {
        authors: "Tandonnet, S., Haq, M., Turner, A., Grana, T., Paganopoulou, P., Adams, S., Dhawan, S., Kanzaki, N., Nuez, I., Felix, M.-A., Pires-daSilva, A. (2022).",
        title: <div className="publication-title"><em>De novo</em> genome assembly of <em>Auanema melissensis</em>,
            a trioecious free-living nematode.</div>,
        link: "https://sciendo.com/article/10.2478/jofnem-2022-0059",
        journal: "J Nematol, doi: 10.2478/jofnem-2022-0059.",
    }, {
        authors: "Al-Yazeedi, T., Xu, E., Kaur, J., Shakes, D., and Pires-daSilva, A. (2022).",
        title: <div className="publication-title">Lagging X chromatids specify the orientation of asymmetric
            organelle partitioning in XX spermatocytes of <em>Auanema rhodensis</em>.</div>,
        link: "https://doi.org/10.1093/genetics/iyac159",
        journal: "Genetics, iyac159."
    }, {
        authors: "Adams, S., Pathak, P., Kittelman, M., Jones, A.R.C., Mallon, E. B., and Pires-daSilva, A. (2022).",
        title: <div className="publication-title">Sexual morph specialisation in a trioecious nematode balances
            opposing selective forces.</div>,
        link: "https://www.nature.com/articles/s41598-022-09900-8",
        journal: "Sci Rep 12, 6402."
    }, {
        authors: "Robles, P., Turner, A., Zuco, G., Adams, S., Paganopolou, P., Winton, M., Hill, B., Kache, V., Bateson, C., and Pires-daSilva, A. (2021).",
        title: <div className="publication-title">Parental energy-sensing pathways control intergenerational
            offspring sex determination in the nematode <em>Auanema freiburgensis</em>.</div>,
        link: "https://bmcbiol.biomedcentral.com/articles/10.1186/s12915-021-01032-1",
        journal: "BMC Biology 19, 102."
    }, {
        authors: "Kranse, O., Beasley, H., Adams, S., Pires-da Silva, A., Bell, C., Lilley, C., Urwin, P., Bird, D., Miska, E., Smant, G., et al. (2021).",
        title: <div className="publication-title">Towards genetic modification of plant-parasitic nematodes:
            delivery of macromolecules to adults and expression of exogenous mRNA in second stage juveniles.</div>,
        link: "https://academic.oup.com/g3journal/article/11/2/jkaa058/6135037",
        journal: "G3 11, jkaa058."
    }, {
        authors: "Shih, P.-Y., Lee, J.S., Shinya, R., Kanzaki, N., Pires-daSilva, A., Badroos, J.M., Goetz, E., Sapir, A., and Sternberg, P.W. (2019).",
        title: <div className="publication-title">Newly identified nematodes from Mono Lake exhibit extreme arsenic
            resistance.</div>,
        link: "https://www.cell.com/current-biology/fulltext/S0960-9822(19)31040-1",
        journal: "Curr Biol 29, 3339-3344"
    }, {
        authors: "Tandonnet, S., Koutsovoulos, G.D., Adams, S., Cloarec, D., Parihar, M., Blaxter, M.L., and Pires-daSilva, A. (2019).",
        title: <div className="publication-title">Chromosome-wide evolution and sex determination in the three-sexed
            nematode <em>Auanema rhodensis</em>.</div>,
        link: "http://www.g3journal.org/content/ggg/9/4/1211.full.pdf",
        journal: "G3 9, 1211-1230"
    }, {
        authors: "Adams, S., Pathak, P., Shao, H., Lok, J.B., and Pires-daSilva, A. (2019).",
        title: <div className="publication-title">Liposome-based transfection enhances RNAi and CRISPR-mediated
            mutagenesis in non-model nematode system.</div>,
        link: "https://www.nature.com/articles/s41598-018-37036-1",
        journal: "Sci Rep 9, 483"
    }, {
        authors: "Zuco, G., Kache, V., Robles, P., Chaudhuri, J., Hill, B., Bateson, C., and Pires da Silva, A. (2018).",
        title: <div className="publication-title">Sensory neurons control heritable adaptation to stress through
            germline reprogramming.</div>,
        link: "https://www.biorxiv.org/content/10.1101/406033v1",
        journal: "bioRxiv, 406033"
    }, {
        authors: "Moreira-Pinto, B., Pires-daSilva, A. (2018).",
        title: <div className="publication-title">Comparative Reproductive Biology in Nematodes.</div>,
        link: "https://www.sciencedirect.com/science/article/pii/B9780128096338205992",
        journal: "Reference Module in Life Sciences. Ed. M. A. Skinner, Chapter 80, Elsevier, Amsterdam."
    }, {
        authors: "Tandonnet, S., Farrell, M.C., Koutsovoulos, G., Blaxter, M., Parihar, M., Sadler, P.L., Shakes, D., and Pires-daSilva, A. (2018).",
        title: <div className="publication-title">Sex- and gamete-specific patterns of X chromosome segregation in a
            trioecious nematode.</div>,
        link: "http://www.cell.com/current-biology/fulltext/S0960-9822(17)31519-1",
        journal: "Curr Biol, 28, 93-99"
    }, {
        authors: "Kanzaki, N., Kiontke, K., Tanaka, R., Hirooka, Y., Schwarz, A., Müller-Reichert, T., Chaudhuri, J., Pires-daSilva, A. (2017).",
        title: <div className="publication-title">Description of two three-gendered nematode species in the new
            genus <em>Auanema </em>(Rhabditina) that are models for reproductive mode evolution.</div>,
        link: "https://www.nature.com/articles/s41598-017-09871-1",
        journal: "Sci Rep 7: 11135"
    }, {
        authors: "Ancell, H., and Pires-daSilva, A. (2017).",
        title: <div className="publication-title">Sex-specific lifespan and its evolution in nematodes.</div>,
        link: "https://www.sciencedirect.com/science/article/pii/S108495211730143X",
        journal: "Semin Cell Dev Biol 70: 122-129"
    }, {
        authors: "Tandonnet, S., and Pires-daSilva, A. (2016).",
        title: <div className="publication-title">Phenotypic plasticity and developmental innovations in
            nematodes.</div>,
        link: "https://www.sciencedirect.com/science/article/pii/S0959437X16300570?via%3Dihub",
        journal: "Curr Opin Genet Dev 39: 8-13"
    }, {
        authors: "Chaudhuri, J., Bose, N., Tandonnet, S., Adams, S., Zuco, G., Kache, V., Parihar, M., von Reuss, S. H., Schroeder, F. C., Pires-daSilva, A. (2015)",
        title: <div className="publication-title">Mating dynamics in a nematode with three sexes and its
            evolutionary implications.</div>,
        link: "https://www.nature.com/articles/srep17676",
        journal: "Sci Rep 5: 17676"
    }, {
        authors: "Pires-daSilva, A., and Parihar, M. (2013).",
        title: <div className="publication-title">Evo-devo of the germline and somatic gonad in nematodes.</div>,
        link: "https://www.karger.com/Article/Abstract/337960",
        journal: "Sex Dev 7: 163-170."
    }, {
        authors: "Pires-daSilva, A. (2013).",
        title: <div className="publication-title"><em>Pristionchus pacificus</em> genetic protocols.</div>,
        link: "http://www.wormbook.org/chapters/www_ppageneticprotocols.2/ppageneticprotocols.html",
        journal: "WormBook, ed. The C. elegans Research Community"
    }, {
        authors: "The Spider Mite Consortium (among 55 authors). (2011).",
        title: <div className="publication-title">The genome of <em>Tetranychus urticae</em> reveals herbivorous
            pest adaptations.</div>,
        link: "https://www.nature.com/articles/nature10640",
        journal: "Nature 479: 487-492"
    }, {
        authors: "Chaudhuri, J., Kache, V., Pires-daSilva, A. (2011).",
        title: <div className="publication-title">Regulation of sexual plasticity in a nematode that produces males,
            females and hermaphrodites.</div>,
        link: "http://linkinghub.elsevier.com/retrieve/pii/S0960-9822(11)00884-0",
        journal: "Curr Biol 21: 1548-1551."
    }, {
        authors: "Shakes, D., Neva, B., Chaudhuri, J., Huynh, H., Pires-daSilva, A. (2011).",
        title: <div className="publication-title">Asymmetric spermatocyte divisions as a mechanism for skewed sex
            ratios.</div>,
        link: "http://dx.doi.org/10.1038/ncomms1160",
        journal: "Nat Commun 2: 157."
    }, {
        authors: "Chaudhuri, J., Parihar, M., Pires-daSilva, A. (2011).",
        title: <div className="publication-title">An introduction to worm lab: from culturing worms to
            mutagenesis.</div>,
        link: "https://dx.doi.org/10.3791/2293",
        journal: "J Vis Exp 47: e2293."
    }, {
        authors: "Meik, J.M., Lawing, M, and Pires-daSilva, A. (2010).",
        title: <div className="publication-title">Body size evolution in insular speckled rattlesnakes
            (Viperidae:<em> Crotalus mitchellii</em>)</div>,
        link: "http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0009524",
        journal: "PLoS ONE 5: e9524."
    }, {
        authors: "Long, T., and Pires-daSilva, A. (2009).",
        title: <div className="publication-title">The snake box: a novel approach for safely restraining venomous
            snakes.</div>,
        link: "https://thebhs.org/publications/the-herpetological-bulletin/issue-number-108-summer-2009/21-the-snake-box-a-novel-approach-for-safely-restraining-venomous-snakes",
        journal: "Herpetological Bulletin 108: 34-35"
    }, {
        authors: "Meik, J. M. and Pires-daSilva, A. (2009).",
        title: <div className="publication-title">Evolutionary morphology of the rattlesnake style.</div>,
        link: "https://bmcevolbiol.biomedcentral.com/articles/10.1186/1471-2148-9-35",
        journal: "BMC Evol Biol 9: 35."
    }, {
        authors: "Click, A., Savaliya, C. H., Kienle, S., Herrmann, M. and Pires-daSilva, A. (2009).",
        title: <div className="publication-title">Natural variation of outcrossing in the hermaphroditic
            nematode <em>Pristionchus pacificus</em>.</div>,
        link: "https://bmcecolevol.biomedcentral.com/articles/10.1186/1471-2148-9-75",
        journal: "BMC Evol Biol 9: 75."
    }, {
        authors: "Balastik, M., Ferraguti, F., Pires-daSilva, A., Lee, T. H., Alvarez-Bolado, G., Lu, K. P. and Gruss, P. (2008).",
        title: <div className="publication-title">Deficiency in ubiquitin ligase TRIM2 causes accumulation of
            neurofilament light chain and neurodegeneration.</div>,
        link: "http://www.pnas.org/content/105/33/12016.long",
        journal: "Proc Natl Acad Sci U S A 105: 12016-21."
    }, {
        authors: "Pires-daSilva, A. (2007).",
        title: <div className="publication-title">Evolution of the control of sexual identity in nematodes.</div>,
        link: "https://www.sciencedirect.com/science/article/pii/S1084952107000134?via%3Dihub",
        journal: "Semin Cell Dev Biol 18: 362-370."
    }, {
        authors: "Pires-daSilva, A. (2006).",
        title: <div className="publication-title"><em>Pristionchus pacificus</em> genetic protocols. </div>,
        link: "http://www.wormbook.org/chapters/www_ppageneticprotocols/ppageneticprotocols.html",
        journal: "The C. elegans Research Community, WormBook 1-8."
    }, {
        authors: "Carvalho, S., Barriere, A., Pires-daSilva, A. (2006).",
        title: <div className="publication-title">The world of a worm: a framework
            for <em>Caenorhabditis</em> evolution. </div>,
        link: "http://embor.embopress.org/content/7/10/981.long",
        journal: "EMBO Rep 7, 981-984."
    }, {
        authors: "Pires-daSilva, A. and Sommer, R. J. (2004).",
        title: <div className="publication-title">Conservation of the global sex determination
            gene <em>tra-1</em> in distantly related nematodes.</div>,
        link: "http://genesdev.cshlp.org/content/18/10/1198.long",
        journal: "Genes Dev 18: 1198-1208"
    }, {
        authors: "Pires-daSilva, A. and Sommer, R. J. (2003).",
        title: <div className="publication-title">Finally, worm Polycomb-like genes meet Hox regulation.</div>,
        link: "http://linkinghub.elsevier.com/retrieve/pii/S1534-5807(03)00164-3",
        journal: "Dev Cell 4: 1-2."
    }, {
        authors: "Pires-daSilva, A. and Sommer, R. J. (2003).",
        title: <div className="publication-title">The evolution of signalling pathways in animal development.</div>,
        link: "https://www.nature.com/articles/nrg977",
        journal: "Nat Rev Genet 4: 39-49."
    }, {
        authors: "Srinivasan, J., Sinz, W., Lanz, C., Brand, A., Nandakumar, R., Raddatz, G., Witte, H., Keller, H., Kipping, I., Pires-daSilva, A., Jesse, T., Millare, J., De Both, M., Schuster, S. C. and Sommer, R. J. (2002).",
        title: <div className="publication-title">A Bacterial Artificial Chromosome-based genetic linkage map of the
            nematode <em>Pristionchus pacificus</em>.</div>,
        link: "http://www.genetics.org/content/162/1/129.long",
        journal: "Genetics 162: 129-134."
    }, {
        authors: "Jungblut, B., Pires-daSilva, A., Sommer, R.J. (2001).",
        title: <div className="publication-title">Formation of the egg-laying system in <em>Pristionchus
            pacificus</em> requires complex interactions between gonadal, mesodermal and epidermal tissues and does
            not rely on single cell inductions.</div>,
        link: "http://dev.biologists.org/content/128/18/3395.long",
        journal: "Development 128: 3395-3404."
    }, {
        authors: "Srinivasan, J., Pires-daSilva, A. Gutierrez, A., Zheng, M., Jungblut, B., Witte, H., Schlak, I. and Sommer, R. J. (2001).",
        title: <div className="publication-title">Microevolutionary analysis of the nematode
            genus <em>Pristionchus</em> suggests a recent evolution of redundant developmental mechanisms during
            vulva formation.</div>,
        link: "http://onlinelibrary.wiley.com/doi/10.1046/j.1525-142x.2001.003004229.x",
        journal: "Evol Dev 3: 229-40."
    }, {
        authors: "Pires-daSilva, A., Nayernia, K., Engel, W., Torres, M., Stoykova, A., Chowdhury, K. and Gruss, P. (2001).",
        title: <div className="publication-title">Mice deficient for spermatid perinuclear RNA-binding protein show
            neurologic, spermatogenic, and sperm morphological abnormalities.</div>,
        link: "https://www.sciencedirect.com/science/article/pii/S0012160601901691?via%3Dihub",
        journal: "Dev Biol 233: 319-28."
    }, {
        authors: "Sommer, R.J., Carmi, I., Eizinger, A., Grandien, K., Junbglut, B., Lee, K.-L., Nguyen, H., Pires-daSilva, A., Schlak, I., Sigrist, C.B., Srinivasan, J. (2000).",
        title: <div className="publication-title"><em>Pristionchus pacificus</em>: a satellite organism in
            evolutionary developmental biology.</div>,
        link: "https://brill.com/view/journals/nemy/2/1/article-p81_10.xml?language=en",
        journal: "Nematology 2: 81-88."
    }, {
        authors: "Pires-daSilva, A. and Gruss, P. (1998).",
        title: <div className="publication-title">Gene trap insertion into a novel gene expressed during mouse limb
            development.</div>,
        link: "http://onlinelibrary.wiley.com/doi/10.1002/(SICI)1097-0177(199806)212:2%3C318::AID-AJA16%3E3.0.CO;2-%23/full",
        journal: "Dev Dyn 212: 318-325."
    }


    ]

    return (<div className="page-container">
            <div className="content-container info">
                <div className="buttons-collection-wrapper">
                    <NavLink to={"/publications/#publications"} style={{margin: "10px"}} className={"button"}>Go to
                        publications
                        <div className="arrow-wrapper"><ArrowForwardIcon/></div>
                    </NavLink>
                    <a href="https://scholar.google.com/citations?hl=en&user=R4zSE5cAAAAJ&view_op=list_works&sortby=pubdate"
                       className="button" style={{margin: "10px"}} target="_blank" rel="noreferrer">Google Scholar <div className="arrow-wrapper"><ArrowForwardIcon/></div></a>
                </div>
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
                            return <a href={publication.link} target="_blank" rel="noreferrer"
                                      className="journal-publication" key={index}>
                                {publication.title}
                                <div className="publication-authors">{publication.authors}</div>
                                <div className="publication-journal">{publication.journal}</div>
                                <div className="publication-read-more">Read more</div>
                            </a>
                        })}
                    </div>
                </div>
                <div className="footer"/>
            </div>
        </div>)
}

export default Publications;