import React from "react";
import RestaurantIndexItem from './restaurant_index_item';
import Search_bar_container from "../search_bar/search_bar_container";
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props)

        // this.state = {
        //     name:""
        // }
    }
    componentDidMount(){
        this.props.requestRestaurants()
    }

    render() { 
        // debugger
        let { restaurants } = this.props
        // debugger
        // console.log(this.state)
        return (
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>Home Page</Link>   
                <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
                <Search_bar_container/>
                <ul>
                {restaurants.map((restaurant)=>(
                    <RestaurantIndexItem 
                        restaurant = { restaurant }
                        key = { restaurant.id }
                    />
                    ))}
                </ul>
            </div>
        );
    }
}
export default RestaurantIndex;