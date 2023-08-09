import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="panel">
            <div className="sections desktop">
                <div className="left">
                    <div className="lab-name">PIRES LAB</div>
                    <div className="">Comparative Lab Genetics</div>
                </div>

                <div className="center">
                    <div className="anchor-container">
                        <a href="#home">Home</a>
                        <a href="#research">Research</a>
                        <a href="#people">People</a>
                        <a href="#publications">Publications</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div className="right">
                    <div className="anchor-container">
                        <a>X</a>
                        <a>LinkedIn</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
