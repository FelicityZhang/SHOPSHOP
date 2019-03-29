import React, { Component } from 'react';
import Products from './Products'

class PantsList extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            dress: ""
        }
        // this.renderDress = this.renderDress.bind( this )
    }

    componentDidMount() {
        let API_KEY = process.env.REACT_APP_API_KEY
        let endPoint = `https://thingproxy.freeboard.io/fetch/https://openapi.etsy.com/v2/listings/active?tags=pants&limit=50&includes=Images:1&api_key=${ API_KEY }`
        fetch( endPoint )
            .then( response => response.json() )
            .then( jsonData => {
                this.setState( prevState => ( {
                    dress: jsonData.results
                } ) )
            } )
    }

    // renderDress() {
    //     if ( this.state.dress ) {
    //         return this.state.dress.map( dress => <div key={ dress[ 'listing_id' ] }>{ dress[ 'title' ] }</div>
    //         )
    //     }
    // }



    render() {
        console.log( this.state.dress )
        return (
            <div className="dressList">


                <div className="itermsContainer">
                    <ul>

                        {
                            this.state.dress &&
                            < Products items={ this.state.dress } />

                        }
                    </ul>
                </div>



            </div>
        )
    }
}
export default PantsList