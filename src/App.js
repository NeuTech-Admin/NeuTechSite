import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Initiatives from './components/pages/Initiatives';
import SupportUs from './components/pages/SupportUs';
import ScrollToTop from './components/pages/ScrollToTop'
import Events from './components/pages/Events'
import TheThreeArms from './components/pages/TheThreeArms'
import Testimonial from './components/pages/Testimonial'
import MeetUs from './components/pages/MeetUs'
import Gallery from './components/pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/initiatives" exact component={Initiatives}/>
        <Route path="/support-us" exact component={SupportUs}/>
        <Route path="/testimony" exact component={Testimonial}/>
        <Route path="/three-arms" exact component={TheThreeArms}/>
        {/* <Route path="/meet-us" exact component={MeetUs}/> */}
        <Route path="/gallery" exact component={Gallery}/>
        {/* <Route path="/events" exact component={Events}/> */}
      </Switch>
    </BrowserRouter>
  );
}


export default App;
