import React, { Component } from 'react'
import './Style.css'
import { Link } from 'react-router-dom';

export class ShoeItem extends Component {
    render() {
        let { Brand, Name, Img, Rate, Redirect } = this.props;
        return (

            <>

                <div className="ShoeItem">
                    <Link to={Redirect} data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="hotdrop-img" style={{height:'auto',width:'auto'}} src={Img} alt="" />
                    </Link>
                    <div className="py-6"> <h5 className="hotdrop-fade">{Brand}</h5>
                        <p className="hotdrop-name"> {Name}</p>
                        <h1 className="hotdrop-rate">{Rate}</h1>
                    </div>
                </div>
            </>

        )
    }
}

export default ShoeItem