import "./People.css";

const People = () => {
    const labMembers = [{
        name: "Dr. Sally Adams",
        role: "Postdoc",
        email: "sally.adams@warwick.ac.uk",
        imageSrc: "/images/people/Sally_2.jpg",
    }, {
        name: "Anisa Turner",
        role: "Ph.D. student",
        email: "anisa.turner@warwick.ac.uk",
        imageSrc: "/images/people/Anisa.png",
    }, {
        name: "Rhianne Kelleher",
        role: "Ph.D. student",
        email: "rhianne.kelleher@warwick.ac.uk",
        imageSrc: "/images/people/Rhianne2.png",
    }, {
        name: "Weiyi Huang",
        role: "Ph.D. student",
        email: "weiyi.huang.1@warwick.ac.uk",
        imageSrc: "/images/people/Weiyi_Huang.jpg",
    }, {
        name: "Luke Reynoldson",
        role: "Ph.D. student",
        email: "luke.reynoldson@warwick.ac.uk",
        imageSrc: "/images/people/Luke1.png",
    }, {
        name: "Belle Lai",
        role: "Ph.D. student",
        email: "See-Wing.Lai@warwick.ac.uk",
        imageSrc: "/images/people/Belle.png",
    }];

    return (<div className="page-container">
        <div className="content-container info">
            <div className="header-txt">Principal Investigator</div>
            <div className="person-container">
                <img className="person-img" src="/images/people/Andre6.png" alt=""/>
                <div className="person-info-container">
                    <div className="person-name">Andre Pires da Silva, Ph.D.</div>
                    <div className="person-info">Reader (Associate Professor)</div>
                    <a href="mailto: andre.pires@warwick.ac.uk"
                       className="contact-button person-contact">andre.pires@warwick.ac.uk</a>
                    <div className="person-info">
                        Office: School of Life Sciences, room MB13
                    </div>
                    <div className="person-info">
                        Phone: +44 (0) 24 765 73329
                    </div>
                </div>
            </div>
            <div className="header-txt">Lab Members</div>
            {labMembers.map((labMember, index) => {
                return (
                    <div className="person-container" key={index}>
                        <div className="person-img-wrapper">
                        <img className="person-img" src={labMember.imageSrc} alt=""/>
                        </div>
                        <div className="person-info-container">
                            <div className="person-name">{labMember.name}</div>
                            <div className="person-info">{labMember.role}</div>
                            <a href={`mailto: ${labMember.email}`}
                               className="contact-button person-contact">{labMember.email}</a>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>)
}

export default People;