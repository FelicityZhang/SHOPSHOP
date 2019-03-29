import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class AddToCart extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            wishProduct: ''
        }
        // this.handleSubmit = this.handleSubmit.bind( this )
        // this.handleClick = this.handleClick.bind( this )

    }

    // handleClick( e ) {
    //     e.stopPropagation()
    //     console.log( 'inside handle click' )
    //     this.props.onFormSubmit();   
    // }


    handleSubmit( e ) {
        e.preventDefault()
        // 1. get the product from state
        let wishProduct = this.props.product
        // 2. Call Spy function (onFormSubmit) that sends tweed back up to App.js (parent component) 
        this.props.addProducts( wishProduct );
    }

    render() {
        return (
            <div>
                < Link to='/cart/${this.props.productTitle}' >
                    <form onSubmit={ e => this.handleSubmit( e ) }>
                        <submit className="submit">add to cart</submit>
                    </form>
                </Link>
            </div>
        )
    }
}

export default AddToCart

// < Link to='/cart' > <submit onClick={ e => this.handleSubmit( e ) } className="submit">add to cart</submit></Link >

// let pathname = `/detail/${ this.props.item.listing_id }`


