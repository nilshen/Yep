import React from "react";
import RestaurantIndexItem from './restaurant_index_item';
import {requestRestaurants} from '../../actions/restaurant_actions'

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