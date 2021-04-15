import React from "react";
import About from "./components/About";
import Awards from "./components/Awards";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interest from "./components/Interest";
import Skill from "./components/Skill";
import Sidebar from "./components/Sidebar";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="Bobo">
          <About />
          <Education />
          <Skill />
          <Awards />
          <Experience />
          <Interest />
        </div>
      </div>
    );
  }
}

export default App;
