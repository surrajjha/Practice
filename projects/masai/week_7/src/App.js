import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar'
import Slideshow from './component/slideShow';
import Card from './component/card';
//import './component/ms.module.css';
import NewImage from './component/newImage';
import Image from './component/image';
import Footer from './component/footer';




function App() {
  return (
    <div>
      <NavBar />
      <Slideshow />
      <Card />
      <NewImage />
      <Image />
      <Footer />
    </div>
  );
}

export default App;
