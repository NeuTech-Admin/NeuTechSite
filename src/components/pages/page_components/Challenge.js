import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Card from '../../Card.js'
import './Challenge.css'

class Challenge extends Component {

    constructor(props) {
        super(props)

        this.state = {
            text: 'mission-wrapper',
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                text: 'mission-wrapper visible',
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
                    <img className="using-tech"src="UsingTech.png" alt="Technology"/>
                </div>
                <div className="challenge-stats-container">
                    <div>
                        
                    </div>
                    <div></div>
                    <div></div>
                </div>   
            </div>
                
        )
    }
}

export default Challenge
