import React from "react";
import './App.css'
import ImageWithText from './components/Introduction/Introduction'
import SocialMediaBox from "./components/SocialMediaBox/SocialMediaBox";
import UdemyCourses from "./components/UdemyCourses/UdemyCourses";
import CollabLinks from "./components/CollabLinks/CollabLinks";

function App() {

  return (
    <div className="app">
      <div className="center-content">
      <ImageWithText title={'Arturo Lorenzo'} description={'Ingeniero Informático y creador de contenido'} />
      <SocialMediaBox/>
      <br></br>
      <br></br>
      <UdemyCourses/>
      <br></br>
      <br></br>
      <CollabLinks/>
      </div>
    </div>
  );
}

export default App;