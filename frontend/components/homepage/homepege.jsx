import React from 'react';
import { Link } from 'react-router-dom';
import Search_bar_container from '../search_bar/search_bar_container';
import {Footer} from '../footer/footer'
// import Header from '../header/header';

class Homepage extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestRestaurants()
  }

  render() { 

    const { currentUser, logout, restaurants } = this.props


    const session = currentUser ? (  
      <div className="login-signup">
        <h2 className="header-name">Welcome, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
      ) : (
        <div>
        <header className='header'>
  
          <nav className="header-right">
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
          </nav>
        </header>
        </div>
      )

      let rest_cat = [];
      restaurants.forEach((restaurant)=>{
        if (!rest_cat.includes(restaurant.category)) {
            rest_cat.push(restaurant.category)
        }
      })

    return (
      <div className='homepage-container'>
      
      <div className='homepage-container-top'>
        <div className='header-container'>
          <nav className="header-left">
            <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
            {/* <p>Write a Review</p> */}
          </nav>
          <nav className="header-middle"> 
            <Link to="/">
              <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='logo' />
            </Link>
          </nav>
          <nav className="header-right"> 
            {session}
          </nav>
        </div>
      </div>

        <div className='homepage-container-bottom'>
          <div>
            <Search_bar_container/>
          </div>
              <div className='rest-cat-header'>Find restaurants by category</div>
              {rest_cat.map((el,idx)=>{
                return (
                  <ul className="rest-cat" key={idx}>{el}</ul>
                )
              })}
            <div>
              <Footer/>
            </div>
          </div>
        </div>
    )
  }
}

export default Homepage;

