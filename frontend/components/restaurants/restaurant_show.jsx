import React from "react";



class RestaurantShow extends React.Component {
    
    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId)
    }


    render() {
        const { restaurant } = this.props
        // debugger
        return (
            <div>
                {restaurant.name}
            </div>
        );
    }
}

export default RestaurantShow;