import React from "react";
import './App.css'
import Introduction from './components/Introduction/Introduction'
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Courses from "./components/Courses/Courses";
import CollabLinks from "./components/CollabLinks/CollabLinks";
import Consultancy from "./components/Consultancy/Consultancy";
import Footer from "./components/Footer/Footer";

const socialsMedia = [
  { icono: 'instagram', url: 'https://www.instagram.com/r2d2.coder/'},
  { icono: 'twitch' , url: 'https://www.twitch.tv/r2d2_coder'},
  { icono: 'youtube', url:'https://www.youtube.com/channel/UCFu275cNexSxEV09YpnFqrw'},
  { icono: 'github', url: 'https://github.com/r2d2-coder-git'}
];


function App() {

  return (
    <div className="app">
      <div className="center-content">
      <Introduction title={'Arturo Lorenzo'} description={'Ingeniero Informático y creador de contenido'} />
      <SocialMedia socialsMedia={socialsMedia}/>
      <br></br>
      <br></br> 
      <Courses/>
      <br></br>
      <br></br>
      <Consultancy/>
      <br></br>
      <CollabLinks/>
      <br></br>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;