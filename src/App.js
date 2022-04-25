import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImproveSkills } from './components/ImproveSkills';
import { Quote } from './components/Quote';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <Hero />
        <ImproveSkills />
        <Quote />
      </div>
    </div>
  );
}

export default App;
