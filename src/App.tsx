import './App.css';
import About from './components/About/About';
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
    </div>
  );
}

export default App;
