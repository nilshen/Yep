import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    }
};


const mDTP = (dispatch) => {
    return {
    }
};


export default withRouter(connect(mSTP, mDTP)(SearchBar));