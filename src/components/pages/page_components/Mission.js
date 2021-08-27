import Aos from 'aos'
import React, { Component } from 'react'
import './Mission.css'

class Mission extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title: 'support-us-title'
        }
    }
    

    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                title: 'support-us-title visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="mission-container">
                <div className="support-us-header">
                    <span className={this.state.title}>Support Us</span>
                </div>
                <div data-aos="fade-up" className="mission-content">
                    <span className="mission-title">Support Our Mission</span>
                    <p className="mission-body">
                        To send us a message fill out the form.
                        <br />
                        To discuss sponsorships or partnerships, contact us at:
                        <br />
                        <strong className="outreach-email">
                            outreach@techaidbc.ca
                        </strong>
                    </p>
                </div>
            </div>
        )
    }
}

export default Mission
