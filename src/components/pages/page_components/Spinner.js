import React from 'react'
import './Spinner.css'

function Spinner() {
    return (
        <div className="spinner-container">
            <div className="top spinner"/>
            <div className="bottom spinner"/>
            <img src="SiteLogo.png" className="spinner-ogo" alt="NeuTech Foundation"/>
        </div>
    )
}

export default Spinner
