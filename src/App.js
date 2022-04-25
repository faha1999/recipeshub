import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImproveSkills } from './components/ImproveSkills';
import { Quote } from './components/Quote';
import { Chiefs } from './components/Chiefs';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <Hero />
        <ImproveSkills />
        <Quote />
        <Chiefs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
