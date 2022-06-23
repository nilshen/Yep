# == Schema Information
#
# Table name: restaurants
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_restaurants_on_name  (name) UNIQUE
#
class Restaurant < ApplicationRecord
    validates :name, presence: true, uniqueness: true
end
