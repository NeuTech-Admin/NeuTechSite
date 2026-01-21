import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { AboutUs } from './pages/about-us'
import { YouSEN } from './pages/yousen'
import { EWaste } from './pages/ewaste'
import { OAISus } from './pages/oaisus'
import { SupportUs } from './pages/support-us'
import { Testimonial } from './pages/testimonial'
import { ThreeArms } from './pages/three-arms'
import { MeetUs } from './pages/meet-us'
import { Gallery } from './pages/gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/yousen" element={<YouSEN />} />
        <Route path="/ewaste" element={<EWaste />} />
        <Route path="/oaisus" element={<OAISus />} />
        <Route path="/support-us" element={<SupportUs />} />
        <Route path="/testimony" element={<Testimonial />} />
        <Route path="/three-arms" element={<ThreeArms />} />
        <Route path="/meet-us" element={<MeetUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
