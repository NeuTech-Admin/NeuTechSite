import React, { Component } from 'react'
import Navbar from '../../toolbars/Navbar';
import Footer from '../../toolbars/Footer';
import './Initiative3.css';

class Initiative3 extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       text: 'ewaste-mission-wrapper',
       usingTech: 'using-tech'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'ewaste-mission-wrapper visible',
        usingTech: 'using-tech visible'
      });
    }, 100);
  }

  render() {
    return (
      <div className="ewaste-container">
        <Navbar initiatives="initiatives" initiatives3="initiatives3"/>
        <div className="ewaste-wrapper">
          <div className={this.state.text}>
            <span className="ewaste-mission-heading">Recycling E-Waste</span>
            <p className="ewaste-mission-statement">Our work implements circular economy principles on a community level by collecting and reusing electronic devices. <br/><br/>Recycling E-Waste prevents toxic heavy metals from contaminating the environment such as water sources which disproportionately affects disadvantaged groups. By doing this, we contribute to creating a healthier and more equitable society. </p></div>
          <img className={this.state.usingTech} src="goals.jpg" alt="Goals" />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Initiative3;