import React from "react";
import Search_bar_container from "./search_bar_container";
import { Link } from "react-router-dom";
import {Footer} from "../footer/footer";
import RestaurantIndexItem from '../restaurants/restaurant_index_item';


class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestRestaurants(this.props.match.params.input);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.input !== this.props.match.params.input) {
            this.componentDidMount();
        }
    }


    render() {
        
        const {restaurants, requestReviews, currentUser, logout } = this.props;
        
        let session = currentUser ? (  
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
        

        return (
            <div>
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
            
            <Search_bar_container/>
                <div className="indexlayout-container">
                    {/* <div>filter placeholder</div> */}
                
                    <ul className="indexlayout-item">
                    {restaurants.map((restaurant, idx)=>(
                        <RestaurantIndexItem 
                        restaurant = { restaurant }
                        requestReviews = {requestReviews}
                        key = { restaurant.id }
                        idx = {idx + 1 }
                    />
                        ))}
                    </ul>
                    {/* <div>Google Map placeholder</div> */}
                
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
        )
    }
};


export default SearchResult;