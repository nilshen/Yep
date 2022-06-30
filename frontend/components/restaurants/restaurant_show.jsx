import React from "react";
import { Link } from 'react-router-dom';
import {Footer} from '../footer/footer'
import Search_bar_container from "../search_bar/search_bar_container";
import Rater from 'react-rater-plus'
import ReviewIndexContainer from '../review/review_index_container'

class RestaurantShow extends React.Component {
    
    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.restaurantId !== this.props.restaurantId) {
    //         this.componentDidMount();
    //     }
    // }

    render() {
        // debugger
        const { restaurant, currentUser,logout } = this.props
        // debugger
        // console.log(currentUser)
        // console.log(currentUser.username)

        let session = currentUser ? (  
            <div className="header-show">
              <h2 className="header-name-show">Welcome, {currentUser.username}!</h2>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
            ) : (
              <div>
              <header className='header-show'>
        
              <nav className="header-right-show">
                    <Link to="/login" style={{ textDecoration: 'none' }} className='login-font-show'>Log In</Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }} className='login-font-show'>Sign Up</Link>
                  </nav>
              </header>
              </div>
            )
                
            //overallrating for restaurant
            // let rating = 0;
            // let reviews = this.props.restaurant.reviews
            // reviews.map((review)=>(
            //     rating += review.rating
            //     ))
            // let overallRating = Math.round(rating / reviews.length)

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
                <div className="show-header-session">
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
                    {/* <div><Rater total={5} rating={overallRating}/></div> */}
                    {/* <div className='reviews-length'>{restaurant.reviews.length}</div> */}
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
                    
                <div className="biz-show-rec-reviews">
                    <div className="biz-show-each-review">
                        <ReviewIndexContainer restaurant={restaurant}/>
                    </div>
                </div>

                <div>
                    <Footer/>
                </div>
               
        </div>
        );
    }
}

export default RestaurantShow;