import * as RestaurantAPIUtil from '../util/restaurant_api_util.js';

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"


//action creator
export const receiveAllRestaurants = (restaurants) => {
    return {
        type: RECEIVE_ALL_RESTAURANTS,
        restaurants,
    }
}

export const receiveRestaurant = (restaurant) => {
    return {
        type: RECEIVE_RESTAURANT,
        restaurant,
    }
}

//thunk action creator
export const requestRestaurants = () => dispatch => {
    return RestaurantAPIUtil.fetchRestaurants()
        .then((restaurants) => dispatch(receiveAllRestaurants(restaurants)))
}

export const requestRestaurant = (restaurantId) => dispatch => {
    return RestaurantAPIUtil.fetchRestaurant(restaurantId)
        .then((restaurant) => dispatch(receiveRestaurant(restaurant)))
}