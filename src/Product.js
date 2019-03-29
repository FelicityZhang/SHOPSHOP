import React, { Component } from 'react';
import './Item.css'
import { Redirect, Route, Link, Switch } from 'react-router-dom'
// import ProductDetail from './ProductDetail'




class Product extends Component {
    constructor ( props ) {
        super( props )
        // this.state = {
        //     redirect: false
        // }

    }

    handleClick() {
        console.log( this.props.item )

        // this.setState( { redirect: true } )
    }

    render() {
        let pathname = `/detail/${ this.props.item.listing_id }`
        return (
            this.props.item &&
            <div>
                <div className="shopItem">
                    <div>
                        <nav>
                            <Link location={ this.props.item } to={ pathname }><img className="image" onClick={ () => this.handleClick() } src={ this.props.item.Images[ 0 ].url_570xN } /></Link>
                        </nav>
                    </div>
                    <div className="title">{ this.props.item.title }</div>
                    <div className="price">$ { this.props.item.price }</div>
                </div >


                {/* { this.state.redirect
                    ? <Redirect push to={ {
                        pathname={ pathname },
                        state: { item: this.props.item }
                    } } />
                    : '' } */}


            </div>
        )
    }
}

export default Product























// <Route path='/details/:image' render={ () => <ProductDetail onClick={ ( e ) => this.handleClick( e ) } detail={ this.state.productDetail } /> } />

{/* <Redirect to={ {
                                pathname={ pathname },
                                component={ ProductDetail },
                            } }
                            /> */}