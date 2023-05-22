import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Initiative1 from './components/pages/page_components/Initiative1';
import Initiative2 from './components/pages/page_components/Initiative2';
import Initiative3 from './components/pages/page_components/Initiative3';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/yousen" element={<Initiative1 />} />
        <Route path="/access-tech" element={<Initiative2 />} />
        <Route path="/ewaste" element={<Initiative3 />} />
        <Route path="/support-us" element={<SupportUs />}/>
        <Route path="/testimony" element={<Testimonial />}/>
        <Route path="/three-arms" element={<TheThreeArms />}/>
        <Route path="/meet-us" element={<MeetUs />}/>
        <Route path="/gallery" element={<Gallery />}/>
        {/* <Route path="/events" exact component={<Events />}/> */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
