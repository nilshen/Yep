# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
#users reset including ID
User.destroy_all
User.reset_pk_sequence

#restaurants reset including ID
Restaurant.destroy_all
Restaurant.reset_pk_sequence


#User Seeds
demo = User.create!({username: "Demo", password: "123456"})
u1 = User.create!({username: "FoodieNYC", password: "123456"})
u2 = User.create!({username: "DrunkQueen", password: "123456"})
u3 = User.create!({username: "SunsetManhattan", password: "123456"})
u4 = User.create!({username: "ByeByeBrooklyn", password: "123456"})
u5 = User.create!({username: "NoSleepNY", password: "123456"})

#Restaurant Seeds

cote = Restaurant.create!(
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

cote.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cote1.jpeg'), filename:'cote1.jpeg')
cote.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cote2.jpeg'), filename:'cote2.jpeg')
cote.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cote3.jpeg'), filename:'cote3.jpeg')

pl = Restaurant.create!(
    name: "Peter Luger", 
    address: "178 Broadway", 
    city: "Brooklyn", 
    state: "NY", 
    zip_code: 11211, 
    phone_number: "(718) 387-7400", 
    category:"Steak", 
    website:"http://www.peterluger.com", 
    # lat:
    # lng: 
    price:"$$$$", 
    hours: "11:45 AM - 09:45 PM")

pl.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pl1.jpeg'), filename:'pl1.jpeg')
pl.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pl2.jpeg'), filename:'pl2.jpeg')
pl.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pl3.jpeg'), filename:'pl3.jpeg')

pf = Restaurant.create!(
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

pf.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pf1.jpeg'), filename:'pf1.jpeg')
pf.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pf2.jpeg'), filename:'pf2.jpeg')
pf.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/pf3.jpeg'), filename:'pf3.jpeg')

rl = Restaurant.create!(
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

rl.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/rl1.jpeg'), filename:'rl1.jpeg')
rl.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/rl2.jpeg'), filename:'rl2.jpeg')
rl.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/rl3.jpeg'), filename:'rl3.jpeg')

mh = Restaurant.create!(
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

mh.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/mh1.jpeg'), filename:'mh1.jpeg')
mh.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/mh2.jpeg'), filename:'mh2.jpeg')
mh.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/mh3.jpeg'), filename:'mh3.jpeg')


ss = Restaurant.create!(
    name: "Shake Shack", 
    address: "Madison Square Park", 
    city: "New York", 
    state: "NY", 
    zip_code: 10010, 
    phone_number: "(212) 889-6600", 
    category:"Burger", 
    website:"https://shakeshack.com/home#/", 
    # lat:
    # lng: 
    price:"$$", 
    hours: "11:00 AM - 11:00 PM")

ss.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/ss1.jpeg'), filename:'ss1.jpeg')
ss.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/ss2.jpeg'), filename:'ss2.jpeg')
ss.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/ss3.jpeg'), filename:'ss3.jpeg')

cf = Restaurant.create!(
    name: "Chick-fil-A", 
    address: "700 Avenue Of The Americas New York", 
    city: "New York", 
    state: "NY", 
    zip_code: 10010, 
    phone_number: "(855) 667-3232", 
    category:"Burger", 
    website:"https://www.chick-fil-a.com", 
    # lat:
    # lng: 
    price:"$$", 
    hours: "06:30 AM - 10:00 PM")

cf.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cf1.jpeg'), filename:'cf1.jpeg')
cf.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cf2.jpeg'), filename:'cf2.jpeg')
cf.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/cf3.jpeg'), filename:'cf3.jpeg')


sc = Restaurant.create!(
    name: "Stumptown Coffee Roasters", 
    address: "20 W 29th St The Ace Hotel New York", 
    city: "New York", 
    state: "NY", 
    zip_code: 10001, 
    phone_number: "(855) 711-3385", 
    category:"Coffee", 
    website:"https://www.stumptowncoffee.com/", 
    # lat:
    # lng: 
    price:"$$", 
    hours: "07:00 AM - 03:00 PM")

sc.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/sc1.jpeg'), filename:'sc1.jpeg')
sc.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/sc2.jpeg'), filename:'sc2.jpeg')
sc.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/sc3.jpeg'), filename:'sc3.jpeg')

ko = Restaurant.create!(
    name: "Kosaka", 
    address: "220 W 13th St", 
    city: "New York", 
    state: "NY", 
    zip_code: 10011, 
    phone_number: "(212) 727-1709", 
    category:"Sushi", 
    website:"http://www.kosakanyc.com", 
    # lat:
    # lng: 
    price:"$$$$", 
    hours: "05:00 PM - 11:00 PM")

ko.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/ko1.jpeg'), filename:'ko1.jpeg')
ko.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/ko2.jpeg'), filename:'ko2.jpeg')
ko.photos.attach(io: open('https://yep-seeds.s3.amazonaws.com/images/restaurants/ko3.jpeg'), filename:'ko3.jpeg')





Review.destroy_all
Review.reset_pk_sequence
review1 = Review.create!(user_id: demo.id, restaurant_id: pl.id, rating: 4, body: "So good - love it. Delicious. Some of the waiters are arrogant but I don't care - I love the food. Yum Yum Yum Yum. Save room for desert if possible. Even if you have to throw up - so good. I love this place.")
review2 = Review.create!(user_id: demo.id, restaurant_id: cote.id, rating: 5, body: "I wanna try this Michelin star  bbq for long time. The restaurant is pretty packed and we waited 15-20 mins at the bar for our table. All bbq tables are very close and we sat with another party on the other side.  Since this is our first time here, we want to try the Butcher's Feast as a set dinner.")
review3 = Review.create!(user_id: demo.id, restaurant_id: pf.id, rating: 5, body: "Pretty good french x japanese dessert place! Pastries are super pretty and each is around $11-$12! These were not too sweet yet very delicious and I loved how fruity the ones we chose were. I thought the matcha one was actually my least favorite and underwhelming but I definitely would recommend getting their tarts or any fruit based pastries!")
review4 = Review.create!(user_id: demo.id, restaurant_id: rl.id, rating: 4, body: "It's been a while since I've gone to a NYC bar that doesn't reek of the past night's hangover mess. I appreciate that this spot is tucked away, so I hope it remains low key on the busy summer nights because I will be returning! The drinks are pretty unique and I thoroughly enjoyed mine. Won't share which one I got so you can be pleasantly surprised by the funny names haha. Not only are the drinks good and flavorful, but the ambience is nicer than that of most bars in the area. And you can actually hear what your friends are saying in the booth.")