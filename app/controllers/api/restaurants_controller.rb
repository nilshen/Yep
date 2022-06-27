class Api::RestaurantsController < ApplicationController

    def index
        # debugger
        if params[:input]
            @restaurants = Restaurant.where("category ILIKE ? OR name ILIKE ?", "%#{params[:input]}%", "%#{params[:input]}%")
            if @restaurants.length > 0
                render :index
            else
                render json: ["No result is found for #{params[:input]}, please try again with restaurant name or category"], status: 422
            end
        else
            @restaurants = Restaurant.all
            render :index
        # debugger
        end
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
