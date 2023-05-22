import Aos from 'aos'
import React, { Component } from 'react'
import CountUp from 'react-countup'
import { FaMoneyBill, FaRecycle } from 'react-icons/fa'
import { GiBullseye } from 'react-icons/gi'
import './OurImpact.css'

export default class OurImpact extends Component {

    componentDidMount() {
        Aos.init({duration: 1250})
    }

    render() {
        return (
            <div>
                <div className="impact-container">
                    <div className="impact-text">
                        <GiBullseye className="bullseye-icon"/>
                        <span className="impact-title">Our Impact</span>
                        <span className="first-event">Results of our of our events in 2021</span>
                    </div>
                    <div className="impact-stats">
                        <div data-aos="fade-right" data-aos-once="true" className="stat-card-container-one">
                            <FaMoneyBill className="stat-icon"/>
                            <p className="stat-desc">Collected over</p>
                            <p className="countup-stat-text"><CountUp className="countup-stat" end={15000} prefix="$" duration={4.5} useEasing="ease" /><br/>worth of electronics</p>
                        </div>
                        <div data-aos="fade-left" data-aos-once="true" className="stat-card-container-two">
                            <FaRecycle className="stat-icon"/>
                            <p className="stat-desc">Recycled</p>
                            <p className="countup-stat-text"><CountUp className="countup-stat" end={700} duration={4.5} suffix="+" useEasing="ease"/><br/>kgs of waste</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}