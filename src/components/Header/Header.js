import React from 'react';
import Navbar from '../Navbar/Navbar';
import landing from "../../images/dark/mmd-landing.gif";
import mmdIcon from "../../images/mmd-ico.png"
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import particleJsConfig from "../../config/particle-config";
const Header = () => {
    return (
        <header className="nk-header page-header is-transparent is-sticky is-shrink is-dark" id="header">
            <Navbar />
            <div className="header-banner bg-theme-dark" style={{backgroundColor: "#0D233A !important"}}>
             <Particles params={particleJsConfig} style={{position: "absolute"}} />
                <div className="nk-banner">
                    <div className="banner banner-mask-fix banner-fs banner-single tc-light">
                        <div className="banner-wrap">
                            <div className="container">
                                <div className="row align-items-center justify-content-center gutter-vr-30px myFlex" style={{width: "100%", margin: "0 auto"}}>
                                    <div className="col-lg-6 order-lg-last">
                                        <div id="front-img" className="banner-gfx banner-gfx-re-s3">
                                            <img src={landing} alt="MMD landing" className="gif-img" />
                                            <img className="banner-gfx-icon banner-gfx-icon-1 bouncing" style={{backgroundColor: "#0b0c22"}} src={mmdIcon} alt="Mastermind Logo" />

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner-caption wide-auto text-lg-left">
                                            <div className="cpn-head">
                                                <h1 className="title title-xl-2 title-semibold"><span className="mmd-title"> Earn</span> with ease</h1>
                                            </div>
                                            <div className="cpn-text cpn-text-s1">
                                                <p className="lead"> <i>...an asset-backed cryptocurrency that places premium on its holders</i></p>
                                            </div>

                                            <div className="front-btns">


                                                <a href="https://drive.google.com/file/d/1E-K0yvaBLhogpm9fnn5zVcelizf_SRc4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="whitepaper-btn linkDecor"><span>Whitepaper</span></a>
                                                <Link to="ambassador" className="wp-land-link linkDecor"><span>Refer &amp; Earn Program</span></Link>
                                            </div>
                                            <div className="video-link">

                                                <a href="https://www.youtube.com/watch?v=ejUS-iudJQk" className="linkDecor video-anchor video-popup btn-play-wrap btn-play-wrap-s1 text-align-center my-vid-style">
                                                    <div className="btn-play btn-play-sm btn-play-s2">
                                                        <em className="btn-play-icon"></em>
                                                    </div>
                                                    <div className="btn-play-text">
                                                        <span className="text-sm">Watch Video</span>
                                                        <span className="text-xs">What and How it work</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;