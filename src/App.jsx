import "./App.css";
import About from "./components/About/About";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="app-container">
          <Header />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
