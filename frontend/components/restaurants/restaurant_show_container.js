import { connect } from "react-redux";
import RestaurantShow from "./restaurant_show";
import { requestRestaurant } from "../../actions/restaurant_actions";


const mSTP = (state, ownProps) => ({

    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id],

})

const mDTP = (dispatch) =>({
    requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
    requestRestaurants:(input)=>dispatch(requestRestaurants(input)),
    logout: () => dispatch(logout()),

})

export default connect(mSTP,mDTP)(RestaurantShow)