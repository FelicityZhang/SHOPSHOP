import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import DressList from './DressList'
import ShirtsList from './ShirtsList'
import ShoesList from './ShoesList'
import PantsList from './PantsList'

import Products from './Products';
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Home from './Home'
import './Home.css'

class App extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      tag: '',
      data: ''
    }
    this.handleList = this.handleList.bind( this )
    this.handleSearch = this.handleSearch.bind( this )
  }



  handleList( e ) {
    e.preventDefault()
    let endPoint = `https://thingproxy.freeboard.io/fetch/https://openapi.etsy.com/v2/listings/active?tags=${ this.state.tag }&limit=50&includes=Images:1&api_key=nszdmo8kz1ia6wmqt2t4ag6c`
    fetch( endPoint )
      .then( response => response.json() )
      .then( data => {
        this.setState( { data: data.results } )
      } )

  }


  handleSearch( event ) {
    this.setState( {
      tag: event.target.value
    } )
  }

  render() {
    return (

      <div className="App">

        <header>
          <div className='logo'>Shopshop</div>
        </header>

        <nav className="tagLink">
          {/* <div> <Link to='/cart'>Cart</Link> </div> */ }
          <div> <Link to="home" className="color" style={ { textDecoration: 'none' } }>Home</Link> </div>
          <div> <Link to='/dress' className="color" style={ { textDecoration: 'none' } }>Dress</Link> </div>
          <div> <Link to='/shoes' className="color" style={ { textDecoration: 'none' } }>Shoes</Link> </div>
          <div> <Link to='/shirts' className="color" style={ { textDecoration: 'none' } }>Shirts</Link> </div>
          <div> <Link to='/pants' className="color" style={ { textDecoration: 'none' } }>Pants</Link> </div>


          <div className='searchBar'>
            <form onSubmit={ e => this.handleList( e ) }>
              <input className="input"
                onChange={ event => this.handleSearch( event ) }
                value={ this.state.tag }
                type="text" />
              <button className="button">Search</button>
            </form>
          </div>
        </nav>


        <div className="itermsContainer">
          {
            this.state.data &&
            < Products tag={ this.state.tag } items={ this.state.data } />

          }


        </div>



        <main>

          <Switch>
            <Route exact path='/' render={ props => <Home /> } />
            <Route exact path='/home' render={ props => <Home /> } />

            <Route path='/dress' render={ props => <DressList /> } />
            <Route path='/shoes' render={ props => <ShoesList /> } />
            <Route path='/Shirts' render={ props => <ShirtsList /> } />
            <Route path='/pants' render={ props => <PantsList /> } />
            <Route path='/detail/:id' component={ ProductDetail } />
            {/* <Route path='/cart' component={ Cart } /> */ }

          </Switch>

        </main>

      </div>


    );
  }
}

export default App;




{/* <Route path='/bags' render={ props => <shirtsList handleList={ this.handleList( bags ) } /> } /> */ }


// <Route path='/shirts' render={ props => <shirtsList handleList={ this.handleList( bags ) } />
            // <Route path='/pants' render={ props => <PantsList handleList={ this.handleList( bags ) } />











// getList( endPoint ) {
//   fetch( endPoint )
//     .then( response => response.json() )
//     .then( data => {
//       console.log( 'data from api:', data[ 'dress' ] )
//       this.setState( { tag: data.results[ 'tag' ] } )
//     } )
// }

// handleSearch( event ) {
//   event.preventDefault()
//   let endPoint = `https://openapi.etsy.com/v2/listings/active?tags=${ this.state.tag }&limit=50&includes=Images:1&api_key=nszdmo8kz1ia6wmqt2t4ag6c`
//   getList( endPoint )
// }



// handleChange( event ) {
//   this.setState( {
//     tag: event.target.value
//   } )
//   console.log( event.target.value )
// }


/* <Route path="/bags" render={ () => <BagsList tag={ this.state.tag } /> } /> */
