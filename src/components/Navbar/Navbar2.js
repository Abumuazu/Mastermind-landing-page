import React from 'react';
import mmdLogo from "../../images/mmd-logo.png";
const Navbar2 = () => {
    return (
        <div className="header-main" style={{background: "black"}}>
                <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://mastermindtoken.com/"> <img width="192" src={mmdLogo} alt="mmd-logo" /></a>
                    <button style={{ border: "none" }} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <div className="toggle-line">
                                    <span></span>
                                </div>
                    </button>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="fas fa-times fa-2x" style={{color: "white"}}></i>
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#products">Products</a></li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#key-notes">About</a></li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#distribution">Distribution</a></li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#roadmap">Roadmap</a></li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#mission">Mission</a></li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#faqs">Faqs</a></li>
                                <li className="nav-item" data-bs-dismiss="offcanvas" aria-label="Close"><a className="nav-link" href="/#contact">Contact</a></li>
                            </ul>
                            <ul className="menu-btns">
                                    <li>                                    <a  id="try-app" href="http://presale.mastermindtoken.com" className="btn btn-rg btn-auto btn-outline on-bg-theme btn-round"><span className="nav-link">Presale Page</span></a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
    );
};

export default Navbar2;