import React from 'react'
import './Style.css'
import MenCategory from './Images/Nice/men.jpg'
import WomenCategory from './Images/Nice/women.jpg'

export default function Category() {
  return (
    <section className='category'>
        <h1 className="Brand-heading">SHOP BY CATEGORY</h1>
        <div className="category-container">
            <div className="categories"><a href=""><img src={MenCategory} className='category-img' alt="" /></a><div className="category-title">MEN</div></div>
            <div className="categories"><a href=""><img src={WomenCategory} className='category-img' alt="" /></a><div className="category-title">WOMEN</div></div>
        </div>
    </section>
  )
}
