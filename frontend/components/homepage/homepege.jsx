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
          </div>
          <div className='cat-container'>
            <h2 className='cat-header'>Categories</h2>
            <div className='cat-boxes'>
            <div className='cat-boxes-row1'>
            <div className="cat-box">
        
              <img src="https://yep-seeds.s3.amazonaws.com/images/cat_rest.svg"></img>
           
            <h3 className='cat-box-font'>Restaurants</h3>
            </div>
            <div className="cat-box">
            
              <img src="https://yep-seeds.s3.amazonaws.com/images/cat_shopping.svg"></img>
                
            <h2 className='cat-box-font'>Shopping</h2>
            </div>
            <div className="cat-box">
            
              <img src="https://yep-seeds.s3.amazonaws.com/images/cat_nightlife.svg"></img>

            <h3 className='cat-box-font'>Nightlife</h3>
            </div>
            </div>

            <div className='cat-boxes-row1'>
            <div className="cat-box">
              
              <img src="https://yep-seeds.s3.amazonaws.com/images/cat_beauty_Spas.svg"></img>
            
            <h3 className='cat-box-font'>Beauty & Spas</h3>
            </div>
            <div className="cat-box">
              
              <img src="https://yep-seeds.s3.amazonaws.com/images/cat_automotive.svg"></img>
              
            <h3 className='cat-box-font'>Automotive</h3>
            </div>
            <div className="cat-box">

                <img src="https://yep-seeds.s3.amazonaws.com/images/cat_home+services.svg"></img>
      
              <h3 className='cat-box-font'>Home Services</h3>
            </div>
            </div>
          
        </div>


              
            <div>
              <Footer/>
            </div>
          
          </div>
        </div>
    )
  }
}

export default Homepage;


// category with mapping but hard to format

              {/* <div className='rest-cat-header'>Categories</div>
              {rest_cat.map((el,idx)=>{
                return (
                  <ul className="rest-cat" key={idx}>{el}</ul>
                )
              })} */}