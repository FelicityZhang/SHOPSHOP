import React, { Component } from 'react';
import Product from './Product'

function Products( props ) {
    console.log( props.items )
    let items = props.items.map( item => {
        return <Product item={ item } key={ item[ 'listing_id' ] } />
    } )


    return (
        <div className="itemList">
            {/* this is items */ }
            { items }
        </div>
    )
}

// class Products extends Component {
//     constructor ( props ) {
//         super( props )
//     }

//     mapProduct() {
//         this.props.items.map( item => {
//             return <Product item={ item } key={ item[ 'listing_id' ] } />
//         } )
//     }

//     render() {
//         return (
//             <div className="itemList">
//                 {/* this is items */ }
//                 { this.mapProduct() }
//             </div>
//         )
//     }
// }

export default Products




















// let itemsContainer = document.querySelector( '.itemsContainer' )
//         return ( iterms.forEach( data => {
//             // console.log( "images: ", data.Images[ 0 ].url_fullxfull )

//             let itemDiv = document.createElement( 'div' )
//             itemDiv.setAttribute( 'className', 'itermDiv' )

//             let imgDiv = document.createElement( 'IMG' )
//             imgDiv.setAttribute( "className", 'imagDiv' )
//             imgDiv.src = data.Images[ 0 ].url_170x135


//             let titleDiv = document.createElement( 'div' )
//             titleDiv.setAttribute( 'className', 'title' )
//             titleDiv.innerText = data.title

//             let priceDiv = document.createElement( 'div' )
//             priceDiv.setAttribute( 'className', 'price' )
//             priceDiv.innerText = data.price


//             itemDiv.appendChild( imgDiv )
//             itemDiv.appendChild( titleDiv )
//             itemDiv.appendChild( priceDiv )
//             itemsContainer.appendChild( itemDiv )


