import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";
import { requestRestaurants } from "../../actions/restaurant_actions";


const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
};


const mDTP = (dispatch) => ({
    requestRestaurants:(input)=>dispatch(requestRestaurants(input))
});


export default withRouter(connect(mSTP, mDTP)(SearchBar));