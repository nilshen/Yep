import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = (props) => {
    
    const {restaurant} = props;
    return (
    <div>
        
            <Link to={`/restaurants/${restaurant.id}`} >
            {restaurant.name}
            </Link>
        
    </div>


)

}

export default RestaurantIndexItem