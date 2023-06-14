import React, { Component } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './ThreeArms.css'

class ThreeArms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            headerText: 'arms-title'
        }
    }

    componentDidMount() {
        Aos.init({ duration: 1250 })
        setTimeout(() => {
            this.setState({
                headerText: 'arms-title visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="arm-container" id="three-arms">
                <div className="title-container">
                    <span className={this.state.headerText}>The Three Arms</span>
                </div>
                <div className="divider" />
                <div className="arm-content">
                    <div className="arms first">
                        <img data-aos="fade-right" data-aos-once="true" src="DarkArm.png" alt="dark arm" className="arm-img dark" />
                        <div data-aos="fade-left" data-aos-once="true" className="arm-text-container">
                            <span className="arm-headers">Sustainability in STEM Education</span>
                            <p className="arm-paragraphs">With a focus on youth and teaching sustainable engineering through our initiative YouSEN, we hope to inspire the next generation of STEM leaders and innovators to work towards solving complex problems related to sustainability.</p>
                        </div>
                    </div>
                    <div className="arms second">
                        <div data-aos="fade-right" data-aos-once="true" className="arm-text-container second">
                            <span className="arm-headers">Reducing E-Waste and Reusing Technology</span>
                            <p className="arm-paragraphs">Our aim is to prevent electronics from ending up in landfills and harming the environment. We want to make sure that all types of technology are carefully inspected to determine if they can be reused before recycling them.</p>
                        </div>
                        <img data-aos="fade-left" data-aos-once="true" src="LightArm.png" alt="light arm" className="arm-img light" />
                    </div>
                    <div className="arms third">
                        <img data-aos="fade-right" data-aos-once="true" src="DarkArm.png" alt="dark arm" className="arm-img dark" />
                        <div data-aos="fade-left" data-aos-once="true" className="arm-text-container">
                            <span className="arm-headers">Improving access to technology</span>
                            <p className="arm-paragraphs">We aim to improve access to technology to utilize telehealth services and pursue education. To this end we work with other non-profit organizations and health authorities that have experience with distribution to rural & Indigenous communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThreeArms
