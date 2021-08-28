import Aos from 'aos'
import React, { Component } from 'react'
import CountUp from 'react-countup'
import { FaMoneyBill, FaRecycle } from 'react-icons/fa'
import { GiBullseye, GiRecycle } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './OurImpact.css'

export default class OurImpact extends Component {

    componentDidMount() {
        Aos.init({duration: 1250})
    }

    render() {
        return (
            <div className="impact-container">
                <div className="impact-text">
                    <GiBullseye className="bullseye-icon"/>
                    <span className="impact-title">Our Impact</span>
                    <span className="first-event">Results of our first event on July 24th, 2021</span>
                </div>
                <div className="impact-stats">
                    <div data-aos="fade-right" data-aos-once="true" className="stat-card-container-one">
                        <FaMoneyBill className="stat-icon"/>
                        <p className="stat-desc">Collected over</p>
                        <p className="countup-stat-text"><CountUp className="countup-stat" end={15000} prefix="$" duration={5} useEasing="ease" /><br/>worth of electronics</p>
                    </div>
                    <div data-aos="fade-left" data-aos-once="true" className="stat-card-container-two">
                        <FaRecycle className="stat-icon"/>
                        <p className="stat-desc">Recycled</p>
                        <p className="countup-stat-text"><CountUp className="countup-stat" end={250} duration={5} suffix="+" useEasing="ease"/><br/>devices</p>
                    </div>
                </div>
            </div>
        )
    }
}