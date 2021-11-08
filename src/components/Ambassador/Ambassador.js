import React from 'react';
import Particles from 'react-particles-js';
import mmdLanding from "../../images/dark/mmd-landing-min.png";
import logo from "../../images/mmd-ico.png";
import Footer from '../Footer/Footer';
import Navbar2 from '../Navbar/Navbar2';
import {particleJsConfig} from "../../config/particle-config"
const Ambassador = () => {
    return (
            <div >
                <header className="nk-header page-header is-transparent is-sticky is-shrink is-dark" id="header" >
              
                    <Navbar2 />

                    <div  className="header-banner bg-theme-dark" style={{ backgroundColor: "#111111 !important" }}>
                    <Particles params={particleJsConfig} style={{position: "absolute"}} />
                        <div className="nk-banner">
                            <div className="banner banner-mask-fix banner-fs banner-single tc-light">
                                <div className="banner-wrap">
                                    <div className="container">
                                        <div className="row align-items-center justify-content-center gutter-vr-30px myFlex">
                                            <div className="col-lg-6 order-lg-last">
                                                <div id="front-img" className="banner-gfx banner-gfx-re-s3">
                                                    {/* <img src={mmdLanding} alt="header" style={{ maxWidth: "75%" }} /> */}
                                                    {/* <div ><iframe src="https://player.vimeo.com/video/639563153?h=e1e44ae3d0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute', top:'0', left:'0',width:'100%', height:'100%'}} title="masterVid.mp4"></iframe></div><script src="https://www.youtube.com/watch?v=o27O_9SGgdA"></script> */}
                                                    <div style={{padding:'54.93% 0 0 0',position:'relative'}}><iframe src="https://player.vimeo.com/video/640312039?h=508e51933c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:'absolute' ,top:'0', left:'0', width:'100%',height:'100%'}} title="Mastermind"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="banner-caption wide-auto text-center text-lg-left">
                                                    <div className="cpn-head mt-0">
                                                        <h1 className="title title-xl-2 title-semibold" style={{ fontSize: " 2rem !important" }}> The <span className="mmd-title"> Protocol <span style={{ color: " #ffffff " }}>for our</span> </span>  collective growth </h1>
                                                    </div>
                                                    <div className="cpn-text cpn-text-s1">
                                                        <p className="lead"> <i>Earn your reward for taking part in the growth process of the Mastermind Protocol.</i></p>
                                                    </div>

                                                    <div className="front-btns">
                                                       
                                                        <a  rel="noreferrer" id ="perform" className="e-widget no-button generic-loader wp-land-link linkDecor" href="https://gleam.io/W7ko3/refer-a-friend-and-stand-a-chance-to-win-a-share-of-30000-equivalent-in-airdrops"><span style= {{margin: '0 auto'}}>Perform Tasks</span></a>

                                                    
                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nk-ovm mask-c-dark shape-v mask-contain-bottom"></div>


                        <div id="particles-bg" className="particles-container particles-bg" data-pt-base="#00c0fa" data-pt-base-op=".3" data-pt-line="#2b56f5" data-pt-line-op=".5" data-pt-shape="#00c0fa" data-pt-shape-op=".2"></div>
                    </div>

                </header>
                <Footer />
            </div>
    );
};

export default Ambassador;