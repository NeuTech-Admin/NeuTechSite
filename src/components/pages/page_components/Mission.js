import Aos from 'aos'
import React, { Component } from 'react'
import './Mission.css'

class Mission extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: 'support-us-title',
            text: 'sup-mission-wrapper',
            helpingHands: 'helping-hands'
        }
    }
    

    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                title: 'support-us-title visible',
                text: 'sup-mission-wrapper visible',
                helpingHands: 'helping-hands visible'
            })
        }, 100);
    }

    render() {
        return (
            
            <div className="mission-container">
                <div className="support-wrapper">
                    <div className={this.state.text}>
                        <span className="sup-mission-heading">Support Us</span>
                        <p className="sup-mission-statement">Your support directly funds initiatives that impact our local communities. Support us to reduce electronics waste in the environment and improve access to technology. <br/><br/>To discuss sponsorships or partnerships, contact us at:</p>
                        <p className="mission-body">
                            <strong className="outreach-email">
                                info@ntfoundation.ca
                            </strong>
                        </p>
                    </div>
                    <img className={this.state.helpingHands} src="support-us.png" alt="Goals" />
                </div>
                <div data-aos="fade-up" className="mission-content">
                    
                </div>
            </div>
        )
    }
}

export default Mission
