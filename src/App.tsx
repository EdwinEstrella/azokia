import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import Automation from './pages/Automation';
import DigitalMarketing from './pages/DigitalMarketing';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
          <ChatBubble />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;