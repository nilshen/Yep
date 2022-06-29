import React from "react";
import { Link } from 'react-router-dom';
import {Footer} from '../footer/footer'
import Header from "../header/header";
import Search_bar_container from "../search_bar/search_bar_container";
import Rater from 'react-rater-plus'

class RestaurantShow extends React.Component {
    
    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId)
    }


    render() {
        // debugger
        const { restaurant, currentUser,logout } = this.props
        // debugger

        const session = currentUser ? (  
            <div className="login-signup">
              <h2 className="header-name">Welcome, {currentUser.username}!</h2>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
            ) : (
              <div>
              <header className='header'>
        
              <nav className="header-right">
                    <Link to="/login" style={{ textDecoration: 'none' }} className='login-font'>Log In</Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }} className='login-font'>Sign Up</Link>
                  </nav>
              </header>
              </div>
            )
                
            //overallrating for restaurant
            let rating = 0;
            let reviews = this.props.restaurant.reviews
            reviews.map((review)=>(
                rating += review.rating
                ))
            let overallRating = Math.round(rating / reviews.length)

        return (

            
        <div>
            <div className="show-header">
                <div className="show-header-item" >
                    <Link to="/">
                        <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='show-logo' />
                    </Link>
                </div>
                <div className="show-header-item">
                    <Search_bar_container/>
                </div>
                <div>
                    {session}
                </div>

            </div>
                
                <div>
                    <div className="show-pics">
                        {restaurant.photoUrls.slice(0,3).map((photo, idx) =>(
                            <img key={idx} src={photo} className="show-pic"/>
                        )
                        
                        )} 
                    </div>
                    <div className="show-header-item">
                        <Link to={`/restaurants/${restaurant.id}/reviews/new`}>Write a Review</Link>        
                    </div>
                    <div>{restaurant.name}</div>
                    <div><Rater total={5} rating={overallRating}/></div>
                    <div className='reviews-length'>{restaurant.reviews.length}</div>
                    <div>{restaurant.address}</div>
                    <div>{restaurant.city}</div>
                    <div>{restaurant.state}</div>
                    <div>{restaurant.zip_code}</div>
                    <div>{restaurant.phone_number}</div>
                    <div>{restaurant.category}</div>
                    <div>{restaurant.website}</div>
                    <div>{restaurant.price}</div>
                    <div>{restaurant.hours}</div>
                </div>
                    
                    <div>
                        {restaurant.reviews[0].body}
                    </div>
                <div>
                    <Footer/>
                </div>
               
        </div>
        );
    }
}

export default RestaurantShow;