import React from 'react';

const Section7 = () => {
    return (
        <section className="section section-contact tc-light" id="contact">
                <div className="container">
                    <div className="section-head text-center wide-auto-sm">
                        <h2 id="contact-title" style={{color: "#EEB81C"}} className="title title-s4" title="Contact">Contact <span className="contact-bborder">Us</span></h2>
                        <p>Any question? Reach out to us and we’ll get back to you shortly.</p>
                    </div>
                    <div className="nk-block block-contact">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-10 col-lg-10">
                                <ul className="contact-list contact-list-s1 flex-wrap flex-md-nowrap pdb-l">
                                    <li>
                                        <div className="contact-text">
                                            <span>
                                                <a href="mailto:info@mastermindtoken.com" target="_top">
                                                    <em className="contact-icon fas fa-envelope"></em>
                                                    info@mastermindtoken.com</a>
                                                </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-text">
                                            <span>                                                
                                                <a  href="https://t.me/mastermindtoken" target="_blank" rel="noopener noreferrer">
                                                    <em className="contact-icon fas fa-paper-plane"></em>
                                                    Join us on Telegram
                                                </a>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>h
                            
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Section7;