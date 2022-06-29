@restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :address, :city, :state, :zip_code, :phone_number, :category, :website, :price, :hours
            json.photoUrls restaurant.photos.map { |photo| url_for(photo) }
            
            json.reviews restaurant.reviews
        end
end