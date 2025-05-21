import './App.css';
import Nvbr from './components/Nvbr';
import Center from './components/Center';
import Skillsect from './components/Skillsect'; 
import Project from './components/Project';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nvbr />
      <div id="home"><Center /></div>
      <div id="skills"><Skillsect /></div>
      <div id="projects"><Project /></div>
      <div id="contact"><Form /></div>
            <Footer />

        </div>

  );
}

export default App;
