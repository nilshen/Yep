import { RECEIVE_ALL_RESTAURANTS, RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const restaurantsReducer = (state={all:{}, search: {}}, action) => {

    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_RESTAURANTS:
            nextState = action.restaurants;
            return nextState;
        case RECEIVE_RESTAURANT:
            nextState[action.restaurant.id] = action.restaurant;
            return nextState;
            // return Object.assign({}, state, { [action.restaurant.id]: action.restaurant });
        default:
            return state;
    }
};

export default restaurantsReducer;