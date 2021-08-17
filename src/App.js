import './App.css';
import Navbar from './components/toolbars/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/toolbars/Footer';
import AboutUs from './components/pages/AboutUs';
import Spinner from './components/pages/page_components/Spinner';
import Stats from './components/pages/page_components/Stats';
import Initiatives from './components/pages/Initiatives';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/initiatives" exact component={Initiatives}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
