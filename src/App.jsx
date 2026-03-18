import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CaseStudy from './pages/CaseStudy/CaseStudy';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}
