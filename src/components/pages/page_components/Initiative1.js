import React, { Component } from 'react';
import Navbar from '../../toolbars/Navbar';
import Footer from '../../toolbars/Footer';
import './Initiative1.css';

class Initiative1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: 'yousen-mission-wrapper',
      yousen: 'yousen-img'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'yousen-mission-wrapper visible',
        yousen: 'yousen-img visible'
      });
    }, 100);
  }

  render() {
    return (
      <div>
        <div className="yousen-container">
          <Navbar initiatives="initiatives" initiatives1="initiatives1" />
          <div className="yousen-wrapper">
            <div className={this.state.text}>
              <span className="yousen-mission-heading">Yousen</span>
              <p className="yousen-mission-statement">YouSEN is an initiative inspiring youth to embrace sustainable engineering. Through engaging workshops and interactive programs, YouSEN equips young minds with the knowledge and skills needed to tackle environmental challenges through engineering.<br /><br /> With hands-on experiences and mentorship from aspiring engineers, YouSEN empowers the next generation of STEM leaders to create innovative solutions that align with circular economy principles.</p>
            </div>
            <img className={this.state.yousen} src="engineering_students.jpg" alt="Goals" />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: "100%" }}>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Initiative1;