import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About/>
        <Project/>
        <Skill/>
        <SocialLink/>

    </div>
  );
}

export default App;
