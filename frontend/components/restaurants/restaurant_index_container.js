import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state) => ({
    restaurants: Object.values(state.entities.restaurants)
});

const mDTP = (dispatch) => ({
    requestRestaurants: (input) => dispatch(requestRestaurants(input))
});

export default withRouter(connect(mSTP, mDTP)(RestaurantIndex));