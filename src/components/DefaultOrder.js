import React, { Component } from "react";
import ShoeItem from './ShoeItem';
import './Style.css'
import Sidenav from './Sidenav'


export default class DefaultOrder extends Component {
  Details = [];
  constructor() {
    super();
    this.state = {
      Details: this.Details,
      loading: true
    };
  }
  async componentDidMount() {
    let url = `http://127.0.0.1:5000${this.props.category}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ Details: parsedData.Details, loading: false })
    console.log(parsedData)
  }
  render() {
    return (
      <>
        <Sidenav />
        <div className="headingOrderPage">
          <h1 className="HotDrops-heading" style={{fontSize:'3vw'}}>SHOP</h1>
          <div className="mb-3 xl:w-96">
            <div className="input-group flex flex-wrap items-stretch w-full mb-4">
              <input type="search" className="form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" style={{fontFamily:"urbanist"}} aria-label="Search" aria-describedby="button-addon2" />
              <button className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="flexContainer">
            {this.state.Details.map((element, ShoeItemm) => {
              return <ShoeItem key={ShoeItemm}
                Brand={element.Brand} 
                Img={element.Img}
                Name={element.Name}
                Rate={element.Rate}
                Redirect={element.Redirect}
              />
            })}
          </div>
        </div>
      </>
    )
  }
}

