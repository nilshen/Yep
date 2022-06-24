export const fetchRestaurants = () => {
    return $.ajax ({
        url:'/api/restaurants',
        method:'GET',
        // data:{query}
    })
    
}

export const fetchRestaurant = (restaurantId) => {
    return $.ajax ({
        url:`/api/restaurants/${restaurantId}`,
        method:'GET'
    })
    
}