import "./App.css";
import Header from "./components/Header/Header"
import Intro  from "./components/Section_Intro/Intro";
import About from "./components/Section_About/About"
import Skills from "./components/Section_Skills/Skills"

function App() {
  return (
    <div className="main"> 
      <Header />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
