import React from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import General from "./components/general/General";
import Education from "./components/education/Education";
import Work from "./components/work/Work";

function App() {
  return (
    <div>
      <General />
      <Education />
      <Work />
    </div>
  );
}

export default App;
