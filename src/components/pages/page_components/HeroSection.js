import React, { Component } from 'react'
import { Button } from '../../Button'
import Card from '../../Card.js'
import './HeroSection.css'
import MainImpact from './MainImpact'
import Expand from './Expand'


class HeroSection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recogair: 'recogair',
            community: 'community',
            bubbles: "bubbles",
            text_initiatives: 'text_initiatives',
            ntlogo: 'ntlogo',
            learn: 'learn',
            text: 'text-wrapper',
            card: 'card-div'
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                recogair: 'recogair visible',
                community: 'community visible',
                text_initiatives: 'text_initiatives visible',
                bubbles: 'bubbles visible',
                ntlogo: 'ntlogo visible',
                learn: 'learn visible',
                text: 'text-wrapper visible',
                card: 'card-div visible'
            })
        }, 100);
    }

    render() {
        return (
            <div className="hero-container">
                <div>
                    <div className="content-wrapper">
                        <div className={this.state.text}>
                            <p className="slogan">Making Technology Innovation more Accessible and Sustainable</p>
                            <Button children="Support Us" buttonSize="btn--large" path='/support-us' />
                        </div>
                        <img className={this.state.recogair} src="Recogair.png" alt="Recogair" />

                    </div>
                    <MainImpact />
                </div>
                <div className="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="wave-content-wrapper">
                    <span className="init-title">Our Initiatives</span>
                    <div className="wave-content">
                        <Expand>
                            <div className="initiatives-content" id="init-content-one">
                                <div className={this.state.text_initiatives}>
                                    <div className="init-text-wrapper">
                                        <span className="init-content-title">YouSEN</span>
                                        {/* <p className="init-desc"></p> */}
                                    </div>
                                    <Button children="Find Out More" buttonSize="btn--large" path='/yousen' />
                                </div>
                            </div>
                            <div className="vert-divider"/>
                            <div className="initiatives-content" id="init-content-two">
                                <div className={this.state.text_initiatives}>
                                    <div className="init-text-wrapper">
                                        <span className="init-content-title">Access to Technology</span>
                                        {/* <p className="init-desc"></p> */}
                                    </div>
                                    <Button children="Find Out More" buttonSize="btn--large" path='/access-tech' />
                                </div>
                                {/* <img className={`${this.state.community} right`} src="community.png" alt="Community" /> */}
                            </div>
                            <div className="vert-divider"/>
                            <div className="initiatives-content" id="init-content-three">
                                {/* <img className={this.state.community} src="community.png" alt="Community" /> */}
                                <div className={this.state.text_initiatives}>
                                    <div className="init-text-wrapper">
                                        <span className="init-content-title">E-Waste</span>
                                        {/* <p className="init-desc"></p> */}
                                    </div>
                                    <Button children="Find Out More" buttonSize="btn--large" path='/ewaste' />
                                </div>
                            </div>
                        </Expand>
                    </div>
                </div>
                <div className="wave-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="learn-about-us">
                    <div className={this.state.learn}>
                        <div className="learn-text-wrapper">
                            <span className="learn-title">Learn More About Us</span>
                            <p className="learn-desc">Learn about why we do what we do. Understand the true
                                purpose of the NTFoundation through our three core principles</p>
                        </div>
                        <Button children="Learn More" buttonSize="btn--large" path='/about-us' />
                    </div>
                    <img className={this.state.ntlogo} src="SiteLogoTextless.png" alt="Site Logo Textless" />
                </div>
            </div>
        )
    }
}

export default HeroSection