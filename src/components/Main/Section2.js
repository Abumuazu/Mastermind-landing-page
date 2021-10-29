import React from 'react';
import fantom from "../../images/key/fantom.png";
import vault from "../../images/key/vault.png";
import rewards from "../../images/key/rewards.png";

const Section2 = () => {
    return (
            <section className="section ov-h" id="key-notes">
                <div className="container">
                    
                    <div className="nk-block nk-block-text-wrap">
                        <div className="row align-items-center justify-content-center">
                            
                            <div className="col-lg-12 text-center">
                                <div className="nk-block-text">
                                    <div className="key-notes-container">
                                        <div className="key-items" data-aos="fade-down" data-aos-duration="1000">
                                            <h2>01</h2>
                                            <img src={fantom} alt="Backed By Fantom" srcset="" />
                                            <div className="num-text">
                                                <h3>BACKED BY FTM</h3>
                                            </div>
                                            <p>The Fantom token (FTM) which is the native the currency of the Fantom blockchain will be used to back the Mastermind token.</p>
                                        </div>
                                        <div className="demarcator"></div>
                                        <div className="key-items" data-aos="fade-up" data-aos-duration="1000">
                                            <h2>02</h2>
                                            <img src={vault}alt="Rug Proof Liquidity" srcset="" />
                                            <div className="num-text">
                                                <h3>RUG PROOF LIQUIDITY</h3>
                                            </div>
                                            <p>Funds from the presale will be used to create a MMD/FTM pool that will be permanently locked (rug proof).</p>
                                        </div>
                                        <div className="demarcator"></div>
                                        <div className="key-items" data-aos="fade-up" data-aos-duration="1000">
                                            <h2>03</h2>
                                            <img src={rewards} alt="Earn Rewards" srcset="" />
                                            <div className="num-text">
                                                <h3>REWARDS</h3>
                                            </div>
                                            <p>Holders earn passive rewards through static reflection. They are also rewarded with part of the transaction fees from the DEX</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Section2;