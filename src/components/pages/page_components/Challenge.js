import { render } from '@testing-library/react'
import Aos from 'aos'
import React, { Component } from 'react'
import Card from '../../Card.js'
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
                        <span className="mission-heading">The Mission</span>
                        <p className="mission-statement">As technology improves, it becomes harder for people to afford good quality devices. With more people purchasing newer products, the amount of waste produced, specifically E-Waste increases drastically. Our goal is to provide people with affordable technology and increase the quantity of waste electronics that are recycled.</p>
                    </div>
                    <img className={this.state.usingTech} src="UsingTech.png" alt="Technology" />
                </div>
                <div data-aos="fade-up" data-aos-once="true" className="challenge-stats-container">
                    <div data-aos-delay="500" data-aos="fade-right" data-aos-once="true" className="stat-div">
                        <span className="stat-header">1 in 5</span>
                        <div className="header-underline" />
                        <p className="stat-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div data-aos-delay="500" data-aos="fade-in" data-aos-once="true" className="stat-underline" />
                    <div data-aos-delay="1000" data-aos="fade-up" data-aos-once="true" className="stat-div">
                        <span className="stat-header">20%</span>
                        <div className="header-underline" />
                        <p className="stat-content">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div data-aos-delay="1000" data-aos="fade-in" data-aos-once="true" className="stat-underline" />
                    <div data-aos-delay="1500" data-aos="fade-left" data-aos-once="true" className="stat-div">
                        <span className="stat-header">6.5 Million</span>
                        <div className="header-underline" />
                        <p className="stat-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div data-aos-delay="1500" data-aos="fade-in" data-aos-once="true" className="stat-underline" />
                </div>
            </div>

        )
    }
}

export default Challenge
