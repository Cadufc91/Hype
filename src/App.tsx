import './App.css';
import About from './components/About/About';
import Company from './components/Company/Company';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Work />
      <Company />
    </div>
  );
}

export default App;
