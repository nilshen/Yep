import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = (props) => {
    
    const {restaurant} = props;
    // debugger
    return (
    <div>

        <Link to={`/restaurants/${restaurant.id}`} className="index-item" style={{ textDecoration: 'none' }}>
        <div className='index-item-container'>

            <img className='index-pic' src={restaurant.photoUrls[0]} />

            <div className='index-item-individual'>
                <h3>{restaurant.name}</h3>
                
                <div className='index-item-individual-details'>
                    <div className='index-item-individual-details-cat'>{restaurant.category}</div>
                    <div>{restaurant.price}</div>
                </div>
                
                <div>{restaurant.hours}</div>
            </div>
        </div>
        </Link>
    </div>

)
debugger

}

export default RestaurantIndexItem