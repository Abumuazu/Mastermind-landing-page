import React from 'react';
import mmdCases from "../../images/dark/mmd-cases.png";
import nft from "../../images/products/nft.png";
import dex from "../../images/products/dex.png";
import hub from "../../images/products/hub.png";
import governence from "../../images/products/governance.png";

const Section1 = () => {
    return (
        <section className="section mask-c-blend-dark bg-theme-dark-alt tc-light ov-h" id="products">
            
            <div className="container">
                <div className="nk-block nk-block-text-wrap">
                    <div className="row align-items-center justify-content-center justify-content-md-between gutter-vr-30px">

                        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="col-mb-7 col-sm-7 col-md-5 col-lg-6" >
                            <div data-aos="fade-down" className="products-bg-grad">
                                <h4>Mastermind Ecosystem</h4>
                            </div>
                            <div className="nk-block-img" id="products-img">
                                <img src={mmdCases} alt="Mastermind Products" />
                            </div>

                        </div>

                        <div className="col-mb-9 col-sm-10 col-md-7 col-lg-6 text-center text-md-left" style={{ marginTop: "2em" }} data-aos="fade-up" data-aos-duration="1000">
                            <div className="nk-block-text">
                                <div className="mmd-products">
                                    <div className="product-item">
                                        <img src={nft} alt="Mastermind NFT" />
                                        <div className="product-text">
                                            <h4 style={{ color: "#46BDF4" }}>NFTs</h4>
                                            <p style={{ color: "#DDDDDD", fontWeight: "bold" }}>
                                                NFT’s marketplace where NFTs can be traded and
                                                rewarded to MMD holders that has contributed to the MMD community
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <img src={dex} className="ordered-img" alt="Mastermind DEX" />
                                        <div className="product-text">
                                            <h4 style={{ color: "#46BDF4" }}>DEX</h4>
                                            <p style={{ color: "#DDDDDD", fontWeight: "bold" }}>
                                                For secure peer-to-peer transactions without the need for any intermediary.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <img src={hub} alt="Mastermind Hub" />
                                        <div className="product-text">
                                            <h4 style={{ color: "#46BDF4" }}>Hub</h4>
                                            <p style={{ color: "#DDDDDD", fontWeight: "bold" }}>
                                                This is the platform where buyers and sellers meet to transact with the use of MMD token as the medium of exchange.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <img src={governence} className="ordered-img" alt="Mastermind Governance" />
                                        <div className="product-text">
                                            <h4 style={{ color: "#46BDF4" }}>Governance</h4>
                                            <p style={{ color: "#DDDDDD", fontWeight: "bold" }}>
                                                Any MMD holder can send proposals through the MMD website, for the ecosystem to cast their votes.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="" id="products-img-2">
                            <img src={mmdCases} alt="Mastermind Products" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;