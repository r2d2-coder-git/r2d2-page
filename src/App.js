import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Trayectoria from "./components/HorizontalTimeline/HorizontalTimeline";
import Introduction from "./components/Introduction/Introduction";
import H1Bootstrap from "./components/H1Bootstrap/H1Bootstrap";
import './App.css'
function App() {

  return (
    <div>
      <div>
        <Navigation/>
        <Introduction/>
      </div>
      <div id='id-professional-path' className="Professional-path">
        <H1Bootstrap text = "TRAYECTORIA PERSONAL"/>
        <Trayectoria/>
      </div>
      <div className="Social-media">

      </div>
    </div>
  );
}

export default App;