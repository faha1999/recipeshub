import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImproveSkills } from './components/ImproveSkills';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <Hero />
        <ImproveSkills />
      </div>
    </div>
  );
}

export default App;
