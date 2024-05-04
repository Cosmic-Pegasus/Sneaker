import React from 'react'
import './ShoeStyle.css';
import Converse from '../Images/Converse.png'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
    <nav className="sneakers-navbar" style={{position:`${props.position}`}}>
        <div className="img-box"><img src={Converse} alt="" className='sneakers-logo' /></div> 
        <div className="sneakers-navlink-container">
            <Link to="/" className="sneakers-navlink-dif">NEW ARRIVALS</Link>
            <Link to="/" className="sneakers-navlink">HOTS</Link>
            <Link to="/" className="sneakers-navlink">MEN</Link>
            <Link to="/" className="sneakers-navlink">WOMEN</Link>
            <Link to="/order" className="sneakers-navlink">SHOP</Link>
        </div>
        <div className="img-box"><Link to="/"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link>
        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}} width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg></Link></div>
    </nav>
    </>
  )
}
