import React from 'react'
import './Style.css';
import Hotdrops1 from './Images/Hotdrops1.png'
import Hotdrops2 from './Images/Hotdrops2.png'
import Hotdrops3 from './Images/Hotdrops3.png'
import Hotdrops4 from './Images/Hotdrops4.png'
import { Link } from 'react-router-dom';

export default function HotDrops() {
  return (
   <section className='HotDrops'>
       <h1 className="HotDrops-heading">HOT DROPS</h1>
       <div className="hotdrops-container">
           
               <div className="hotdrop">
                   <Link to="/preview"><img src={Hotdrops1} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike SB Dunk HIgh Dr. Huxtable</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops2} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Air Jordan VIII Phoenix Suns</h1>
                   <h1 className="hotdrop-rate">$200</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops3} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">REEBOK</h3>
                   <h1 className="hotdrop-name">Reebok Instapump Fury Social Status Hornets</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops4} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Kobe IX Volt</h1>
                   <h1 className="hotdrop-rate">$500</h1>
               </div>
           
       </div>
       <div className="hotdrops-container">
           
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops1} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike SB Dunk HIgh Dr. Huxtable</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops2} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Air Jordan VIII Phoenix Suns</h1>
                   <h1 className="hotdrop-rate">$200</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops3} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">REEBOK</h3>
                   <h1 className="hotdrop-name">Reebok Instapump Fury Social Status Hornets</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={Hotdrops4} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Kobe IX Volt</h1>
                   <h1 className="hotdrop-rate">$500</h1>
               </div>
           
       </div>
   </section>
  )
}
