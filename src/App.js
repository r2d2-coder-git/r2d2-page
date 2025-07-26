import React from "react";
import './App.css'
import Introduction from './components/Introduction/Introduction'
import Background from './components/Background/Background'
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Courses from "./components/Courses/Courses";
import CollabLinks from "./components/CollabLinks/CollabLinks";
import EduAdvice from "./components/EduAdvice/EduAdvice";
import Consultancy from "./components/Consultancy/Consultancy";
import Footer from "./components/Footer/Footer";

const socialsMedia = [
  { icono: 'github', url: 'https://github.com/r2d2-coder-git'},
  { icono: 'instagram', url: 'https://www.instagram.com/r2d2.coder/'},
  { icono: 'youtube', url:'https://www.youtube.com/channel/UCFu275cNexSxEV09YpnFqrw'}
];


function App() {

  return (
    <div className="app">
      <div className="center-content">
      <Introduction title={'Arturo Lorenzo'} description={'Ingeniero Informático y creador de contenido'} />
      <br></br>
      <br></br>
      <Background/>
      <br></br>
      <br></br>
      <Courses/>
      <br></br>
      <br></br>
      <CollabLinks/>
      <br></br>
      <br></br>
      <SocialMedia socialsMedia={socialsMedia}/>
      <br></br>
      <br></br>
      <Consultancy/>
      <br></br>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;