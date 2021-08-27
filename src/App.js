import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import Initiatives from './components/pages/Initiatives';
import SupportUs from './components/pages/SupportUs';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/initiatives" exact component={Initiatives}/>
        <Route path="/support-us" exact component={SupportUs}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
