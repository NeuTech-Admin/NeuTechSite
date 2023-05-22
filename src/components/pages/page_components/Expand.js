import React, { useEffect } from 'react'
import './Expand.css'

function Expand({ children }) {

    useEffect(() => {
        const one = document.getElementById('init-content-one');
        const two = document.getElementById('init-content-two');
        const three = document.getElementById('init-content-three');

        one.addEventListener('mouseover', () => {
            document.getElementById('small-img-one').style.opacity = "1";
            document.getElementById('small-img-one').style.visibility = "visible";
            document.getElementById('small-img-one').style.width = "15rem";
        });
        one.addEventListener('mouseout', () => {
            // document.getElementById('para1').style.visibility = "hidden";
            document.getElementById('small-img-one').style.visibility = "hidden";
            document.getElementById('small-img-one').style.opacity = "0";
            document.getElementById('small-img-one').style.width = "0rem";
        });

        two.addEventListener('mouseover', () => {
            // document.getElementById('para2').style.visibility = "visible";
        });
        two.addEventListener('mouseout', () => {
            // document.getElementById('para2').style.visibility = "hidden";
        });

        three.addEventListener('mouseover', () => {
            // document.getElementById('para3').style.visibility = "visible";
        });
        three.addEventListener('mouseout', () => {  
            // document.getElementById('para3').style.visibility = "hidden";
        });
  
    }, []);
    

    return (
        <div className="expand-container">
            <div className="expand-wrapper">
                {children}
            </div>
        </div>
    )
}

export default Expand;