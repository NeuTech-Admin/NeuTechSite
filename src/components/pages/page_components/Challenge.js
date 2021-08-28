import { render } from '@testing-library/react'
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
                <div className="challenge-stats-container">
                    <div className="stat-div">
                        <span className="stat-header">Placehikder</span>
                        <p className="stat-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti rerum aliquam obcaecati sint iste veniam voluptatibus ex! Ea, suscipit.</p>
                    </div>
                    <div className="stat-div">
                        <span className="stat-header">Placehikder</span>
                        <p className="stat-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequi?</p>
                    </div>
                    <div className="stat-div">
                        <span className="stat-header">Placehikder</span>
                        <p className="stat-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque atque, odio possimus repellat id numquam?</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Challenge
