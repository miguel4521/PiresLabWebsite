import "./Research.css"
import {Link} from "@mui/material";

const ResearchPreview = ({researchTitle, imageSrc, id}) => {
    return (
        <div className="page-container">
            <Link href={`Pires/research#${id}`} preventScrollReset={true} className="content-container research-preview">
                <img src={imageSrc} className="research-img" alt="" />
                <div className="research-title">{researchTitle}</div>
                <div className="foot-txt">Learn more</div>
            </Link>
        </div>
    )
}

export default ResearchPreview;