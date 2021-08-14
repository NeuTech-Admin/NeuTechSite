import Aos from 'aos'
import React, { Component } from 'react'
import CountUp from 'react-countup'
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
                                <img src="LaptopVector.png" alt="laptop" className="laptop-img" />
                                <CountUp className="device-countup" end={100} duration={5} useEasing= {true} />
                            </div>
                            <div data-aos-once="true" data-aos="fade-up" className="device-stats">
                                <img src="PhoneVector.png" alt="phone" className="phone-img" />
                                <CountUp className="device-countup" end={250} duration={5} useEasing= {true} />
                            </div>
                            <div data-aos-once="true" data-aos="fade-left" className="device-stats">
                                <img src="Tabletvector.png" alt="tablet" className="tablet-img" />
                                <CountUp className="device-countup" end={250} duration={5} useEasing= {true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats
