import { connect } from "react-redux";
import searchResult from "./search_result";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { requestReviews} from '../../actions/review_actions'

const mSTP = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        currentUser: state.entities.users[state.session.id],
    }
};


const mDTP = (dispatch) => ({
    requestRestaurants:(input)=>dispatch(requestRestaurants(input)),
    requestReviews: (restaurantId) => dispatch(requestReviews(restaurantId)),
    logout: ()=> dispatch(logout()),
});


export default connect(mSTP, mDTP)(searchResult);