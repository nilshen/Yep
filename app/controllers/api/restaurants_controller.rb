class Api::RestaurantsController < ApplicationController

    def index
        # debugger
        @restaurants = Restaurant.all
        # debugger
    end

    def show
        @restaurant = Restaurant.find(params[:id])

        if @restaurant
            render :show
        else
            render json: @restaurant.errors.full_messages, status: 404
        end
    end

    # def create
    #     @restaurant = Restaurant.new(restaurant_params)
    
    #     if @restaurant.save
    #       render :show
    #     else
    #       render json: @restaurant.errors.full_messages, status: :unprocessable_entity
    #     end
    #   end
    
    #   def restaurant_params
    #     params.require(:restaurant).permit(:name)
    #   end
end
