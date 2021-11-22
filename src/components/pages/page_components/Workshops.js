import Aos from 'aos'
import React, { Component } from 'react'
import './Workshops.css'
import Card from '../../Card.js'
import { Button } from '../../Button'

class Workshops extends Component {

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
            <div className="upcoming-events">
                <span className="event-header">Our next Event is on Saturday November 27th at Seaquam Secondary School</span>
                <div className="event-desc">
                    <span className="workshop-desc">To sign up for the event click the link below and fill out the form.</span>
                    <Button children="Learn More" buttonSize="btn--large" path='/about-us'/>
                </div>
            </div>

        )
    }
}

export default Workshops


