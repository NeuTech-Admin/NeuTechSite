import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
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
                        <FaInstagram className="instagram-icon" />
                        <FaTwitter className="twitter-icon" />
                        <FaFacebook className="facebook-icon" />
                    </div>
                </div>
            </section>
            <p className="footer-site-title">© 2021 NeuTech Foundation</p>
        </div>
    )
}

export default Footer
