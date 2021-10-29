import React from 'react';
import roadmap from "../../images/dark/roadmap.png";

const Section4 = () => {
    return (
        <section className="section section-connect" id="roadmap">
                <div className="container ov-h">
                    <div className="section-head text-center wide-auto-sm mb-0">
                        <h2 className="title title-s4 roadmap text-center" title="Roadmap" id="roadmap-title"><span className="text-bborder" style={{color: "rgb(11, 12, 34)"}}>Our</span> Roadmap</h2>
                    </div>
                </div>
                    
                <div className="nk-block ov-h">
                    <div className="container text-center">
                        <img className="roadmap-desktop" src={roadmap} alt="" />

                    </div>
                </div>
            </section>
    );
};

export default Section4;