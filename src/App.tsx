import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Company from './components/Company/Company';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Work />
      <Company />
      <Banner />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
