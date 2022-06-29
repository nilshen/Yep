import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { withRouter } from "react-router-dom";
import { requestReviews } from "../../actions/review_actions";

const mSTP = (state) => ({
    restaurants: Object.values(state.entities.restaurants),
    reviews: Object.values(state.entities.reviews),
});

const mDTP = (dispatch) => ({
    requestRestaurants: (input) => dispatch(requestRestaurants(input)),
    requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
});

export default withRouter(connect(mSTP, mDTP)(RestaurantIndex));