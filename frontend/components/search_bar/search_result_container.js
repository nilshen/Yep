import { connect } from "react-redux";
import searchResult from "./search_result";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { requestReviews} from '../../actions/review_actions'

const mSTP = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
};


const mDTP = (dispatch) => ({
    requestRestaurants:(input)=>dispatch(requestRestaurants(input)),
    requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
});


export default connect(mSTP, mDTP)(searchResult);