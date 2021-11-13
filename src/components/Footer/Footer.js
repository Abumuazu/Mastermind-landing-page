import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor: "#0D233A !important"}} className="nk-footer bg-theme-alt section-connect">
            
            <div className="section section-footer section-s tc-light bg-transparent">
                <div className="container">
                    
                    <div className="nk-block block-footer">
                        <div className="row">
                            <div className="col">
                                <div className="wgs wgs-text text-center mb-3">
                                    <h4 className="mb-3">Join Our Communities</h4>
                                    <ul className="social pdb-m justify-content-center">
                                        <li className="mr-3"><a href="https://www.facebook.com/profile.php?id=100071318033104" target="_blank" rel="noopener noreferrer"><em className="social-icon fab fa-facebook-f fa-3x"></em></a></li>
                                        <li className="mr-3"><a href="https://www.instagram.com/invites/contact/?i=okihn0jmajsx&utm_content=mj3euyy" target="_blank" rel="noopener noreferrer"><em className="social-icon fab fa-instagram fa-3x"></em></a></li>
                                        <li className="mr-3"><a href="https://www.twitter.com/mastermindtoken" target="_blank" rel="noopener noreferrer"><em className="social-icon fab fa-twitter fa-3x" target="_blank" rel="noopener noreferrer"></em></a></li>
                                        <li className="mr-3"><a href="https://medium.com/@mastermindtoken" target="_blank" rel="noopener noreferrer"><em className="social-icon fab fa-medium-m fa-3x"></em></a></li>
                                    </ul>
                                    <div className="copyright-text copyright-text-s3 pdt-m">
                                        <p><span className="d-sm-block">Copyright &copy; 2021, Mastermind</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;