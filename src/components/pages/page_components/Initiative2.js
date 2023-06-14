import React, { Component } from 'react'
import Navbar from '../../toolbars/Navbar';
import Footer from '../../toolbars/Footer';
import './Initiative2.css';

class Initiative2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: 'acctech-mission-wrapper',
      usingTech: 'using-tech'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'acctech-mission-wrapper visible',
        usingTech: 'using-tech visible'
      });
    }, 100);
  }

  render() {
    return (
      <div>
        <div className="acctech-container">
          <Navbar initiatives="initiatives" initiatives2="initiatives2" />
          <div className="acctech-wrapper">
            <div className={this.state.text}>
              <span className="acctech-mission-heading">Access to Technology</span>
              <p className="acctech-mission-statement">Despite many consumers upgrading devices frequently, lower-income families lack access to usable technology; this is known as the digital divide.<br /><br />Our goal with Access to Technology is to resuse devices to provide affordable technology to assist low-income communities and families.</p></div>
            <img className={this.state.usingTech} src="goals.jpg" alt="Goals" />
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 0, width: "100%"}}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Initiative2;