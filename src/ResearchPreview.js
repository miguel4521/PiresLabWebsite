import "./Research.css"
import {NavLink} from "react-router-dom";

const ResearchPreview = ({researchTitle, imageSrc, id}) => {
    return (
        <div className="page-container">
            <NavLink to={`/research#${id}`} className="content-container research-preview">
                <img src={imageSrc} className="research-img" alt="" />
                <div className="research-title">{researchTitle}</div>
                <div className="foot-txt">Learn more</div>
            </NavLink>
        </div>
    )
}

export default ResearchPreview;