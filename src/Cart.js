import React, { Component } from 'react';
import AddToCart from './AddToCart';


class Cart extends Component {

    state = {
        wishList: []
    }
    // this.addProducts = this.addProducts.bind( this )


    addProducts( wishProduct ) {
        this.setState( {
            wishList: [ ...this.state.wishList, wishProduct ]
        } )
    }

    render() {
        console.log( this.state.wishList )
        let wishProduct = this.props.match.params.title

        return (
            <div>
                { this.state.addProducts( wishProduct ) }
            </div>
        )
    }

}

export default Cart