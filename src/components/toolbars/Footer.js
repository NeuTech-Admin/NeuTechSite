import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div class="footer-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="footer-container">
                <section className="footer-section">
                    <p className="contact-us">Contact us at info@ntfoundation.ca</p>
                    <div className="footer-div">
                        <div className="socials">
                            <p className="footer-description">
                                Check out our socials to stay up to date with our initiatives
                            </p>
                            <p className="footer-description-phone">
                                Check out our socials
                            </p>
                            <FaInstagram className="instagram-icon" onClick={() => window.location.href = ''}/>
                            <FaTwitter className="twitter-icon" />
                            <FaFacebook className="facebook-icon" />
                        </div>
                    </div>
                </section>
                <p className="footer-site-title">© 2023 NeuTech Foundation</p>
            </div>
        </div> 
    )
}

export default Footer
