import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { requestRestaurants } from "../../actions/restaurant_actions";


const mSTP = (state) => ({
    restaurants: Object.values(state.entities.restaurants)
});

const mDTP = (dispatch) => ({
    requestRestaurants: () => dispatch(requestRestaurants())
});

export default connect(mSTP, mDTP)(RestaurantIndex);