import React from 'react';
import { FaMoneyBill, FaRecycle } from 'react-icons/fa'
import { GiBullseye } from 'react-icons/gi'
import CountUp from 'react-countup';
import './MainImpact.css'

function MainImpact(props) {
    return (
        <div className="main-impact-container">
            <div className="stacked-div-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="stacked-div-content">
                <div className="main-impact-heading">Our Impact</div>
                <div className="main-impact-wrapper">
                    <div className="main-impact-stats">
                        <FaMoneyBill className="main-impact-stat-icon"/>
                        <p className="main-impact-stat-desc">Educated Over</p>
                        <p className="main-impact-stat-text">
                            <CountUp className="main-impact-countup-stat" end={150} suffix="+" duration={4.5} useEasing="ease" />
                            <br/>
                            Youth
                        </p>
                    </div>
                    <div className="main-impact-stats">
                        <FaRecycle className="main-impact-stat-icon"/>
                        <p className="main-impact-stat-desc">Recycled</p>
                        <p className="main-impact-stat-text">
                            <CountUp className="main-impact-countup-stat" end={850} duration={4.5} suffix="+" useEasing="ease"/>
                            <br/>
                            kgs of  E-Waste
                        </p>
                    </div>
                </div>
            </div>
            <div className="stacked-div-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default MainImpact;