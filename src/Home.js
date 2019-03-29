import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import './Home.css'

class Home extends Component {


    render() {
        return (
            <div className="homePicture ">
                <nav>
                    <div className="homeImg">
                        <div className="dressContainer img"><Link to='/dress' className="color" style={ { textDecoration: 'none' } }>
                            <div className="shop">< div className="shop" > Shop Dress</div ></div>
                            <imag className='dressDiv' src="/src/Img/dress.png" /></Link></div>
                        <div className="shoesContainer img"><Link to='/shoes' className="color" style={ { textDecoration: 'none' } }> <div className="shop">Shop Shoes</div>
                            <img className='shoesDiv' /></Link></div>
                        <div className="shirtsContainer img"><Link to='/shirts' className="color" style={ { textDecoration: 'none' } }><div className="shop">Shop Shirts</div>
                            <img className='ShirtsDiv' /></Link></div>
                        <div className="pantsContainer img"><Link to='/pants' className="color" style={ { textDecoration: 'none' } }><div className="shop">Shop Pants</div> <img className='PantsDiv' /></Link></div>
                    </div>
                </nav>



            </div >
        )
    }
}
export default Home

    // < div className = "shop" > Shop Dress</div >
    //     <div className="shop">Shop Shoes</div>
    //     <div className="shop">Shop Shirts</div>
    //     <div className="shop">Shop Pants</div>      className="color"