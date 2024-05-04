import React from 'react'
import './Style.css'
import Nike from './Images/NikeBox.jpg'
import adidas from './Images/AdidasBox.jpg'
import Puma from './Images/Jordan.jpg'
import Reebok from './Images/PumaBox2.jpg'
import UnderArmour from './Images/NewBalance.jpg'
import Converse from './Images/ConverseBox.jpg'

export default function Brand() {
  return (
    <section className='Brand'>
      <h1 className="Brand-heading">SHOP BY BRAND</h1>
      <div className="brand-container">
        <div className="brands"><a href=""><img src={Nike} className='brand-img' alt="" /></a></div>
        <div className="brands"><a href=""><img src={adidas} className='brand-img' alt="" /></a></div>
        <div className="brands"><a href=""><img src={Converse} className='brand-img' alt="" /></a></div>
      </div>
      <div className="brand-container">
        <div className="brands"><a href=""><img src={Reebok} className='brand-img' alt="" /></a></div>
        <div className="brands"><a href=""><img src={UnderArmour} className='brand-img' alt="" /></a></div>
        <div className="brands"><a href=""><img src={Puma} className='brand-img' alt="" /></a></div>
      </div>
    </section>
  )
}
