import React from 'react';
import './App.css';
import Home from './Home';

import './components/Style.css'
// MEN
import AirJordan1RetroHighOG from './components/Shoes/Men/Jordan1RetroOG'
import AirJordan13Retro from './components/Shoes/Men/AirJordan13Retro'
import JumpmanTwoTrey from './components/Shoes/Men/JumpmanTwoTrey'
import JordanSystem23 from './components/Shoes/Men/JordanSystem23'
import AirJordan5Retro from './components/Shoes/Men/AirJordan5Retro'
import AirJordanXXXVII from './components/Shoes/Men/AirJordanXXXVII'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DefaultOrder from './components/DefaultOrder';
import Shop from './components/Shop/Shop';
import ShopLoader from './components/ShopLoader';



export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/order" element={<ShopLoader key={"/"} category="/" />}></Route>
          <Route exact path="/men" element={<DefaultOrder key={"men"} category="/men" />}></Route>
          <Route exact path="/women" element={<DefaultOrder key={"women"} category="/women" />}></Route>
          <Route exact path="/sports" element={<DefaultOrder key={"sports"} category="/sports" />}></Route>
 


          {/* MEN */}
          <Route exact path="/AirJordan1RetroHighOG" element={<AirJordan1RetroHighOG />}></Route>
          <Route exact path="/AirJordan13Retro" element={<AirJordan13Retro key={"/AirJordan13Retro"} />}></Route>
          <Route exact path="/JumpmanTwoTrey" element={<JumpmanTwoTrey key={"JumpmanTwoTrey"} />}></Route>
          <Route exact path="/JordanSystem23" element={<JordanSystem23 key={"JordanSystem23"} />}></Route>
          <Route exact path="/AirJordan5Retro" element={<AirJordan5Retro key={"AirJordan5Retro"} />}></Route>
          <Route exact path="/AirJordanXXXVII" element={<AirJordanXXXVII key={"AirJordanXXXVII"} />}></Route>
          


        </Routes>
      </Router>
    </>

  );
}

