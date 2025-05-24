import "./App.css";
import About from "./components/About/About";
import Header from "./components/header/Header";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="app-container">
          <Header />
          <About />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
