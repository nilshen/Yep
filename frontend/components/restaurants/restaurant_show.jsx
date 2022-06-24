import React from "react";
import { Link } from 'react-router-dom';


class RestaurantShow extends React.Component {
    
    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId)
    }


    render() {
        const { restaurant } = this.props
        
        // debugger
        return (
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>Home Page</Link>
                <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
                
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
        );
    }
}

export default RestaurantShow;