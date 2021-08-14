import React from 'react'
import { Link } from 'react-router-dom'
import { ImArrowRight2 } from 'react-icons/im'
import './Card.css'

function Card(props) {

    return (
        <div className="card-container">
            <span className="card-title">{props.title}</span>
            <p className="card-description">{props.description}</p>
            <Link className="card-link" to={props.path}>{props.link}<ImArrowRight2 className="arrow" /></Link>
        </div>
    )
}

export default Card
