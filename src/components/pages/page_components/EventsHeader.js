import Aos from 'aos'
import React, { Component } from 'react'
import './Events.css'

class EventsHeader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: 'mission-wrapper',
            usingTech: 'events-tech'
        }
    }


    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                text: 'mission-wrapper visible',
                usingTech: 'events-tech visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="events-container">
                <div className="events-wrapper">
                    <div className={this.state.text}>
                        <span className="mission-heading">Electronics Collection</span>
                        <p className="mission-statement">
                            This Saturday, Novemeber 27th from 12:00 - 4:00 pm, we will be set up in front of Seaquam to 
                            collect electronics curbside. Accepted electronics include computers, laptops, phones, tablets 
                            and computer peripherals
                            <br/>
                            <br/>
                            Non-functioning electronics will be recycled to reduce E-Waste while functioning electronics 
                            will be donated to low-income families and communities
                        </p>
                    </div>
                    <img className={this.state.usingTech} src="Events.png" alt="Events" />
                </div>
            </div>

        )
    }
}

export default EventsHeader
