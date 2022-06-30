@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :restaurant_id, :rating, :body
        json.username review.user.username
    end
end