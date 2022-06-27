# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
#users reset including ID
# User.reset_pk_sequence
User.destroy_all

#restaurants reset including ID
# Restaurant.reset_pk_sequence
Restaurant.destroy_all


#User Seeds
demo = User.create!({username: "Demo", password: "123456"})

#Restaurant Seeds
r1 = Restaurant.create!(
    name: "Szechuan Mountain House", 
    address: "23 St Marks Pl", 
    city: "New York", 
    state: "NY", 
    zip_code: 10003, 
    phone_number: "(917) 388-3866", 
    category:"Szechuan", 
    website:"https://www.szechuanmountainhouse.com", 
    # lat:
    # lng: 
    price:"$$", 
    hours: "11:30 AM - 10:30 PM")

r1.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/mh1.jpeg'), filename:'mh1.jpeg')
r1.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/mh2.jpeg'), filename:'mh2.jpeg')
r1.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/mh3.jpeg'), filename:'mh3.jpeg')

r2 = Restaurant.create!(
    name: "Cote", 
    address: "16 W 22nd St", 
    city: "New York", 
    state: "NY", 
    zip_code: 10010, 
    phone_number: "(212) 401-7986", 
    category:"Steakhouses", 
    website:"https://www.cotenyc.com", 
    # lat:
    # lng: 
    price:"$$$$", 
    hours: "05:00 PM - 11:00 PM")

r2.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cote1.jpeg'), filename:'cote1.jpeg')
r2.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cote2.jpeg'), filename:'cote2.jpeg')
r2.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cote3.jpeg'), filename:'cote3.jpeg')


r3 = Restaurant.create!(
    name: "Patisserie Fouet", 
    address: "15 E 13th St", 
    city: "New York", 
    state: "NY", 
    zip_code: 10003, 
    phone_number: "(212) 620-0622", 
    category:"Desserts", 
    website:"https://www.fouetnyc.com", 
    # lat:
    # lng: 
    price:"$$", 
    hours: "10:00 AM - 08:00 PM")

r3.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pf1.jpeg'), filename:'pf1.jpeg')
r3.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pf2.jpeg'), filename:'pf2.jpeg')
r3.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pf3.jpeg'), filename:'pf3.jpeg')

r4 = Restaurant.create!(
    name: "Raines Law Room", 
    address: "48 W 17th St", 
    city: "New York", 
    state: "NY", 
    zip_code: 10011, 
    phone_number: "This business has not enabled messaging", 
    category:"Drinks", 
    website:"https://www.raineslawroom.com", 
    # lat:
    # lng: 
    price:"$$$", 
    hours: "05:00 PM - 02:00 AM")

r4.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/rl1.jpeg'), filename:'rl1.jpeg')
r4.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/rl2.jpeg'), filename:'rl2.jpeg')
r4.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/rl3.jpeg'), filename:'rl3.jpeg')