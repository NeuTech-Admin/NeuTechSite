import Aos from 'aos'
import React, { Component } from 'react'
import './Challenge.css'

class Challenge extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: 'mission-wrapper',
            usingTech: 'using-tech'
        }
    }


    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                text: 'mission-wrapper visible',
                usingTech: 'using-tech visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="challenge-container">
                <div className="challenge-wrapper">
                    <div className={this.state.text}>
                        <span className="init-mission-heading">The Mission</span>
                        <p className="init-mission-statement">Despite many consumers upgrading devices frequently, lower-income families lack access to usable technology; this is known as the digital divide. <br/><br/> Our goal is to recycle non-functioning devices to reduce E-Waste and resuse devices to provide affordable technology to assist low-income communities and families.</p>
                    </div>
                    <img className={this.state.usingTech} src="goals.jpg" alt="Goals" />
                </div>
                {/* <div data-aos="fade-up" data-aos-once="true" className="challenge-stats-container">
                    <div data-aos-delay="500" data-aos="fade-right" data-aos-once="true" className="stat-div">
                        <span className="stat-header">463 Million</span>
                        <div className="header-underline" />
                        <p className="stat-content">A third of children worldwide lack the tools needed for remote learning.</p>
                    </div>
                    <div data-aos-delay="500" data-aos="fade-in" data-aos-once="true" className="stat-underline" />
                    <div data-aos-delay="1000" data-aos="fade-up" data-aos-once="true" className="stat-div">
                        <span className="stat-header">27 Months</span>
                        <div className="header-underline" />
                        <p className="stat-content">Canadian 8th graders without access to a computer are ~27 Months behind their peers.</p>
                    </div>
                    <div data-aos-delay="1000" data-aos="fade-in" data-aos-once="true" className="stat-underline" />
                    <div data-aos-delay="1500" data-aos="fade-left" data-aos-once="true" className="stat-div">
                        <span className="stat-header">$57 Billion</span>
                        <div className="header-underline" />
                        <p className="stat-content">Worth of recoverable precious metals was dumped or burned in 2020</p> {/*https://technologyhelps.org/resources/what-is-technology-poverty/
                    </div>
                    <div data-aos-delay="1500" data-aos="fade-in" data-aos-once="true" className="stat-underline" />
                </div> */}
            </div>

        )
    }
}

export default Challenge
