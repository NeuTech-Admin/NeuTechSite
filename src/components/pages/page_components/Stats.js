import Aos from 'aos'
import React, { Component } from 'react'
import CountUp from 'react-countup'
import { FaKeyboard, FaMobile } from 'react-icons/fa'
import { BiLaptop } from 'react-icons/bi'
import './Stats.css'

class Stats extends Component {

    componentDidMount() {
        Aos.init({ duration: 2500 })
    }

    render() {
        return (
            <div className="stats-container">
                <div className="stats-content">
                    <span data-aos-once="true" data-aos="fade-up" className="stats-title">Our Progress</span>
                    <div className="stats">
                        <p data-aos-once="true" data-aos="fade-up" className="devices-collected">Total Devices Collected</p>
                        <div data-aos-once="true" data-aos="fade-up" className="countup-container">
                            <CountUp className="countup" end={250} duration={5} useEasing="ease" />
                        </div>
                        <br />
                        <div className="device-stat-container">
                            <div data-aos-once="true" data-aos="fade-right" className="device-stats">
                                {/* <img src="LaptopVector.png" alt="laptop" className="laptop-img" /> */}
                                <BiLaptop className="stats-icon"/>
                                <CountUp className="device-countup" end={101} duration={5} useEasing= {true} />
                            </div>
                            <div data-aos-once="true" data-aos="fade-up" className="device-stats">
                                {/* <img src="PhoneVector.png" alt="phone" className="phone-img" /> */}
                                <FaMobile className="stats-icon"/>
                                <CountUp className="device-countup" end={56} duration={5} useEasing= {true} />
                            </div>
                            <div data-aos-once="true" data-aos="fade-left" className="device-stats">
                                {/* <img src="TabletVector.png" alt="tablet" className="tablet-img" /> */}
                                <FaKeyboard className="stats-icon"/>
                                <CountUp className="device-countup" end={93} duration={5} useEasing= {true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats
