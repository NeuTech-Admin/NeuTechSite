import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Initiatives from './components/pages/Initiatives';
import SupportUs from './components/pages/SupportUs';
import ScrollToTop from './components/pages/ScrollToTop'
import Events from './components/pages/Events'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/initiatives" exact component={Initiatives}/>
        <Route path="/support-us" exact component={SupportUs}/>
        {/* <Route path="/events" exact component={Events}/> */}
      </Switch>
    </BrowserRouter>
  );
}


export default App;
