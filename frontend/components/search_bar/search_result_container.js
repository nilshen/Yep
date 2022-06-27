import { connect } from "react-redux";
import searchResult from "./search_result";
import { withRouter } from "react-router";
import { requestRestaurants } from "../../actions/restaurant_actions";

const mSTP = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
};


const mDTP = (dispatch) => ({
    requestRestaurants:(input)=>dispatch(requestRestaurants(input))
});


export default connect(mSTP, mDTP)(searchResult);