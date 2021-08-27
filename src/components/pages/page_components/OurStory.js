import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GiHealthNormal } from 'react-icons/gi'
import { FaArchway } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { Button } from '../../Button';
import Card from '../../Card';
import './OurStory.css'
import Aos from 'aos';

class OurStory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            logoImg: 'logo-img',
            text: 'story-wrapper',
            card1: 'nav-card-container-one',
            card2: 'nav-card-container-two',
            card3: 'nav-card-container-three'
        }
    }

    componentDidMount() {
        Aos.init({duration: 1250})
        setTimeout(() => {
            this.setState({
                logoImg: 'logo-img visible',
                text: 'story-wrapper visible',
                card1: 'nav-card-container-one visible',
                card2: 'nav-card-container-two visible',
                card3: 'nav-card-container-three visible'
            })
        }, 100);
    }

    render(){   
        return (
            <div>
                <div className="story-container">
                    <div className={this.state.text}>
                        <span className="site-title">About Us</span>
                        <p className="our-mission">The NeuTech Foundation was founded with the mission of helping to reduce E-waste. Our team's goal is to help raise awareness about the consequences of E-Waste and aid in reducing it.</p>
                        <Button children="Our Initiatives" buttonSize="btn--large" path='/initiatives'/>
                    </div>
                    <img className={this.state.logoImg} src="SiteLogo.png" alt="earth" />
                </div>
                <div className="nav-card">
                    <div className={this.state.card1}>
                        <FaArchway className="icon"/>
                        <span className="card-title">Our Principles</span>
                        <p className="card-description">Find out more about the NT Foundation's three main objectives.</p>
                        <Link className="nav-card-link" ><Button children="The Three Arms" buttonSize="btn--large" path='/about-us'/></Link>
                    </div>
                    <div className={this.state.card2}>
                        <BsPeopleFill className="icon"/>
                        <span className="card-title">Who we are</span>
                        <p className="card-description">Meet the people behind the NT Foundation.</p>
                        <Link className="nav-card-link" ><Button children="Meet Us" buttonSize="btn--large" path='/about-us'/></Link>
                    </div>
                    <div className={this.state.card3}>
                        <GiHealthNormal className="icon"/>
                        <span className="card-title">Support Our Cause</span>
                        <p className="card-description">Discover ways to support our cause.</p>
                        <Link className="nav-card-link" ><Button children="Support Us" buttonSize="btn--large" path='/support-us'/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurStory
