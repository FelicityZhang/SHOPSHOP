import React, { Component } from 'react';
import './ProductDetail.css'
import Cart from './AddToCart'
import { Route, Link, Switch } from 'react-router-dom'


class ProductDetail extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            apiProduct: ''
        }
        // this.handleSubmit = this.handleSubmit.bind( this )

    }


    componentDidMount() {
        const id = this.props.match.params.id
        console.log( 'ID?:', id )
        let url = `https://thingproxy.freeboard.io/fetch/https://openapi.etsy.com/v2/listings/${ id }?includes=Images&api_key=nszdmo8kz1ia6wmqt2t4ag6c`
        fetch( url )
            .then( response => response.json() )
            .then( response => {
                this.setState( { apiProduct: response } )
            } )
    }



    handleSubmit( e ) {
        e.preventDefault()
        // 1. get the product from state
        let wishProduct = this.props.product
        // 2. Call Spy function (onFormSubmit) that sends tweed back up to App.js (parent component) 
        this.props.addProducts( wishProduct );

        alert( "successfully add to cart!" )
    }


    render() {
        console.log( this.state.apiProduct )

        return (
            this.state.apiProduct &&
            <div className='detailContainer'>
                <div className='detailInfo'>
                    <div className="imgContainer">
                        <img className="detailImg" src={ this.state.apiProduct.results[ 0 ].Images[ 0 ].url_570xN } />
                    </div>
                    <div className='buyContainer'>
                        <div className="detailTitle">
                            { this.state.apiProduct.results[ 0 ].title }
                        </div>

                        <div className='proID'>
                            Shopping ID: { this.state.apiProduct.results[ 0 ].shipping_template_id }
                        </div>
                        <div className="DetailPrice">
                            ${ this.state.apiProduct.results[ 0 ].price }
                        </div>
                        <div className="addToCart">
                            <form onSubmit={ e => this.handleSubmit( e ) }>
                                <submit className="submit">add to cart</submit>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="productDescription" >

                    <div className="margin-bottom"> DESCRIPTION:</div> { this.state.apiProduct.results[ 0 ].description }

                </div>
            </div>
        )
    }
}

export default ProductDetail


{/* <AddToCart wishProduct={ this.state.apiProduct.results[ 0 ].title } /> */ }
