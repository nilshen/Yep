import React from "react";
import { Link } from 'react-router-dom';
import {Footer} from '../footer/footer'
import Header from "../header/header";
import Search_bar_container from "../search_bar/search_bar_container";

class RestaurantShow extends React.Component {
    
    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId)
    }


    render() {
        const { restaurant, restaurants } = this.props
        
        // debugger
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
                <div className="show-header-item">
                    <p>Write a review</p>
                </div>
            </div>
                
                <div>
                    <div className="show-pics">
                        {restaurant.photoUrls.slice(0,3).map((photo, idx) =>(
                            <img key={idx} src={photo} className="show-pic"/>
                        )
                        
                        )} 
                    </div>
                    <div>{restaurant.name}</div>
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
                    <Footer/>
                </div>
               
        </div>
        );
    }
}

export default RestaurantShow;