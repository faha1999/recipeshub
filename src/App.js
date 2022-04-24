import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <Hero />
      </div>
    </div>
  );
}

export default App;
