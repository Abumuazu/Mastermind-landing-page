import React from 'react';
import mission from "../../images/dark/mission.png";
import vission from "../../images/dark/vision.png";

const Section5 = () => {
    return (
      
            <section style={{background: "#0D233A !important", outline: "none"}} className="section section-tokensale tc-light bg-theme-dark" id="mission">
             
                <div className="container">
                    <div className="section-head text-center wide-auto-sm tc-light">
                        <h2 className="title title-s4 mission-title" title="MISSION"><span className="text-bborder">Mission &amp; Vision</span></h2>
                    </div>
                    <div className="nk-block nk-block-token mgb-m30">
                        <div className="row align-items-center justify-content-between gutter-vr-50px">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="mv-container">
                                    <div className="mission" data-aos="fade-right" data-aos-duration="1000">
                                        <div className="stage-info">
                                            <img src={mission} alt="Mission statement" />
                                        </div>
                                        <h3>Mission</h3>
                                        <p>
                                            To maximize our community's financial bargaining strength through strategic unity, growth, and continous engagement.
                                        </p>
                                    </div>
                                    <div className="vision" data-aos="fade-left" data-aos-duration="1000">
                                        <div className="stage-info">
                                            <img src={vission} alt="Project vision" />
                                        </div>
                                        <h3>Vision</h3>
                                        <p>
                                            To drive financial inclusion and economic prosperity using blockchain technology.
                                        </p>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Section5;