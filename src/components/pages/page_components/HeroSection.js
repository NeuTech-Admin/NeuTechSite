import React, { Component } from 'react'
import { Button } from '../../Button'
import Card from '../../Card.js'
import './HeroSection.css'


class HeroSection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            earthImg: 'earth-img',
            text: 'text-wrapper',
            card: 'card-div'
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                earthImg: 'earth-img visible',
                text: 'text-wrapper visible',
                card: 'card-div visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="hero-container">
                <div className="content-wrapper">
                    <img className={this.state.earthImg} src="Earth.png" alt="earth" />
                    <div className={this.state.text}>
                        <span className="site-title">NeuTech Foundation</span>
                        <p className="slogan">Reusing technology to support communities and reduce E-Waste</p>
                        <Button children="Learn More" buttonSize="btn--large" path='/about-us'/>
                    </div>
                </div>
                <div className={this.state.card}>
                    <Card title="Our Initiatives" description="See the progress that NTFoundation has made and what we have done in the community." path="/initiatives" link="Find out More" />
                    <Card title="Learn More About Us" description="Learn about why we do what we do. Understand the true purpose of the NTFoundation through our three core principles." path="/about-us" link="Learn More About Us" />
                </div>
            </div>
        )
    }
}

export default HeroSection
