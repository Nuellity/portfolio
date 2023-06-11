import Contact from "./components/Contact";
import Name from "./components/Name";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Name />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
