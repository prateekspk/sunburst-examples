import React from "react";
import ReactDOM from "react-dom";
import SunburstChart from "./SunburstChart";
import SunburstAnyChart from "./SunburstAnyChart";
import ReactZoomableSun from "./ReactZoomableSun";
import ParentChildPieChart from "./ParentChildPieChart";
import DrilldownPieChart from "./DrilldownPieChart";
import SunburstD3V4 from "./SunburstD3V4";

function App() {
  return (
    <div className="App">
      <h1>This is a new chart</h1>
      <SunburstAnyChart />
      <div id="chart" />
      {/* <SunburstChart /> */}
      {/* <ReactZoomableSun /> */}
      {/* <ParentChildPieChart /> */}
      {/* <DrilldownPieChart /> */}
      <SunburstD3V4 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
