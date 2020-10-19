import React from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import General from "./components/general/General";
import Education from "./components/education/Education";
import Work from "./components/work/Work";

import "./css/global.css";

function App() {
  return (
    <div className="p-component">
      <h1 className="p-text-center">CV Generator</h1>
      <General />
      <Education />
      <Work />
    </div>
  );
}

export default App;
