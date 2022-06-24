import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";
import { requestRestaurants } from "../../actions/restaurant_actions";


const mSTP = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
};


const mDTP = (dispatch) => ({
    requestRestaurants:()=>dispatch(requestRestaurants())
});


export default (connect(mSTP, mDTP)(SearchBar));