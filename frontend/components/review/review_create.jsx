import React from "react";
import Rater from 'react-rater-plus'

class reviewCreate extends React.Component {
    constructor(props){
        super(props)
        this. state = {
            user_id: this.props.user_id,
            restaurant_id: this.props.match.params.restaurantId,
            rating:0,
            body:'',
        } 
    }
    
    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId)
    }

    render() { 
        return (
            <div>
        
                
                    <h4>{restaurant.name}</h4>
            

            </div>
        );
    }
}

export default reviewCreate;