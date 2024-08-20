import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Projects } from './components/Projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Projects />
    </div>
  );
}

export default App;
