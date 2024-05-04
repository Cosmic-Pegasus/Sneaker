import React from 'react'
import './Style.css';
import shoe1 from './Images/shoe1.png'
import shoe2 from './Images/shoe2.png'
import shoe3 from './Images/shoe3.png'
import shoe4 from './Images/shoe4.png'
import shoe5 from './Images/shoe5.png'
import shoe6 from './Images/shoe6.png'
import shoe7 from './Images/shoe7.png'
import { Link } from 'react-router-dom';

export default function NewArrival() {
  return (
   <section className='HotDrops'>
       <h1 className="HotDrops-heading">NEW ARRIVAL</h1>
       <div className="hotdrops-container">
           
               <div className="hotdrop">
               <Link to="/preview">  <img src={shoe1} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike SB Dunk HIgh Dr. Huxtable</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview">  <img src={shoe2} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Air Jordan VIII Phoenix Suns</h1>
                   <h1 className="hotdrop-rate">$200</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview">  <img src={shoe3} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">REEBOK</h3>
                   <h1 className="hotdrop-name">Reebok Instapump Fury Social Status Hornets</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={shoe4} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Kobe IX Volt</h1>
                   <h1 className="hotdrop-rate">$500</h1>
               </div>
           
       </div>
       <div className="hotdrops-container">
           
               <div className="hotdrop">
               <Link to="/preview">  <img src={shoe5} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike SB Dunk HIgh Dr. Huxtable</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview">  <img src={shoe6} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Air Jordan VIII Phoenix Suns</h1>
                   <h1 className="hotdrop-rate">$200</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview">   <img src={shoe7} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">REEBOK</h3>
                   <h1 className="hotdrop-name">Reebok Instapump Fury Social Status Hornets</h1>
                   <h1 className="hotdrop-rate">$600</h1>
               </div>
               <div className="hotdrop">
               <Link to="/preview"> <img src={shoe1} className='hotdrop-img' alt="" /></Link>
                   <h3 className="hotdrop-fade">NIKE</h3>
                   <h1 className="hotdrop-name">Nike Kobe IX Volt</h1>
                   <h1 className="hotdrop-rate">$500</h1>
               </div>
           
       </div>
   </section>
  )
}
