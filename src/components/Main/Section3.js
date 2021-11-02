import React from 'react';
import chart from "../../images/dark/distr-chart.png";
import { Doughnut } from "react-chartjs-2";
const chartColors = [
    "#01c55d",
    "#0878d7",
    "#a13add",
]
const Section3 = () => {
    const Options = {
        legend: {
            display: true,
            position: "right",
        },
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        animations: {
            tension: {
                duration: 1500,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        cutoutPercentage: 20
    };
    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ["Locked Liquidity", "Marketing & Development",  "Presale",],
        datasets: [
            {
                fill: false,
                data: [45, 10, 45],
                backgroundColor: chartColors,
                hoverBackgroundColor: chartColors,
                fontColor: "white",
            }
        ]
    };
    return (

        <section className="section section-tokensale " id="distribution">
            <div className="container custom-container">
                <div className="section-head text-center wide-auto-sm">
                    <h2 className="title title-s4 token-distr" title="TOKEN"><span className="text-bborder" style={{color: "#0b0c22"}}>Token</span> Distribution</h2>

                </div>
                <div className="nk-block">
                    <div className="row justify-content-center d-flex align-items-center">
                        <div className="col-md-6 col-12">
                            <div className="single-chart">
                                <Doughnut
                                    data={data}
                                    options={Options}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="single-chart">
                                <div className="chart tri-chart">
                                    <img src={chart} alt="Distribution Chart" />
                                    <div className="totalSupply">
                                        <p>
                                            <span style={{ color: "#EEB81C", marginRight: "6px" }} class="material-icons-outlined">
                                                account_balance_wallet
                                            </span>
                                            <span style={{ color: "#EEB81C" }}>
                                                Total Supply
                                            </span>
                                        </p>
                                         <p>
                                            <span style={{ color: "green", marginRight: "6px" }} class="material-icons-outlined">
                                                monetization_on
                                            </span>
                                            <span style={{ color: "green" }}>
                                                10 000 000 $MMD
                                            </span>
                                         </p>
                                        
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

export default Section3;